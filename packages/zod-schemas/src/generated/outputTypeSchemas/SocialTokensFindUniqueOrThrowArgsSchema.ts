import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SocialTokensWhereUniqueInputSchema } from '../inputTypeSchemas/SocialTokensWhereUniqueInputSchema'

export const SocialTokensFindUniqueOrThrowArgsSchema: z.ZodType<Omit<Prisma.SocialTokensFindUniqueOrThrowArgs, "select" | "include">> = z.object({
  where: SocialTokensWhereUniqueInputSchema,
}).strict() ;

export default SocialTokensFindUniqueOrThrowArgsSchema;
