// CreateUserDto could be used instead, but I want to additionally have a IsEmail check here.

import { IsEmail, IsString, Length } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  @Length(2, 255)
  email: string;

  @IsString()
  @Length(2, 100)
  name: string;

  @IsString()
  @Length(2, 64)
  password: string;
}
