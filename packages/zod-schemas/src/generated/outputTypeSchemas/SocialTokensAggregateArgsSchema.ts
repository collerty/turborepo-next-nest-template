import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SocialTokensWhereInputSchema } from '../inputTypeSchemas/SocialTokensWhereInputSchema'
import { SocialTokensOrderByWithRelationInputSchema } from '../inputTypeSchemas/SocialTokensOrderByWithRelationInputSchema'
import { SocialTokensWhereUniqueInputSchema } from '../inputTypeSchemas/SocialTokensWhereUniqueInputSchema'

export const SocialTokensAggregateArgsSchema: z.ZodType<Prisma.SocialTokensAggregateArgs> = z.object({
  where: SocialTokensWhereInputSchema.optional(),
  orderBy: z.union([ SocialTokensOrderByWithRelationInputSchema.array(),SocialTokensOrderByWithRelationInputSchema ]).optional(),
  cursor: SocialTokensWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default SocialTokensAggregateArgsSchema;
