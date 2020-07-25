 
FROM node:latest AS build

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . /app
RUN npm run build

FROM alpine:latest

WORKDIR /app

COPY --from=build /app/ /app/
CMD ["npm","run", "start:prod"]