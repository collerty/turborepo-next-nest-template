import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumProviderTypeFilterSchema } from './EnumProviderTypeFilterSchema';
import { ProviderTypeSchema } from './ProviderTypeSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const SocialTokensWhereInputSchema: z.ZodType<Prisma.SocialTokensWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SocialTokensWhereInputSchema),z.lazy(() => SocialTokensWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SocialTokensWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SocialTokensWhereInputSchema),z.lazy(() => SocialTokensWhereInputSchema).array() ]).optional(),
  providerUserId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerType: z.union([ z.lazy(() => EnumProviderTypeFilterSchema),z.lazy(() => ProviderTypeSchema) ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export default SocialTokensWhereInputSchema;
