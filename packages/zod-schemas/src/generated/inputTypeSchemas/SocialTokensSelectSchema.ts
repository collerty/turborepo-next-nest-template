import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"

export const SocialTokensSelectSchema: z.ZodType<Prisma.SocialTokensSelect> = z.object({
  providerUserId: z.boolean().optional(),
  providerType: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export default SocialTokensSelectSchema;
