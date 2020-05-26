//Carregar express
const express = require('express');
const app = express();

//? - query string chave=valor
// /profiles/12345?campanha=googleads&nome_campanha=sla

//Tratar o POST, evitando o undefined
app.use(express.urlencoded({ extended: true}))

app.get('/', (req, res) => {    //req - requisição
    res.send(`<form action="/" method="Post">
        Usuário: <input name="nome" type="text">
        <button>Enviar</button>
    </form>`)     //res - reposta do servidor
});

// : - parâmetros
// ? - query
app.get('/testes/:id_usuario?', (req, res) => { //Com o ? após o parâmetro, ele se torna opcional, podendo acessar somente a página
    console.log(req.params);
    res.send(req.query);
})

app.post('/', (req, res) => {
    console.log(req.body);          //req.body para metodo POST
    res.send(`O que me enviou foi ${req.body.nome}`);   //o .nome é o mesmo name do input do formulário
})

app.listen(3000, () => {    //Ouvir a porta 3000
    console.log('Servidor executando na porta 3000');
});   