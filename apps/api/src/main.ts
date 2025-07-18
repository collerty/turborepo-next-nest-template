import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
  });

  app.use(express.json());

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  const configService = app.get(ConfigService);

  app.enableCors({
    credentials: true,
    origin: configService.get<string>('NEXT_URL_PRODUCTION'),
  });
  const PORT = configService.get<number>('PORT') || 4000;
  await app.listen(PORT);
}

bootstrap();