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

    encontra_Letra(palavra_Sorteada);
    mostra_Palavra_Dica(palavra_Sorteada, categoria_Sorteada);

    console.log(dados.length);

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
function encontra_Letra() {

    html_input.addEventListener('keypress', (event) => {
        // event.preventDefault();
        let value = html_input.value;
        html_erro_Caractere.innerHTML = '';

        if (event.which === 13) {
            if (caracteres(value) === value) {
                console.log('IF e IGUAL');
                console.log(caracteres(value));

                for (let i = 0; i < palavra_Sorteada.length; i++) {

                    if (palavra_Sorteada[i].indexOf(value, palavra_Sorteada[i]) === 0) {


                        console.log('existe na palavra');
                    } else {
                        console.log('nao existe na palavra');

                    }
                }
            } else {
                console.log(caracteres(value));
                console.log('ELSE NAO IGUAL');
            };
            console.log('enter pressionado');
            html_input.value = '';
        }

        console.log(value);
    });
}

function caracteres(frase_teste) {

    if (!regex.test(frase_teste)) {

        return html_erro_Caractere.innerHTML = "CARACTERES ESPECIAIS, LETRAS MINUSCULAS E NUMEROS NÃO SÃO PERIMITIDOS!"
    }

    else {
        return frase_teste;

    }

}

function exibe_Erro(letra_Errada) {


    html_erro.innerHTML = letra_Errada;

}



/*
[] CRIAR UMA FUNCAO EM QUE ENCONTRE SE FOI DIGITADO PALAVRA COM ESPACO ENTRE NA OPCAO DE INSERIR PALAVRAS NOVAS. ACEITAR APENAS 1 PALAVRA POR VEZ.

[] CRIAR A LISTA DINAMICA

[] COMPARAR A LISTA DINAMICA COM O INPUT DO USUARIO CRIAR FUNCAO/// VAI RECEBER E COMPARAR, OS VALORES DE LISTA DINAMICA E IMPUT

*/