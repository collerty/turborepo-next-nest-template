import { createZodDto } from 'nestjs-zod';
import { LoginSchema } from '@workspace/zod-schemas';

export class LoginDto extends createZodDto(LoginSchema) {
}