# Se utiliza una imagen base de Node.js
FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]

# Copiar el archivo SQL al contenedor
COPY ./dumps/db.init.sql /docker-entrypoint-initdb.d/db.init.sql
