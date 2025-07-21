import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { EnumProviderTypeWithAggregatesFilterSchema } from './EnumProviderTypeWithAggregatesFilterSchema';
import { ProviderTypeSchema } from './ProviderTypeSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const SocialTokensScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SocialTokensScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SocialTokensScalarWhereWithAggregatesInputSchema),z.lazy(() => SocialTokensScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SocialTokensScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SocialTokensScalarWhereWithAggregatesInputSchema),z.lazy(() => SocialTokensScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  providerUserId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  providerType: z.union([ z.lazy(() => EnumProviderTypeWithAggregatesFilterSchema),z.lazy(() => ProviderTypeSchema) ]).optional(),
  userId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default SocialTokensScalarWhereWithAggregatesInputSchema;
