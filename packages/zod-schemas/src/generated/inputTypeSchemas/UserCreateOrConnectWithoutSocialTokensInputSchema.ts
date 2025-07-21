import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutSocialTokensInputSchema } from './UserCreateWithoutSocialTokensInputSchema';
import { UserUncheckedCreateWithoutSocialTokensInputSchema } from './UserUncheckedCreateWithoutSocialTokensInputSchema';

export const UserCreateOrConnectWithoutSocialTokensInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSocialTokensInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutSocialTokensInputSchema),z.lazy(() => UserUncheckedCreateWithoutSocialTokensInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutSocialTokensInputSchema;
