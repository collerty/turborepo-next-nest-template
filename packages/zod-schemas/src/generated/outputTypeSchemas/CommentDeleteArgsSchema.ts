import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentWhereUniqueInputSchema } from '../inputTypeSchemas/CommentWhereUniqueInputSchema'

export const CommentDeleteArgsSchema: z.ZodType<Omit<Prisma.CommentDeleteArgs, "select" | "include">> = z.object({
  where: CommentWhereUniqueInputSchema,
}).strict() ;

export default CommentDeleteArgsSchema;
