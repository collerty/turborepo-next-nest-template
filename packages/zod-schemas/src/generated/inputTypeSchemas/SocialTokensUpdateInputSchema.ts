import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { ProviderTypeSchema } from './ProviderTypeSchema';
import { EnumProviderTypeFieldUpdateOperationsInputSchema } from './EnumProviderTypeFieldUpdateOperationsInputSchema';
import { UserUpdateOneRequiredWithoutSocialTokensNestedInputSchema } from './UserUpdateOneRequiredWithoutSocialTokensNestedInputSchema';

export const SocialTokensUpdateInputSchema: z.ZodType<Prisma.SocialTokensUpdateInput> = z.object({
  providerUserId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerType: z.union([ z.lazy(() => ProviderTypeSchema),z.lazy(() => EnumProviderTypeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutSocialTokensNestedInputSchema).optional()
}).strict();

export default SocialTokensUpdateInputSchema;
