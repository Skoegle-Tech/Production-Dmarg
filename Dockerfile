# Base image
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

WORKDIR /app/client
RUN npm ci && npm run build

WORKDIR /app/server
RUN npm ci

EXPOSE 13000

CMD ["node", "Server.js"]