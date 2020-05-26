exports.paginaInicial = (req, res) => {
    res.send(`<form action="/" method="Post">
        Usuário: <input name="nome" type="text">
        <button>Enviar</button>
    </form>`);     //res - reposta do servidor
};

exports.trataPost = (req, res) => {
    res.send('Nova rota de POST');
}

