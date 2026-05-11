function q(seletor){
    return document.querySelector(seletor);
}

document.querySelector('#botaoErro').addEventListener('click', () => {
    let msgOpcional = q('#msgErroOpcional').value;
    let mensagemErroPadrao = q('#mensagemErroPadrao')
    mensagemErroPadrao.innerText = msgOpcional
   
    mensagemErroPadrao.classList.remove('oculto');
    // let errorMessage = document.querySelector('#mensagemErro');
    
    setTimeout(function() {
        mensagemErroPadrao.classList.add('oculto');
    }, 3000);
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