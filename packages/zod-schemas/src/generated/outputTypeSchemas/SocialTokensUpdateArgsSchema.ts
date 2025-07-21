import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SocialTokensUpdateInputSchema } from '../inputTypeSchemas/SocialTokensUpdateInputSchema'
import { SocialTokensUncheckedUpdateInputSchema } from '../inputTypeSchemas/SocialTokensUncheckedUpdateInputSchema'
import { SocialTokensWhereUniqueInputSchema } from '../inputTypeSchemas/SocialTokensWhereUniqueInputSchema'

export const SocialTokensUpdateArgsSchema: z.ZodType<Omit<Prisma.SocialTokensUpdateArgs, "select" | "include">> = z.object({
  data: z.union([ SocialTokensUpdateInputSchema,SocialTokensUncheckedUpdateInputSchema ]),
  where: SocialTokensWhereUniqueInputSchema,
}).strict() ;

export default SocialTokensUpdateArgsSchema;
