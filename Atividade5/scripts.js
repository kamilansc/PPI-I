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
    exibirErro(conteudo, "#conteudo");
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

    caixaImg.style.opacity = 0;

    if (seletor.value === ""){
        caixaImg.alt = "";
        
        setTimeout(() => {
            caixaImg.src = "";

            caixaImg.style.width = "auto";
            caixaImg.style.height = "auto";

            q(".container").style.display = "none";
        }, 400);

        return;
    }

    setTimeout(() => {
        caixaImg.src = seletor.value;
        caixaImg.style.opacity = 1;
    }, 400);

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

// Questão 6
const enviarEscolhas = q("#enviarEscolhas");
enviarEscolhas.addEventListener("click", exibirRedesFav);

function exibirRedesFav(){
    const redesSelecionadas = q("#redesSelecionadas");
    redesSelecionadas.innerText = "";

    redes = document.getElementsByName("redesSociais");
    let redesEscolhidas = [];
    for (let r = 0; r < redes.length; r++){
        let selecionado = redes[r];

        if (selecionado.checked == true){
            redesEscolhidas.push(selecionado.value);
        }
    }

    if (redesEscolhidas.length === 0){
        exibirErro("Selecione pelo menos uma rede social! Tente novamente.", "#mensagemErro");
        return;
    }

    redesSelecionadas.innerText = `Suas redes sociais favoritas: ${redesEscolhidas.join(", ")}`
}

const btnLimparSelecao = q("#limparSelecao");
btnLimparSelecao.addEventListener("click", limparSelecao);

function limparSelecao(){
    const redes = document.getElementsByName("redesSociais");
    for (let opcao = 0; opcao < redes.length; opcao++){
        redes[opcao].checked = false;
    }
}

// Questão 7
const btnAddHash = q("#addHash");
btnAddHash.addEventListener("click", addHash);

function addHash(){
    const hashes = document.querySelectorAll(".hash");
    let hash = q("#obterHash").value;

    const index = hash.indexOf("#");
    if (index === -1 || index != 0){
        hash = "#" + hash;
    }

    if (eRepetida(hash, hashes) === true){
        alert("Essa hashtag já existe na lista. Digite uma hash distinta.");
        return;
    };

    if (eVazia(hash) === true){
        alert("Hashtags sem conteúdo não são permitidos. Tente novamente!");
        return;
    }

    if (hash.substring(1).length < 2){ // a propriedade substring pega a string a partir do indice indicado
        alert("Sua hashtag deve ter, PELO MENOS, 2 CARACTERES. Tente novamente!");
        return;
    }

    if (hashes.length === 5){
        alert("O limite de 5 hashtags foi atingido. Não é posssível adicionar mais hashtags.");
        return;
    }

    const novoCampo = document.createElement("option");
    novoCampo.className = "hash";
    novoCampo.innerText = hash;

    q("#listaHash").appendChild(novoCampo);
}

// Questão 8a
function eRepetida(novaHash, hashes){
    for (let Indhash = 0; Indhash < hashes.length; Indhash++) {
        if (novaHash === hashes[Indhash].innerText){
            return true;
        }
    }
    return false;
}

// Questão 8b
function eVazia(novaHash){
    return (novaHash.length === 1 && novaHash[0] === '#');
}

// Questão 9
const btnDelHash = q('#delHash');
btnDelHash.addEventListener('click', delHash);

function delHash(){
    const listaHash = q('#listaHash');
    const opcaoSel = listaHash.selectedOptions
    for (let i = 0; i < opcaoSel.length; i++){
        listaHash.removeChild(opcaoSel[i]);
    }
}

// Questão 10
const btnMoverParaDireita = q('#moverParaDireitaBtn');
btnMoverParaDireita.addEventListener('click', moverParaDireita);

function moverParaDireita(){
    const ativosDisp = q('#ativosDisponiveis');
    const carteira = q('#carteiraInvestimentos');

    const ativosSel = ativosDisp.selectedOptions;

    
    if (ativosSel.length === 0) {
        alert('Selecione pelo menos um ativo financeiro.');
        return;
    }
    
    
    for (let i = ativosSel.length - 1; i >= 0; i--){
        carteira.appendChild(ativosSel[i]);
    }
    
    if (ativosDisp.length === 0) {
        btnMoverParaDireita.disabled = true;
    }
    btnMoverParaEsquerda.disabled = false;
}

const btnMoverParaEsquerda = q('#moverParaEsquerdaBtn');
btnMoverParaEsquerda.addEventListener('click', moverParaEsquerda);

function moverParaEsquerda(){
    const carteira = q('#carteiraInvestimentos');
    const ativosDisp = q('#ativosDisponiveis');

    const carteiraSel = carteira.selectedOptions;


    if (carteiraSel.length === 0) {
        alert('Selecione pelo menos um ativo finaceiro.');
        return;
    }

    for (let i = carteiraSel.length - 1; i >= 0; i--){
        ativosDisp.appendChild(carteiraSel[i]);
    }

    if (carteira.length === 0) {
        btnMoverParaEsquerda.disabled = true;
    }
    btnMoverParaDireita.disabled = false;
}

document.addEventListener('click', (event) => {
    const select = q('#ativosDisponiveis');

    if(!select.contains(event.target)){
        select.selectedIndex = -1;
    }
})

document.addEventListener('click', (event) => {
    const select = q('#carteiraInvestimentos');

    if(!select.contains(event.target)){
        select.selectedIndex = -1;
    }
})