import { CommentSchema } from '../../generated';

export const CommentCreateSchema = CommentSchema.extend({}).omit({
  id: true,
  authorId: true, // taken from user.id sending the request
  likes: true,
  createdAt: true,
  updateAt: true
});