import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderTypeSchema } from './ProviderTypeSchema';

export const EnumProviderTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumProviderTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => ProviderTypeSchema).optional()
}).strict();

export default EnumProviderTypeFieldUpdateOperationsInputSchema;
