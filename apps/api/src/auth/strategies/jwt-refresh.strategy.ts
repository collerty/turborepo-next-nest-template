import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { ReqWithUser } from '../req-with-user';
import { Payload } from '@workspace/zod-schemas';
import { UsersService } from '../../users/users.service';

function cookieExtractor(req: ReqWithUser | Request) {
  var token = null;

  if (req && req.cookies) {
    token = req.signedCookies['refreshToken'];
  }
  console.log(token ? token : "no refresh token in cookies" )
  console.log(req.cookies)
  return token;
};

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(
    private readonly configService: ConfigService,
    private readonly usersService: UsersService,
  ) {
    const jwtRefreshSecret = configService.get<string>('JWT_SECRET');
    if (!jwtRefreshSecret) {
      throw new Error('JWT_SECRET is not defined in environment variables');
    }

    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: ReqWithUser) => cookieExtractor(req),
      ]),
      ignoreExpiration: false,
      secretOrKey: jwtRefreshSecret,
      passReqToCallback: true,
    });
  }

  async validate(req: Request, payload: Payload) {
    const id: number = payload.sub;
    console.log('validating user from refresh token');
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new UnauthorizedException();
    }

    const rawRefreshToken = cookieExtractor(req);
    const isValid = rawRefreshToken === user.refreshToken;
    console.log(isValid, rawRefreshToken, user.refreshToken);
    if (!isValid) {
      throw new UnauthorizedException('Invalid refresh token. Token is not valid.');
    }


    return user;
  }
}