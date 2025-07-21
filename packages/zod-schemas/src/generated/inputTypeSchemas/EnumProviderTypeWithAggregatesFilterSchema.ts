import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderTypeSchema } from './ProviderTypeSchema';
import { NestedEnumProviderTypeWithAggregatesFilterSchema } from './NestedEnumProviderTypeWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumProviderTypeFilterSchema } from './NestedEnumProviderTypeFilterSchema';

export const EnumProviderTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumProviderTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => ProviderTypeSchema).optional(),
  in: z.lazy(() => ProviderTypeSchema).array().optional(),
  notIn: z.lazy(() => ProviderTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => ProviderTypeSchema),z.lazy(() => NestedEnumProviderTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumProviderTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumProviderTypeFilterSchema).optional()
}).strict();

export default EnumProviderTypeWithAggregatesFilterSchema;
