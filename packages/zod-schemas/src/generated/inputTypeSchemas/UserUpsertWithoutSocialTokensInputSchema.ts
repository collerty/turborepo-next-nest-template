import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutSocialTokensInputSchema } from './UserUpdateWithoutSocialTokensInputSchema';
import { UserUncheckedUpdateWithoutSocialTokensInputSchema } from './UserUncheckedUpdateWithoutSocialTokensInputSchema';
import { UserCreateWithoutSocialTokensInputSchema } from './UserCreateWithoutSocialTokensInputSchema';
import { UserUncheckedCreateWithoutSocialTokensInputSchema } from './UserUncheckedCreateWithoutSocialTokensInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutSocialTokensInputSchema: z.ZodType<Prisma.UserUpsertWithoutSocialTokensInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutSocialTokensInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSocialTokensInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutSocialTokensInputSchema),z.lazy(() => UserUncheckedCreateWithoutSocialTokensInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutSocialTokensInputSchema;
