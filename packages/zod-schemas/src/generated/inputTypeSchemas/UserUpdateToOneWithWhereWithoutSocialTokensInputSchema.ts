import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutSocialTokensInputSchema } from './UserUpdateWithoutSocialTokensInputSchema';
import { UserUncheckedUpdateWithoutSocialTokensInputSchema } from './UserUncheckedUpdateWithoutSocialTokensInputSchema';

export const UserUpdateToOneWithWhereWithoutSocialTokensInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSocialTokensInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutSocialTokensInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSocialTokensInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutSocialTokensInputSchema;
