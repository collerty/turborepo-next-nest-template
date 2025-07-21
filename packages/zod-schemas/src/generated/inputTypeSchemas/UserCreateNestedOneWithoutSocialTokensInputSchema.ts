import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutSocialTokensInputSchema } from './UserCreateWithoutSocialTokensInputSchema';
import { UserUncheckedCreateWithoutSocialTokensInputSchema } from './UserUncheckedCreateWithoutSocialTokensInputSchema';
import { UserCreateOrConnectWithoutSocialTokensInputSchema } from './UserCreateOrConnectWithoutSocialTokensInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutSocialTokensInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSocialTokensInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSocialTokensInputSchema),z.lazy(() => UserUncheckedCreateWithoutSocialTokensInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSocialTokensInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutSocialTokensInputSchema;
