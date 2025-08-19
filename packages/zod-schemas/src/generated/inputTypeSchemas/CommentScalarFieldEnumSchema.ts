import { z } from 'zod';

export const CommentScalarFieldEnumSchema = z.enum(['id','content','authorId','likes','createdAt','updatedAt']);

export default CommentScalarFieldEnumSchema;
