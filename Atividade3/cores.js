let inputCorTexto = document.getElementById('cor-texto');
let inputCorFundo = document.getElementById('cor-fundo');

inputCorTexto.addEventListener('input', () => {
    let cor = inputCorTexto.value;
    document.documentElement.style.setProperty('--cor-texto', cor);
    console.log("Mudou a cor do texto");
});

inputCorFundo.addEventListener('input', () => {
    let cor = inputCorFundo.value;
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = cor;
    console.log("Mudou a cor do fundo");
});