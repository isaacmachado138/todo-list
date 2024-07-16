# ToDo List Application

Este é um projeto de aplicação de gerenciamento de tarefas (ToDo List) que inclui um backend em Node.js e um frontend em Vue.js. Além disso, foi usado o Docker para containerização da aplicação

## Requisitos

### Backend (Node.js + Express.js)

- Utiliza Express.js para criar uma API RESTful.
- Configura um banco de dados PostgreSQL para armazenar as tarefas.
- Implementa as seguintes rotas:

  - **GET /tasks**: Retorna todas as tarefas.
  - **POST /tasks**: Cria uma nova tarefa.
  - **PUT /tasks/:id**: Atualiza uma tarefa existente.
  - **DELETE /tasks/:id**: Exclui uma tarefa.

- Estrutura do banco de dados:
  - Tabela `tasks` com colunas:
    - task_id
    - task_name
    - task_desc
    - task_end

### Frontend (Vue.js)

- Cria uma aplicação Vue.js que consome a API do backend.
- Implementa as seguintes funcionalidades:

  - Lista todas as tarefas.
  - Adiciona uma nova tarefa.
  - Edita uma tarefa existente.
  - Exclui uma tarefa.
  - Marca uma tarefa como concluída.
  - Utiliza componentes Vue.js para estruturar a aplicação.

## Executando o Projeto

### Com Docker

Certifique-se de ter o Docker e o Docker Compose instalados. Em seguida, execute os seguintes comandos:

1. **Construir e Iniciar os Serviços**:

Na pasta raiz do seu projeto, rode:
docker-compose up --build

O frontend estará disponível em http://localhost:8080.

### Sem Docker

#### Backend (Node.js)
Certifique-se de ter o Node.js instalado. No diretório backend, execute os seguintes comandos:

1. **Instalar Dependências:**
cd backend

npm install

2. **Configurar Variáveis de Ambiente:**

Crie um arquivo .env no diretório backend com as seguintes variáveis:

PORT=3000

DB_HOST=localhost

DB_PORT=5432

DB_USER=postgres

DB_PASSWORD=isaac1234

DB_NAME=db_todolist

3. **Executar o Servidor:**
node index.js

O servidor estará disponível em http://localhost:3000.


#### Frontend (Vue.js)
Certifique-se de ter o Node.js instalado. No diretório frontend, execute os seguintes comandos:

1. **Instalar Dependências:**
cd frontend
npm install

2. **Executar a Aplicação:**
npm run serve
A aplicação estará disponível em http://localhost:8080.



