import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SocialTokensCountOrderByAggregateInputSchema: z.ZodType<Prisma.SocialTokensCountOrderByAggregateInput> = z.object({
  providerUserId: z.lazy(() => SortOrderSchema).optional(),
  providerType: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SocialTokensCountOrderByAggregateInputSchema;
