FROM node:17-alpine

WORKDIR /usr/src/www

COPY . .

RUN npm install --production --quiet

EXPOSE 8080

CMD ["node","app/server.js"]