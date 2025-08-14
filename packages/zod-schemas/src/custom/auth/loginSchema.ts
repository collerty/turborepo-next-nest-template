import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: 'Password must contain at least 8 characters' }).max(32, { message: 'Password can\'t exceed 32 characters' }),
});

export type LoginSchema = z.infer<typeof LoginSchema>;