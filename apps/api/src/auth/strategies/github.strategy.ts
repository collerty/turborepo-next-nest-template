import {Injectable} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import {PassportStrategy} from '@nestjs/passport';
import {Profile as GithubProfile, Strategy} from 'passport-github2';
import {AuthService} from "../auth.service";

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor(configService: ConfigService, private authService: AuthService) {
    let githubClientId = configService.get<string>('GITHUB_CLIENT_ID');
    if (!githubClientId) {
      throw new Error('GITHUB_CLIENT_ID is not defined in environment variables');
    }

    let githubClientSecret = configService.get<string>('GITHUB_CLIENT_SECRET');
    if (!githubClientSecret) {
      throw new Error('GITHUB_CLIENT_SECRET is not defined in environment variables');
    }

    let apiUrlProduction = configService.get<string>('API_URL_PRODUCTION') || 'http://localhost:4000';

    super({
      clientID: githubClientId,
      clientSecret: githubClientSecret,
      callbackURL: `${apiUrlProduction}/auth/github/callback`,
      scope: ['user:email'],
    });
  }

  async validate(accessToken: string, _refreshToken: string, profile: GithubProfile) {
    const user = await this.authService.validateGithubUser(profile);

    return user;
  }
}