const canvas = document.querySelector('.canvas');
const pincel = canvas.getContext('2d');
const regex = new RegExp("^[A-Z\b]");
const erro_Caractere = document.querySelector('.Msg_Erro');
let = lista_Letras = [];
function palavraSecreta() {

    // LENDO A LISTA DE PALAVRAS DO JSON
    readTextFile("./palavras/lista_palavras.json", function (text) {
        // DADOS RECEBIDO DO JSON
        const dados = JSON.parse(text);

        // VARIAVEL DE SORTEIO DA PALAVRA
        const palavraSec = Math.round(Math.random() * dados.length);

        // ATRIBUINDO O VALOR DA PALAVRA E CATEGORIA ENCONTRADA
        const palavra_Sorteada = dados[palavraSec].nome.toUpperCase();
        const categoria_Sorteada = dados[palavraSec].categoria.toUpperCase();
        encontra_Letra(palavra_Sorteada);
        mostra_Palavra_Dica(palavra_Sorteada, categoria_Sorteada);
    });
}
palavraSecreta();



desenha_Area_Forca();


function mostra_Palavra_Dica(palavra, dica) {

    const categoria_Sorteada = document.querySelector('.container_line_categoria');
    categoria_Sorteada.innerHTML = "Dica: " + "[" + dica + "] Com " + palavra.length + " Letras!";

    const palavra_Sorteada = document.querySelector('.palavra_secreta');
    // palavra_Sorteada.innerHTML = palavra;

    for (let i = 0; i < palavra.length; i++) {

        if (lista_Letras[i] === undefined) {
            lista_Letras[i] = "&nbsp;";
            palavra_Sorteada.innerHTML = palavra_Sorteada.innerHTML + "<div class='Letra_secreta'>" + lista_Letras[i] + "</div>"
        }

        else {

            palavra_Sorteada.innerHTML = palavra_Sorteada.innerHTML + "<div class='Letra_secreta'>" + lista_Letras[i] + "</div>"
        }
    }

}
function readTextFile(file, callback) {
    // FUNCAO PARA A LEITURA DO JSON
    let rawFile = new XMLHttpRequest();

    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);

    // STATUS DA RESPOSTA DE LEITURA
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function encontra_Letra(palavra_Sorteada) {
    const input = document.querySelector('#letra_Digitada');

    console.log(palavra_Sorteada);

    input.addEventListener('keypress', (event) => {
        // event.preventDefault();
        let value = input.value;
        erro_Caractere.innerHTML = '';

        if (event.which === 13) {
            if (caracteres(value) === value) {
                console.log('IF e IGUAL');
                console.log(caracteres(value));

                for (let i = 0; i < palavra_Sorteada.length; i++) {

                    if (palavra_Sorteada[i].indexOf(input.value, palavra_Sorteada[i]) === 0) {
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
            input.value = '';
        }

        console.log(value);
    });

}


function caracteres(frase_teste) {

    if (!regex.test(frase_teste)) {

        return erro_Caractere.innerHTML = "CARACTERES ESPECIAIS, LETRAS MINUSCULAS E NUMEROS NÃO SÃO PERIMITIDOS!"
    }

    else {
        return frase_teste;

    }

}

function exibe_Erro(letra_Errada) {

    const erro = document.querySelector('.letras_Erradas');

    erro.innerHTML = letra_Errada;

}



/*
[] CRIAR UMA FUNCAO EM QUE ENCONTRE SE FOI DIGITADO PALAVRA COM ESPACO ENTRE NA OPCAO DE INSERIR PALAVRAS NOVAS. ACEITAR APENAS 1 PALAVRA POR VEZ.

[] CRIAR A LISTA DINAMICA

[] COMPARAR A LISTA DINAMICA COM O INPUT DO USUARIO CRIAR FUNCAO/// VAI RECEBER E COMPARAR, OS VALORES DE LISTA DINAMICA E IMPUT

*/
