// OBJETIVO 1 - quando o usuário clicar no botão de ver trailer, devemos abrir a modal com o video do trailer

// passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js
const botaoTrailer = document.querySelector(".botao-trailer")

// passo 3 - dar um jeito de pegar o elemento da modal no js
const modal = document.querySelector(".modal")

// passo 2 - dar um jeito de idetificar quando o usuário clicar no botão
botaoTrailer.addEventListener("click", () => {
    // passo 4 - abrir a modal na tela
    modal.classList.add("aberto")

    // OBJETIVO 2 passo 6 - colocar o video dentro da modal
    video.setAttribute("src", "https://www.youtube.com/embed/Cb4WV4aXBpk")
})

// OBJETIVO 2 - quando o usuário clicar no X devemos fechar a modal e parar o video

// passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js
const botaoFecharModal = document.querySelector(".fechar-modal")

// passo 4 - dar um jeito de pegar o elemento do video dentro da modal
const video = document.getElementById("video")

// passo 2 - dar um jeito de identificar quando o usuário clicar no X
botaoFecharModal.addEventListener("click", () => {
    // passo 3 - fechar a modal
    modal.classList.remove("aberto")

    // passo 5 - tirar o valor do src dentro do iframe que está o video
    video.setAttribute("src", "")
})