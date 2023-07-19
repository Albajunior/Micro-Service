FROM node:16

RUN mkdir -p /auth

WORKDIR /auth

COPY package*.json /auth

RUN npm install

EXPOSE 8081

COPY . /auth

# Définir la variable d'environnement pour l'URI de connexion MongoDB
ENV MONGO_URI mongodb+srv://alaba:Famaguisse10@cluster0.vqb5sqn.mongodb.net/

CMD ["node", "npm"]

