FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install --legacy-peer-deps

RUN npm install --save-dev ajv@^7

RUN npm i -g serve

COPY . .

RUN npm run build

CMD [ "serve", "-l", "80", "-s", "build" ]