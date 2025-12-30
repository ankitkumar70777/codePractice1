import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // this will enable validation for all endpoints
  app.useGlobalPipes(
    new ValidationPipe({
      // process request and strip off unknow values
      whitelist: true,
      // dont process request and return error
      forbidNonWhitelisted: true,
      // if dto values in unknow throw error
      // forbidUnknownValues: true,
      // tranform incomeing requestt to instanse of DTO class after validation
      transform: true,
    }),
  );
  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
