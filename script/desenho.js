function desenha_Boneco_Completo() {

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

    pincel.beginPath();
    pincel.moveTo(170, 10);
    pincel.lineWidth = 2;
    pincel.lineCap = 'round';
    pincel.lineTo(170, 20);
    pincel.stroke();

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

}

function desenha_Cabeca() {

    // CABEÇA
    pincel.beginPath();
    pincel.strokeStyle = "#000000";
    pincel.arc(170, 30, 10, 0, 2 * Math.PI);
    pincel.lineWidth = 1.5;
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

