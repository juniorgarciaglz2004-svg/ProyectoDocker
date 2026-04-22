FROM node:24.15.0-slim AS build

WORKDIR /app

COPY ./public /app/public
COPY ./src /app/src
COPY ./eslint.config.js /app/eslint.config.js
COPY ./index.html /app/index.html
COPY ./package.json /app/package.json
COPY ./vite.config.js /app/vite.config.js

ARG API_URL
RUN echo "VITE_API_URL=${API_URL}" >> /app/.env.production
RUN cat /app/.env.production

RUN npm install
RUN npm run build

FROM nginx 
EXPOSE 80
COPY --from=build /app/dist/ /usr/share/nginx/html/