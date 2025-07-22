import { createZodDto } from 'nestjs-zod';
import { UserCreateSchema } from '@workspace/zod-schemas';

export class CreateUserDto extends createZodDto(UserCreateSchema) {
}