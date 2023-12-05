// executar funcoes quando a página carrega
document.addEventListener("DOMContentLoaded", function () {
    ocultarConteudos;
    secaoVideo.style.display = "flex"

    ocultarConteudos2;
    secaoVideo2.style.display = "flex"

    ocultarConteudos3;
    secaoVideo3.style.display = "flex"
})

// ---------- menu burger ----------
// cap1
const opcaoVideo = document.getElementById('opcaoVideo');
const opcaoTexto = document.getElementById('opcaoTexto');
const opcaoQuestoes = document.getElementById('opcaoQuestoes');

const secaoVideo = document.getElementById('secaoVideo');
const secaoTexto = document.getElementById('secaoTexto');
const secaoQuestoes = document.getElementById('secaoQuestoes');

const principal = document.querySelector('.principal');

opcaoVideo.addEventListener('click', () => {
    ocultarConteudos();
    secaoVideo.style.display = 'flex';
    principal.style.height = '100vh';
});

opcaoTexto.addEventListener('click', () => {
    ocultarConteudos();
    secaoTexto.style.display = 'flex';
    principal.style.height = '100%';
});

opcaoQuestoes.addEventListener('click', () => {
    ocultarConteudos();
    secaoQuestoes.style.display = 'flex';
    principal.style.height = '100vh';
});

// Função para ocultar todos os conteúdos
function ocultarConteudos() {
    secaoVideo.style.display = 'none';
    secaoTexto.style.display = 'none';
    secaoQuestoes.style.display = 'none';
}


// cap2
const opcaoVideo2 = document.getElementById('opcaoVideo2');
const opcaoTexto2 = document.getElementById('opcaoTexto2');
const opcaoQuestoes2 = document.getElementById('opcaoQuestoes2');

const secaoVideo2 = document.getElementById('secaoVideo2');
const secaoTexto2 = document.getElementById('secaoTexto2');
const secaoQuestoes2 = document.getElementById('secaoQuestoes2');

opcaoVideo2.addEventListener('click', () => {
    ocultarConteudos2();
    secaoVideo2.style.display = 'flex';
    principal.style.height = '100vh';
});

opcaoTexto2.addEventListener('click', () => {
    ocultarConteudos2();
    secaoTexto2.style.display = 'flex';
    principal.style.height = '100%';
});

opcaoQuestoes2.addEventListener('click', () => {
    ocultarConteudos2();
    secaoQuestoes2.style.display = 'flex';
    principal.style.height = '100vh';
});

// Função para ocultar todos os conteúdos
function ocultarConteudos2() {
    secaoVideo2.style.display = 'none';
    secaoTexto2.style.display = 'none';
    secaoQuestoes2.style.display = 'none';
}

// cap3
const opcaoVideo3 = document.getElementById('opcaoVideo3');
const opcaoTexto3 = document.getElementById('opcaoTexto3');
const opcaoQuestoes3 = document.getElementById('opcaoQuestoes3');

const secaoVideo3 = document.getElementById('secaoVideo3');
const secaoTexto3 = document.getElementById('secaoTexto3');
const secaoQuestoes3 = document.getElementById('secaoQuestoes3');

opcaoVideo3.addEventListener('click', () => {
    ocultarConteudos3();
    secaoVideo3.style.display = 'flex';
    principal.style.height = '100vh';
});

opcaoTexto3.addEventListener('click', () => {
    ocultarConteudos3();
    secaoTexto3.style.display = 'flex';
    principal.style.height = '100%';
});

opcaoQuestoes3.addEventListener('click', () => {
    ocultarConteudos3();
    secaoQuestoes3.style.display = 'flex';
    principal.style.height = '100vh';
});

function ocultarConteudos3() {
    secaoVideo3.style.display = 'none';
    secaoTexto3.style.display = 'none';
    secaoQuestoes3.style.display = 'none';
}

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


// ---------- curso VIDEO ----------
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
        botoes[index].style.cursor = "pointer";
    });

    botoes[index].addEventListener('click', () => {
        console.log(`Botão ${index + 1} clicado após o vídeo!`);
    });

    video.addEventListener('timeupdate', () => {
        const progresso = (video.currentTime / video.duration) * 100;
        barrasProgresso[index].style.width = progresso + '%';
    });
});

// sorteio posicao respostas Questionario
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Seu código para criar o array de IDs de respostas
const respostasEmbaralhadas = [
    { id: "resposta1", texto: "Pelé" },
    { id: "resposta2", texto: "Neymar" },
    { id: "resposta3", texto: "Pedro" },
    { id: "resposta4", texto: "Gustavo" }
];

function mostrarRespostas() {
    // Embaralha as respostas
    const respostas = [...respostasEmbaralhadas].sort(() => Math.random() - 0.5);

    // Exibe as respostas na tela
    const secaoResposta = document.querySelector('.secaoResposta');
    respostas.forEach(resposta => {
        const divResposta = document.createElement('div');
        divResposta.classList.add('resposta');
        divResposta.textContent = resposta.texto;
        divResposta.dataset.id = resposta.id;
        divResposta.addEventListener('click', conferirResposta);
        secaoResposta.appendChild(divResposta);
    });
}

function conferirResposta(event) {
    const respostaClicada = event.target.dataset.id;
    const respostaCorreta = respostasEmbaralhadas.find(resposta => resposta.id === respostaClicada);
    
    const respostas = document.querySelectorAll('.resposta');
    respostas.forEach(resposta => {
        resposta.classList.remove('correta');
        if (resposta.dataset.id === respostaCorreta.id) {
            resposta.classList.add('correta');
        }
    });
}

mostrarRespostas();

