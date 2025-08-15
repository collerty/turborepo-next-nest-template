import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../../users/users.service';
import { Payload } from '@workspace/zod-schemas';
import fromExtractors = ExtractJwt.fromExtractors;
import fromAuthHeaderAsBearerToken = ExtractJwt.fromAuthHeaderAsBearerToken;
import { ReqWithUser } from '../req-with-user';

function cookieExtractor(req: ReqWithUser) {
  var token = null;
  if (req && req.cookies)
  {
    token = req.signedCookies["accessToken"];
  }
  return token;
};


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly usersService: UsersService,
  ) {
    const jwtSecret = configService.get<string>('JWT_SECRET');
    if (!jwtSecret) {
      throw new Error('JWT_SECRET is not defined in environment variables');
    }


    super({
      jwtFromRequest: fromExtractors([cookieExtractor, fromAuthHeaderAsBearerToken()]),
      ignoreExpiration: false,
      secretOrKey: jwtSecret,
    });
  }



  async validate(payload: Payload) {
    const id: number = payload.sub;
    console.log("validating")
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}