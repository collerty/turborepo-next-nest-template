import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { ProviderTypeSchema } from './ProviderTypeSchema';
import { EnumProviderTypeFieldUpdateOperationsInputSchema } from './EnumProviderTypeFieldUpdateOperationsInputSchema';

export const SocialTokensUpdateManyMutationInputSchema: z.ZodType<Prisma.SocialTokensUpdateManyMutationInput> = z.object({
  providerUserId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerType: z.union([ z.lazy(() => ProviderTypeSchema),z.lazy(() => EnumProviderTypeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default SocialTokensUpdateManyMutationInputSchema;
