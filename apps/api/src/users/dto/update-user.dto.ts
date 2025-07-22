import { createZodDto } from 'nestjs-zod';
import { UserUpdateSchema } from '@workspace/zod-schemas';


export class UpdateUserDto extends createZodDto(UserUpdateSchema){}
