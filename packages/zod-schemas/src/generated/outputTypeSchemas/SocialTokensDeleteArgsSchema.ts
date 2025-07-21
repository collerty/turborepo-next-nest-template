import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SocialTokensWhereUniqueInputSchema } from '../inputTypeSchemas/SocialTokensWhereUniqueInputSchema'

export const SocialTokensDeleteArgsSchema: z.ZodType<Omit<Prisma.SocialTokensDeleteArgs, "select" | "include">> = z.object({
  where: SocialTokensWhereUniqueInputSchema,
}).strict() ;

export default SocialTokensDeleteArgsSchema;
