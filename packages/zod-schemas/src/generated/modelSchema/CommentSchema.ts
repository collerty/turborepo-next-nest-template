import { z } from 'zod';

/////////////////////////////////////////
// COMMENT SCHEMA
/////////////////////////////////////////

export const CommentSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string().nullable(),
  authorId: z.number().nullable(),
  likes: z.number().nullable(),
})

export type Comment = z.infer<typeof CommentSchema>

/////////////////////////////////////////
// COMMENT PARTIAL SCHEMA
/////////////////////////////////////////

export const CommentPartialSchema = CommentSchema.partial()

export type CommentPartial = z.infer<typeof CommentPartialSchema>

export default CommentSchema;
