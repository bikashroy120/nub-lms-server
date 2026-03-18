/* eslint-disable prettier/prettier */
import express from 'express';
import { userController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { createUserSchema } from './user.validations';

const router = express.Router();

router.post('/', validateRequest(createUserSchema), userController.createUser);

export default router;
