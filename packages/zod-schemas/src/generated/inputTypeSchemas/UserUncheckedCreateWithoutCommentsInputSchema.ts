import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UserUncheckedCreateWithoutCommentsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutCommentsInput> = z.object({
  id: z.number().int().optional(),
  email: z.string().email(),
  name: z.string().min(2, { message: "Name must contain at least 2 characters" }).max(100, { message: "Name can't exceed 100 characters" }),
  password: z.string().min(8, { message: "Password must contain at least 8 characters" }).max(32, { message: "Password can't exceed 32 characters" }),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default UserUncheckedCreateWithoutCommentsInputSchema;
