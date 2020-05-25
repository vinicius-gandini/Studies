//Fetch é uma maneira de fazer requisições XMLHttpRequest, que já nos retorna uma Promise

//Evento para detectar ao clicar no link
document.addEventListener('click', e => {
    const elem = e.target;
    const tag = elem.tagName.toLowerCase();

    if (tag == 'a'){
        e.preventDefault();
        carregaPagina(elem);
    }
});

//Função que faz a requisição ao clicar em algum link
//Feita com async / await
async function carregaPagina(elem) {
    try {
        const href = elem.getAttribute('href');
        const response = await fetch(href);

        if(response.status !== 200) throw new Error('Meu erro');    //status 200 - código html para Sucesso

        const html = await response.text();
        exibeResultado(html)
    } catch(err) {
        console.log(err);
    }
}

//Exibe o conteúdo da página dentro da div, na página inicial
function exibeResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}