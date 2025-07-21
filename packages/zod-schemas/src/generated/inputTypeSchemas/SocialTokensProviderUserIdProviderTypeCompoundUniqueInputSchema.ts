import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderTypeSchema } from './ProviderTypeSchema';

export const SocialTokensProviderUserIdProviderTypeCompoundUniqueInputSchema: z.ZodType<Prisma.SocialTokensProviderUserIdProviderTypeCompoundUniqueInput> = z.object({
  providerUserId: z.string(),
  providerType: z.lazy(() => ProviderTypeSchema)
}).strict();

export default SocialTokensProviderUserIdProviderTypeCompoundUniqueInputSchema;
