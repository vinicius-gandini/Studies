function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo){
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('Erro');
            return;
        }

        setTimeout(() => {
            resolve(msg);   //resolve só envia um único parâmetro
        }, tempo);
    });
    
}

//Promise.all Promise.race Promicse.resolve Promise.reject
const promises = ['primeiro',
    espera('promise 1', 3000),
    espera('promise 2', 500),
    espera('promise 3', 1000),
    espera(1000, 1000),
    'outro valor'
];

Promise.all(promises).then(function(valor) {
    console.log(valor);
})
.catch(function(err) {
    console.log(err);
})

//Promise.race - retorna a primeira execução bem sucedida, porém as outras permanecem rodando
//Promise.resolve - Retorna a promise já resolvida
//Promise.resolve - Retorna a promise já rejeitada