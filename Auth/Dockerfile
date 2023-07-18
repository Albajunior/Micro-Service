FROM node:16

WORKDIR ./

COPY package.json package-lock.json ./

RUN npm install

EXPOSE 8081

COPY .. ./

# Définir la variable d'environnement pour l'URI de connexion MongoDB
ENV MONGO_URI mongodb+srv://alaba:Famaguisse10@cluster0.vqb5sqn.mongodb.net/

CMD ["node", "server.js"]

