// executar funcoes quando a página carrega
document.addEventListener("DOMContentLoaded", function () {
    // se o item existir no localStorage, o background-image do marcador passa a ser um sinal de check
    const marcadorSalvoI = localStorage.getItem('marcadorConclusaoCapI1');
    if (marcadorSalvoI) {
        marcadorConclusaoCapI1.style.backgroundImage = marcadorSalvoI;
    }

    const marcadorSalvoI2 = localStorage.getItem('marcadorConclusaoCapI2');
    if (marcadorSalvoI2) {
        marcadorConclusaoCapI2.style.backgroundImage = marcadorSalvoI2;
    }

    const marcadorSalvoI3 = localStorage.getItem('marcadorConclusaoCapI3');
    if (marcadorSalvoI3) {
        marcadorConclusaoCapI3.style.backgroundImage = marcadorSalvoI3;
    }
})

// QUIZZES
const marcadorConclusaoCapI1 = document.getElementById('marcadorConclusaoI1');
const marcadorConclusaoCapI2 = document.getElementById('marcadorConclusaoI2');
const marcadorConclusaoCapI3 = document.getElementById('marcadorConclusaoI3');

// QUIZ CAP 1
// criacao de perguntas e suas respostas
function questionario1() {
    // declaracao do array perguntas que possui os objetos pergunta, que por sua vez possuem as propriedades pergunta e respostas
    // respostas também é um array que armazena em conjuntos o texto da opcao, juntamente com o valor Boolean de verdadeiro ou falso
    const perguntas = [
        {
            pergunta: "Qual é a principal vantagem da diversificação de investimentos?",
            respostas: [
                { texto: "Redução dos riscos", correta: true },
                { texto: "Aumento dos custos", correta: false },
                { texto: "Diminuição dos retornos", correta: false },
                { texto: "Limitação da liquidez", correta: false }
            ]
        },
        {
            pergunta: "Qual é uma característica da análise técnica no mercado de investimentos?",
            respostas: [
                { texto: "Baseia-se em eventos econômicos", correta: false },
                { texto: "Utiliza indicadores macroeconômicos", correta: false },
                { texto: "Analisa o comportamento passado dos preços", correta: true },
                { texto: "Considera apenas os fundamentos das empresas", correta: false }
            ]
        },
        {
            pergunta: "Qual tipo de investimento geralmente é mais associado a retornos fixos?",
            respostas: [
                { texto: "Ações", correta: false },
                { texto: "Fundos Imobiliários", correta: false },
                { texto: "Títulos de Renda Fixa", correta: true },
                { texto: "Fundos de Ações", correta: false }
            ]
        },
        {
            pergunta: "O que é essencial ao considerar o perfil de investidor?",
            respostas: [
                { texto: "Investimento sem avaliação de riscos", correta: false },
                { texto: "Investimento sem avaliação de riscos", correta: false },
                { texto: "Especulação no mercado de ações", correta: false },
                { texto: "Objetivos de longo prazo", correta: true }
            ]
        },
    ];

    // Função para embaralhar que recebe o array perguntas
    function shuffleArray(perguntas) {
        // loop for iterando sobre o comprimento do array perguntas
        for (let i = perguntas.length - 1; i > 0; i--) {
            // embaralhando a ordem das perguntas através do Math.random
            const j = Math.floor(Math.random() * (i + 1));
            [perguntas[i], perguntas[j]] = [perguntas[j], perguntas[i]];
        }
        return perguntas;
    }

    // embaralhar a ordem das perguntas
    const perguntasEmbaralhadas = shuffleArray(perguntas);

    // exibir perguntas e respostas na tela
    perguntasEmbaralhadas.forEach(pergunta => {
        shuffleArray(pergunta.respostas);
    });

    // função para criar elementos HTML para as perguntas e respostas
    let perguntaAtual = 0;
    let respostasCorretas = 0;

    function exibirPergunta() {
        const secaoResposta = document.getElementById('secaoResposta');
        // limpar secaoResposta
        secaoResposta.innerHTML = '';

        // obtém a pergunta atual no array
        const pergunta = perguntas[perguntaAtual];

        // cria um elemento html div
        const divPergunta = document.createElement('div');
        // adiciona a classe pergunta
        divPergunta.classList.add('pergunta');
        // define o conteudo de texto da div como a pergunta
        divPergunta.textContent = pergunta.pergunta;

        // criacao de div para inserir as opcoes de resposta
        const divRespostas = document.createElement('div');
        divRespostas.classList.add('respostas');

        // geracao das respostas através do forEach com os parametros de resposta e o index
        pergunta.respostas.forEach((resposta, index) => {
            const divResposta = document.createElement('div');
            divResposta.classList.add('resposta');
            divResposta.textContent = resposta.texto;
            // define atributo de data-correta para verificar se é a resposta certa
            divResposta.dataset.correta = resposta.correta;
            // define atributo data-indice para identificar o indice da resposta
            divResposta.dataset.indice = index;

            divResposta.addEventListener('click', conferirResposta);

            // insere a resposta na divRespostas
            divRespostas.appendChild(divResposta);
        });

        divPergunta.appendChild(divRespostas);
        secaoResposta.appendChild(divPergunta);
    }

    function conferirResposta(event) {
        // o evento é utilizado como argumento para identificar qual elemento foi clicado
        const respostaClicada = event.target;
        // verifica se a resposta clicada é a resposta correta através do data-correta === "true"
        const respostaCorreta = respostaClicada.dataset.correta === 'true';

        const conclusaoQuestoes = document.getElementById('conclusaoQuestoes');
        const tituloFimQuestoes = document.getElementById('tituloFimQuestoes');
        const textoFimQuestoes = document.getElementById('textoFimQuestoes');

        const botaoFimQuestoesProsseguir = document.getElementById('botaoFimQuestoesProsseguir');
        const botaoFimQuestoesTentarNovamente = document.getElementById('botaoFimQuestoesTentarNovamente');

        // se a resposta escolhida foi a correta
        if (respostaCorreta) {
            // a classe correta é adicionada para exibir ao usuário se ele acertou ou não
            respostaClicada.classList.add('correta');
            // adiciona 25 pontos à variavel respostas corretas
            respostasCorretas += 25;
        } else {
            respostaClicada.classList.add('errada');
            respostaClicada.style.backgroundColor = "red";
        }

        // incrementa o valor de perguntaAtual
        perguntaAtual++;
        if (perguntaAtual < perguntas.length) {
            // após 250ms, exibir pergunta avançará para a próxima
            setTimeout(exibirPergunta, 250);
        }

        // se a pontuacao de respostas corretas for maior ou igual a 75
        else if (respostasCorretas >= 75) {
            secaoQuestoes.style.display = "none";
            conclusaoQuestoes.style.display = "flex";

            tituloFimQuestoes.textContent = "Parabéns, você conseguiu!";
            // concatenacao do texto e a % de acertos
            textoFimQuestoes.textContent = `Você acertou ${respostasCorretas}% das questões, clique aqui para ir para a próxima fase: `
            botaoFimQuestoesProsseguir.style.display = "flex";
            botaoFimQuestoesTentarNovamente.style.display = "none";

            // variavel para registrar o capitulo atual
            let capituloAtual = 0;

            // Ao clicar no botao "Prosseguir"
            botaoFimQuestoesProsseguir.addEventListener('click', () => {
                // se o capitulo atual for menor que o comprimento dos capitulos - 1, a funcao passa para o proximo capitulo
                if (capituloAtual < capitulos.length - 1) {
                    // Oculta o capítulo atual e exibe o próximo capítulo
                    capitulos[capituloAtual].style.display = 'none';
                    capituloAtual++;
                    capitulos[capituloAtual].style.display = 'flex';

                    // declara o novoMarcador como a imagem do sinal de check e salva no localStorage
                    const novoMarcadorI = "url(../icons-cursos/checkConclusaoCap.svg)";
                    marcadorConclusaoCapI1.style.backgroundImage = novoMarcadorI;
                    localStorage.setItem('marcadorConclusaoCapI1', novoMarcadorI);
                } else {
                    // Se atingir o último capítulo, a secao de questoes é ocultada
                    secaoQuestoes.style.display = 'none';
                }
            });

        }

        // se a % de acertos for menor que 75%
        else {
            secaoQuestoes.style.display = "none";
            conclusaoQuestoes.style.display = "flex";

            tituloFimQuestoes.textContent = "Tente novamente!"
            textoFimQuestoes.textContent = `Você acertou ${respostasCorretas}% das questões, clique aqui para tentar novamente: `
            botaoFimQuestoesTentarNovamente.style.display = "flex";

            // ao clicar em tentar novamente, o questionario é resetado e as perguntas e respostas são novamente embaralhadas
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

// ----------  ----------  ----------  ----------  ----------  ----------  ----------  -----------

// QUIZ CAP 2
function questionario2() {
    const perguntas2 = [
        {
            pergunta: "Qual é a principal diferença entre ações e títulos de renda fixa?",
            respostas: [
                { texto: "Ações representam empréstimos, enquanto títulos representam propriedade em uma empresa", correta: true },
                { texto: "Ações oferecem retornos fixos, enquanto títulos são mais voláteis", correta: false },
                { texto: "Ações não pagam dividendos, enquanto títulos pagam juros fixos", correta: false },
                { texto: "Ações são mais seguras que títulos", correta: false }
            ]
        },
        {
            pergunta: "O que é um indicador de mercado utilizado na análise técnica?",
            respostas: [
                { texto: "Preço/Lucro (P/L)", correta: false },
                { texto: "Retorno sobre Patrimônio Líquido (ROE)", correta: false },
                { texto: "Lucro Operacional", correta: false },
                { texto: "Média Móvel", correta: true }
            ]
        },
        {
            pergunta: "Qual é a vantagem de investir em fundos de investimento?",
            respostas: [
                { texto: "Maior controle sobre os investimentos", correta: false },
                { texto: "Retornos garantidos", correta: false },
                { texto: "Risco mínimo", correta: false },
                { texto: "Acesso a uma carteira diversificada mesmo com baixos montantes de investimento", correta: true }
            ]
        },
        {
            pergunta: "Qual é a importância da análise fundamentalista no mercado de ações?",
            respostas: [
                { texto: "Avalia o histórico de preços das ações", correta: false },
                { texto: "Analisa os fundamentos financeiros das empresas", correta: true },
                { texto: "Baseia-se apenas na intuição do investidor", correta: false },
                { texto: "Considera apenas os fatores técnicos do mercado", correta: false }
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

                    const novoMarcadorI2 = "url(../icons-cursos/checkConclusaoCap.svg)";
                    marcadorConclusaoCapI2.style.backgroundImage = novoMarcadorI2;
                    localStorage.setItem('marcadorConclusaoCapI2', novoMarcadorI2);
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
            pergunta: "Qual é a vantagem principal da estratégia de longo prazo ao investir?",
            respostas: [
                { texto: "Menos impacto das flutuações de curto prazo", correta: true },
                { texto: "Maior volatilidade", correta: false },
                { texto: "Lucros imediatos garantidos", correta: false },
                { texto: "Menos diversificação", correta: false }
            ]
        },
        {
            pergunta: "Quais são alguns fatores que os investidores consideram ao escolher ações para investir?",
            respostas: [
                { texto: "Apenas o preço das ações", correta: false },
                { texto: "Histórico de dividendos", correta: false },
                { texto: "Notícias recentes sobre a empresa", correta: false },
                { texto: "Todos os outros itens", correta: true }
            ]
        },
        {
            pergunta: "O que representa o índice de Sharpe em investimentos?",
            respostas: [
                { texto: "Depende do dia", correta: true },
                { texto: "Claro", correta: false },
                { texto: "Não", correta: false },
                { texto: "Adoro fazer programa", correta: false }
            ]
        },
        {
            pergunta: "O que é um portfólio de investimentos?",
            respostas: [
                { texto: "Uma única ação de uma empresa", correta: false },
                { texto: "Uma coleção de investimentos diversificados", correta: true },
                { texto: "Apenas investimentos de curto prazo", correta: false },
                { texto: "Um tipo específico de título de renda fixa", correta: false }
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

                    const novoMarcadorI3 = "url(../icons-cursos/checkConclusaoCap.svg)";
                    marcadorConclusaoCapI3.style.backgroundImage = novoMarcadorI3;
                    localStorage.setItem('marcadorConclusaoCapI3', novoMarcadorI3);
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
                respostasCorretas3 = 0;
                exibirPergunta3(shuffleArray(perguntas3));

                secaoQuestoes3.style.display = "flex";
                conclusaoQuestoes3.style.display = "none";
            });
        };
    };
    exibirPergunta3();
}