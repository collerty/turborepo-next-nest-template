import { createZodDto } from 'nestjs-zod';
import { CommentCreateSchema } from '@workspace/zod-schemas';

export class CreateCommentDto extends createZodDto(CommentCreateSchema) {
}