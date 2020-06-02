//Routes controla todas as rotas da aplicação, organizando em um arquivo e exportando na home
//Nele, organizamos as rotas de acordo com seu respectivo controller - Padrão MVC
const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

/*
//Middleware
function meuMiddleware(req, res, next) {    //O "next" permite a chamada do proximo middleware
    console.log();
    console.log('Passei no seu middleware');
    console.log();
    next(); //se não chamar o "next()", a requisição fica em aberto
}

//Rotas da Home
route.get('/', meuMiddleware, homeController.paginaInicial, function (req, res, next) {
    console.log('Ainda estou aqui...');
});
*/
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

//Rotas Contato
route.get('/contato', contatoController.paginaContato);

module.exports = route;