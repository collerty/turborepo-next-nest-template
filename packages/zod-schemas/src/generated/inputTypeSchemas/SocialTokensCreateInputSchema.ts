import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderTypeSchema } from './ProviderTypeSchema';
import { UserCreateNestedOneWithoutSocialTokensInputSchema } from './UserCreateNestedOneWithoutSocialTokensInputSchema';

export const SocialTokensCreateInputSchema: z.ZodType<Prisma.SocialTokensCreateInput> = z.object({
  providerUserId: z.string(),
  providerType: z.lazy(() => ProviderTypeSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutSocialTokensInputSchema)
}).strict();

export default SocialTokensCreateInputSchema;
