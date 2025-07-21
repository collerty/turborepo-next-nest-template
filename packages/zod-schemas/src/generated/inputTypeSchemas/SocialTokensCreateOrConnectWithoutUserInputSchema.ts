import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SocialTokensWhereUniqueInputSchema } from './SocialTokensWhereUniqueInputSchema';
import { SocialTokensCreateWithoutUserInputSchema } from './SocialTokensCreateWithoutUserInputSchema';
import { SocialTokensUncheckedCreateWithoutUserInputSchema } from './SocialTokensUncheckedCreateWithoutUserInputSchema';

export const SocialTokensCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.SocialTokensCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => SocialTokensWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SocialTokensCreateWithoutUserInputSchema),z.lazy(() => SocialTokensUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default SocialTokensCreateOrConnectWithoutUserInputSchema;
