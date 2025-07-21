import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SocialTokensSumOrderByAggregateInputSchema: z.ZodType<Prisma.SocialTokensSumOrderByAggregateInput> = z.object({
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SocialTokensSumOrderByAggregateInputSchema;
