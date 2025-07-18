import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CommentUncheckedCreateInputSchema: z.ZodType<Prisma.CommentUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  title: z.string().min(2, { message: "Title must contain at least 2 characters" }).max(255, { message: "Title can't exceed 255 characters" }),
  content: z.string().min(2, { message: "Content must contain at least 2 characters" }).max(2000, { message: "Content can't exceed 2000 characters" }),
  authorId: z.number().int(),
  likes: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updateAt: z.coerce.date().optional()
}).strict();

export default CommentUncheckedCreateInputSchema;
