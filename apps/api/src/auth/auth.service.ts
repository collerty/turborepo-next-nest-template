import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { UsersService } from '../users/users.service';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {

  constructor( private usersService: UsersService) {
  }

  // 1) set up users service - DONE
  // 2) do simple login / register - create a user basically - TODO
  // 3) set up JWT, hashing
  // 4) set up refresh token
  // 5) do social auth ( google + github )

  register(registerDTO: RegisterDto) {
    // TODO hash password
    return this.usersService.create(registerDTO);
  }

  async login(loginDto: LoginDto) {
    const {email, password} = loginDto;
    const user: User | null  = await this.usersService.findOneByEmail(email);

    if (!user)  {
      throw new NotFoundException(`User with email ${email} not found`);
    }

    if (password !== user.password) {
      throw new ForbiddenException("Password is incorrect");
    }

    return user;
  }



}
