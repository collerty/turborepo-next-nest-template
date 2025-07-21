import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderTypeSchema } from './ProviderTypeSchema';
import { NestedEnumProviderTypeFilterSchema } from './NestedEnumProviderTypeFilterSchema';

export const EnumProviderTypeFilterSchema: z.ZodType<Prisma.EnumProviderTypeFilter> = z.object({
  equals: z.lazy(() => ProviderTypeSchema).optional(),
  in: z.lazy(() => ProviderTypeSchema).array().optional(),
  notIn: z.lazy(() => ProviderTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => ProviderTypeSchema),z.lazy(() => NestedEnumProviderTypeFilterSchema) ]).optional(),
}).strict();

export default EnumProviderTypeFilterSchema;
