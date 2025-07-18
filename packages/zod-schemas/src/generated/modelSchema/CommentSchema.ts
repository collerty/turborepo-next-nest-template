import { z } from 'zod';

/////////////////////////////////////////
// COMMENT SCHEMA
/////////////////////////////////////////

export const CommentSchema = z.object({
  id: z.number().int(),
  title: z.string().min(2, { message: "Title must contain at least 2 characters" }).max(255, { message: "Title can't exceed 255 characters" }),
  content: z.string().min(2, { message: "Content must contain at least 2 characters" }).max(2000, { message: "Content can't exceed 2000 characters" }),
  authorId: z.number().int(),
  likes: z.number().int().nullable(),
  createdAt: z.coerce.date(),
  updateAt: z.coerce.date(),
})

export type Comment = z.infer<typeof CommentSchema>

/////////////////////////////////////////
// COMMENT PARTIAL SCHEMA
/////////////////////////////////////////

export const CommentPartialSchema = CommentSchema.partial()

export type CommentPartial = z.infer<typeof CommentPartialSchema>

export default CommentSchema;
