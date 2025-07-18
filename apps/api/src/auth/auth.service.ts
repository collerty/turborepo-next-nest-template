import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { UsersService } from '../users/users.service';
import { Prisma, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Tokens } from '@workspace/zod-schemas/src/custom/tokens';

@Injectable()
export class AuthService {

  constructor(private usersService: UsersService,
              private jwtService: JwtService,
  ) {
  }

  // 1) set up users service - DONE
  // 2) do simple login / register - create a user basically - TODO
  // 3) set up JWT, hashing
  // 4) set up refresh token
  // 5) do social auth ( google + github )

  async register(registerDTO: RegisterDto): Promise<Tokens> {
    const { email, name, password } = registerDTO;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user: User = await this.usersService.create({ email, name, password: hashedPassword });
    const payload = { sub: user.id };
    const accessToken = this.jwtService.sign(payload); // default is 3600s
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });

    // TODO update refreshToken
    // TODO send cookies

    return {
      accessToken,
      refreshToken,
    };
  }

  async login(loginDto: LoginDto): Promise<Tokens> {
    const { email, password } = loginDto;
    const user: User | null = await this.usersService.findOneByEmail(email);

    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new ForbiddenException('Password is incorrect');
    }
    const payload = { sub: user.id };
    const accessToken = this.jwtService.sign(payload); // default is 3600s
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });

    // TODO update refreshToken
    // TODO send cookies

    return {
      accessToken,
      refreshToken,
    };
  }
}
