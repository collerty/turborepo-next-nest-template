import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SocialTokensWhereUniqueInputSchema } from '../inputTypeSchemas/SocialTokensWhereUniqueInputSchema'

export const SocialTokensFindUniqueArgsSchema: z.ZodType<Omit<Prisma.SocialTokensFindUniqueArgs, "select" | "include">> = z.object({
  where: SocialTokensWhereUniqueInputSchema,
}).strict() ;

export default SocialTokensFindUniqueArgsSchema;
