import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SocialTokensWhereInputSchema } from './SocialTokensWhereInputSchema';

export const SocialTokensNullableScalarRelationFilterSchema: z.ZodType<Prisma.SocialTokensNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => SocialTokensWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => SocialTokensWhereInputSchema).optional().nullable()
}).strict();

export default SocialTokensNullableScalarRelationFilterSchema;
