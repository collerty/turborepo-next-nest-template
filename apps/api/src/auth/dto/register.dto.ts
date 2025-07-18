import { createZodDto } from 'nestjs-zod';
import { UserCreateInputSchema } from '@workspace/zod-schemas';

export class RegisterDto extends createZodDto(UserCreateInputSchema) {
}
