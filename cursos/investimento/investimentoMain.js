// ---------- menu burger ----------

// ---------- Capitulos ---------- 
const botoesCapitulo = [];
const capitulos = [];

for (let i = 1; i <= 3; i++) {
    botoesCapitulo.push(document.getElementById(`botaoCapitulo${i}`));
    capitulos.push(document.getElementById(`capitulo${i}`));

    botoesCapitulo[i - 1].addEventListener('click', () => {
        capitulos.forEach((capitulo, index) => {
            if (index === i - 1) {
                capitulo.style.display = 'flex';
            } else {
                capitulo.style.display = 'none';
            }
        });
    });
}


// ---------- curso VIDEO 1 ----------
const videos = [
    document.getElementById('investimentoVideo1'),
    document.getElementById('investimentoVideo2'),
    document.getElementById('investimentoVideo3')
];

const botoes = [
    document.getElementById('investimentoVideoBotao1'),
    document.getElementById('investimentoVideoBotao2'),
    document.getElementById('investimentoVideoBotao3')
];

const barrasProgresso = [
    document.getElementById('progresso1'),
    document.getElementById('progresso2'),
    document.getElementById('progresso3')
];

videos.forEach((video, index) => {
    video.addEventListener('ended', function () {
        botoes[index].disabled = false;
        botoes[index].style.backgroundColor = "var(--corBotaoDestaque)";
    });

    botoes[index].addEventListener('click', () => {
        console.log(`Botão ${index + 1} clicado após o vídeo!`);
    });

    video.addEventListener('timeupdate', () => {
        const progresso = (video.currentTime / video.duration) * 100;
        barrasProgresso[index].style.width = progresso + '%';
    });
});
