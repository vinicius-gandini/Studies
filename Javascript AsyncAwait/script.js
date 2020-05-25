//Async define uma função ser assíncrona, permitindo o uso do Await
// para esperar uma outra função ser executada / resolvida para aí sim
// executar o proximo passo

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function espera(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string'){
                reject('Erro');
                return;
            }

            resolve(msg);
            console.log(msg);
            return;
        }, tempo);
    })
}

//Para capturar erros, usa-se try/catch
async function executa() {
    try {
        const fase1 = await espera('Fase 1', rand(1, 3));
        const fase2 = await espera(2, rand(1, 3));
        const fase3 = await espera('Fase 3', rand(1, 3));
        console.log('Terminamos na fase: ', fase3);
    } catch(err) {
        console.log(err);
    }
}
executa();