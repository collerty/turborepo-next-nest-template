import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { CommentCountOrderByAggregateInputSchema } from './CommentCountOrderByAggregateInputSchema';
import { CommentAvgOrderByAggregateInputSchema } from './CommentAvgOrderByAggregateInputSchema';
import { CommentMaxOrderByAggregateInputSchema } from './CommentMaxOrderByAggregateInputSchema';
import { CommentMinOrderByAggregateInputSchema } from './CommentMinOrderByAggregateInputSchema';
import { CommentSumOrderByAggregateInputSchema } from './CommentSumOrderByAggregateInputSchema';

export const CommentOrderByWithAggregationInputSchema: z.ZodType<Prisma.CommentOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  likes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updateAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CommentCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CommentAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CommentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CommentMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CommentSumOrderByAggregateInputSchema).optional()
}).strict();

export default CommentOrderByWithAggregationInputSchema;
