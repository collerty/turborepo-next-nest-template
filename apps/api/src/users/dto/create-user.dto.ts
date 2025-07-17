import { createZodDto } from 'nestjs-zod';
import { UserSchema } from '@workspace/zod-schemas';
import { z } from 'zod';

export const UserSchemaDTO = z
  .object({
    ...UserSchema.shape,
  })
  .omit({ id: true });

export class CreateUserDto extends createZodDto(UserSchemaDTO) {
}