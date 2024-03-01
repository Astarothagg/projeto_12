# Aplicativo CRUD de Livros

Este é um exemplo simples de um aplicativo CRUD (Create, Read, Delete) para gerenciar informações sobre livros. O aplicativo utiliza Node.js, Express e MongoDB.

## Configuração

### 1. Instalação das Dependências

Execute o seguinte comando para instalar as dependências:

```bash
npm install

#### 2. Configuração do Banco de Dados MongoDB
Certifique-se de ter o MongoDB instalado e em execução em sua máquina. A URL de conexão padrão é mongodb://localhost:27017/crud-app. Você pode alterar isso no arquivo app.js.

Executando o Aplicativo
Para iniciar o servidor, utilize o seguinte comando:

```bash
node app.js

O servidor estará em execução em http://localhost:3000.

Rotas Disponíveis
Listar todos os livros
Rota: GET /books
Criar um novo livro
Rota: POST /books
Corpo da Requisição (JSON):

{
  "title": "Nome do Livro",
  "author": "Autor do Livro",
  "year": 2022
}

Excluir um livro
Rota: DELETE /books/:bookId
Substitua :bookId pelo ID do livro que você deseja excluir.
