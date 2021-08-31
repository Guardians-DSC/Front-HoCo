FROM node:lts-alpine as dependency

WORKDIR /app

COPY package.json .

RUN npm install


FROM node:lts-alpine

WORKDIR /app

COPY . .

COPY --from=dependency /app/node_modules /app/node_modules

CMD npm start

EXPOSE 3000