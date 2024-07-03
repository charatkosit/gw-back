import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.use(helmet());
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  // app.enableCors({
  //   origin: ['http://172.41.62.164:3000', 'http://172.41.60.18:3000'],
  //   methods: ['GET', 'POST' ,'HEAD', 'PUT', 'PATCH','DELETE'],
  //   credentials: false,
  // });
  await app.listen(3000);

}
bootstrap();
