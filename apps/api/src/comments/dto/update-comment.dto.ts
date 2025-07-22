import { createZodDto } from 'nestjs-zod';
import { CommentUpdateSchema } from '@workspace/zod-schemas';

export class UpdateCommentDto extends createZodDto(CommentUpdateSchema) {}
