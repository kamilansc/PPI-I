// function getById(id) {
//     return document.getElementById(id);
// }

// getById('botao1').addEventListener('click', () => {
//     let p1 = getById('p1');
//     let resultado1 = getById('resultado1');
//     resultado1.innerText = p1.innerHTML + "- ADS 3";
// })

// let texto2 = getById('texto2');

// array.forEach(element => {
    
// });

function getById(id) {
    return document.getElementById(id);
}

getById('mostrar-msg').addEventListener('click', () => {
    let msg_botao = getById('msg-botao');
    let titulo = getById('titulo');
    msg_botao.innerHTML = "<h2>" + titulo.innerText + "</h2>";
})

getById('alterar-h3').addEventListener('mouseenter', () => {
    let h3_info = document.getElementsByTagName('h3')[0];
    h3_info.innerText = "Ah lula";
});

getById('alterar-h3').addEventListener('mouseleave', () => {
    let h3 = document.getElementsByTagName('h3')[0];
    h3.innerText = "";
})

getById('ativar-contagem').addEventListener('click', () => {
    let qtd_itens_div = getById('qtd-itens-div');
    let qtd_paragrafos = getById('div-principal').getElementsByTagName('p').length;
    qtd_itens_div.innerText = `Quantidade de parágrafos: ${qtd_paragrafos}`;
})

var botao = document.getElementById("botao");
botao.addEventListener("click", function() {
    let paragrafo = document.getElementById("paragrafo");
    paragrafo.innerText = "O texto deste parágrafo foi alterado!";
})

function clear(id){
    let paragrafo = getById(id);
    paragrafo.innerText = "";
}

var botao_limpar = getById("botao-limpar");
botao_limpar.addEventListener("click", function() {
    clear("paragrafo");
})

function gerar_num_cor_aleatorio(){
    let valor_cor = Math.floor(Math.random()*256);
    return valor_cor;
}

function cor_aleatoria(){
    let nivel_red = gerar_num_cor_aleatorio();
    let nivel_green = gerar_num_cor_aleatorio();
    let nivel_blue = gerar_num_cor_aleatorio();
    document.body.style.backgroundColor = `rgb(${nivel_red}, ${nivel_green}, ${nivel_blue})`;
}
var botao_mudar_cor = getById("botao-mudar-cor");
botao_mudar_cor.addEventListener("click", function() {
    cor_aleatoria();
})

var botao_mudar_tam_fonte = getById("to-upper");
botao_mudar_tam_fonte.addEventListener("click", function(){
    var caixa_alta = getById("texto-caixa-alta");
    var normal = getById("texto-normal");

    caixa_alta.textContent = normal.textContent.toUpperCase(); 
})

var botao_modo_escuro = getById("modo-escuro");
botao_modo_escuro.addEventListener("click", function(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
})

var botao_modo_normal = getById("modo-normal");
botao_modo_normal.addEventListener("click", function(){
    document.body.style.backgroundColor = "";
    document.body.style.color = "";
})

var botao_aumentar_fonte = getById("aumentar-fonte");
botao_aumentar_fonte.addEventListener("click", function() {
    let tamanho = window.getComputedStyle(document.body).fontSize;
    tamanho = parseFloat(tamanho)+2;
    document.body.style.fontSize = tamanho+"px";
 })

var botao_diminuir_fonte = getById("diminuir-fonte");
botao_diminuir_fonte.addEventListener("click", function() {
    let tamanho = window.getComputedStyle(document.body).fontSize;
    tamanho = parseFloat(tamanho)-2;
    document.body.style.fontSize = tamanho+"px";
 })

var botao_calcular = getById("calcular");
var resultado = getById("resultado");
botao_calcular.addEventListener("click", function(){
    let valor1 = parseFloat(getById("operador1").value);
    let valor2 = parseFloat(getById("operador2").value);

    let operacao = document.querySelector('input[name="operacao"]:checked');
    if (!operacao){
        resultado.innerText = `Resultado = Selecione uma operação!!`;
    }
    if (operacao.value == "adicao") {
        resultado.textContent = `Resultado = ${valor1 + valor2}`
    }
    if (operacao.value == "subtracao") {
        resultado.textContent = `Resultado = ${valor1 - valor2}`
    }
    if (operacao.value == "divisao") {
        resultado.textContent = `Resultado = ${valor1 / valor2}`
    }
    if (operacao.value == "multiplicacao") {
        resultado.textContent = `Resultado = ${valor1 * valor2}`
    }
})

var botao_adicionar_li = getById("adicionar-li")