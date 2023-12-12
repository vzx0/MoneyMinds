// executar funcoes quando a página carrega
document.addEventListener("DOMContentLoaded", function () {
    const marcadorSalvoM = localStorage.getItem('marcadorConclusaoCapM1');
    if (marcadorSalvoM) {
        marcadorConclusaoCapM1.style.backgroundImage = marcadorSalvoM;
    }

    const marcadorSalvoM2 = localStorage.getItem('marcadorConclusaoCapM2');
    if (marcadorSalvoM2) {
        marcadorConclusaoCapM2.style.backgroundImage = marcadorSalvoM2;
    }

    const marcadorSalvoM3 = localStorage.getItem('marcadorConclusaoCapM3');
    if (marcadorSalvoM3) {
        marcadorConclusaoCapM3.style.backgroundImage = marcadorSalvoM3;
    }
})

// QUIZZES
const marcadorConclusaoCapM1 = document.getElementById('marcadorConclusaoM1');
const marcadorConclusaoCapM2 = document.getElementById('marcadorConclusaoM2');
const marcadorConclusaoCapM3 = document.getElementById('marcadorConclusaoM3');

// QUIZ CAP 1
// criacao de perguntas e suas respostas
function questionario1() {
    const perguntas = [
        {
            pergunta: "Qual é o principal objetivo do marketing de conteúdo?",
            respostas: [
                { texto: "Aumentar o número de seguidores nas redes sociais", correta: false },
                { texto: "Criar conteúdo relevante para educar, engajar e atrair o público-alvo.", correta: true },
                { texto: "Vender produtos e serviços a todo custo", correta: false },
                { texto: "Priorizar a publicidade paga em detrimento do conteúdo orgânico", correta: false }
            ]
        },
        {
            pergunta: "O que é a segmentação de mercado no contexto do marketing?",
            respostas: [
                { texto: "A definição de uma identidade de marca", correta: false },
                { texto: "A criação de anúncios específicos para diferentes plataformas", correta: false },
                { texto: "A divisão do mercado em grupos menores com características e necessidades similares.", correta: true },
                { texto: "A escolha do melhor canal de distribuição para um produto ou serviço", correta: false }
            ]
        },
        {
            pergunta: "O que é o funil de vendas no marketing digital?",
            respostas: [
                { texto: "Um método para adquirir clientes de maneira agressiva", correta: false },
                { texto: "Uma estratégia exclusiva para vendas online", correta: false },
                { texto: "Uma representação das etapas que um potencial cliente percorre antes de realizar uma compra.", correta: true },
                { texto: "Um processo para diminuir o número de clientes em potencial", correta: false }
            ]
        },
        {
            pergunta: "Qual é o principal objetivo da análise SWOT (Strengths, Weaknesses, Opportunities, Threats) no contexto do marketing?",
            respostas: [
                { texto: "Identificar concorrentes diretos para superá-los", correta: false },
                { texto: "Avaliar o retorno sobre o investimento em marketing", correta: false },
                { texto: "Aumentar a satisfação do cliente por meio de estratégias de marketing digital", correta: false },
                { texto: " Identificar os pontos fortes e fracos internos, bem como as oportunidades e ameaças externas.", correta: true }
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

                    const novoMarcadorM = "url(../icons-cursos/checkConclusaoCap.svg)";
                    marcadorConclusaoCapM1.style.backgroundImage = novoMarcadorM;
                    localStorage.setItem('marcadorConclusaoCapM1', novoMarcadorM);
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
function questionario2() {
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

                    const novoMarcadorM2 = "url(../icons-cursos/checkConclusaoCap.svg)";
                    marcadorConclusaoCapM2.style.backgroundImage = novoMarcadorM2;
                    localStorage.setItem('marcadorConclusaoCapM2', novoMarcadorM2);
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
function questionario3() {
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

                    const novoMarcadorM3 = "url(../icons-cursos/checkConclusaoCap.svg)";
                    marcadorConclusaoCapM3.style.backgroundImage = novoMarcadorM3;
                    localStorage.setItem('marcadorConclusaoCapM3', novoMarcadorM3);
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