import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CommentCreateNestedManyWithoutAuthorInputSchema } from './CommentCreateNestedManyWithoutAuthorInputSchema';
import { SocialTokensCreateNestedOneWithoutUserInputSchema } from './SocialTokensCreateNestedOneWithoutUserInputSchema';

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  email: z.string().email(),
  name: z.string().min(2, { message: "Name must contain at least 2 characters" }).max(100, { message: "Name can't exceed 100 characters" }).optional().nullable(),
  password: z.string().min(8, { message: "Password must contain at least 8 characters" }).max(32, { message: "Password can't exceed 32 characters" }).optional().nullable(),
  refreshToken: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  comments: z.lazy(() => CommentCreateNestedManyWithoutAuthorInputSchema).optional(),
  socialTokens: z.lazy(() => SocialTokensCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export default UserCreateInputSchema;
