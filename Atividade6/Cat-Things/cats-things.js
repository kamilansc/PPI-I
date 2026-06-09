function getById(ID) {
    return document.getElementById(ID);
}

document.addEventListener('DOMContentLoaded', carregarConteudo);

const botaoBuscarFato = getById('botaoBuscarFato');
botaoBuscarFato.addEventListener('click', carregarConteudo);


function buscarFato(){
    const resultado = getById('resultado');

    const url = 'https://catfact.ninja/fact';

    fetch(url)
        .then(async response => {
            if (!response.ok){
                const erro = await response.json()
                throw new Error(erro.message);
            }

            return response.json();
        })

        .then(json => {
            resultado.innerHTML = `<p>${json.fact}</p>`
        })

        .catch(error => {
            console.log(error.message);
        })
}

const botaoVerImg = getById('botaoImgRandom');
botaoVerImg.addEventListener('click', buscarImgAleat);

function buscarImgAleat() {
    const caixaImg = getById('randomImg');
    const url = 'https://api.thecatapi.com/v1/images/search';

    fetch(url)
        .then(async response => {
            if (!response.ok) {
                throw new Error ("Erro na resposta: ", response.status);
            }
            return response.json();
        })
        
        .then(json => {
            const imgUrl = json[0].url;
            caixaImg.src = imgUrl;
        })

        .catch(error => {
            console.log(error.message);
        })
}

function carregarConteudo() {
    buscarImgAleat();
    buscarFato()
}