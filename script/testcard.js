const card = document.querySelector("#flip");
const jogar = document.querySelector(".jogar");
const sair = document.querySelector(".sair");
jogar.addEventListener("click", (event) => {
    card.classList.toggle("flip");
});

sair.addEventListener("click", (event) => {
    card.classList.toggle("flip");
});