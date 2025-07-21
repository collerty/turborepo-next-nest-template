import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SocialTokensWhereInputSchema } from './SocialTokensWhereInputSchema';
import { SocialTokensUpdateWithoutUserInputSchema } from './SocialTokensUpdateWithoutUserInputSchema';
import { SocialTokensUncheckedUpdateWithoutUserInputSchema } from './SocialTokensUncheckedUpdateWithoutUserInputSchema';

export const SocialTokensUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.SocialTokensUpdateToOneWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => SocialTokensWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SocialTokensUpdateWithoutUserInputSchema),z.lazy(() => SocialTokensUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default SocialTokensUpdateToOneWithWhereWithoutUserInputSchema;
