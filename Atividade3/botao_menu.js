const botao = document.getElementById("botao-menu");
const menu = document.getElementById("menu");

botao.addEventListener('click', () => {
    menu.classList.toggle("ativo");
})