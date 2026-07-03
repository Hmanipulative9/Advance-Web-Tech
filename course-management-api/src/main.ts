import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,               // Automatically removes any properties not defined in the DTO
      forbidNonWhitelisted: true,    // Throws a 400 error if the client sends extra, unauthorized fields
      transform: true,               // Automatically converts query parameters or body strings into their DTO types
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();