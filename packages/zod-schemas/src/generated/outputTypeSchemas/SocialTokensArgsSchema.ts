import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SocialTokensSelectSchema } from '../inputTypeSchemas/SocialTokensSelectSchema';
import { SocialTokensIncludeSchema } from '../inputTypeSchemas/SocialTokensIncludeSchema';

export const SocialTokensArgsSchema: z.ZodType<Prisma.SocialTokensDefaultArgs> = z.object({
  select: z.lazy(() => SocialTokensSelectSchema).optional(),
  include: z.lazy(() => SocialTokensIncludeSchema).optional(),
}).strict();

export default SocialTokensArgsSchema;
