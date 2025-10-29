const estado = {
  view: {
    subquadrante: document.querySelectorAll(".sub-quadrante"),
    inimigo: document.querySelectorAll(".inimigo"),
    tempo: document.querySelector("#tempo"),
    placar: document.querySelector("#pontuacao"),
    vida: document.querySelector("#vida"),
   
  },

  values: {
    idDoMovimento : null,
    velocidadeJogo : 400,
    posicaoInimigo : 0,
    pontuacao: 0,
    cronometro: 60,
  },

  actions: {
    cronometroTempoId: 60,

  },
};

// ======== ESTABELECE A CONTAGEM REGRESSIVA DE 60 SEGUNDOS
function contagemRegressiva() {
    estado.values.cronometro--;
    estado.view.tempo.textContent = estado.values.cronometro;

    if(estado.values.cronometro == 1){
        tocarMusica("gameOver");
    }

    if(estado.values.cronometro <= 0){
        
        clearInterval(estado.actions.cronometroTempoId);
        clearInterval(estado.values.cronometro);

        const pontos = estado.values.pontuacao;
        const nome = document.querySelector("#nomeJogador").value.trim();

        // ======== ATUALIZA O RANKING
        let jogadores = JSON.parse(localStorage.getItem("ranking")) || [];
        const existente = jogadores.find(j => j.nome === nome);

        if (existente) {
        if (pontos > existente.pontos) {
            existente.pontos = pontos;
        }
        } else {
        jogadores.push({ nome, pontos });
        }

        localStorage.setItem("ranking", JSON.stringify(jogadores));

        alert("⏰ Game Over. Seu Tempo Acabou e sua pontuação é: "+ estado.values.pontuacao);
        atualizarRanking();
        location.reload();

    }
        
}


// ======== REMOVE A CLASSE INIMIGO
function removerInimigos() {
  estado.view.subquadrante.forEach((subquadrante) => {
    subquadrante.classList.remove("inimigo");
  });
}

// ======== ATUALIZA A CLASSE INIMIGO EM QUADRANTES ALEATORIOS
function aleatorioSubquadrante() {
  removerInimigos();
  let numeroAleatorio = Math.floor(Math.random() * estado.view.subquadrante.length);
  let quadradoAleatorio = estado.view.subquadrante[numeroAleatorio];
  quadradoAleatorio.classList.add("inimigo");
  estado.values.posicaoInimigo = quadradoAleatorio; 
  
}

// ======== INICIA O JOGO
function iniciar() {
  aleatorioSubquadrante();
  acertou()
  estado.values.idDoMovimento = setInterval(aleatorioSubquadrante, estado.values.velocidadeJogo);
  clearInterval(estado.actions.cronometroTempoId);
  estado.actions.cronometroTempoId = setInterval(contagemRegressiva, 1000);
  tocarMusica("btnInicio2")
  tocarMusicaFundo()
}




