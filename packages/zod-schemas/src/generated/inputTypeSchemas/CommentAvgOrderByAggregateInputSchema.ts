import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CommentAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CommentAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  likes: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default CommentAvgOrderByAggregateInputSchema;
