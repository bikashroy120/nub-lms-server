import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { loginSchema } from './auth.validation';
import { authController } from './auth.controller';

const router = express.Router();

router.post('/login', validateRequest(loginSchema), authController.loginUser);

export const AuthRoutes = router;
