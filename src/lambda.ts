import { NestFactory } from '@nestjs/core';
import { Server } from 'http';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as serverless from 'aws-serverless-express';
import * as express from 'express';
import { Context, Handler } from 'aws-lambda';

let cachedServer: Server;

async function bootstrapServer(): Promise<Server> {
  const expressApp = express();
  const adapter = new ExpressAdapter(expressApp);
  const nestApp = await NestFactory.create(AppModule, adapter);
  nestApp.enableCors();
  await nestApp.init();
  return serverless.createServer(expressApp);
}

// Lambda handler
export const handler: Handler = async (event: any, context: Context) => {
  if (!cachedServer) {
    await bootstrapServer().then(async (server) => {
      cachedServer = server;
      return serverless.proxy(server, event, context);
    });
  } else {
    return serverless.proxy(cachedServer, event, context);
  }
};
