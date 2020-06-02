//Closure, a função fecha seu escopo léxico
function retornaFucnao() {
    const nome = 'Vinicus';
    return function() {
        return nome;
    }
}

const funcao = retornaFucnao();
console.log(funcao);
console.log(funcao());