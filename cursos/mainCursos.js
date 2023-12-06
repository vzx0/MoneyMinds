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

    questionario1();
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

    questionario2();
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

    questionario3();
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
        ocultarConteudos();
        secaoTexto.style.display = 'flex';
        principal.style.height = '100%';
        opcaoTexto.disabled = "false"

        opcaoTexto.classList.remove('desativado');
    });

    video.addEventListener('timeupdate', () => {
        const progresso = (video.currentTime / video.duration) * 100;
        barrasProgresso[index].style.width = progresso + '%';
    });
});

// QUIZ CAP 1
// criacao de perguntas e suas respostas
function questionario1() {
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
    function shuffleArray(perguntas) {
        for (let i = perguntas.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [perguntas[i], perguntas[j]] = [perguntas[j], perguntas[i]];
        }
        return perguntas;
    }

    // Embaralhar a ordem das perguntas
    const perguntasEmbaralhadas = shuffleArray(perguntas);

    // Exibir perguntas e respostas na tela
    perguntasEmbaralhadas.forEach(pergunta => {
        shuffleArray(pergunta.respostas);
    });

    // Função para criar elementos HTML para as perguntas e respostas
    let perguntaAtual = 0;
    let respostasCorretas = 0;

    function exibirPergunta() {
        const secaoResposta = document.getElementById('secaoResposta');
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
            setTimeout(exibirPergunta, 250);
        }

        // se conseguiu
        else if (respostasCorretas >= 75) {
            secaoQuestoes.style.display = "none";
            conclusaoQuestoes.style.display = "flex";

            tituloFimQuestoes.textContent = "Parabéns, você conseguiu!";
            textoFimQuestoes.textContent = `Você acertou ${respostasCorretas}% das questões, clique aqui para ir para a próxima fase: `
            botaoFimQuestoesProsseguir.style.display = "flex";
            botaoFimQuestoesTentarNovamente.style.display = "none";

            // Adicione uma variável para rastrear o capítulo atual
            let capituloAtual = 0;

            // No evento de clique do botão "Prosseguir"
            botaoFimQuestoesProsseguir.addEventListener('click', () => {
                // Certifique-se de não ultrapassar o número total de capítulos
                if (capituloAtual < capitulos.length - 1) {
                    // Oculta o capítulo atual e exibe o próximo capítulo
                    capitulos[capituloAtual].style.display = 'none';
                    capituloAtual++;
                    capitulos[capituloAtual].style.display = 'flex';
                } else {
                    // Se atingir o último capítulo, você pode ocultar a seção de questões ou realizar outra ação
                    secaoQuestoes.style.display = 'none';
                }
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
}

// QUIZ CAP 2
function questionario2(){
    const perguntas2 = [
        {
            pergunta: "A vida faz sentido?",
            respostas: [
                { texto: "Não sei", correta: true },
                { texto: "Neymar?", correta: false },
                { texto: "Certamente que não", correta: false },
                { texto: "Certamente que sim", correta: false }
            ]
        },
        {
            pergunta: "7*7",
            respostas: [
                { texto: "190", correta: false },
                { texto: "27", correta: false },
                { texto: "14", correta: false },
                { texto: "49", correta: true }
            ]
        },
        {
            pergunta: "Você gosta de javascript",
            respostas: [
                { texto: "Depende do dia", correta: true },
                { texto: "Claro", correta: false },
                { texto: "Não", correta: false },
                { texto: "Adoro fazer programa", correta: false }
            ]
        },
        {
            pergunta: "Por que esse site precisa de um coco para funcionar?",
            respostas: [
                { texto: "Coco?", correta: false },
                { texto: "Team Fortress 2", correta: true },
                { texto: "Sla fi", correta: false },
                { texto: "Concordo plenamente", correta: false }
            ]
        },
    ];

    function shuffleArray(perguntas2) {
        for (let i = perguntas2.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [perguntas2[i], perguntas2[j]] = [perguntas2[j], perguntas2[i]];
        }
        return perguntas2;
    }

    const perguntasEmbaralhadas2 = shuffleArray(perguntas2);

    perguntasEmbaralhadas2.forEach(pergunta => {
        shuffleArray(pergunta.respostas);
    });

    let perguntaAtual2 = 0;
    let respostasCorretas2 = 0;

    function exibirPergunta2() {
        const secaoResposta2 = document.getElementById('secaoResposta2');
        secaoResposta2.innerHTML = '';

        const pergunta = perguntas2[perguntaAtual2];

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

            divResposta.addEventListener('click', conferirResposta2);

            divRespostas.appendChild(divResposta);
        });

        divPergunta.appendChild(divRespostas);
        secaoResposta2.appendChild(divPergunta);
    }

    function conferirResposta2(event) {
        const respostaClicada = event.target;
        const respostaCorreta = respostaClicada.dataset.correta === 'true';

        const conclusaoQuestoes2 = document.getElementById('conclusaoQuestoes2');
        const tituloFimQuestoes2 = document.getElementById('tituloFimQuestoes2');
        const textoFimQuestoes2 = document.getElementById('textoFimQuestoes2');

        const botaoFimQuestoesProsseguir2 = document.getElementById('botaoFimQuestoesProsseguir2');
        const botaoFimQuestoesTentarNovamente2 = document.getElementById('botaoFimQuestoesTentarNovamente2');

        if (respostaCorreta) {
            respostaClicada.classList.add('correta');
            respostasCorretas2 += 25;
        } else {
            respostaClicada.classList.add('errada');
            respostaClicada.style.backgroundColor = "red";
        }

        perguntaAtual2++;
        if (perguntaAtual2 < perguntas2.length) {
            setTimeout(exibirPergunta2, 250);
        }

        // se conseguiu
        else if (respostasCorretas2 >= 75) {
            secaoQuestoes2.style.display = "none";
            conclusaoQuestoes2.style.display = "flex";

            tituloFimQuestoes2.textContent = "Parabéns, você conseguiu!";
            textoFimQuestoes2.textContent = `Você acertou ${respostasCorretas2}% das questões, clique aqui para ir para a próxima fase: `
            botaoFimQuestoesProsseguir2.style.display = "flex";
            botaoFimQuestoesTentarNovamente2.style.display = "none";

            // Adicione uma variável para rastrear o capítulo atual
            let capituloAtual = 1;

            // No evento de clique do botão "Prosseguir"
            botaoFimQuestoesProsseguir2.addEventListener('click', () => {
                // Certifique-se de não ultrapassar o número total de capítulos
                if (capituloAtual < capitulos.length - 1) {
                    // Oculta o capítulo atual e exibe o próximo capítulo
                    capitulos[capituloAtual].style.display = 'none';
                    capituloAtual++;
                    capitulos[capituloAtual].style.display = 'flex';
                } else {
                    // Se atingir o último capítulo, você pode ocultar a seção de questões ou realizar outra ação
                    secaoQuestoes2.style.display = 'none';
                }
            });

        }

        else {
            secaoQuestoes2.style.display = "none";
            conclusaoQuestoes2.style.display = "flex";

            tituloFimQuestoes2.textContent = "Tente novamente!"
            textoFimQuestoes2.textContent = `Você acertou ${respostasCorretas2}% das questões, clique aqui para tentar novamente: `
            botaoFimQuestoesTentarNovamente2.style.display = "flex";

            botaoFimQuestoesTentarNovamente2.addEventListener('click', () => {
                perguntaAtual2 = 0;
                respostasCorretas2 = 0; // Reinicia as respostas corretas para zero
                exibirPergunta2(shuffleArray(perguntas2)); // Chama a função para exibir a primeira pergunta

                secaoQuestoes2.style.display = "flex";
                conclusaoQuestoes2.style.display = "none";
            });
        };
    };
    exibirPergunta2();
}

// QUIZ CAP3
function questionario3(){
    const perguntas3 = [
        {
            pergunta: "A vida faz sentido?",
            respostas: [
                { texto: "Não sei", correta: true },
                { texto: "Neymar?", correta: false },
                { texto: "Certamente que não", correta: false },
                { texto: "Certamente que sim", correta: false }
            ]
        },
        {
            pergunta: "7*7",
            respostas: [
                { texto: "190", correta: false },
                { texto: "27", correta: false },
                { texto: "14", correta: false },
                { texto: "49", correta: true }
            ]
        },
        {
            pergunta: "Você gosta de javascript",
            respostas: [
                { texto: "Depende do dia", correta: true },
                { texto: "Claro", correta: false },
                { texto: "Não", correta: false },
                { texto: "Adoro fazer programa", correta: false }
            ]
        },
        {
            pergunta: "Por que esse site precisa de um coco para funcionar?",
            respostas: [
                { texto: "Coco?", correta: false },
                { texto: "Team Fortress 2", correta: true },
                { texto: "Sla fi", correta: false },
                { texto: "Concordo plenamente", correta: false }
            ]
        },
    ];

    function shuffleArray(perguntas3) {
        for (let i = perguntas3.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [perguntas3[i], perguntas3[j]] = [perguntas3[j], perguntas3[i]];
        }
        return perguntas3;
    }

    const perguntasEmbaralhadas3 = shuffleArray(perguntas3);

    perguntasEmbaralhadas3.forEach(pergunta => {
        shuffleArray(pergunta.respostas);
    });

    let perguntaAtual3 = 0;
    let respostasCorretas3 = 0;

    function exibirPergunta3() {
        const secaoResposta3 = document.getElementById('secaoResposta3');
        secaoResposta3.innerHTML = '';

        const pergunta = perguntas3[perguntaAtual3];

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

            divResposta.addEventListener('click', conferirResposta3);

            divRespostas.appendChild(divResposta);
        });

        divPergunta.appendChild(divRespostas);
        secaoResposta3.appendChild(divPergunta);
    }

    function conferirResposta3(event) {
        const respostaClicada = event.target;
        const respostaCorreta = respostaClicada.dataset.correta === 'true';

        const conclusaoQuestoes3 = document.getElementById('conclusaoQuestoes3');
        const tituloFimQuestoes3 = document.getElementById('tituloFimQuestoes3');
        const textoFimQuestoes3 = document.getElementById('textoFimQuestoes3');

        const botaoFimQuestoesProsseguir3 = document.getElementById('botaoFimQuestoesProsseguir3');
        const botaoFimQuestoesTentarNovamente3 = document.getElementById('botaoFimQuestoesTentarNovamente3');

        if (respostaCorreta) {
            respostaClicada.classList.add('correta');
            respostasCorretas3 += 25;
        } else {
            respostaClicada.classList.add('errada');
            respostaClicada.style.backgroundColor = "red";
        }

        perguntaAtual3++;
        if (perguntaAtual3 < perguntas3.length) {
            setTimeout(exibirPergunta3, 250);
        }

        // se conseguiu
        else if (respostasCorretas3 >= 75) {
            secaoQuestoes3.style.display = "none";
            conclusaoQuestoes3.style.display = "flex";

            tituloFimQuestoes3.textContent = "Parabéns, você conseguiu!";
            textoFimQuestoes3.textContent = `Você acertou ${respostasCorretas3}% das questões, clique aqui para ir para a próxima fase: `
            botaoFimQuestoesProsseguir3.style.display = "flex";
            botaoFimQuestoesTentarNovamente3.style.display = "none";

            // Adicione uma variável para rastrear o capítulo atual
            let capituloAtual = 1;

            // No evento de clique do botão "Prosseguir"
            botaoFimQuestoesProsseguir3.addEventListener('click', () => {
                // Certifique-se de não ultrapassar o número total de capítulos
                if (capituloAtual < capitulos.length - 1) {
                    // Oculta o capítulo atual e exibe o próximo capítulo
                    capitulos[capituloAtual].style.display = 'none';
                    capituloAtual++;
                    capitulos[capituloAtual].style.display = 'flex';
                } else {
                    // Se atingir o último capítulo, você pode ocultar a seção de questões ou realizar outra ação
                    secaoQuestoes3.style.display = 'none';
                }
            });

        }

        else {
            secaoQuestoes3.style.display = "none";
            conclusaoQuestoes3.style.display = "flex";

            tituloFimQuestoes3.textContent = "Tente novamente!"
            textoFimQuestoes3.textContent = `Você acertou ${respostasCorretas3}% das questões, clique aqui para tentar novamente: `
            botaoFimQuestoesTentarNovamente3.style.display = "flex";

            botaoFimQuestoesTentarNovamente3.addEventListener('click', () => {
                perguntaAtual3 = 0;
                respostasCorretas3 = 0; // Reinicia as respostas corretas para zero
                exibirPergunta3(shuffleArray(perguntas3)); // Chama a função para exibir a primeira pergunta

                secaoQuestoes3.style.display = "flex";
                conclusaoQuestoes3.style.display = "none";
            });
        };
    };
    exibirPergunta3();
}



