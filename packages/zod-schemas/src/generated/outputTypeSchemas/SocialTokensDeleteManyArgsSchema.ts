import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SocialTokensWhereInputSchema } from '../inputTypeSchemas/SocialTokensWhereInputSchema'

export const SocialTokensDeleteManyArgsSchema: z.ZodType<Prisma.SocialTokensDeleteManyArgs> = z.object({
  where: SocialTokensWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default SocialTokensDeleteManyArgsSchema;
