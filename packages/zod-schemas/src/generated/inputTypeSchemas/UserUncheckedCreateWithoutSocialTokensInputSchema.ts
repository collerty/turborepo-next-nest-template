import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CommentUncheckedCreateNestedManyWithoutAuthorInputSchema } from './CommentUncheckedCreateNestedManyWithoutAuthorInputSchema';

export const UserUncheckedCreateWithoutSocialTokensInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSocialTokensInput> = z.object({
  id: z.number().int().optional(),
  email: z.string().email(),
  name: z.string().min(2, { message: "Name must contain at least 2 characters" }).max(100, { message: "Name can't exceed 100 characters" }).optional().nullable(),
  password: z.string().min(8, { message: "Password must contain at least 8 characters" }).max(32, { message: "Password can't exceed 32 characters" }).optional().nullable(),
  refreshToken: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  comments: z.lazy(() => CommentUncheckedCreateNestedManyWithoutAuthorInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutSocialTokensInputSchema;
