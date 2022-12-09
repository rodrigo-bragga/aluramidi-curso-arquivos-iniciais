
function tocarSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaTeclas = document.querySelectorAll('.tecla');

listaTeclas.forEach(element => {   
    element.onclick = () => {
        tocarSom(`#som_${element.classList[1]}`)
    }
});
