//Routes controla todas as rotas da aplicação, organizando em um arquivo e exportando na home
//Nele, organizamos as rotas de acordo com seu respectivo controller - Padrão MVC
const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

//Rotas da Home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

//Rotas Contato
route.get('/contato', contatoController.paginaContato);

module.exports = route;