import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentWhereUniqueInputSchema } from '../inputTypeSchemas/CommentWhereUniqueInputSchema'
import { CommentCreateInputSchema } from '../inputTypeSchemas/CommentCreateInputSchema'
import { CommentUncheckedCreateInputSchema } from '../inputTypeSchemas/CommentUncheckedCreateInputSchema'
import { CommentUpdateInputSchema } from '../inputTypeSchemas/CommentUpdateInputSchema'
import { CommentUncheckedUpdateInputSchema } from '../inputTypeSchemas/CommentUncheckedUpdateInputSchema'

export const CommentUpsertArgsSchema: z.ZodType<Omit<Prisma.CommentUpsertArgs, "select" | "include">> = z.object({
  where: CommentWhereUniqueInputSchema,
  create: z.union([ CommentCreateInputSchema,CommentUncheckedCreateInputSchema ]),
  update: z.union([ CommentUpdateInputSchema,CommentUncheckedUpdateInputSchema ]),
}).strict() ;

export default CommentUpsertArgsSchema;
