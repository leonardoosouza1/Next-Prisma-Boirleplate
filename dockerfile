FROM node:16.13.0-alpine

WORKDIR /usr/app

RUN apk --no-cache add bash

COPY package*.json ./
COPY yarn.lock ./

RUN npm install -g prisma
run npx prisma generate