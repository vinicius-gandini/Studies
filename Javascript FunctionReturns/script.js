// Return - retorna um valor, finalizando a função

function Soma(a, b) {
    return a + b;
}

function Soma2(a, b) {
    console.log(a + b);     //Não é o retorno, apenas uma ação
}

Soma2(5, 2);

//Pode retornar objetos
function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}

p1 = criaPessoa('Vinicius', 'Gandini');
console.log(p1);

//Exemplo Closure
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto  = fala('mundo!');
console.log(resto);

