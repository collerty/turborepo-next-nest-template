import { z } from 'zod';

export const CommentScalarFieldEnumSchema = z.enum(['id','title','content','authorId','likes']);

export default CommentScalarFieldEnumSchema;
