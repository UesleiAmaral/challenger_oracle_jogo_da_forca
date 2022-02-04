const canvas = document.querySelector('.canvas');// CANVAS
const pincel = canvas.getContext('2d');// PINCEL DO CANVAS
const regex = new RegExp("^[A-Z\b]"); // LETRAS PERMITIDAS

// SELEÇÃO DOS ELEMENTOS HTML
const html_erro_Caractere = document.querySelector('.Msg_Erro');
const html_palavra_Sorteada = document.querySelector('.palavra_secreta');
const html_categoria_Sorteada = document.querySelector('.container_line_categoria');
const html_erro = document.querySelector('.letras_Erradas');
const html_input = document.querySelector('#letra_Digitada');


let lista_Errada = []; // LISTA DE LETRAS DIGITADAS ERRADA
let lista_Letras = []; // LISTA DE LETRAS PARA COMPARAR COM A PALAVRA
let file = ''; // RECEBE A LISTA DE PALAVRAS
let dados = ''; // LISTA DE PALAVRA CONVERTIDA EM OBJETO
let pos = ''; // POSIÇÃO DA LETRA NA PALAVRA
let palavra_Sorteada = ''; 
let categoria_Sorteada = ''; // CATEGORIA / DICA
let chances = 6;