import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, CommentsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
