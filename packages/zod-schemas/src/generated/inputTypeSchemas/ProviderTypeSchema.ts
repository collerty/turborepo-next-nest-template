import { z } from 'zod';

export const ProviderTypeSchema = z.enum(['CREDENTIALS','GOOGLE','GITHUB']);

export type ProviderTypeType = `${z.infer<typeof ProviderTypeSchema>}`

export default ProviderTypeSchema;
