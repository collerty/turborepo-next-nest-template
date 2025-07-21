import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { AuthService } from '../auth.service';
import { ConfigService } from '@nestjs/config';
import {Profile} from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(configService: ConfigService, private authService: AuthService) {
    let googleClientId = configService.get<string>('GOOGLE_CLIENT_ID');
    if (!googleClientId) {
      throw new Error('GOOGLE_CLIENT_ID is not defined in environment variables');
    }

    let googleClientSecret = configService.get<string>('GOOGLE_CLIENT_SECRET');
    if (!googleClientSecret) {
      throw new Error('GOOGLE_CLIENT_SECRET is not defined in environment variables');
    }

    let apiurlproduction = configService.get<string>('API_URL_PRODUCTION') || 'http://localhost:4000';
    
    super({
      clientID: googleClientId,
      clientSecret: googleClientSecret,
      callbackURL: `${apiurlproduction}/auth/google/callback`,
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: VerifyCallback,
  ): Promise<any> {
    const user = await this.authService.validateGoogleUser(profile);
    done(null, user);

    return user;
  }
}