import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentUpdateInputSchema } from '../inputTypeSchemas/CommentUpdateInputSchema'
import { CommentUncheckedUpdateInputSchema } from '../inputTypeSchemas/CommentUncheckedUpdateInputSchema'
import { CommentWhereUniqueInputSchema } from '../inputTypeSchemas/CommentWhereUniqueInputSchema'

export const CommentUpdateArgsSchema: z.ZodType<Omit<Prisma.CommentUpdateArgs, "select" | "include">> = z.object({
  data: z.union([ CommentUpdateInputSchema,CommentUncheckedUpdateInputSchema ]),
  where: CommentWhereUniqueInputSchema,
}).strict() ;

export default CommentUpdateArgsSchema;
