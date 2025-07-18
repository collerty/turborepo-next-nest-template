import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentWhereUniqueInputSchema } from '../inputTypeSchemas/CommentWhereUniqueInputSchema'

export const CommentFindUniqueArgsSchema: z.ZodType<Omit<Prisma.CommentFindUniqueArgs, "select" | "include">> = z.object({
  where: CommentWhereUniqueInputSchema,
}).strict() ;

export default CommentFindUniqueArgsSchema;
