import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { UsersService } from '../users/users.service';
import { Prisma, ProviderType, SocialTokens, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Tokens } from '@workspace/zod-schemas';
import { Profile as GoogleProfile } from 'passport-google-oauth20';
import { Profile as GithubProfile } from 'passport-github2';
import { Payload } from '@workspace/zod-schemas';
import { ConfigService } from '@nestjs/config';
import { ReqWithUser } from './req-with-user';
import { Response } from 'express';

@Injectable()
export class AuthService {

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {
  }

  async register(registerDTO: RegisterDto, res: Response): Promise<Tokens> {
    const { email, name, password } = registerDTO;
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await this.usersService.findCredentialsUserByEmail(email);
    if (existingUser) {
      throw new ConflictException(`User with email ${email} already exists`);
    }
    const user: User = await this.usersService.create({ email, name, password: hashedPassword });
    const payload: Payload = { sub: user.id };
    const tokens = this.signTokens(payload);

    await this.updateRefreshToken(user.id, tokens.refreshToken);

    this.sendHttpOnlyCookies(res, tokens);

    return tokens;
  }

  async login(loginDto: LoginDto, res: Response): Promise<Tokens> {
    const { email, password } = loginDto;

    const user: User | null = await this.usersService.findCredentialsUserByEmail(email);

    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }

    if (!user.password) {
      throw new NotFoundException(`User with email ${email} has no password`);
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new ForbiddenException('Password is incorrect');
    }
    const payload: Payload = { sub: user.id };
    const tokens = this.signTokens(payload);

    await this.updateRefreshToken(user.id, tokens.refreshToken);

    this.sendHttpOnlyCookies(res, tokens);

    return tokens;
  }

  async socialLogin(user: User, provider: ProviderType, res: Response) {
    const payload: Payload = { sub: user.id };
    const tokens = this.signTokens(payload);

    console.log('DEBUG socLogUser:', user);
    await this.updateRefreshToken(user.id, tokens.refreshToken);

    this.sendHttpOnlyCookies(res, tokens);
    console.log(provider);
    console.log(tokens);
    return tokens;
  }

  async logout(req: ReqWithUser, res: Response) {
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
    return res.status(200).json({ message: 'Logged out successfully' });
  }

  async refreshTokens(refreshToken: string, res: Response) {
    try {
      const payload: Payload = this.jwtService.verify(refreshToken);

      const user = await this.usersService.findOne(payload.sub);
      if (!user) {
        throw new UnauthorizedException('User not found');
      }

      // const isValid = await bcrypt.compare(refreshToken, user.refreshToken);
      const isValid = refreshToken === user.refreshToken;
      console.log(isValid, refreshToken, user.refreshToken);
      if (!isValid) {
        throw new UnauthorizedException('Invalid refresh token. Token is not valid.');
      }


      const newPayload: Payload = { sub: user.id };

      const newTokens = this.signTokens(newPayload);

      await this.updateRefreshToken(user.id, newTokens.refreshToken);

      this.sendHttpOnlyCookies(res, newTokens);

      return newTokens;
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  updateRefreshToken(userId: number, refreshToken: string) {
    // const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);
    console.log('update refresh token', refreshToken);
    console.log("DEBUG refresh token: ", userId)
    return this.usersService.update(userId, { refreshToken: refreshToken });
  }

  async validateGoogleUser(profile: GoogleProfile): Promise<any> {
    return this.usersService.findOrCreateUser(profile, ProviderType.GOOGLE);
  }

  async validateGithubUser(profile: GithubProfile): Promise<SocialTokens | User> {
    return this.usersService.findOrCreateUser(profile, ProviderType.GITHUB);
  }

  signTokens(payload: Payload): Tokens {
    const accessToken = this.jwtService.sign(payload); // default is 3600s
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });
    return {
      accessToken,
      refreshToken,
    };
  }

  sendHttpOnlyCookies(res: Response, tokens: Tokens): void {
    res.cookie('accessToken', tokens.accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      domain: this.configService.get<string>('COOKIE_DOMAIN'),
      maxAge: 60 * 60 * 1000, // 1 hour
      signed: true
    });

    res.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      domain: this.configService.get<string>('COOKIE_DOMAIN'),
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      signed: true
    });
  }
}
