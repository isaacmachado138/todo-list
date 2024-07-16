# Utilizando a imagem oficial do Node.js
FROM node:16

# Diretório de trabalho dentro do container
WORKDIR /app

COPY package*.json ./

# Instale as dependências
RUN npm install --loglevel=error

COPY . .

# RUN npm install -g @vue/cli-service

# RUN npm install -g @vue/cli

RUN npm run build

# Exponha a porta que o frontend usa
EXPOSE 8080

# Comando para rodar a aplicação
CMD ["npm", "run", "serve"]
