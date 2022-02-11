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

const canvas_Front = document.querySelector(".canvas_front");
const pincel_Front = canvas_Front.getContext('2d');

const canvas = document.querySelector('.canvas');// CANVAS
const pincel = canvas.getContext('2d');// PINCEL DO CANVAS
const regex = new RegExp("^[A-Z]"); // LETRAS PERMITIDAS

// SELEÇÃO DOS ELEMENTOS HTML
const html_palavra_Sorteada = document.querySelector('.palavra_secreta');
const html_msg = document.querySelector('.msg');
const html_input = document.querySelector('#letra_Digitada');
const html_chances = document.querySelector('.mostra_Chances');
const html_Exibe_letras = document.querySelector(".Msg_Letra_digitadas");




let lista_Digitadas = []; // LISTA DE LETRAS DIGITADAS ERRADA
let lista_Letras = []; // LISTA DE LETRAS PARA COMPARAR COM A PALAVRA
let pos = ''; // POSIÇÃO DA LETRA NA PALAVRA
let palavra_Sorteada = '';
let chances = 6;
let erro_Length = 2;
