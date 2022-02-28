const reiniciar = document.querySelector(".reiniciar");
const jogar = document.querySelector(".btn_jogar");
const sair = document.querySelector(".home");

reiniciar.addEventListener("click", () => {
    location.reload();

});

// ANIMACAO DO TITULO
var string = "JOGO DA FORCA!";
var array = string.split("");
var timer;

function frameLooper() {
    if (array.length > 0) {
        document.getElementById("text").innerHTML += array.shift();
    } else {
        clearTimeout(timer);
    }
    loopTimer = setTimeout('frameLooper()', 200);
}
frameLooper();
