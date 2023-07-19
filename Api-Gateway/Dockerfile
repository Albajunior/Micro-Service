# Utilise l'image Docker officielle de Node.js version 18 comme base
FROM node:18

# Définit le répertoire de travail dans le conteneur en tant que '/api'
WORKDIR /api

# Copie le fichier package.json et package-lock.json (ou yarn.lock) dans le répertoire '/api' du conteneur
COPY package*.json ./

# Installe les dépendances Node.js définies dans le fichier package.json dans le conteneur
RUN npm install

# Copie tous les fichiers du répertoire de construction local dans le répertoire '/api' du conteneur
COPY . .

# Expose le port 3000 du conteneur afin qu'il puisse être accessible depuis l'extérieur
EXPOSE 3000

# Définit la commande par défaut à exécuter lorsque le conteneur est démarré, Auload
CMD [ "npm", "run", "dev" ]
