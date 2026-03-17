import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { sendResponse } from '../../../shared/customResponse';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const body = req.body;

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'User Create successfully',
    data: body,
  });
});

export const userController = {
  createUser,
};
