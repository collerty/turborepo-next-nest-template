import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Public } from './public.decorator';
import { GoogleOauthGuard } from './guards/google-oauth.guard';
import { GithubOauthGuard } from './guards/github-oauth.guard';
import { ConfigService } from '@nestjs/config';
import { ProviderType } from '@prisma/client';
import { ReqWithUser } from './req-with-user';
import { Response } from 'express';
import { JwtRefreshGuard } from './guards/jwt-refresh.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService,
              private configService: ConfigService) {
  }

  @Public()
  @Post('register')
  register(@Body() registerDto: RegisterDto, @Res({ passthrough: true }) res: Response) {
    return this.authService.register(registerDto, res);
  }

  @Public()
  @Post('login')
  login(@Body() loginDto: LoginDto, @Res({ passthrough: true }) res: Response) {
    return this.authService.login(loginDto, res);
  }

  @Post('logout')
  logOut(@Res() res: Response) {
    console.log('log out');
    return this.authService.logout(res);
  }

  @Get('profile')
  getProfile(@Req() req: ReqWithUser) {
    console.log('requested profile');
    const { password, ...user } = req.user;
    return user;
  }

  @Public()
  @UseGuards(JwtRefreshGuard)
  @Post('refresh')
  async refreshToken(@Req() req: ReqWithUser, @Res({ passthrough: true }) res: Response) {
    return await this.authService.refreshTokens(req.user, res);

  }

  @Public()
  @UseGuards(GoogleOauthGuard)
  @Get('google')
  googleAuth() {
  }

  @Public()
  @UseGuards(GoogleOauthGuard)
  @Get('google/callback')
  async googleAuthRedirect(@Req() req: ReqWithUser, @Res({ passthrough: true }) res: Response) {
    await this.authService.socialLogin(req.user, ProviderType.GOOGLE, res);

    const page = '/comments';
    const redirectUrl = this.configService.get<string>(
      'NEXT_URL_PRODUCTION',
      'http://localhost:3000', // fallback to localhost if not set
    ) + page;


    return res.redirect(redirectUrl);
  }

  @Public()
  @UseGuards(GithubOauthGuard)
  @Get('github')
  githubAuth() {
  }

  @Public()
  @UseGuards(GithubOauthGuard)
  @Get('github/callback')
  async githubAuthRedirect(@Req() req: ReqWithUser, @Res({ passthrough: true }) res: Response) {
    console.log('DEBUG githubRedirect:', req.user);
    await this.authService.socialLogin(req.user, ProviderType.GITHUB, res);

    const page = '/comments';
    const redirectUrl = this.configService.get<string>(
      'NEXT_URL_PRODUCTION',
      'http://localhost:3000', // fallback to localhost if not set
    ) + page;

    return res.redirect(redirectUrl);
  }
}
