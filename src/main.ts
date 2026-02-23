import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
// Its an entry point of the applciation
// It bootstraps the AppModule.
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Need to add ValidationPipe here to use in application.
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();
