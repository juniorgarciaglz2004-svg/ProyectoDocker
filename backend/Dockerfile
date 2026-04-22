FROM node:24.15.0-slim

WORKDIR /app

COPY ./database /app/database
COPY ./rutas /app/rutas
COPY ./servicios /app/servicios
COPY ./app.js /app/
COPY ./.sequelizerc /app/
COPY ./package.json /app/

RUN npm install

CMD ["sh", "-c", "npm run migrate && npm run seed && npm run start"]