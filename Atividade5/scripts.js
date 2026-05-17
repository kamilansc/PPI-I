function q(seletor){
    return document.querySelector(seletor);
}

document.querySelector('#botaoErro').addEventListener('click', () => {
    let msgOpcional = q('#msgErroOpcional').value;
    let seletor = '#mensagemErroPadrao'; 

    if (msgOpcional != ''){
        exibirErro(msgOpcional, seletor);
    }
    else{
        q(seletor).classList.remove('oculto');
        
        setTimeout(function () {
            q(seletor).classList.add('oculto');
        }, 3000)
    }
});

function exibirErro(msgErro, idSeletor){
    let seletor = q(idSeletor);
    seletor.innerText = msgErro;

    seletor.classList.remove('oculto');

    setTimeout(function () {
        seletor.classList.add('oculto');
    }, 3000)
}

var botaoExibir = q('#botaoExibir');
botaoExibir.addEventListener('click', exibirConteudo);

function exibirConteudo() {
    var caixaDeTexto = q('#caixaDeTexto').value;
    let conteudo = caixaDeTexto.trim();

    if (conteudo == ''){
        exibirErro('O campo não pode estar vazio. Preencha e tente novamente!', '#conteudo');
    }
}

var botaoCalcular = q('#calcularEngajamento');
botaoCalcular.addEventListener('click', calcularEngajamento)

function calcularEngajamento(){
    try {
        let seletorInteracao = q('#qtdInteracoes');
        let seletorVisualizacao = q('#qtdVisualizacoes');
        
        verificarSeENumero(seletorInteracao.value);
        verificarSeENumero(seletorVisualizacao.value);
        
        let qtdInteracao = Number(seletorInteracao.value);
        let qtdVisualizacao = Number(seletorVisualizacao.value);
    
        let txEngaja = (qtdInteracao/qtdVisualizacao)*100;
    
        let seletorResultado = q('#resultado');
        seletorResultado.innerText = txEngaja+'%';
    }
    catch (error) {
        exibirErro(error.message, '#erro');
    }
}

function verificarSeENumero(entrada) {
    if (entrada.trim() === "") {
        throw new Error("Preencha todos os campos!");
    }
    else if (isNaN(Number(entrada))) {
        throw new Error ("Entrada inválida. Tente novamente!");
    }
}

// Questão 4 
var botaoCarregarImg = q("#carregarImagem");
botaoCarregarImg.addEventListener('click', carregarImg);

function carregarImg(){
    var uploadImagem = q("#uploadImagem");
    var arquivoSelecionado = uploadImagem.files[0];
    const img = document.createElement("img");
    img.src = URL.createObjectURL(arquivoSelecionado);
    img.style.width = "30em";
    img.style.height = "20em";
    img.style.objectFit = "contain";

    let resultadoImg = q("#resultadoImg");
    if (resultadoImg.children.length >= 1) {
        resultadoImg.replaceChildren();
    }

    resultadoImg.appendChild(img);
}

// Questão 5
var seletor = q("#seletorImg");
seletor.addEventListener("change", exibirImg);

function exibirImg(){
    let caixaImg = q("#imgSelecionada");

    if (seletor.value === ""){
        caixaImg.alt = "";
        caixaImg.src = "";
        
        caixaImg.style.width = "auto";
        caixaImg.style.height = "auto";

        q(".container").style.display = "none";

        return;
    }
    caixaImg.src = seletor.value;

    if (caixaImg.src === "https://images.pexels.com/photos/32044011/pexels-photo-32044011.jpeg") {//link direto do pexel
        caixaImg.alt = "Fotografia de uma flor tulipa"; 
    }
    else if (caixaImg.src === "https://images.pexels.com/photos/37270618/pexels-photo-37270618.jpeg") { //link direto do pexel
        caixaImg.alt = "Fotografia de um bolo confeitado";
    }
    else if (caixaImg.src === "https://images.pexels.com/photos/37543997/pexels-photo-37543997.jpeg") { //link direto do pexel
        caixaImg.alt = "Fotografia de uma cachoeira";
    }

    caixaImg.style.width = "auto";
    caixaImg.style.height = "20em";
    caixaImg.style.objectFit = "contain";
    caixaImg.style.borderRadius = "15px";

    const container = q(".container");
    container.style.display = "flex";
    container.style.alignItems = "center";
    container.style.justifyContent = "center";
}