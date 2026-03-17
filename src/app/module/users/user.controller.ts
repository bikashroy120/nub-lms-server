import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { sendResponse } from '../../../shared/customResponse';
import { userServices } from './user.services';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const body = req.body;

  const result = await userServices.createUser(body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'User Create successfully',
    data: result,
  });
});

export const userController = {
  createUser,
};
