import { z } from 'zod';

export const RegisterSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2, { message: 'Name must contain at least 2 characters' }).max(100, { message: 'Name can\'t exceed 100 characters' }),
  password: z.string().min(8, { message: 'Password must contain at least 8 characters' }).max(32, { message: 'Password can\'t exceed 32 characters' }),
});

export type RegisterSchema = z.infer<typeof RegisterSchema>;