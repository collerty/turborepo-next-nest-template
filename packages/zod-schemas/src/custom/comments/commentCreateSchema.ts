import { CommentSchema } from '../../generated';
import { z } from 'zod';

export const CommentCreateSchema = CommentSchema.extend({}).omit({
  id: true,
  authorId: true, // taken from user.id sending the request
  likes: true,
  createdAt: true,
  updatedAt: true
});

export const CommentUpdateSchema = CommentCreateSchema.partial();

export type CommentCreateInput = z.infer<typeof CommentCreateSchema>;
export type CommentUpdateInput = z.infer<typeof CommentUpdateSchema>;