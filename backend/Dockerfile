FROM node:24.15.0-slim

WORKDIR /app

COPY ./database /app/database
COPY ./rutas /app/rutas
COPY ./servicios /app/servicios
COPY ./sql /app/sql
COPY ./app.js /app/
COPY ./.sequelizerc /app/
COPY ./package.json /app/

RUN npm install

CMD [ "npm","run","start" ]