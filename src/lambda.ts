import { NestFactory } from '@nestjs/core';
import { Server } from 'http';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import { createServer, proxy } from 'aws-serverless-express';
import * as express from 'express';
import { VersioningType } from '@nestjs/common';

const binaryMimeTypes: string[] = [];
let cachedServer: Server;

async function bootstrapServer(): Promise<Server> {
  if (!cachedServer) {
    const expressApp = express();
    const adapter = new ExpressAdapter(expressApp);
    const nestApp = await NestFactory.create(AppModule, adapter);

    // API versioning
    nestApp.enableVersioning({
      type: VersioningType.URI,
    });

    nestApp.enableCors({
      origin: '*',
      allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
      methods: 'GET,POST',
    });
    await nestApp.init();
    cachedServer = createServer(expressApp, undefined, binaryMimeTypes);
  }
  return cachedServer;
}

// Lambda handler
export const handler = async (event: any, context) => {
  console.log(event);
  console.log(context);
  cachedServer = await bootstrapServer();
  return proxy(cachedServer, event, context, 'PROMISE').promise;
};
