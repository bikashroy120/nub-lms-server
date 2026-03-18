/* eslint-disable prettier/prettier */
import pool from '../../../db/db';
import { ILoginUserResponse, loginDTO } from './auth.validation';
import ApiError from '../../../error/ApiError';
import { comparePassword } from '../../helpers/bcrypt';
import { createToken } from '../../helpers/jwtHelpers';
import config from '../../../config';

const loginUser = async (data: loginDTO): Promise<ILoginUserResponse> => {
  const { email, password } = data;

  const [rows] = await pool.execute<any[]>(
    'select * from users WHERE email = ?',
    [email]
  );

  const user = rows[0];

  if (!user) {
    throw new ApiError(401, 'Invalid email or password');
  }

  const isMatch = await comparePassword(password, user.password);

  if (!isMatch) {
    throw new ApiError(401, 'Invalid email or password');
  }

  const payload = {
    email: user.email,
    role: user.role,
    id: user.id,
  };

  const accessToken = createToken(
    payload,
    config.jwt_secret as string,
    config.jwt_expirer as string
  );

  const refreshToken = createToken(
    payload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires as string
  );

  const { password: _, ...userWithoutPassword } = user;

  return { user: userWithoutPassword, accessToken, refreshToken };
};

export const authServices = {
  loginUser,
};
