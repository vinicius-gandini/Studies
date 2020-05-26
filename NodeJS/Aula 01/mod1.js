//const nome = 'Vinicius';
//const sobrenome = 'Gandini';
//
//const falaNome = () => nome + ' ' + sobrenome;
//
////module.exports.nome = nome;
////module.exports.sobrenome = sobrenome;
//
//exports.nome = nome;
//exports.sobrenome = sobrenome;
//exports.falaNome = falaNome;
//this.qualquercoisa = 'O que quiser exportar';
//console.log(module.exports);


//Em módulos nossos, a exportação é feita por nós mesmos(exports ou this)
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}
const nome = 'Vinicius';
const sobrenome = 'Gandini';

//sobrescrever o exports, podendo exportar vários métodos numa sintaxe menor
module.exports = {
    nome, sobrenome, Pessoa
};

//exports.Pessoa = Pessoa;