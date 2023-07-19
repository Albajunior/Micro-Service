FROM node:16

COPY package.json package-lock.json ./

RUN npm install

EXPOSE 3000

COPY .. ./

CMD ["node", "server.js"]

