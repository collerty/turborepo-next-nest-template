import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { ProviderTypeSchema } from './ProviderTypeSchema';
import { EnumProviderTypeFieldUpdateOperationsInputSchema } from './EnumProviderTypeFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const SocialTokensUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SocialTokensUncheckedUpdateManyInput> = z.object({
  providerUserId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerType: z.union([ z.lazy(() => ProviderTypeSchema),z.lazy(() => EnumProviderTypeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default SocialTokensUncheckedUpdateManyInputSchema;
