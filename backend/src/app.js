const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

/* quando no servidor de producao, definir o origin do cors
  app.use(cors({
  origin: 'http://meuapp.com'
})); 
*/

// em desenvolvimento, caso nao se utilize o origin, todas as aplicacoes podem acessar o backend
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

/* 
Rota / Recurso
*/

/* 
Metodos HTTP:

GET:
POST:
PUT:
DELETE:
*/

/* 
Tipos de parametros
Query Params: Parametros nomeados na rota apos "?" (Filtros, paginacao)
Route Params: Parametros utilizados para identificar recursos
Request Body: Corpo da requisicao utilizado para criar ou alterar recursos
*/