import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutSocialTokensInputSchema } from './UserCreateWithoutSocialTokensInputSchema';
import { UserUncheckedCreateWithoutSocialTokensInputSchema } from './UserUncheckedCreateWithoutSocialTokensInputSchema';
import { UserCreateOrConnectWithoutSocialTokensInputSchema } from './UserCreateOrConnectWithoutSocialTokensInputSchema';
import { UserUpsertWithoutSocialTokensInputSchema } from './UserUpsertWithoutSocialTokensInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutSocialTokensInputSchema } from './UserUpdateToOneWithWhereWithoutSocialTokensInputSchema';
import { UserUpdateWithoutSocialTokensInputSchema } from './UserUpdateWithoutSocialTokensInputSchema';
import { UserUncheckedUpdateWithoutSocialTokensInputSchema } from './UserUncheckedUpdateWithoutSocialTokensInputSchema';

export const UserUpdateOneRequiredWithoutSocialTokensNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSocialTokensNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSocialTokensInputSchema),z.lazy(() => UserUncheckedCreateWithoutSocialTokensInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSocialTokensInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSocialTokensInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutSocialTokensInputSchema),z.lazy(() => UserUpdateWithoutSocialTokensInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSocialTokensInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutSocialTokensNestedInputSchema;
