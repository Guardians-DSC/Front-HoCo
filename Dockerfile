FROM node:14.14.0-alpine

LABEL maintainer="Rodrigo Eloy Cavalcanti"

WORKDIR /app

COPY . .

RUN npm install

CMD npm start

EXPOSE 3000