import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SocialTokensCreateWithoutUserInputSchema } from './SocialTokensCreateWithoutUserInputSchema';
import { SocialTokensUncheckedCreateWithoutUserInputSchema } from './SocialTokensUncheckedCreateWithoutUserInputSchema';
import { SocialTokensCreateOrConnectWithoutUserInputSchema } from './SocialTokensCreateOrConnectWithoutUserInputSchema';
import { SocialTokensUpsertWithoutUserInputSchema } from './SocialTokensUpsertWithoutUserInputSchema';
import { SocialTokensWhereInputSchema } from './SocialTokensWhereInputSchema';
import { SocialTokensWhereUniqueInputSchema } from './SocialTokensWhereUniqueInputSchema';
import { SocialTokensUpdateToOneWithWhereWithoutUserInputSchema } from './SocialTokensUpdateToOneWithWhereWithoutUserInputSchema';
import { SocialTokensUpdateWithoutUserInputSchema } from './SocialTokensUpdateWithoutUserInputSchema';
import { SocialTokensUncheckedUpdateWithoutUserInputSchema } from './SocialTokensUncheckedUpdateWithoutUserInputSchema';

export const SocialTokensUncheckedUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.SocialTokensUncheckedUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SocialTokensCreateWithoutUserInputSchema),z.lazy(() => SocialTokensUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SocialTokensCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => SocialTokensUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => SocialTokensWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => SocialTokensWhereInputSchema) ]).optional(),
  connect: z.lazy(() => SocialTokensWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SocialTokensUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => SocialTokensUpdateWithoutUserInputSchema),z.lazy(() => SocialTokensUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export default SocialTokensUncheckedUpdateOneWithoutUserNestedInputSchema;
