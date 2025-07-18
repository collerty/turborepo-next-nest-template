import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentWhereUniqueInputSchema } from '../inputTypeSchemas/CommentWhereUniqueInputSchema'

export const CommentFindUniqueOrThrowArgsSchema: z.ZodType<Omit<Prisma.CommentFindUniqueOrThrowArgs, "select" | "include">> = z.object({
  where: CommentWhereUniqueInputSchema,
}).strict() ;

export default CommentFindUniqueOrThrowArgsSchema;
