#  Jogo Detona Sophia

![Print do jo Detona Sophia](https://github.com/DaDosValle/Imagens/blob/main/DetonaSophia.png?raw=true) 

Um jogo interativo e educativo desenvolvido em **JavaScript, HTML e CSS**, onde o jogador deve clicar rapidamente no no elemento (a imagem da Sophia) para acumular pontos antes que o tempo(60 segundos) acabe.  
O projeto foi criado com o objetivo de promover **agilidade, coordenação motora e diversão** em uma experiência leve e envolvente.

---

## 🚀 Funcionalidades Principais

✅ **Movimento Dinâmico** – O inimigo se move aleatoriamente pelos quadrantes em intervalos regulares.  
✅ **Pontuação em Tempo Real** – Cada acerto incrementa a pontuação do jogador.  
✅ **Cronômetro Regressivo** – O tempo limita o jogo e determina o final da partida.  
✅ **Ranking Persistente** – As pontuações são salvas no `localStorage`, permitindo ver o ranking mesmo após fechar o navegador.  
✅ **Efeitos Visuais e Sonoros** – Feedback visual (tremor, flash, confete) e auditivo (sons de clique, início e fim de jogo).  
✅ **Sistema de Frases Motivacionais** – Frases aleatórias aparecem a cada acerto para incentivar o jogador.  

---

## 🧩 Estrutura do Projeto


* 📂 projeto-jogo-sophia
* ├── 📁 assets
* │ ├── 📁 css
* │ │ └── style.css
* │ ├── 📁 img
* │ │ └── sophia/
* │ │ ├── sophia1.jpg
* │ │ ├── sophia2.jpg
* │ │ └── ... até sophia13.jpg
* │ ├── 📁 sounds
* │ │ ├── click.mp3
* │ │ ├── gameOver.mp3
* │ │ └── btnInicio2.mp3
* │ └── 📁 js
* │ ├── main.js # Lógica central do jogo
* │ ├── ranking.js # Sistema de pontuação e ranking
* │ ├── frases.js # Frases motivacionais aleatórias
* │ └── audio.js # Gerenciamento de sons
* ├── index.html
* └── README.md


---

## 🕹️ Como Jogar

1. Digite seu **nome** na tela inicial.  
2. Clique em **Iniciar Jogo**.  
3. O inimigo (imagem da Sophia) aparecerá em posições aleatórias na tela.  
4. **Clique rapidamente** na imagem antes que ela desapareça.  
5. Cada acerto vale **1 ponto**.  
6. O cronômetro começa em **60 segundos**. Quando chega a zero, o jogo termina.  
7. Sua pontuação é salva automaticamente no **ranking local**.

---

## 🧠 Lógica de Funcionamento

### 🎮 Controle de Estado
O objeto `estado` armazena e gerencia todos os dados do jogo:

```js
const estado = {
  view: {
    subquadrante: document.querySelectorAll(".sub-quadrante"),
    tempo: document.querySelector("#tempo"),
    placar: document.querySelector("#pontuacao"),
    vida: document.querySelector("#vida"),
  },
  values: {
    idDoMovimento: null,
    velocidadeJogo: 400,
    posicaoInimigo: 0,
    pontuacao: 0,
    cronometro: 60,
  },
  actions: {
    cronometroTempoId: 60,
  },
};
```

🕒 Cronômetro e Game Over

O tempo é reduzido a cada segundo. Quando chega a 0, o jogo é interrompido e a pontuação final é exibida.

🏆 Ranking Local

Pontuações são armazenadas no localStorage e ordenadas do maior para o menor:

localStorage.setItem("ranking", JSON.stringify(jogadores));


🎉 Efeitos Visuais

Tremor de tela: ao acertar, o corpo do jogo balança levemente.

Flash colorido: mostra uma cor diferente dependendo da pontuação.

Confetes: partículas coloridas são lançadas aleatoriamente pela tela.

Esses efeitos foram criados com CSS Animations e manipulados dinamicamente via JavaScript.

🎨 Estilo Visual

O estilo é definido no arquivo style.css, com foco em:

Design responsivo

Cores vibrantes e contrastantes

Efeitos de transição e feedback visual

Principais classes:

```.inimigo {
  background-size: cover;
  border-radius: 8px;
}

.tremer {
  animation: shake 0.25s;
}

.flash {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.6;
  animation: fadeOut 0.3s forwards;
}

.confete {
  position: fixed;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  animation: fall 1s ease-out forwards;
}
```
💾 Armazenamento de Dados

Os dados do ranking são salvos localmente no navegador usando a API localStorage.
Isso permite que as pontuações permaneçam mesmo após o fechamento do jogo.

Para limpar o ranking:

localStorage.removeItem("ranking");

🔊 Sons e Feedback Auditivo

O jogo utiliza sons em momentos estratégicos:

Click: ao acertar um inimigo.

Game Over: ao finalizar o tempo.

Início: ao começar a partida.

Todos são controlados pela função:

tocarMusica("click");

🧱 Tecnologias Utilizadas

HTML5 – Estrutura da interface

CSS3 – Estilos e animações

JavaScript (ES6) – Lógica, ranking, efeitos e interações

LocalStorage API – Persistência de dados

💡 Possíveis Melhorias Futuras

Modo multiplayer local

Sistema de fases e dificuldades

Novos temas visuais e pacotes de imagens

Ranking global com backend

Estatísticas detalhadas de desempenho

👨‍💻 Autor

Desenvolvido por: Fernando do Valle
💬 Sou multitarefas! Tenho um micro e-ecommerce há 4 anos e atualmente estudo:
-  marketing digital (Google e também na Unir);
- ciência de dados (One - Oracle e Alura); 
- linguiagem de programação (DIO e também Capacita/IFBA)
e concluir recentemente Excel For Businnes (Macquarie University - Australia / Coursera).

---


📧 Linkedin: [Fernando do Valle](https://www.linkedin.com/in/fernando-do-valle/)



📜 Licença

Este projeto é de código aberto e decorrente de um desafio estudantil.
Sinta-se à vontade para usar, modificar e compartilhar, desde que mantenha os créditos originais.


---
