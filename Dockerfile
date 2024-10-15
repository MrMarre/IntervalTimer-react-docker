# Slimmad node (alpine)
FROM node:20-alpine

# working directory och namn i Docker desktop
WORKDIR /react-docker-first/

# vår package men aldrig node_modules
COPY package.json .

# installera dependecies och modules
RUN npm install

# Kopiera resten
COPY . .

# port som skall köras
EXPOSE 5173

# Vilket kommando?
CMD [ "npm", "run", "dev" ]
