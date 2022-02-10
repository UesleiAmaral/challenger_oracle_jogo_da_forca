const card = document.querySelector("#flip");
const jogar = document.querySelector(".btn_jogar");
const sair = document.querySelector(".home");


jogar.addEventListener("click", (event) => {
    card.classList.toggle("flip");
});


sair.addEventListener("click", (event) => {
    card.classList.toggle("flip");
});