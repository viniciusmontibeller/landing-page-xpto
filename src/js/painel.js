/*
    Pensamos no problema e quebrar ele em partes menores

quando clicar na seta para avançar temos que esconder todas as imagens e mostrar a próxima imagem
    imagem atual comeca em 0 (relacionado ao array) tambem é a primeira
    após clicar no avançar devemos adicionar +1 no contador para poder saber qual imagem mostrar em seguida

    esconder todas as imagens
        pegar todas as imagens usando o DOM e remover a classe mostrar
    
        mostrar a proxima imagem
            pegar todas as imagens, descobrir qual é a proxima, e colocar a classe mostrar nela
*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0; /* usado como um contador para navegar no array*/

function esconderImagens (){
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar') /* remove de todas as imagens a classe mostrar*/
    })
}

function mostrarImagem(){
    imagensPainel[imagemAtual].classList.add('mostrar')
}

setaAvancar.addEventListener('click', function(){

    //testa se o contador da imagemAtual é igual ao total de imagens
    if(imagemAtual === imagensPainel.length - 1){
        return;
    }

    imagemAtual++;
    
    esconderImagens();
    mostrarImagem();
})

setaVoltar.addEventListener('click', function(){
    if(imagemAtual === 0){
        return;
    }

    imagemAtual--

    esconderImagens();
    mostrarImagem();
})