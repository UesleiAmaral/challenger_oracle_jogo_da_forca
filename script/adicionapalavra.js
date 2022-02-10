let palavra = {

    categoria: "",
    nome: "ola"

}

const visible_name = document.querySelectorAll('.nome');

const text_area = document.querySelector("#nova_palavra");

const add_palavra = document.querySelector(".add_palavra");

const aviso = document.querySelector('.enter');

const scales = document.querySelectorAll("#scales");


add_palavra.addEventListener("click", (event) => {

    event.preventDefault();

    for (let i = 0; i < visible_name.length; i++) {

        visible_name[i].classList.remove("visible");
    }
    aviso.classList.remove("visible");
    text_area.classList.remove("visible");

});

