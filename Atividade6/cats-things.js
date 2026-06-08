function getById(ID) {
    return document.getElementById(ID);
}

const botaoResgatarFato = getById('botaoResgatarFato');
botaoResgatarFato.addEventListener('click', resgatarFato);

function resgatarFato(){
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
            const fato = json.fact;
            resultado.innerHTML = 
            `<p>${fato}</p>`;
        })
}