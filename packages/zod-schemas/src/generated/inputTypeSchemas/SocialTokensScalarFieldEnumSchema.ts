import { z } from 'zod';

export const SocialTokensScalarFieldEnumSchema = z.enum(['providerUserId','providerType','userId']);

export default SocialTokensScalarFieldEnumSchema;
