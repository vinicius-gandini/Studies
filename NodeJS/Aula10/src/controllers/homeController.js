exports.paginaInicial = (req, res) => {
    res.render('index');    //renderiza o index da view
};

exports.trataPost = (req, res) => {
    res.send('Nova rota de POST');
}

