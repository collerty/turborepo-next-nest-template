import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderTypeSchema } from './ProviderTypeSchema';

export const SocialTokensCreateManyInputSchema: z.ZodType<Prisma.SocialTokensCreateManyInput> = z.object({
  providerUserId: z.string(),
  providerType: z.lazy(() => ProviderTypeSchema),
  userId: z.number().int()
}).strict();

export default SocialTokensCreateManyInputSchema;
