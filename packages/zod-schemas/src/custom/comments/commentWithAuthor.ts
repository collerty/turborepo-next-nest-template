import { z } from 'zod';

export const CommentWithAuthorSchema = z.object({
  id: z.number().int(),
  content: z.string().min(2, { message: 'Content must contain at least 2 characters' }).max(2000, { message: 'Content can\'t exceed 2000 characters' }),
  authorId: z.number().int(),
  likes: z.number().int().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  author: z.object({
      id: z.number().int(),
      name: z.string().min(2, { message: 'Name must contain at least 2 characters' }).max(100, { message: 'Name can\'t exceed 100 characters' }),
      picture: z.string().min(6, { message: 'Image must contain at least 10 characters' }),
    },
  ),
});

export type CommentWithAuthor = z.infer<typeof CommentWithAuthorSchema>
