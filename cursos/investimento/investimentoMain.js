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

    exibirPergunta(shuffleArray(perguntas));
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

    exibirPergunta(shuffleArray(perguntas));
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

    exibirPergunta(shuffleArray(perguntas));
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

// criacao de perguntas e suas respostas
const perguntas = [
    {
        pergunta: "Quanto é 1+1?",
        respostas: [
            { texto: "6", correta: false },
            { texto: "2", correta: true },
            { texto: "7", correta: false },
            { texto: "8", correta: false }
        ]
    },
    {
        pergunta: "Quanto é 2+2",
        respostas: [
            { texto: "7", correta: false },
            { texto: "5", correta: false },
            { texto: "4", correta: true },
            { texto: "9", correta: false }
        ]
    },
    {
        pergunta: "Quanto é 3+3",
        respostas: [
            { texto: "6", correta: true },
            { texto: "5", correta: false },
            { texto: "12", correta: false },
            { texto: "9", correta: false }
        ]
    },
    {
        pergunta: "Quanto é 4+4",
        respostas: [
            { texto: "7", correta: false },
            { texto: "5", correta: false },
            { texto: "8", correta: true },
            { texto: "9", correta: false }
        ]
    },
];

// Função para embaralhar array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Embaralhar a ordem das perguntas
const perguntasEmbaralhadas = shuffleArray(perguntas);

// Exibir perguntas e respostas na tela
perguntasEmbaralhadas.forEach(pergunta => {
    console.log(pergunta.pergunta);
    const respostasEmbaralhadas = shuffleArray(pergunta.respostas);
    respostasEmbaralhadas.forEach(resposta => {
        console.log(resposta.texto);
    });
});

// Função para criar elementos HTML para as perguntas e respostas
let perguntaAtual = 0;
let respostasCorretas = 0;

function exibirPergunta() {
    const secaoResposta = document.querySelector('.secaoResposta');
    secaoResposta.innerHTML = '';

    const pergunta = perguntas[perguntaAtual];

    const divPergunta = document.createElement('div');
    divPergunta.classList.add('pergunta');
    divPergunta.textContent = pergunta.pergunta;

    const divRespostas = document.createElement('div');
    divRespostas.classList.add('respostas');

    pergunta.respostas.forEach((resposta, index) => {
        const divResposta = document.createElement('div');
        divResposta.classList.add('resposta');
        divResposta.textContent = resposta.texto;
        divResposta.dataset.correta = resposta.correta;
        divResposta.dataset.indice = index;

        divResposta.addEventListener('click', conferirResposta);

        divRespostas.appendChild(divResposta);
    });

    divPergunta.appendChild(divRespostas);
    secaoResposta.appendChild(divPergunta);
}

function conferirResposta(event) {
    const respostaClicada = event.target;
    const respostaCorreta = respostaClicada.dataset.correta === 'true';

    const conclusaoQuestoes = document.getElementById('conclusaoQuestoes');
    const tituloFimQuestoes = document.getElementById('tituloFimQuestoes');
    const textoFimQuestoes = document.getElementById('textoFimQuestoes');

    const botaoFimQuestoesProsseguir = document.getElementById('botaoFimQuestoesProsseguir');
    const botaoFimQuestoesTentarNovamente = document.getElementById('botaoFimQuestoesTentarNovamente');

    if (respostaCorreta) {
        respostaClicada.classList.add('correta');
        respostasCorretas += 25;
    } else {
        respostaClicada.classList.add('errada');
        respostaClicada.style.backgroundColor = "red";
    }

    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        setTimeout(exibirPergunta, 1000);
    }

    // se conseguiu
    else if (respostasCorretas >= 75) {
        secaoQuestoes.style.display = "none";
        conclusaoQuestoes.style.display = "flex";

        tituloFimQuestoes.textContent = "Parabéns, você conseguiu!";
        textoFimQuestoes.textContent = `Você acertou ${respostasCorretas}% das questões, clique aqui para ir para a próxima fase: `
        botaoFimQuestoesProsseguir.style.display = "flex";

        botaoFimQuestoesProsseguir.addEventListener('click', () => {

        });
    }

    else {
        secaoQuestoes.style.display = "none";
        conclusaoQuestoes.style.display = "flex";
    
        tituloFimQuestoes.textContent = "Tente novamente!"
        textoFimQuestoes.textContent = `Você acertou ${respostasCorretas}% das questões, clique aqui para tentar novamente: `
        botaoFimQuestoesTentarNovamente.style.display = "flex";
    
        botaoFimQuestoesTentarNovamente.addEventListener('click', () => {
            perguntaAtual = 0;
            respostasCorretas = 0; // Reinicia as respostas corretas para zero
            exibirPergunta(shuffleArray(perguntas)); // Chama a função para exibir a primeira pergunta

            secaoQuestoes.style.display = "flex";
            conclusaoQuestoes.style.display = "none";
        });
    };
};

exibirPergunta();


