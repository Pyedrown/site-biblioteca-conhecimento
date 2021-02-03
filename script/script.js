var corpo = window.document.body;

var textoPostsDia = window.document.getElementsByTagName('h2')[0];

var botaoBranco = window.document.querySelector('div.white');

var botaoPreto = window.document.querySelector('div.black');

botaoBranco.addEventListener('click', mudarCorBranca);

botaoPreto.addEventListener('click', mudarCorPreta);

function mudarCorBranca() {
    corpo.style.background = 'white';
    textoPostsDia.style.color = 'black';
}

function mudarCorPreta() {
    corpo.style.background = '#1c1c1c';
    textoPostsDia.style.color = 'white';
}