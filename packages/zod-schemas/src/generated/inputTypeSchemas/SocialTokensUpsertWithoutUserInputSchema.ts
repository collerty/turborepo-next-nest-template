import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SocialTokensUpdateWithoutUserInputSchema } from './SocialTokensUpdateWithoutUserInputSchema';
import { SocialTokensUncheckedUpdateWithoutUserInputSchema } from './SocialTokensUncheckedUpdateWithoutUserInputSchema';
import { SocialTokensCreateWithoutUserInputSchema } from './SocialTokensCreateWithoutUserInputSchema';
import { SocialTokensUncheckedCreateWithoutUserInputSchema } from './SocialTokensUncheckedCreateWithoutUserInputSchema';
import { SocialTokensWhereInputSchema } from './SocialTokensWhereInputSchema';

export const SocialTokensUpsertWithoutUserInputSchema: z.ZodType<Prisma.SocialTokensUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => SocialTokensUpdateWithoutUserInputSchema),z.lazy(() => SocialTokensUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => SocialTokensCreateWithoutUserInputSchema),z.lazy(() => SocialTokensUncheckedCreateWithoutUserInputSchema) ]),
  where: z.lazy(() => SocialTokensWhereInputSchema).optional()
}).strict();

export default SocialTokensUpsertWithoutUserInputSchema;
