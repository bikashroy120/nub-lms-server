/* eslint-disable prettier/prettier */
import { ResultSetHeader } from 'mysql2';
import pool from '../../../db/db';
import ApiError from '../../../error/ApiError';
import { hashPassword } from '../../helpers/bcrypt';
import { CreateUserBody } from './user.validations';

const createUser = async (data: CreateUserBody) => {
  const { name, email, password } = data;
  const [rows] = await pool.execute<any>(
    'SELECT * FROM users WHERE email = ?',
    [email]
  );

  if (rows.length) {
    throw new ApiError(400, 'user already exist');
  }

  const hash = await hashPassword(password);

  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  const values = [name, email, hash];
  const [result] = await pool.execute<ResultSetHeader>(query, values);

  return result;
};

export const userServices = {
  createUser,
};
