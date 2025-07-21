import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderTypeSchema } from './ProviderTypeSchema';

export const SocialTokensCreateWithoutUserInputSchema: z.ZodType<Prisma.SocialTokensCreateWithoutUserInput> = z.object({
  providerUserId: z.string(),
  providerType: z.lazy(() => ProviderTypeSchema)
}).strict();

export default SocialTokensCreateWithoutUserInputSchema;
