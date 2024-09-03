FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install --legacy-peer-deps

npm install --save-dev ajv@^7

RUN npm i -g serve

COPY . .

RUN npm run build

CMD [ "serve", "-l", "80", "-s", "build" ]