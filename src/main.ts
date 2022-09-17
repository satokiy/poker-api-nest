import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { writeFileSync } from 'fs';
import { dump } from 'js-yaml';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Poker')
    .setDescription('The poker API description')
    .setVersion('1.0')
    .addTag('poker')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  writeFileSync('./openapi.yaml', dump(document, {}));

  app.enableVersioning({
    type: VersioningType.URI,
  });
  await app.listen(3000);
}
bootstrap();
