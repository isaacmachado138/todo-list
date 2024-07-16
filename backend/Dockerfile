# imagem oficial do Node.js
FROM node:16

# diretório de trabalho dentro do container
WORKDIR /app

COPY package*.json ./

#COPY ./.env ./.env

# RUN npm install -g dotenv

# Copiando o restante do código do backend
COPY . .


# Instalando as dependências
RUN npm install --loglevel=error

# Exponha a porta que o backend usa
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["node", "index.js"]

