import { createZodDto } from 'nestjs-zod';
import { CommentCreateInputSchema } from '@workspace/zod-schemas';

export class CreateCommentDto extends createZodDto(CommentCreateInputSchema) {
}