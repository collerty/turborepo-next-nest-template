import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SocialTokensCreateWithoutUserInputSchema } from './SocialTokensCreateWithoutUserInputSchema';
import { SocialTokensUncheckedCreateWithoutUserInputSchema } from './SocialTokensUncheckedCreateWithoutUserInputSchema';
import { SocialTokensCreateOrConnectWithoutUserInputSchema } from './SocialTokensCreateOrConnectWithoutUserInputSchema';
import { SocialTokensWhereUniqueInputSchema } from './SocialTokensWhereUniqueInputSchema';

export const SocialTokensUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.SocialTokensUncheckedCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SocialTokensCreateWithoutUserInputSchema),z.lazy(() => SocialTokensUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SocialTokensCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => SocialTokensWhereUniqueInputSchema).optional()
}).strict();

export default SocialTokensUncheckedCreateNestedOneWithoutUserInputSchema;
