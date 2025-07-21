import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SocialTokensWhereUniqueInputSchema } from '../inputTypeSchemas/SocialTokensWhereUniqueInputSchema'
import { SocialTokensCreateInputSchema } from '../inputTypeSchemas/SocialTokensCreateInputSchema'
import { SocialTokensUncheckedCreateInputSchema } from '../inputTypeSchemas/SocialTokensUncheckedCreateInputSchema'
import { SocialTokensUpdateInputSchema } from '../inputTypeSchemas/SocialTokensUpdateInputSchema'
import { SocialTokensUncheckedUpdateInputSchema } from '../inputTypeSchemas/SocialTokensUncheckedUpdateInputSchema'

export const SocialTokensUpsertArgsSchema: z.ZodType<Omit<Prisma.SocialTokensUpsertArgs, "select" | "include">> = z.object({
  where: SocialTokensWhereUniqueInputSchema,
  create: z.union([ SocialTokensCreateInputSchema,SocialTokensUncheckedCreateInputSchema ]),
  update: z.union([ SocialTokensUpdateInputSchema,SocialTokensUncheckedUpdateInputSchema ]),
}).strict() ;

export default SocialTokensUpsertArgsSchema;
