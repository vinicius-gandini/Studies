//Carregar express
const express = require('express');
const app = express();
const routes = require('./routes');

//? - query string chave=valor
// /profiles/12345?campanha=googleads&nome_campanha=sla

//Tratar o POST, evitando o undefined
app.use(express.urlencoded({ extended: true}));
app.use(routes);    //usar as rotas

app.listen(3000, () => {    //Ouvir a porta 3000
    console.log('Servidor executando na porta 3000');
});   