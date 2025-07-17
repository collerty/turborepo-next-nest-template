import { IsEmail, IsString, Length } from 'class-validator';

export class LoginDto {
  @IsEmail()
  @Length(2, 255)
  email: string;

  @IsString()
  @Length(2, 64)
  password: string;
}
