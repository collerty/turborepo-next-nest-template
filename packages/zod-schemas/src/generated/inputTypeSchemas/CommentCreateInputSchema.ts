import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutCommentsInputSchema } from './UserCreateNestedOneWithoutCommentsInputSchema';

export const CommentCreateInputSchema: z.ZodType<Prisma.CommentCreateInput> = z.object({
  title: z.string().min(2, { message: "Title must contain at least 2 characters" }).max(255, { message: "Title can't exceed 255 characters" }),
  content: z.string().min(2, { message: "Content must contain at least 2 characters" }).max(2000, { message: "Content can't exceed 2000 characters" }),
  likes: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updateAt: z.coerce.date().optional(),
  author: z.lazy(() => UserCreateNestedOneWithoutCommentsInputSchema)
}).strict();

export default CommentCreateInputSchema;
