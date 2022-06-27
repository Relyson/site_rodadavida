var quadro = 0; // Controla as perguntas 

// Função é acionada ao clinar no botão
// Função recebe os dados dos inputs e faz o calcula da média
// chama a função que desenha e imprimi na tela as peguntas
 function vr() {

            // input que recebe os dados
            var pertunta1 = document.querySelector("#per1").value;
            var pertunta2 = document.querySelector("#per2").value;
            var pertunta3 = document.querySelector("#per3").value;
            var pertunta4 = document.querySelector("#per4").value;
            var pertunta5 = document.querySelector("#per5").value;

            // Adiciona o valor 0 se não houver valor de entrada
            if(pertunta1 == '') {pertunta1 = 0};
            if(pertunta2 == '') {pertunta2 = 0};
            if(pertunta3 == '') {pertunta3 = 0};
            if(pertunta4 == '') {pertunta4 = 0};
            if(pertunta5 == '') {pertunta5 = 0};

            // Soma os valores obtinos nos inputs
           let somaValores =  parseInt(pertunta1) + parseInt(pertunta2) + parseInt(pertunta3) + parseInt(pertunta4) + parseInt(pertunta5);
           var valorRaio = (somaValores / 5) * 14.7; // Faz o calculo da média

           if(quadro == 0){ // Quadro de Perguntas Nº 1
                drawFatia(valorRaio, 1.0, 1.166, 'rgba(210, 105, 30, 0.5)'); // OK
                document.getElementById('tituloPergunta').innerHTML = 'Título da pergunta 2'; // Título pergunta 2
                document.getElementById('textoPergunta1').innerHTML = 'Fale sobre suas emoções';
                document.getElementById('textoPergunta2').innerHTML = 'Fale sobre suas emoções';
                document.getElementById('textoPergunta3').innerHTML = 'Fale sobre suas emoções';
                document.getElementById('textoPergunta4').innerHTML = 'Fale sobre suas emoções';
                document.getElementById('textoPergunta5').innerHTML = 'Fale sobre suas emoções';
                quadro++;
           } 
           else if(quadro == 1){// Quadro de Perguntas Nº 2
                drawFatia(valorRaio, 1.166, 1.333, 'rgba(160, 82, 45, 0.5)'); // OK
                document.getElementById('tituloPergunta').innerHTML = 'Título da pergunta 3'; // Título pergunta 3
                document.getElementById('textoPergunta1').innerHTML = 'Sua vida INTELECTUAL';
                document.getElementById('textoPergunta2').innerHTML = 'Sua vida INTELECTUAL';
                document.getElementById('textoPergunta3').innerHTML = 'Sua vida INTELECTUAL';
                document.getElementById('textoPergunta4').innerHTML = 'Sua vida INTELECTUAL';
                document.getElementById('textoPergunta5').innerHTML = 'Sua vida INTELECTUAL';
                quadro++;
           } 
           else if(quadro == 2){ // Quadro de Perguntas Nº 3
                drawFatia(valorRaio, 1.333, 1.4995, 'rgba(178, 34, 34, 0.5)'); // OK
                document.getElementById('tituloPergunta').innerHTML = 'Título da pergunta 4'; // Título pergunta 4
                document.getElementById('textoPergunta1').innerHTML = 'Fale sobre suas Família';
                document.getElementById('textoPergunta2').innerHTML = 'Fale sobre suas Família';
                document.getElementById('textoPergunta3').innerHTML = 'Fale sobre suas Família';
                document.getElementById('textoPergunta4').innerHTML = 'Fale sobre suas Família';
                document.getElementById('textoPergunta5').innerHTML = 'Fale sobre suas Família';
                quadro++;
           } 
           else if(quadro == 3){ // Quadro de Perguntas Nº 4
                drawFatia(valorRaio, 1.4995, 1.666, 'rgba(199, 21, 133, 0.5)'); // 0K
                document.getElementById('tituloPergunta').innerHTML = 'Título da pergunta 5'; // Título pergunta 5
                document.getElementById('textoPergunta1').innerHTML = 'Fale sobre suas Família';
                document.getElementById('textoPergunta2').innerHTML = 'Fale sobre suas Família';
                document.getElementById('textoPergunta3').innerHTML = 'Fale sobre suas Família';
                document.getElementById('textoPergunta4').innerHTML = 'Fale sobre suas Família';
                document.getElementById('textoPergunta5').innerHTML = 'Fale sobre suas Família';
                quadro++;
           } 
           else if(quadro == 4){ // Quadro de Perguntas Nº 5
                drawFatia(valorRaio, 1.666, 1.8325, 'rgba(100, 149, 237, 0.5)'); // ok
                document.getElementById('tituloPergunta').innerHTML = 'Título da pergunta 6'; // Título pergunta 6
                document.getElementById('textoPergunta1').innerHTML = 'Fale sobre suas Família';
                document.getElementById('textoPergunta2').innerHTML = 'Fale sobre suas Família';
                document.getElementById('textoPergunta3').innerHTML = 'Fale sobre suas Família';
                document.getElementById('textoPergunta4').innerHTML = 'Fale sobre suas Família';
                document.getElementById('textoPergunta5').innerHTML = 'Fale sobre suas Família';
                quadro++;
           } 
           else if(quadro == 5){ // Quadro de Perguntas Nº 6
                drawFatia(valorRaio, 1.8325, 2.0, 'rgba(30, 144, 255, 0.5)'); // OK
                document.getElementById('tituloPergunta').innerHTML = 'Título da pergunta 7'; // Título pergunta 7
                document.getElementById('textoPergunta1').innerHTML = 'Fale sobre suas Família';
                document.getElementById('textoPergunta2').innerHTML = 'Fale sobre suas Família';
                document.getElementById('textoPergunta3').innerHTML = 'Fale sobre suas Família';
                document.getElementById('textoPergunta4').innerHTML = 'Fale sobre suas Família';
                document.getElementById('textoPergunta5').innerHTML = 'Fale sobre suas Família';
                quadro++;
           } 
           else if(quadro == 6){ // Quadro de Perguntas Nº 7
                drawFatia(valorRaio, 2.0, 2.1665, 'rgba(32, 178, 170, 0.5)'); // OK
                document.getElementById('tituloPergunta').innerHTML = 'Título da pergunta 8';
                document.getElementById('textoPergunta1').innerHTML = 'Fale sobre suas Família';
                document.getElementById('textoPergunta2').innerHTML = 'Fale sobre suas Família';
                document.getElementById('textoPergunta3').innerHTML = 'Fale sobre suas Família';
                document.getElementById('textoPergunta4').innerHTML = 'Fale sobre suas Família';
                document.getElementById('textoPergunta5').innerHTML = 'Fale sobre suas Família';
                quadro++;
           } 
           else if(quadro == 7){ // Quadro de Perguntas Nº 8
                drawFatia(valorRaio, 2.1665, 2.333, 'rgba(50, 205, 50, 0.5)'); // OK
                document.getElementById('tituloPergunta').innerHTML = 'Título da pergunta 9';
                document.getElementById('textoPergunta1').innerHTML = 'Fale sobre suas Família';
                document.getElementById('textoPergunta2').innerHTML = 'Fale sobre suas Família';
                document.getElementById('textoPergunta3').innerHTML = 'Fale sobre suas Família';
                document.getElementById('textoPergunta4').innerHTML = 'Fale sobre suas Família';
                document.getElementById('textoPergunta5').innerHTML = 'Fale sobre suas Família';
                quadro++;
           } 
           else if(quadro == 8){ // Quadro de Perguntas Nº 9
                drawFatia(valorRaio, 2.333, 2.4995, 'rgba(255, 205, 30, 0.5)'); // OK
                document.getElementById('tituloPergunta').innerHTML = 'Título da pergunta 10';
                document.getElementById('textoPergunta1').innerHTML = 'Fale sobre suas Família';
                document.getElementById('textoPergunta2').innerHTML = 'Fale sobre suas Família';
                document.getElementById('textoPergunta3').innerHTML = 'Fale sobre suas Família';
                document.getElementById('textoPergunta4').innerHTML = 'Fale sobre suas Família';
                document.getElementById('textoPergunta5').innerHTML = 'Fale sobre suas Família';
                quadro++;
           } else if(quadro == 9){ // Quadro de Perguntas Nº 10
                drawFatia(valorRaio, 2.4995, 2.666, 'rgba(218, 165, 32, 0.5)');
                document.getElementById('tituloPergunta').innerHTML = 'Título da pergunta 11';
                document.getElementById('textoPergunta1').innerHTML = 'Fale sobre suas Família';
                document.getElementById('textoPergunta2').innerHTML = 'Fale sobre suas Família';
                document.getElementById('textoPergunta3').innerHTML = 'Fale sobre suas Família';
                document.getElementById('textoPergunta4').innerHTML = 'Fale sobre suas Família';
                document.getElementById('textoPergunta5').innerHTML = 'Fale sobre suas Família';
                quadro++;
           } 
           else if(quadro == 10){ // Quadro de Perguntas Nº 11
                drawFatia(valorRaio, 2.666, 2.8325, 'rgba(255, 69, 0, 0.5)');
                document.getElementById('tituloPergunta').innerHTML = 'Título da pergunta 12';
                document.getElementById('textoPergunta1').innerHTML = 'Fale sobre suas Família';
                document.getElementById('textoPergunta2').innerHTML = 'Fale sobre suas Família';
                document.getElementById('textoPergunta3').innerHTML = 'Fale sobre suas Família';
                document.getElementById('textoPergunta4').innerHTML = 'Fale sobre suas Família';
                document.getElementById('textoPergunta5').innerHTML = 'Fale sobre suas Família';
                quadro++;
           } 
           else if(quadro == 11){ // Quadro de Perguntas Nº 12
                drawFatia(valorRaio, 2.8325, 3.0, 'rgba(255, 127, 80, 0.5)');
                document.getElementById('tituloPergunta').innerHTML = 'GRÁFICO CONCLUIDO';
                quadro++;
           }

           // Reseta os valores dos inputs/seletores
           pertunta1 = document.getElementById("per1").value = '';
           pertunta2 = document.getElementById("per2").value = '';
           pertunta3 = document.getElementById("per3").value = '';
           pertunta4 = document.getElementById("per4").value = '';
           pertunta5 = document.getElementById("per5").value = '';
            
        };

        
        const canvas = document.getElementById("areaGraf"); // obtem uma referência ao elemento Canvas
        const contexto = canvas.getContext("2d"); // obtem o contexto de desenho

        // função que desenha as fatias dos gráficos
        function drawFatia(raio, posicaoIni, posicaoFin, cor) { // parâmetros para desenhar os gráficos

            //declaração das variável que vão receber os parâmetros
            const c = cor, r = raio, p1 = posicaoIni, p2 = posicaoFin;
            const noMeio = 200; //centro do desenho
            
            contexto.beginPath(); //inicia um novo caminho
            contexto.moveTo(noMeio, noMeio); // ponto horizontal e vestical | defini o ponto de início (deve ser no centro da área de desenho)

            // arc(x, y, radius, ang1, ang2, direction);
            // o radius é definido dinamicamente através do calculo da média
            // // as medidas na função arc() são em radianos, não em graus;
            contexto.arc(noMeio, noMeio, r, posicaoIni * Math.PI, posicaoFin * Math.PI, false);
            contexto.lineWidth = 0.25; // largura da linha
            contexto.strokeStyle = c; //cor da linha

            contexto.lineTo(noMeio, noMeio); // agora desenhamos uma linha de volta para o arco

            contexto.fillStyle = c; // cor do preenchimento
            contexto.fill(); // preenchimento de fato

            contexto.stroke(); // realiza o desenho

        }