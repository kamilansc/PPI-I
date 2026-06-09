function getByID(id) {
    return document.getElementById(id);
}

const botaoConsultar = getByID('botaoConsultar');
botaoConsultar.addEventListener('click', consultarPreco);

function consultarPreco() {
    
    const moedaBase = getByID('moedaBase').value.toUpperCase();
    const moedaConversao = getByID('moedaConversao').value.toUpperCase();
    let resultado = getByID('resultado');

    resultado.textContent= '';
    resultado.style.color = '';

    if (moedaBase === '' || moedaConversao === ''){
        resultado.style.color = 'red';
        resultado.textContent = 'Preencha todos os campos';
        return;
    }

    //implemente a chamada à fetch API
    const symbol = moedaBase + moedaConversao;
    const url = `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`;
    
    fetch (url)
        .then(async response => {
            if (!response.ok){
                const erro = await response.json();
                throw new Error(erro.msg);
            }

            return response.json();
        })
        .then (json => {
            const preco = Number(json.price).toLocaleString('pt-BR', {
                minimumFractionDigits: 2, 
                maximumFractionDigits: 2
            });

            resultado.innerHTML = 
            `<p>Moeda base: ${moedaBase}</p>
            <p>Valor em <strong>${moedaConversao}</strong>: ${preco}</p>`
        })
        .catch(error => {
            resultado.style.color = 'red';
            resultado.textContent = `Erro ao realizar conversão "${error.message}"`;
        })
}

const botaoLimparCampos = getByID('botaoLimparCampos');
botaoLimparCampos.addEventListener('click', limparCampos);

function limparCampos() {

    const campoMoedaBase = getByID('moedaBase');
    const campoMoedaConversao = getByID('moedaConversao');
    const campoResultado = getByID('resultado');
 
    campoMoedaBase.value = '';
    campoMoedaConversao.value = '';
    campoResultado.textContent = '';
    campoResultado.style.color = '';
}

const botaoInverterMoedas = getByID('botaoInverterMoedas');
botaoInverterMoedas.addEventListener('click', inverterMoedas);

function inverterMoedas() {
    const campoMoedaBase = getByID('moedaBase');
    const campoMoedaConversao = getByID('moedaConversao');

    const guardaMoedaBase = campoMoedaBase.value;

    campoMoedaBase.value = campoMoedaConversao.value;
    campoMoedaConversao.value = guardaMoedaBase;
}