FROM node:18.12.0 as dependency

WORKDIR /app

COPY package.json .

RUN npm install

FROM node:lts-alpine

ARG user=node

WORKDIR /app

COPY . .

COPY --from=dependency /app/node_modules /app/node_modules

RUN chown -R $user:$user /app

USER $user

CMD npm start

EXPOSE 3000
