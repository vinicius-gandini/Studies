function funcao() {
    console.log('Oi');
}
funcao('Valor');

// Quando declarar uma função (Function), há a variável arguments
function funcao2(){
    console.log(arguments);
}
funcao2('Valor', 333);

//Ela armazena os parametros enviados, mesmo que não forem definidos parâmetros à receber
function funcao3() {
    let total = 0;
    for (argumento of arguments) {
        total += argumento;
    }

    console.log(total);
}

funcao3(1, 2, 3, 4, 5);

//Caso hajam mais parâmetros do que argumentos, eles recebem Undefined
function funcao4(a, b, c, d) {
    console.log(a, b , c, d);
}
funcao4(1);

//Arguments só existem em funções literais com Function. Em Arrow Function, ele não existe

//Rest operator - Recebe todos os outros argumentos
//Obrigatoriamente deve ser o ultimo parâmetro
function funcao5(operador, acumulador, ...numeros){
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    console.log(acumulador);
}
funcao5('+', 1, 10, 20, 30);

//Rest Operator pode substituir o Arguments, pois de um tudo, recebe tudo que é enviado nos argumentos.
