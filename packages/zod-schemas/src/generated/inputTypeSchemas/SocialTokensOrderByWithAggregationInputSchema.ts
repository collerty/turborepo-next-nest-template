import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SocialTokensCountOrderByAggregateInputSchema } from './SocialTokensCountOrderByAggregateInputSchema';
import { SocialTokensAvgOrderByAggregateInputSchema } from './SocialTokensAvgOrderByAggregateInputSchema';
import { SocialTokensMaxOrderByAggregateInputSchema } from './SocialTokensMaxOrderByAggregateInputSchema';
import { SocialTokensMinOrderByAggregateInputSchema } from './SocialTokensMinOrderByAggregateInputSchema';
import { SocialTokensSumOrderByAggregateInputSchema } from './SocialTokensSumOrderByAggregateInputSchema';

export const SocialTokensOrderByWithAggregationInputSchema: z.ZodType<Prisma.SocialTokensOrderByWithAggregationInput> = z.object({
  providerUserId: z.lazy(() => SortOrderSchema).optional(),
  providerType: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SocialTokensCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SocialTokensAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SocialTokensMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SocialTokensMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SocialTokensSumOrderByAggregateInputSchema).optional()
}).strict();

export default SocialTokensOrderByWithAggregationInputSchema;
