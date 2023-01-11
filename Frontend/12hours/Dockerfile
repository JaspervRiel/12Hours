FROM node:17-alpine

COPY 12Hours/Frontend/12hours/package.json

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
