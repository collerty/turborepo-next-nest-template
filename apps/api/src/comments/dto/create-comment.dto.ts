import { createZodDto } from 'nestjs-zod';
import { CommentSchema } from '@workspace/zod-schemas';
import { z } from 'zod';

export const CommentSchemaDTO = z
  .object({
    ...CommentSchema.shape,
  })
  .omit({ id: true });

export class CreateCommentDto extends createZodDto(CommentSchemaDTO) {
}