import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SocialTokensAvgOrderByAggregateInputSchema: z.ZodType<Prisma.SocialTokensAvgOrderByAggregateInput> = z.object({
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SocialTokensAvgOrderByAggregateInputSchema;
