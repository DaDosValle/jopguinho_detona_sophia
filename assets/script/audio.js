// ======== AUDIO ESPECIFICO PARA PLANO DE FUNDO
function tocarMusicaFundo(){
    let audio = new Audio("./assets/audio/planoFundo2.mp3")
    audio.volume = 0.1;
    audio.play();
}

// ======== FUNCAO DE AUDIO GENERALISTA
function tocarMusica(audioName){
    let audio1 = new Audio(`./assets/audio/${audioName}.mp3`)
    audio1.volume = 0.8;
    audio1.play();
}