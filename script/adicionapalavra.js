
function adciona_Palavra(palavras) {

    const input = document.querySelector("#nova_palavra");
    const msg_addPalavra = document.querySelector(".msg_escolha");

    input.addEventListener("keyup", (event) => {

        event.preventDefault();
        let dados = input.value.toUpperCase();
        let nova_palavra = {
            "categoria": "Adicionada Na Home",
            "nome": ""
        };

        if (event.key === "Enter") {

            palavras.forEach((element) => {
                
                console.log(element.palavra.toUpperCase());

                if (dados === element.palavra.toUpperCase()) {
                    msg_addPalavra.innerHTML = 'A PALAVRA JA EXISTE!'

                } else {
                    msg_addPalavra.innerHTML = 'PALAVRA ADCIONADA!'
                    nova_palavra.nome = dados;
                    palavras[''] = nova_palavra;
                    
                }
                
            })
            
            // msg_addPalavra.innerHTML = '';
            console.log(palavras['']);
            input.value = '';

        }

    });

}