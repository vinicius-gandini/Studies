//Carregar express
const express = require('express');
const app = express();

//        criar   ler   atualzar  apagar
//CRUD -> CREATE, READ, UPDATE,   DELETE
//        POST    GET   PUT       DELETE

//http://meusite.com/ <- GET -> Entregue a página
//http://meusite.com/sobre <- GET -> Entregue a página /sobre

//padrão
app.get('/', (req, res) => {    //req - requisição
    res.send(`<form action="/" method="Post">
        Nome: <input name="nome" type="text">
        <button>Enviar</button>
    </form>`)     //res - reposta do servidor
});

app.post('/', (req, res) => {
    res.send('Recebi o formulário');
})

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato');
})

app.listen(3000, () => {    //Ouvir a porta 3000
    console.log('Servidor executando na porta 3000');
});   