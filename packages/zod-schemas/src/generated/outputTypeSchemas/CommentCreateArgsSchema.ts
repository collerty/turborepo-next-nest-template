import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentCreateInputSchema } from '../inputTypeSchemas/CommentCreateInputSchema'
import { CommentUncheckedCreateInputSchema } from '../inputTypeSchemas/CommentUncheckedCreateInputSchema'

export const CommentCreateArgsSchema: z.ZodType<Omit<Prisma.CommentCreateArgs, "select" | "include">> = z.object({
  data: z.union([ CommentCreateInputSchema,CommentUncheckedCreateInputSchema ]),
}).strict() ;

export default CommentCreateArgsSchema;
