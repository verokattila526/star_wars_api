import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import helmet from '@fastify/helmet';

import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    { cors: true },
  );

  const config = new DocumentBuilder()
    .setTitle('SWAPI')
    .setVersion('1.0')
    .addServer('http://localhost')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  app.register(helmet, {
    contentSecurityPolicy: false,
  });

  await app.listen(3000, '0.0.0.0');
}
bootstrap();
