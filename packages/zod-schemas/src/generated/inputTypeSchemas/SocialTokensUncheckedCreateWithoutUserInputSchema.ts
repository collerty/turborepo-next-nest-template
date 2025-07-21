import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderTypeSchema } from './ProviderTypeSchema';

export const SocialTokensUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.SocialTokensUncheckedCreateWithoutUserInput> = z.object({
  providerUserId: z.string(),
  providerType: z.lazy(() => ProviderTypeSchema)
}).strict();

export default SocialTokensUncheckedCreateWithoutUserInputSchema;
