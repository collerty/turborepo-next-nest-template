import { createZodDto } from 'nestjs-zod';
import { RegisterSchema } from '@workspace/zod-schemas';

export class RegisterDto extends createZodDto(RegisterSchema) {}