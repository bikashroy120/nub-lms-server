import { z } from 'zod';
import { CreateUserBody } from '../users/user.validations';

export const loginSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(4),
  }),
});

export type loginDTO = z.infer<typeof loginSchema>['body'];

export type ILoginUserResponse = {
  user: CreateUserBody;
  accessToken: string;
  refreshToken?: string;
};
