/*
//Pagina inicial co middleware
exports.paginaInicial = (req, res, next) => {
    console.log('Respondendo cliente');
    res.render('index');    //renderiza o index da view
    next();
};
*/

exports.paginaInicial = (req, res) => {
    res.render('index');    //renderiza o index da view
};
exports.trataPost = (req, res, next) => {
    res.send(req.body);
}

