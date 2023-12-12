// Gráfico Dashboard
function registrarTempoNoSite() {

    // cria novo elemento date que armazena a data e hora atual
    const agora = new Date();

    // pega o ano, o mês + 1 (em js janeiro seria = 0, por isso o +1), convertendo para uma string (texto)
    // garantindo que o valor tenha pelo menos 2 digitos, executando o mesmo para o dia.
    const dataAtual = `${agora.getFullYear()}-${(agora.getMonth() + 1).toString().padStart(2, '0')}-${agora.getDate().toString().padStart(2, '0')}`;

    // pega a data atual, ou 0 se ainda não houver um número dataAtual no localStorage
    // parseInt transforma o valor em numero inteiro
    let tempoNoSite = parseInt(localStorage.getItem(dataAtual)) || 0;

    // armazena no local storage o tempo do usuario no site com base na data atual
    localStorage.setItem(dataAtual, tempoNoSite);
}

// função para registrar o momento em que o usuário entra no site
function registrarEntradaNoSite() {
    const agora = new Date();
    localStorage.setItem('entradaSite', agora.getTime());
}

// função para calcular o tempo gasto desde a entrada no site
function calcularTempoGasto() {
    // define a constante como um numero inteiro com base no item entradaSite do localStorage ou cria uma nova caso não haja
    const entradaSite = parseInt(localStorage.getItem('entradaSite')) || new Date().getTime();
    const agora = new Date().getTime();
    const tempoGasto = (agora - entradaSite) / 1000; // Calcula o tempo em segundos (getTime conta em milissegundos)

    return tempoGasto;
}

// variável para armazenar o gráfico
let graficoSemanal = null; 

// funcao para atualizar o grafico com base nos dias e no tempo
function atualizarGrafico(dias, tempos) {
    // se não houver um graficoSemanal
    if (!graficoSemanal) {
        // obtem o contexto do canvas em que o grafico sera "desenhado"
        const ctx = document.getElementById('chartCanvas');
        // estilizacao do grafico em chart.js
        graficoSemanal = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: dias,
                datasets: [{
                    label: 'Tempo no Site (minutos)',
                    data: tempos.map(segundos => Math.floor(segundos / 60)), // Converter para minutos
                    backgroundColor: '#36a2eb',
                    borderColor: '#36a2eb',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 60, // Limite máximo do eixo Y em minutos (1 hora)
                        ticks: {
                            stepSize: 5, // Intervalo das marcações do eixo Y em minutos
                            callback: function (value) {
                                return value + 'm';
                            },
                            color: 'white',
                            font: {
                                size: 14
                            }
                        }
                    },
                    x: {
                        ticks: {
                            color: 'white',
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        titleFont: {
                            size: 16,
                            weight: 'bold',
                            color: 'white'
                        },
                        bodyFont: {
                            size: 14,
                            weight: 'normal',
                            color: 'white'
                        }
                    }
                }
            }
        });
    } 
    // caso já exista um gráficoSemanal, somente as informacoes são atualizadas
    else {
        graficoSemanal.data.labels = dias;
        graficoSemanal.data.datasets[0].data = tempos.map(segundos => Math.floor(segundos / 60));
        graficoSemanal.update();
    }
}

function obterDadosGrafico() {
    // define a constante diasDaSemana como um array contendo os dias da semana
    const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    // define array de dias e tempos vazios
    const dias = [];
    const tempos = [];

    // encontrar o domingo mais próximo
    const dataAtual = new Date();
    const diaSemana = dataAtual.getDay();
    dataAtual.setDate(dataAtual.getDate() - diaSemana);

    // loop for que é executado 7 vezes para cada dia da semana
    for (let i = 0; i < 7; i++) {
        const data = new Date(dataAtual);
        data.setDate(data.getDate() + i);

        // formata a data em ANO-MES-DIA AAAA-MM-DD
        const dataFormatada = `${data.getFullYear()}-${(data.getMonth() + 1).toString().padStart(2, '0')}-${data.getDate().toString().padStart(2, '0')}`;

        const tempoNoSite = parseInt(localStorage.getItem(dataFormatada)) || 0;

        // envia os diasDaSemana para o array dias através de .push 
        dias.push(diasDaSemana[data.getDay()]);
        tempos.push(tempoNoSite);
    }

    // retorna os arrays dias e tempos preenchidos
    return { dias, tempos };
}

function renderizarGraficoSemanal() {
    registrarEntradaNoSite(); // chama a funcao que registra a entrada do usuário no site

    // extraindo as propriedades dias e tempos da funcao obterDadosGrafico
    const { dias, tempos } = obterDadosGrafico();
    atualizarGrafico(dias, tempos);

    // com o intervalo de 5 segundos
    setInterval(() => {
        const tempoNoSite = calcularTempoGasto();

        registrarTempoNoSite(tempoNoSite); // Atualiza o tempo no site no localStorage

        // desestruturacao da funcao obterDadosGrafico, em que o valor de dias é atribuido a novosDias, o mesmo ocorre com tempos.
        const { dias: novosDias, tempos: novosTempos } = obterDadosGrafico();
        atualizarGrafico(novosDias, novosTempos);
    }, 5000); // Atualiza a cada 5 segundos (5000 milissegundos)
}

function registrarTempoNoSite(tempoNoSite) {
    const agora = new Date();
    const dataAtual = `${agora.getFullYear()}-${(agora.getMonth() + 1).toString().padStart(2, '0')}-${agora.getDate().toString().padStart(2, '0')}`;

    localStorage.setItem(dataAtual, tempoNoSite);
}

// chama a funcao quando a página é carregada
window.addEventListener('load', renderizarGraficoSemanal);