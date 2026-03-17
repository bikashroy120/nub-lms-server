import { z } from 'zod';

export const createUserSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.email(),
    password: z.string().min(4),
  }),
});

export type CreateUserBody = z.infer<typeof createUserSchema>['body'];
