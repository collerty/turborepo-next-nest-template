import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SocialTokensWhereInputSchema } from '../inputTypeSchemas/SocialTokensWhereInputSchema'
import { SocialTokensOrderByWithRelationInputSchema } from '../inputTypeSchemas/SocialTokensOrderByWithRelationInputSchema'
import { SocialTokensWhereUniqueInputSchema } from '../inputTypeSchemas/SocialTokensWhereUniqueInputSchema'
import { SocialTokensScalarFieldEnumSchema } from '../inputTypeSchemas/SocialTokensScalarFieldEnumSchema'

export const SocialTokensFindFirstArgsSchema: z.ZodType<Omit<Prisma.SocialTokensFindFirstArgs, "select" | "include">> = z.object({
  where: SocialTokensWhereInputSchema.optional(),
  orderBy: z.union([ SocialTokensOrderByWithRelationInputSchema.array(),SocialTokensOrderByWithRelationInputSchema ]).optional(),
  cursor: SocialTokensWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SocialTokensScalarFieldEnumSchema,SocialTokensScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default SocialTokensFindFirstArgsSchema;
