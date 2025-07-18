import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';
import { AuthModule } from './auth/auth.module';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';
import { PrismaErrorFilter } from './prisma-client-exception/prisma-error.filter';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, CommentsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_FILTER,
      useClass: PrismaErrorFilter
    },
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe
    }],
})
export class AppModule {
}
