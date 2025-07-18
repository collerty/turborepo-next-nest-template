import { createZodDto } from 'nestjs-zod';
import { UserCreateInputSchema } from '@workspace/zod-schemas';

export class CreateUserDto extends createZodDto(UserCreateInputSchema) {
}