import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { sendResponse } from '../../../shared/customResponse';
import { authServices } from './auth.services';

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const body = req.body;

  const result = await authServices.loginUser(body);

  const { refreshToken, ...others } = result;

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'User Create successfully',
    data: others,
  });
});

export const authController = {
  loginUser,
};
