const html_msg = document.querySelector('.msg');
const html_input = document.querySelector('#letra_Digitada');
const canvas_Front = document.querySelector(".canvas_front");
const pincel_Front = canvas_Front.getContext('2d');

const canvas = document.querySelector('.canvas');// CANVAS
const pincel = canvas.getContext('2d');// PINCEL DO CANVAS
const regex = new RegExp("^[A-Z]"); // LETRAS PERMITIDAS

// SELEÇÃO DOS ELEMENTOS HTML
const html_chances = document.querySelector('.mostra_Chances');
const html_Exibe_letras = document.querySelector(".Msg_Letra_digitadas");
const html_palavra_Sorteada = document.querySelector('.palavra_secreta');

const dados_P = [
    "CARTEIRA",
    "MOUSE",
    "NOTEBOOK",
    "BRASIL",
    "PARAGUAI",
    "BAHIA",
    "MONICA",
    "GULHERME",
    "MARIA",
    "CAVALO",
    "BORBOLETA",
    "PERERECA"
]

let palavra_Sorteada = '';
let lista_Letras = []; // LISTA DE LETRAS PARA COMPARAR COM A PALAVRA
let lista_Digitadas = []; // LISTA DE LETRAS DIGITADAS ERRADA
let chances = 6;
let erro_Length = 2;
let vitoria = true;

function game() {
    html_chances.innerHTML = "TENTATIVAS: " + "[ " + chances + " ]";
    desenha_Area_Forca();
    palavra_Sorteada = sorteia_Palavra();
    exibe_Palavra();
    recebe_Letra();
}

function sorteia_Palavra(){

    let pos = Math.round(Math.random()* dados_P.length);

    palavra_Sorteada = dados_P[pos];

    if(palavra_Sorteada === undefined){
        pos = Math.round(Math.random()* dados_P.length); // POSIÇÃO DA LETRA NA PALAVRA
        palavra_Sorteada = dados_P[pos];
    }

    return palavra_Sorteada;
}

function exibe_Palavra(){

    html_palavra_Sorteada.innerHTML = "";

    for (let i = 0; i < palavra_Sorteada.length; i++) {

        if (lista_Letras[i] === undefined) {
            lista_Letras[i] = "&nbsp;";
            html_palavra_Sorteada.innerHTML = html_palavra_Sorteada.innerHTML + "<div class='Letra_secreta'>" + lista_Letras[i] + "</div>"

        } else {
            html_palavra_Sorteada.innerHTML = html_palavra_Sorteada.innerHTML + "<div class='Letra_secreta'>" + lista_Letras[i] + "</div>"
        }
    }
}

function recebe_Letra() {

    html_input.addEventListener('keyup', (event) => {

        let value = html_input.value;
        html_msg.innerHTML = "";
        
        if (event.key === "Enter") {
            event.preventDefault();
            verifica_Letra(value);

            if (regex.test(value) === true) {

                exibe_Palavra();
            } else {
                html_msg.innerHTML = "CARACTERES ESPECIAIS, LETRAS MINUSCULAS E NUMEROS NÃO SÃO PERIMITIDOS!";
            }
            html_input.value = "";
        }
    });
}

function verifica_Letra(value) {

    if (chances > 1) {

        if (value.length > 1) {
            erro_Length-- //TOTAL DE ERRO ACEITO 1 MSG 0
            html_msg.innerHTML = 'DIGITE APENAS UMA LETRA, SE PERSISTIR SERÁ ERRO!';
            html_input.value = '';

            if (erro_Length === 0) {
                chances--;
                compara_Desenho();
                html_chances.innerHTML = "TENTATIVAS: " + chances;
                html_msg.innerHTML = 'ERRO CONTADO!'

            }
        }
        else if (palavra_Sorteada.indexOf(value, palavra_Sorteada) < 0) {
            chances--;
            compara_Desenho();
            html_chances.innerHTML = "TENTATIVAS: " + chances;
            lista_Digitadas += " [ " + value + " ] ";
            html_Exibe_letras.innerHTML = lista_Digitadas;

        }
        else {

            for (let i = 0; i < palavra_Sorteada.length; i++) {
                if (palavra_Sorteada[i].indexOf(value, palavra_Sorteada[i]) === 0) {
                    lista_Letras[i] = value;

                }if (palavra_Sorteada[i] != lista_Letras[i]) {
                    vitoria = false;

                }
            }if (vitoria === true) {
                html_msg.classList.toggle("msg_Ganhou");
                html_msg.innerHTML = "PARABÉNS VOCÊ VENCEU!";

            }
        }
    }else{
        chances = 0;
        html_chances.innerHTML = "TENTATIVAS: " + chances;
        compara_Desenho();
        html_msg.innerHTML= "QUE PENA TENTE NOVAMENTE! A PALAVRA ERA: " + palavra_Sorteada;
    }
}

function compara_Desenho() {

    if (chances == 5) {
        desenha_Cabeca();
    }
    else if (chances == 4) {
        desenha_Corpo();
    }
    else if (chances == 3) {
        desenha_Braco_Direito();
    }
    else if (chances == 2) {
        desenha_Braco_Esquerdo();
    }
    else if (chances == 1) {
        desenha_Perna_Direita();
    }
    else if (chances == 0) {
        desenha_Perna_Esquerda();
    }
    else {
        desenha_Boneco_Completo();
    }

}

function adciona_Palavra() {

    const input = document.querySelector("#nova_palavra");
    const msg_addPalavra = document.querySelector(".msg_escolha");

    input.addEventListener("keyup", (event) => {

        if (event.key === "Enter") {
            msg_addPalavra.innerHTML = 'PALAVRA ADCIONADA!'
            input.value = '';
        }
    });
}

game();
adciona_Palavra();
