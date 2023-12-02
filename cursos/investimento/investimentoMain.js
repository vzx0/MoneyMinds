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
const video1 = document.getElementById('investimentoVideo1');
const botaoVideo1 = document.getElementById('investimentoVideoBotao1');

video1.addEventListener('ended', function () {
    botaoVideo1.disabled = false;
    botaoVideo1.style.backgroundColor = "#00FF66";
});

botaoVideo1.addEventListener('click', () => {

    console.log('Botão clicado após o vídeo!');
});

// barra de progresso do video no botao
const barraProgresso = document.getElementById('progresso1');

video1.addEventListener('timeupdate', () => {
    const progresso = (video1.currentTime / video1.duration) * 100;
    barraProgresso.style.width = progresso + '%';
});