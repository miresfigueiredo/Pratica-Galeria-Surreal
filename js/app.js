const divImagemPrincipal = document.querySelector("#imagem-principal");
const imagemPrincipal = divImagemPrincipal.querySelector("img");
const textoAlternativo = divImagemPrincipal.querySelector(".texto-alternativo");
const btnProximo = divImagemPrincipal.querySelector(".proximo");
const btnAnterior = divImagemPrincipal.querySelector(".anterior");
const todasImagens = document.querySelectorAll("#imagens img");

let idImagemAtiva = 0;

const proximaImagem = function () {
    idImagemAtiva++;
    if (idImagemAtiva >= todasImagens.length) idImagemAtiva = 0;
    exibirImagemSelecionada();
};

const voltarImagem = function () {
    idImagemAtiva--;
    if (idImagemAtiva < 0) idImagemAtiva = todasImagens.length - 1;
    exibirImagemSelecionada();
};

const exibirImagemSelecionada = function () {
    const imagemSelecionada = todasImagens[idImagemAtiva];

    imagemPrincipal.src = imagemSelecionada.src;
    imagemPrincipal.alt = imagemSelecionada.alt;
    textoAlternativo.textContent = imagemSelecionada.alt;

    todasImagens.forEach(function (imagem) {
        imagem.classList.remove("selecionada");
    });

    imagemSelecionada.classList.add("selecionada");
};

btnProximo.addEventListener("click", proximaImagem);
btnAnterior.addEventListener("click", voltarImagem);

todasImagens.forEach(function (imagem, numeroImagem) {
    imagem.addEventListener("click", function () {
        idImagemAtiva = numeroImagem;
        exibirImagemSelecionada();
    });
});