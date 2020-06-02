//Promise são promessas que o sistema executará paralelamente.
//Possui os parâmetros Resolve e Reject
//Resolve - retorna o sucesso da execução
//Reject - Retorna um erro, caso haja falha na execução

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo){
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('Erro');

        setTimeout(() => {
            resolve(msg);   //resolve só envia um único parâmetro
        }, tempo);
    });
    
}

espera('Frase 1', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return espera('Frase 2', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return espera('Frase 3', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .catch(err => {
        console.log('Erro Fatal');
    });

    //O código pode ser diminuído utilizando Async e Await