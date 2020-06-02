require('dotenv').config();
//Carregar express
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Conexão Estabalecida');
    app.emit('Pronto');
})
.catch(e => console.log(e));

//Sessões
const session = require('express-session');
const mongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');

const sessionOptions = session( { 
    secret: 'testetestetesteteste dsdsd dsdsd dsdsds',
    store: new mongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
} );
app.use(sessionOptions);
app.use(flash());

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal, outroMiddleware} = require('./src/middlewares/middlewares');

//? - query string chave=valor
// /profiles/12345?campanha=googleads&nome_campanha=sla

//Tratar o POST, evitando o undefined
app.use(express.urlencoded({ extended: true}));

app.use(express.static('./public'))

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

//Nossos midlewares
app.use(middlewareGlobal);
app.use(outroMiddleware);

app.use(routes);    //usar as rotas
app.on('Pronto', () => {
    app.listen(3000, () => {    //Ouvir a porta 3000
        console.log('Servidor executando na porta 3000');
    });  
})

 