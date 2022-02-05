/* AS VARIAVEIS ESTÃO DECLARADAS EM " var.js "
O DESENHO ESTA EM " desenho.js " */

// OBTENDO O ARQUIVO DE PALAVRAS
let rawFile = new XMLHttpRequest();
rawFile.overrideMimeType("application/json");
rawFile.open("GET", '../palavras/lista_palavras.json', true);
rawFile.send();
rawFile.onload = function () {

    file = rawFile.response;
    dados = JSON.parse(file);

    sorteia_Palavra(dados);
}

desenha_Area_Forca();

function sorteia_Palavra() {

    html_palavra_Sorteada.innerHTML = '';
    pos = Math.round(Math.random() * dados.length);
    palavra_Sorteada = dados[pos].palavra.toUpperCase();
    categoria_Sorteada = dados[pos].categoria.toUpperCase();

    recebe_Letra(palavra_Sorteada);
    mostra_Palavra_Dica(palavra_Sorteada, categoria_Sorteada);

    console.log(palavra_Sorteada);

}
function mostra_Palavra_Dica() {

    html_categoria_Sorteada.innerHTML = "Dica: " + "[" + categoria_Sorteada + "] Com " + palavra_Sorteada.length + " Letras!";

    // palavra_Sorteada.innerHTML = palavra;

    for (let i = 0; i < palavra_Sorteada.length; i++) {

        if (lista_Letras[i] === undefined) {
            lista_Letras[i] = "&nbsp;";
            html_palavra_Sorteada.innerHTML = html_palavra_Sorteada.innerHTML + "<div class='Letra_secreta'>" + lista_Letras[i] + "</div>"
        }

        else {

            html_palavra_Sorteada.innerHTML = html_palavra_Sorteada.innerHTML + "<div class='Letra_secreta'>" + lista_Letras[i] + "</div>"
        }
    }

}
function recebe_Letra() {

    html_input.addEventListener('keydown', (event) => {

        let value = html_input.value;
        html_erro_Caractere.innerHTML = '';

        if (event.keyCode === 13) {
            if (caracteres(value) === value) {
                verifica_Letra(value);

            }
            else {
                console.log(caracteres(value));
                console.log('ELSE NAO IGUAL');
            }

            console.log('enter pressionado');
            html_input.value = '';
        }
    });
}

function verifica_Letra(value) {

    if (value.length > 1) {
        erro_Length-- //TOTAL DE ERRO ACEITO 1 MSG 0
        html_erro_Caractere.innerHTML = 'digite apenas uma letra se persistir sera contado como erro!';
        html_input.value = '';

        if (erro_Length === 0) {
            // compara_Desenho(chances);
            html_erro_Caractere.innerHTML = 'erro contado!'
        }
    }
    else {

        for (let i = 0; i < palavra_Sorteada.length; i++) {
            if (palavra_Sorteada[i].indexOf(value, palavra_Sorteada[i]) === 0) {

                console.log('existe na palavra');
                lista_Letras[i] = value;
                console.log(lista_Letras);

            } else {
                chances--;
                lista_Digitadas = value;
                // compara_Desenho(chances);
                console.log('nao existe na palavra');
            }
        }
    }
}

function caracteres(frase_teste) {

    if (!regex.test(frase_teste)) {

        return html_erro_Caractere.innerHTML = "CARACTERES ESPECIAIS, LETRAS MINUSCULAS E NUMEROS NÃO SÃO PERIMITIDOS!";

    } else {
        return frase_teste;

    }
}

function compara_Desenho() {

    if (chances == 6) {
        desenha_Cabeca();
    }
    else if (chances == 5) {
        desenha_Corpo();
    }
    else if (chances == 4) {
        desenha_Braco_Direito();
    }
    else if (chances == 3) {
        desenha_Braco_Esquerdo();
    }
    else if (chances == 2) {
        desenha_Perna_Direita();
    }
    else if (chances == 1) {
        desenha_Perna_Esquerda();
    }
    else {
        desenha_Boneco_Completo();
    }

}
