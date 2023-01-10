FROM node:17-alpine

WORKDIR /app

COPY 12hours/package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
