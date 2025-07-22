import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';
import { PrismaClientExceptionFilter } from './prisma-client-exception/prisma-client-exception.filter';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {});

  const configService = app.get(ConfigService);

  app.use(express.json());
  app.use(cookieParser(configService.get<string>('COOKIE_SECRET')));

  // uncomment to send raw PrismaClient errors in the response ( not safe for production )
  // const { httpAdapter } = app.get(HttpAdapterHost);
  // app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));


  app.enableCors({
    credentials: true,
    origin: configService.get<string>('NEXT_URL_PRODUCTION'),
  });

  const PORT = configService.get<number>('PORT') || 4000;
  await app.listen(PORT);
}

bootstrap();