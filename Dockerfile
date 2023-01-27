FROM node:16 as dependency

WORKDIR /app

COPY package.json .

RUN npm install

FROM node:16-alpine

ARG user=node

ENV REACT_APP_BASE_URL=http://54.164.133.210:8000/ 
ENV REACT_APP_DOMAIN=dev-qcrl1v18netyvzxw.us.auth0.com 
ENV REACT_APP_CLIENTID=2jpy5fQAxKQjfwrcXHsA1GCMdEu9bU8v 
ENV REACT_APP_URI=http://localhost:3000/sobre

WORKDIR /app

COPY . .

COPY --from=dependency /app/node_modules /app/node_modules

RUN chown -R $user:$user /app

USER $user

CMD npm start

EXPOSE 3000
