FROM node:16

WORKDIR /app

RUN yarn global add @nestjs/cli

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "run", "start"]