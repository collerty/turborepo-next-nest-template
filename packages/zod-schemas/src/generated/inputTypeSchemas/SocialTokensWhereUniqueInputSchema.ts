import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SocialTokensProviderUserIdProviderTypeCompoundUniqueInputSchema } from './SocialTokensProviderUserIdProviderTypeCompoundUniqueInputSchema';
import { SocialTokensWhereInputSchema } from './SocialTokensWhereInputSchema';
import { EnumProviderTypeFilterSchema } from './EnumProviderTypeFilterSchema';
import { ProviderTypeSchema } from './ProviderTypeSchema';
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const SocialTokensWhereUniqueInputSchema: z.ZodType<Prisma.SocialTokensWhereUniqueInput> = z.union([
  z.object({
    providerUserId_providerType: z.lazy(() => SocialTokensProviderUserIdProviderTypeCompoundUniqueInputSchema),
    providerUserId: z.string(),
    userId: z.number()
  }),
  z.object({
    providerUserId_providerType: z.lazy(() => SocialTokensProviderUserIdProviderTypeCompoundUniqueInputSchema),
    providerUserId: z.string(),
  }),
  z.object({
    providerUserId_providerType: z.lazy(() => SocialTokensProviderUserIdProviderTypeCompoundUniqueInputSchema),
    userId: z.number(),
  }),
  z.object({
    providerUserId_providerType: z.lazy(() => SocialTokensProviderUserIdProviderTypeCompoundUniqueInputSchema),
  }),
  z.object({
    providerUserId: z.string(),
    userId: z.number(),
  }),
  z.object({
    providerUserId: z.string(),
  }),
  z.object({
    userId: z.number(),
  }),
])
.and(z.object({
  providerUserId: z.string().optional(),
  userId: z.number().optional(),
  providerUserId_providerType: z.lazy(() => SocialTokensProviderUserIdProviderTypeCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => SocialTokensWhereInputSchema),z.lazy(() => SocialTokensWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SocialTokensWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SocialTokensWhereInputSchema),z.lazy(() => SocialTokensWhereInputSchema).array() ]).optional(),
  providerType: z.union([ z.lazy(() => EnumProviderTypeFilterSchema),z.lazy(() => ProviderTypeSchema) ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export default SocialTokensWhereUniqueInputSchema;
