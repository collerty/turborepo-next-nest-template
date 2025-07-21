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
import { Tokens } from '@workspace/zod-schemas/src/custom/tokens';
import { Profile as GoogleProfile } from 'passport-google-oauth20';
import { Profile as GithubProfile } from 'passport-github2';
import { Payload } from '@workspace/zod-schemas';

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
    const existingUser = await this.usersService.findCredentialsUserByEmail(email);
    if (existingUser) {
      throw new ConflictException(`User with email ${email} already exists`);
    }
    const user: User = await this.usersService.create({ email, name, password: hashedPassword });
    const payload: Payload = { sub: user.id };
    const tokens = this.signTokens(payload);

    // TODO update refreshToken
    // TODO send cookies

    return tokens;
  }

  async login(loginDto: LoginDto): Promise<Tokens> {
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


    // TODO update refreshToken
    // TODO send cookies

    return tokens;
  }

  async socialLogin(user: User, provider: ProviderType, res: any) {
    const payload: Payload = { sub: user.id };
    const tokens = this.signTokens(payload);
    // TODO update refresh tokens in db
    // TODO send tokens with cookies
    console.log(provider);
    console.log(tokens);
    return tokens;
  }

  async logout(req: any, res: any) {
    //   TODO clear cookies
  }

  async refreshTokens(refreshToken: string, res: any) {
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

      console.log('Refresh generated refreshToken:', newTokens.refreshToken);
      await this.updateRefreshToken(user.id, newTokens.refreshToken);

      // res.cookie('accessToken', newAccessToken, {
      //   httpOnly: true,
      //   secure: true,
      //   sameSite: 'None',
      //   domain: this.configService.get<string>('COOKIE_DOMAIN'),
      //   maxAge: 60 * 60 * 1000, // 1 hour
      // });
      //
      // res.cookie('refreshToken', newRefreshToken, {
      //   httpOnly: true,
      //   secure: true,
      //   sameSite: 'None',
      //   domain: this.configService.get<string>('COOKIE_DOMAIN'),
      //   maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      // });
      return newTokens;
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  async updateRefreshToken(userId: number, refreshToken: string) {
    // const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);
    console.log('update refresh token', refreshToken);
    return await this.usersService.update(userId, { refreshToken: refreshToken });
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
}
