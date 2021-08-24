FROM node:latest

LABEL maintainer="Rodrigo Eloy Cavalcanti"

COPY . /app

WORKDIR /app

RUN ["npm", "install"]

CMD ["npm", "start"]

EXPOSE 3000