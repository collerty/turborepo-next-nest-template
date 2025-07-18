import { createZodDto } from 'nestjs-zod';
import { UserSchema } from '@workspace/zod-schemas';
import { z } from 'zod';

export const UserSchemaDTO = z
  .object({
    ...UserSchema.shape,
  })
  .omit({ id: true, name: true, createdAt: true, updatedAt: true });

export class LoginDto extends createZodDto(UserSchemaDTO) {
}