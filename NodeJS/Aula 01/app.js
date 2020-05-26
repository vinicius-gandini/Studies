//const mod1 = require('./mod1');
//console.log(mod1.falaNome());

//const { nome, sobrenome, falaNome} = require('./mod1');
//console.log(falaNome());

const path = require('path');       //Módulos padrão não necessita do caminho, são padrões
const {Pessoa} = require('./mod1'); //Módulos criados necessitam do caminho
const mod1 = require('./mod1');

const p1 = new Pessoa('Vinicius');
console.log(mod1);
console.log(p1);