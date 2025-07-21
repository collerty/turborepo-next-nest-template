import { z } from 'zod';
import { ProviderTypeSchema } from '../inputTypeSchemas/ProviderTypeSchema'

/////////////////////////////////////////
// SOCIAL TOKENS SCHEMA
/////////////////////////////////////////

export const SocialTokensSchema = z.object({
  providerType: ProviderTypeSchema,
  providerUserId: z.string(),
  userId: z.number().int(),
})

export type SocialTokens = z.infer<typeof SocialTokensSchema>

/////////////////////////////////////////
// SOCIAL TOKENS PARTIAL SCHEMA
/////////////////////////////////////////

export const SocialTokensPartialSchema = SocialTokensSchema.partial()

export type SocialTokensPartial = z.infer<typeof SocialTokensPartialSchema>

export default SocialTokensSchema;
