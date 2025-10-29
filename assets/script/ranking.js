
const jogadores = JSON.parse(localStorage.getItem("ranking")) || [];
const inputNome = document.querySelector("#nomeJogador");
const btnIniciar = document.querySelector("#btnIniciar");
const rankingSection = document.querySelector("#ranking");
const cadastroSection = document.querySelector("#cadastro");
const listaRanking = document.querySelector("#ranking-jogador");
const btnLimparRanking = document.querySelector("#btnLimparRanking");

// ======== EXIBI O RANKING SALVO
document.addEventListener("DOMContentLoaded", atualizarRanking);

// ======== VALIDACAO DO NOME AO INICIAR
btnIniciar.addEventListener("click", () => {
  const nome = inputNome.value.trim();

  if (!nome) {
    alert("Por favor, digite seu nome antes de começar!");
    return;
  }


  iniciar();


  // ======== VERIFICA USUARIO JA EXISTENTE
  const existente = jogadores.find(j => j.nome === nome);
  if (existente) {
    if (pontos > existente.pontos) {
      existente.pontos = pontos;
    }
  } else {
    jogadores.push({ nome, pontos });
  }

  
  // ======== SALVA JOGADOR LOCALMENTE
  localStorage.setItem("ranking", JSON.stringify(jogadores));


  

  // ======== EXIBIR RANKING
  cadastroSection.style.display = "none";
  rankingSection.style.display = "block";
  });

// ======== INICIA O JOGO
function atualizarRanking() {
  jogadores.sort((a, b) => b.pontos - a.pontos);
  listaRanking.innerHTML = "";

  jogadores.slice(0, 10).forEach((jogador, index) => {
    const item = document.createElement("li");
    item.textContent = `${index + 1}º ${jogador.nome} - ${jogador.pontos} pontos`;
    listaRanking.appendChild(item);
  });
}


// ======== RESETA O RANKING ATUAL
btnLimparRanking.addEventListener("click", () => {
  if (confirm("Tem certeza que deseja apagar todo o ranking?")) {
    localStorage.removeItem("ranking");
    listaRanking.innerHTML = "";
    alert("Ranking apagado com sucesso!");
  }
});

atualizarRanking();

