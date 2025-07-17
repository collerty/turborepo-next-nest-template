import { z } from 'zod';

export const CommentScalarFieldEnumSchema = z.enum(['id','title','content','authorId','likes','createdAt','updateAt']);

export default CommentScalarFieldEnumSchema;
