FROM node:16 as build

WORKDIR /app

COPY . .

RUN npm i --no-audit || npm i --no-audit --maxsockets 1

RUN npm install react-google-login --force

RUN npm install react-hook-form --force 

RUN npm install react-paystack --force

RUN npm run build

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "dist", "--host=0.0.0.0"]
