function desenha() {

    // AREA DA FORCA
    pincel.beginPath();
    pincel.moveTo(100, 120);
    pincel.lineWidth = 3;
    pincel.lineTo(100, 9);
    pincel.stroke();

    // 
    pincel.beginPath();
    pincel.moveTo(160, 10);
    pincel.lineWidth = 2;
    pincel.lineCap = 'round';
    pincel.lineTo(100, 10);
    pincel.stroke();

    // FORCA

    pincel.beginPath();
    pincel.moveTo(160, 10);
    pincel.lineWidth = 2;
    pincel.lineCap = 'round';
    pincel.lineTo(160, 20);
    pincel.stroke();

    // PISO DA FORCA
    pincel.beginPath();
    pincel.moveTo(290, 120);
    pincel.lineWidth = 2;
    pincel.lineCap = 'round';
    pincel.lineTo(10, 120);
    pincel.stroke();

    // CABEÇA
    pincel.beginPath();
    pincel.arc(160, 30, 10, 0, 2 * Math.PI);
    pincel.lineWidth = 2;
    pincel.stroke();


    // CORPO
    pincel.beginPath();
    // INICIO DO CORPO
    pincel.moveTo(160, 40);
    pincel.lineWidth = 3;
    // FIM DO CORPO
    pincel.lineTo(160, 80);
    pincel.stroke();

    // BRAÇOS DIREITO
    pincel.beginPath();
    // INICIO DO BRACO DIREITO
    pincel.moveTo(160, 40);
    pincel.lineWidth = 2;
    pincel.lineCap = 'round';
    // FIM DO BRACO DIREITO
    pincel.lineTo(180, 60);
    pincel.stroke();

    // BRAÇOS ESQUERDO
    pincel.beginPath();
    // INICIO DO BRACO ESQUERDO
    pincel.moveTo(160, 40);
    pincel.lineWidth = 2;
    pincel.lineCap = 'round';
    // FIM DO BRACO ESQUERDO
    pincel.lineTo(140, 60);
    pincel.stroke();

    // PERNA DIREITA
    pincel.beginPath();
    // INICIO DA PERNA DIREITA
    pincel.moveTo(160, 80);
    pincel.lineWidth = 2;
    pincel.lineCap = 'round';
    // FIM DO BRACO ESQUERDO
    pincel.lineTo(140, 100);
    pincel.stroke();

    // PERNA DIREITA
    pincel.beginPath();
    // INICIO DA PERNA DIREITA
    pincel.moveTo(160, 80);
    pincel.lineWidth = 2;
    pincel.lineCap = 'round';
    // FIM DO BRACO ESQUERDO
    pincel.lineTo(180, 100);
    pincel.stroke();

}

function desenha_Area_Forca() {

    // AREA DA FORCA
    pincel.beginPath();
    pincel.moveTo(100, 120);
    pincel.lineWidth = 3;
    pincel.lineTo(100, 9);
    pincel.stroke();

    // 
    pincel.beginPath();
    pincel.moveTo(160, 10);
    pincel.lineWidth = 2;
    pincel.lineCap = 'round';
    pincel.lineTo(100, 10);
    pincel.stroke();

    // FORCA

    pincel.beginPath();
    pincel.moveTo(160, 10);
    pincel.lineWidth = 2;
    pincel.lineCap = 'round';
    pincel.lineTo(160, 20);
    pincel.stroke();

    // PISO DA FORCA
    pincel.beginPath();
    pincel.moveTo(290, 120);
    pincel.lineWidth = 2;
    pincel.lineCap = 'round';
    pincel.lineTo(10, 120);
    pincel.stroke();

}

function desenha_Cabeca() {

    // CABEÇA
    pincel.beginPath();
    pincel.arc(160, 30, 10, 0, 2 * Math.PI);
    pincel.lineWidth = 2;
    pincel.stroke();

}

function desenha_Corpo() {

    // CORPO
    pincel.beginPath();
    // INICIO DO CORPO
    pincel.moveTo(160, 40);
    pincel.lineWidth = 3;
    // FIM DO CORPO
    pincel.lineTo(160, 80);
    pincel.stroke();

}

function desenha_Braco_Direito() {

    // BRAÇOS DIREITO
    pincel.beginPath();
    // INICIO DO BRACO DIREITO
    pincel.moveTo(160, 40);
    pincel.lineWidth = 2;
    pincel.lineCap = 'round';
    // FIM DO BRACO DIREITO
    pincel.lineTo(180, 60);
    pincel.stroke();

}

function desenha_Braco_Esquerdo() {

    // BRAÇOS ESQUERDO
    pincel.beginPath();
    // INICIO DO BRACO ESQUERDO
    pincel.moveTo(160, 40);
    pincel.lineWidth = 2;
    pincel.lineCap = 'round';
    // FIM DO BRACO ESQUERDO
    pincel.lineTo(140, 60);
    pincel.stroke();

}

function desenha_Perna_Esquerda() {

    // PERNA DIREITA
    pincel.beginPath();
    // INICIO DA PERNA DIREITA
    pincel.moveTo(160, 80);
    pincel.lineWidth = 2;
    pincel.lineCap = 'round';
    // FIM DO BRACO ESQUERDO
    pincel.lineTo(140, 100);
    pincel.stroke();

}

function desenha_Perna_Direita() {

    // PERNA DIREITA
    pincel.beginPath();
    // INICIO DA PERNA DIREITA
    pincel.moveTo(160, 80);
    pincel.lineWidth = 2;
    pincel.lineCap = 'round';
    // FIM DO BRACO ESQUERDO
    pincel.lineTo(180, 100);
    pincel.stroke();

}




/*    for (let i = 0; i < palavra.length; i++) {
        
        if (lista_Letras[i] === undefined) {
            lista_Letras[i] = "&nbsp;";
            palavra_Sorteada.innerHTML = palavra_Sorteada.innerHTML + "<div class='Letra_secreta'>"+lista_Letras[i]+"</div>"
        }
        
        else {
            
            palavra_Sorteada.innerHTML = palavra_Sorteada.innerHTML + "<div class='Letra_secreta'>"+lista_Letras[i]+"</div>"
        }
    }
 */