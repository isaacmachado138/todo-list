# Utilizando a imagem oficial do Node.js
FROM node:16.6-alpine3.14

# Diretório de trabalho dentro do container
WORKDIR /app

COPY package*.json ./

# Instale as dependências
RUN npm install @vue/cli @vue/cli-service @vue/cli-plugin-babel

COPY . .


RUN npm run build

# Exponha a porta que o frontend usa
EXPOSE 8080

# Comando para rodar a aplicação
CMD ["npm", "run", "serve"]
