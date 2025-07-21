import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SocialTokensCreateInputSchema } from '../inputTypeSchemas/SocialTokensCreateInputSchema'
import { SocialTokensUncheckedCreateInputSchema } from '../inputTypeSchemas/SocialTokensUncheckedCreateInputSchema'

export const SocialTokensCreateArgsSchema: z.ZodType<Omit<Prisma.SocialTokensCreateArgs, "select" | "include">> = z.object({
  data: z.union([ SocialTokensCreateInputSchema,SocialTokensUncheckedCreateInputSchema ]),
}).strict() ;

export default SocialTokensCreateArgsSchema;
