import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CommentWhereInputSchema } from '../inputTypeSchemas/CommentWhereInputSchema'
import { CommentOrderByWithRelationInputSchema } from '../inputTypeSchemas/CommentOrderByWithRelationInputSchema'
import { CommentWhereUniqueInputSchema } from '../inputTypeSchemas/CommentWhereUniqueInputSchema'
import { CommentScalarFieldEnumSchema } from '../inputTypeSchemas/CommentScalarFieldEnumSchema'

export const CommentFindManyArgsSchema: z.ZodType<Omit<Prisma.CommentFindManyArgs, "select" | "include">> = z.object({
  where: CommentWhereInputSchema.optional(),
  orderBy: z.union([ CommentOrderByWithRelationInputSchema.array(),CommentOrderByWithRelationInputSchema ]).optional(),
  cursor: CommentWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CommentScalarFieldEnumSchema,CommentScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default CommentFindManyArgsSchema;
