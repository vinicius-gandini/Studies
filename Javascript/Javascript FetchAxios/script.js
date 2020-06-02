//axios é um método mais fácil de obter dados
//Com fetch, é necessário dizer o tipo de arquivo que está sendo solicitado (json, etc...)

//fetch('pessoas.json')
//.then(resposta => resposta.json())
//.then(json => carregaElemento(json));

axios('pessoas.json')
.then(resposta => carregaElemento(resposta.data))

//FUnção para carregar o arquivo e jogá-lo em uma tabela, exibindo após no index.html
function carregaElemento(json) {
    const table = document.createElement('table');
    for (let pessoa of json){
        const tr = document.createElement('tr');
        let td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);
        
        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.salario;
        tr.appendChild(td);

        table.appendChild(tr);
    }
    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);

}