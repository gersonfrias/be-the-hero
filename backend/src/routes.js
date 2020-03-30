const express = require('express');

// CONTROLLERS
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**
 * Rotas e Recursos '/'
 */

 /**
  * Métodos HTTP
  * 
  * GET: Buscar uma informação dentro do back-end
  * POST: Criar uma informação dentro do back-end
  * PUT: Alterar uma informação dentro do back-end
  * DELETE: Deletar uma informação dentro do back-end
  */

  /**
   * Parâmetros - Tipos de Parâmetros
   * Query.Params: Parâmetros nomeados enviados na rota após o simbolo de ? (Filtro, Parginação, etc)
   * Route.Params: Parâmetros utilizados para identificar rescursos (Dados por exemplo de um único usuários geralmente por ID)
   * Request.Body: Corpo da Requisição, utilizado para alterar ou criar recursos, vários dados
   */

   /**
    * Banco de Dados: 
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NOSQL: MongoDB, CouchDB, etc
    * 
    * Comunicar com o BDs:
    * Driver: Select * FROM users
    * Query Builder: table('users').select('*').where()--- formato JavaScript - Vamos usar o KNEX com SQLite
    */

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;