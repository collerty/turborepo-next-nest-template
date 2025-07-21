import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SocialTokensUpdateManyMutationInputSchema } from '../inputTypeSchemas/SocialTokensUpdateManyMutationInputSchema'
import { SocialTokensUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SocialTokensUncheckedUpdateManyInputSchema'
import { SocialTokensWhereInputSchema } from '../inputTypeSchemas/SocialTokensWhereInputSchema'

export const SocialTokensUpdateManyArgsSchema: z.ZodType<Prisma.SocialTokensUpdateManyArgs> = z.object({
  data: z.union([ SocialTokensUpdateManyMutationInputSchema,SocialTokensUncheckedUpdateManyInputSchema ]),
  where: SocialTokensWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default SocialTokensUpdateManyArgsSchema;
