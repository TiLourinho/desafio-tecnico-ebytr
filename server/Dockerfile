FROM node:16-alpine

WORKDIR /app/server

COPY package.json /app/server

RUN npm install

COPY . /app/server

EXPOSE 3001

CMD ["npm", "start"]