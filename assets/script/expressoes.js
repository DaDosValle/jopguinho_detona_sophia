
const expressao = document.querySelector(".frases");
const parabens = ["Uau, que incrível", "Isso ai", "Papai LINDOOO", "BTS é chato!", "🥳 Mandou bem demais!", "🚀 Uau! Que reflexo!", "🔥 Explodiu no talento!", "🎯 Acertou em cheio!", "💪 Você é braba!", "🌟 Impecável!", "💥 Detonou bonito!", "🧠 Gênio detectado!", "🌟 Impecável!", "🍕 Você merece uma pizza!", "🪩 Brilhou mais que glitter!", "💐 Que jogada linda!", "🌠 Uma estrela nasceu!"];
const indiceAleatorio = parabens[Math.floor(Math.random() * parabens.length)];
fraseSorteada = indiceAleatorio;




// ======== EXIBE FRASES NO DISPLAY
function mostrarFrase(texto) {
  const frase = document.createElement("p");
  frase.classList.add("frase-item");
  frase.textContent = parabens[Math.floor(Math.random() * parabens.length)];
  

  

 // ======== ESTABELECE CORES ALEATORIAS
  const cores = ["#2563eb", "#3bf644ff", "#d441daff", "#dfb031ff"];
  frase.style.color = cores[Math.floor(Math.random() * cores.length)];
 
  expressao.appendChild(frase);
  setTimeout(() => frase.remove(), 2000);
}



// ======== CONDICOES A SEREM DESENVOLVIDAS
/*if (ponto >= 10) {
  mostrarFrase("TTTTTTTUau! 100 pontos, que orgulho!", "TTTTTTTvocê BUGOU tudo   sjshdhasgudhusshjsudhdjuhddh isidhidh   você BUGOU tudo", "TTTTTTESQUECE E NÃO TEM JEITO - Você é a MELHORRRRRRRR");
 
}

if (sequenciaAcertos === 3) {
  mostrarFrase("Três acertos seguidos! Você está voando!");
}*/

