// Gráfico Dashboard

function registrarTempoNoSite() {
    const agora = new Date();
    const dataAtual = `${agora.getFullYear()}-${(agora.getMonth() + 1).toString().padStart(2, '0')}-${agora.getDate().toString().padStart(2, '0')}`;

    let tempoNoSite = parseInt(localStorage.getItem(dataAtual)) || 0;

    localStorage.setItem(dataAtual, tempoNoSite);
}

// Função para registrar o momento em que o usuário entra no site
function registrarEntradaNoSite() {
    const agora = new Date();
    localStorage.setItem('entradaSite', agora.getTime());
}

// Função para calcular o tempo gasto desde a entrada no site
function calcularTempoGasto() {
    const entradaSite = parseInt(localStorage.getItem('entradaSite')) || new Date().getTime();
    const agora = new Date().getTime();
    const tempoGasto = (agora - entradaSite) / 1000; // Calcula o tempo em segundos

    return tempoGasto;
}

let graficoSemanal = null; // Variável para armazenar o gráfico

function atualizarGrafico(dias, tempos) {
    if (!graficoSemanal) {
        const ctx = document.getElementById('chartCanvas');
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
    }  else {
        graficoSemanal.data.labels = dias;
        graficoSemanal.data.datasets[0].data = tempos.map(segundos => Math.floor(segundos / 60));
        graficoSemanal.update();
    }
}

function obterDadosGrafico() {
    const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const dias = [];
    const tempos = [];

    // Encontrar o domingo mais próximo
    const dataAtual = new Date();
    const diaSemana = dataAtual.getDay();
    dataAtual.setDate(dataAtual.getDate() - diaSemana);

    for (let i = 0; i < 7; i++) {
        const data = new Date(dataAtual);
        data.setDate(data.getDate() + i);

        const dataFormatada = `${data.getFullYear()}-${(data.getMonth() + 1).toString().padStart(2, '0')}-${data.getDate().toString().padStart(2, '0')}`;
        const tempoNoSite = parseInt(localStorage.getItem(dataFormatada)) || 0;

        dias.push(diasDaSemana[data.getDay()]);
        tempos.push(tempoNoSite);
    }

    return { dias, tempos };
}

function renderizarGraficoSemanal() {
    registrarEntradaNoSite(); // Registra a entrada do usuário no site

    const { dias, tempos } = obterDadosGrafico();
    atualizarGrafico(dias, tempos);

    setInterval(() => {
        const tempoNoSite = calcularTempoGasto(); // Calcula o tempo gasto desde a entrada

        registrarTempoNoSite(tempoNoSite); // Atualiza o tempo no site no localStorage

        const { dias: novosDias, tempos: novosTempos } = obterDadosGrafico();
        atualizarGrafico(novosDias, novosTempos);
    }, 5000); // Atualiza a cada 5 segundos (5000 milissegundos)
}

function registrarTempoNoSite(tempoNoSite) {
    const agora = new Date();
    const dataAtual = `${agora.getFullYear()}-${(agora.getMonth() + 1).toString().padStart(2, '0')}-${agora.getDate().toString().padStart(2, '0')}`;

    localStorage.setItem(dataAtual, tempoNoSite);
}

window.addEventListener('load', renderizarGraficoSemanal);