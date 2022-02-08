/* AS VARIAVEIS ESTÃO DECLARADAS EM " var.js "
O DESENHO ESTA EM " desenho.js " */

// OBTENDO O ARQUIVO DE PALAVRAS
let rawFile = new XMLHttpRequest();
rawFile.overrideMimeType("application/json");
rawFile.open("GET", 'https://uesleiamaral.github.io/challenger_oracle_jogo_da_forca/palavras/lista_palavras.json', true);
rawFile.send();
rawFile.onload = function () {

    file = rawFile.response;
    dados = JSON.parse(file);

    sorteia_Palavra(dados);
}
html_chances.innerHTML = "TENTATIVAS: " + "[ " + chances + " ]" ;
function sorteia_Palavra() {
    html_palavra_Sorteada.innerHTML = '';
    pos = Math.round(Math.random() * dados.length);
    palavra_Sorteada = dados[pos].palavra.toUpperCase();
    categoria_Sorteada = dados[pos].categoria.toUpperCase();

    recebe_Letra();
    mostra_Palavra_Dica();

    console.log(palavra_Sorteada);
}

// desenha_Area_Forca();

function mostra_Palavra_Dica() {

    html_categoria_Sorteada.innerHTML = "Dica: " + "[" + categoria_Sorteada + "] Com " + palavra_Sorteada.length + " Letras!";

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
        html_erro_Caractere.innerHTML = "";
        console.log(value)
        if (event.key === "Enter") {
            verifica_Letra(value);

            if (regex.test(value) === true) {

                mostra_Palavra_Dica();
            } else {

                html_erro_Caractere.innerHTML = "CARACTERES ESPECIAIS, LETRAS MINUSCULAS E NUMEROS NÃO SÃO PERIMITIDOS!";
            }
            html_input.value = "";
        }

    });
}

function verifica_Letra(value) {

    let vitoria = true;


    if (chances > 1) {

        if (value.length > 1) {
            erro_Length-- //TOTAL DE ERRO ACEITO 1 MSG 0
            html_erro_Caractere.innerHTML = 'digite apenas uma letra se persistir sera contado como erro!';
            html_input.value = '';

            if (erro_Length === 0) {
                chances--;
                compara_Desenho();
                html_chances.innerHTML = "TENTATIVAS: " + chances;
                html_erro_Caractere.innerHTML = 'erro contado!'

            }
        }
        else if (palavra_Sorteada.indexOf(value, palavra_Sorteada) < 0) {
            chances--;
            compara_Desenho();
            html_chances.innerHTML = "TENTATIVAS: " + chances;
            lista_Digitadas += " " + value;
            html_Exibe_letras.innerHTML = lista_Digitadas;

        }
        else {

            for (let i = 0; i < palavra_Sorteada.length; i++) {
                if (palavra_Sorteada[i].indexOf(value, palavra_Sorteada[i]) === 0) {
                    lista_Letras[i] = value;

                }
                if (palavra_Sorteada[i] != lista_Letras[i]) {
                    vitoria = false;

                }
            }

            if (vitoria === true) {
                html_msg.innerHTML = "VENCEU";
                // html_input = Disable;

            }
        }
    }
    

    else {
        chances = 0;
        html_chances.innerHTML = "TENTATIVAS: " + chances;
        compara_Desenho();
        html_msg.innerHTML = "PERDEU";
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




// LINHA DE BAIXO
pincel.beginPath();
pincel.moveTo(260, 100);
pincel.lineWidth = 2;
pincel.lineCap = 'round';
pincel.strokeStyle = "	#CD853F";

pincel.lineTo(40, 100);
pincel.stroke();

pincel.beginPath();
pincel.moveTo(180, 10);
pincel.lineWidth = 2;
pincel.lineCap = 'round';
pincel.lineTo(100, 10);
pincel.stroke();



pincel.beginPath();
pincel.moveTo(140, 10);
pincel.lineWidth = 2;
pincel.lineCap = 'round';
pincel.lineTo(110, 30);
pincel.stroke();

// desenha_Area_Forca();
//  CORDA
let lineTo = 175;
function corda() {
    pincel.beginPath();
    pincel.moveTo(170, 10);
    pincel.lineWidth = 2;
    pincel.lineCap = 'round';
    pincel.lineTo(lineTo, 20);
    pincel.stroke();


    // clear_Canvas();
}
function balanca_corda() {
    clear_Canvas();
    corda();
    if (lineTo === 175) {
        lineTo -= 10;
    }  else if (lineTo === 165) {
        lineTo += 10;
    }
    
}

// desenha_Cabeca();
// corda();

setInterval(balanca_corda,800 );

// RETANGULO
pincel.beginPath();
pincel.fillStyle = "	#CD853F";

pincel.rect(10, 134, 280, 10);
pincel.lineWidth = 2;
pincel.stroke();

// LINHA LATERAL PISO DIREITA
pincel.beginPath();
pincel.moveTo(290, 134);
pincel.lineWidth = 2;
pincel.lineCap = 'round';
pincel.lineTo(260, 100);
pincel.stroke();



// LINHA LATERAL PISO ESQUERA
pincel.beginPath();
pincel.moveTo(10, 134);
pincel.lineWidth = 2;
pincel.lineCap = 'round';
pincel.lineTo(40, 100);
pincel.stroke();

// LINHAS DO PISO
pincel.beginPath();
pincel.moveTo(30, 134);
pincel.lineWidth = 2;
pincel.lineCap = 'round';
pincel.lineTo(60, 100);
pincel.stroke();

pincel.beginPath();
pincel.moveTo(50, 134);
pincel.lineWidth = 2;
pincel.lineCap = 'round';
pincel.lineTo(76, 100);
pincel.stroke();

pincel.beginPath();
pincel.moveTo(70, 134);
pincel.lineWidth = 2;
pincel.lineCap = 'round';
pincel.lineTo(90, 100);
pincel.stroke();

pincel.beginPath();
pincel.moveTo(90, 134);
pincel.lineWidth = 2;
pincel.lineCap = 'round';
pincel.lineTo(106, 100);
pincel.stroke();

pincel.beginPath();
pincel.moveTo(106, 134);
pincel.lineWidth = 2;
pincel.lineCap = 'round';
pincel.lineTo(120, 100);
pincel.stroke();

pincel.beginPath();
pincel.moveTo(126, 134);
pincel.lineWidth = 2;
pincel.lineCap = 'round';
pincel.lineTo(136, 100);
pincel.stroke();

pincel.beginPath();
pincel.moveTo(150, 134);
pincel.lineWidth = 2;
pincel.lineCap = 'round';
pincel.lineTo(160, 100);
pincel.stroke();

pincel.beginPath();
pincel.moveTo(170, 134);
pincel.lineWidth = 2;
pincel.lineCap = 'round';
pincel.lineTo(180, 100);
pincel.stroke();

pincel.beginPath();
pincel.moveTo(190, 134);
pincel.lineWidth = 2;
pincel.lineCap = 'round';
pincel.lineTo(200, 100);
pincel.stroke();

pincel.beginPath();
pincel.moveTo(210, 134);
pincel.lineWidth = 2;
pincel.lineCap = 'round';
pincel.lineTo(220, 100);
pincel.stroke();

pincel.beginPath();
pincel.moveTo(230, 134);
pincel.lineWidth = 2;
pincel.lineCap = 'round';
pincel.lineTo(240, 100);
pincel.stroke();

pincel.beginPath();
pincel.moveTo(250, 134);
pincel.lineWidth = 2;
pincel.lineCap = 'round';
pincel.lineTo(260, 100);
pincel.stroke();

pincel.beginPath();
pincel.moveTo(270, 134);
pincel.lineWidth = 2;
pincel.lineCap = 'round';
pincel.lineTo(274, 116);
pincel.stroke();

//AREA FORCA

pincel.beginPath();
pincel.fillStyle = "	#CD853F";
pincel.fillRect(100, 10, 10, 110);
pincel.lineWidth = 2;
pincel.stroke();

function clear_Canvas() {
    pincel.clearRect(160, 11, 21,10);
}