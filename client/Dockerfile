FROM node:16

WORKDIR /usr/src/app

RUN npm install

RUN npm run build

COPY . .

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "dist"]
