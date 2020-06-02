//Declaração de Função (Function hoisting)
//O a declaração hoisting eleva a declaração para o início

falaOi();

function falaOi() {
    console.log('Oie');
}

//Funções são Objetos de Primeira Classe, ou seja, pode ser tratada como dado
const souUmdado = function () {
    console.log('Sou um dado.');
}

souUmdado();

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo');
    funcao();
}

executaFuncao(souUmdado);

// Arrow Function
//Possui uma declaração mais curta
const arrow = () => {
    console.log('Sou uma arrow function');
}
arrow();

// Função dentro de Objeto
const obj = {
    falar() {
        console.log('Estou falando...');
    }
}

obj.falar();