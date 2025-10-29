function acertou() {
  estado.view.subquadrante.forEach((selecionado) => {
    selecionado.addEventListener("mousedown", () => {
      if (selecionado === estado.values.posicaoInimigo) {
        estado.values.pontuacao++;
        estado.view.placar.textContent = estado.values.pontuacao;
        estado.values.posicaoInimigo = null;

        mostrarFrase(fraseSorteada);
        tocarMusica("click");

        // ======== ESTABELECER O TREMOR DA TELA
        document.body.classList.add("tremer");
        setTimeout(() => document.body.classList.remove("tremer"), 250);

        //  EFEITO DE FLASH COLORIDO CONFORME PONTUAÇÃO
        let corFlash = "white";
        if (estado.values.pontuacao < 5) corFlash = "green";
        else if (estado.values.pontuacao < 10) corFlash = "gold";
        else corFlash = "red";


        const flash = document.createElement("div");
        flash.classList.add("flash");
        flash.style.background = corFlash;
        document.body.appendChild(flash);
        setTimeout(() => flash.remove(), 300);

        // ======== EFEITO DE CONFETE NA TELA TODA
        for (let i = 0; i < 40; i++) {
          const confete = document.createElement("div");
          confete.classList.add("confete");

          confete.style.background = `hsl(${Math.random() * 360}, 100%, 60%)`;
          confete.style.left = `${Math.random() * window.innerWidth}px`;
          confete.style.top = `${Math.random() * window.innerHeight}px`;
          confete.style.animationDuration = `${0.8 + Math.random() * 1.2}s`;
          confete.style.transform = `rotate(${Math.random() * 360}deg)`;

          document.body.appendChild(confete);
          setTimeout(() => confete.remove(), 1500);
        }
      }
    });
  });
}
