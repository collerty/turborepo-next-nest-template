import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SocialTokensWhereInputSchema } from '../inputTypeSchemas/SocialTokensWhereInputSchema'
import { SocialTokensOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SocialTokensOrderByWithAggregationInputSchema'
import { SocialTokensScalarFieldEnumSchema } from '../inputTypeSchemas/SocialTokensScalarFieldEnumSchema'
import { SocialTokensScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SocialTokensScalarWhereWithAggregatesInputSchema'

export const SocialTokensGroupByArgsSchema: z.ZodType<Prisma.SocialTokensGroupByArgs> = z.object({
  where: SocialTokensWhereInputSchema.optional(),
  orderBy: z.union([ SocialTokensOrderByWithAggregationInputSchema.array(),SocialTokensOrderByWithAggregationInputSchema ]).optional(),
  by: SocialTokensScalarFieldEnumSchema.array(),
  having: SocialTokensScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default SocialTokensGroupByArgsSchema;
