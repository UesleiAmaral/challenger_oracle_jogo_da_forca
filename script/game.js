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
    // adciona_Palavra(dados);
}

html_chances.innerHTML = "TENTATIVAS: " + "[ " + chances + " ]";


function jogo() {
    chances = 6;
    erro_Length = 2
    lista_Digitadas = []
    lista_Letras = [];
    palavra_Sorteada = sorteia_Palavra();
    // CLEAR CANVAS
    desenha_Area_Forca();
    recebe_Letra();
    verifica_Letra();
}





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

    html_categoria_Sorteada.innerHTML = "DICA: " + "[ " + categoria_Sorteada + " ] COM " + palavra_Sorteada.length + " LETRAS!";

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
        console.log(value)
        if (event.key === "Enter") {
            event.preventDefault();
            verifica_Letra(value);

            if (regex.test(value) === true) {

                mostra_Palavra_Dica();
            } else {
                alert('CARACTERES NAO PERMITIDOS@')
                // html_msg.classList.toggle("msg_Ganhou");
                html_msg.innerHTML = "CARACTERES ESPECIAIS, LETRAS MINUSCULAS E NUMEROS NÃO SÃO PERIMITIDOS!";
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
            html_msg.innerHTML = 'digite apenas uma letra se persistir sera contado como erro!';
            html_input.value = '';

            if (erro_Length === 0) {
                chances--;
                compara_Desenho();
                html_chances.innerHTML = "TENTATIVAS: " + chances;
                html_msg.innerHTML = 'erro contado!'

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

                }
                if (palavra_Sorteada[i] != lista_Letras[i]) {
                    vitoria = false;

                }
            }

            if (vitoria === true) {
                html_msg.classList.toggle("msg_Ganhou");
                html_msg.innerHTML = "PARABÉNS VOCÊ VENCEU!";
                jogo();

            }
        }
    }


    else {
        chances = 0;
        html_chances.innerHTML = "TENTATIVAS: " + chances;
        compara_Desenho();
        html_msg.innerHTML = "QUE PENA TENTE NOVAMENTE!";
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

desenha_Area_Forca();
