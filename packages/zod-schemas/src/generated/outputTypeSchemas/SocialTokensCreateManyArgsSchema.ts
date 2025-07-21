import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SocialTokensCreateManyInputSchema } from '../inputTypeSchemas/SocialTokensCreateManyInputSchema'

export const SocialTokensCreateManyArgsSchema: z.ZodType<Prisma.SocialTokensCreateManyArgs> = z.object({
  data: z.union([ SocialTokensCreateManyInputSchema,SocialTokensCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default SocialTokensCreateManyArgsSchema;
