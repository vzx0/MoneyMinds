// executar funcoes quando a página carrega
document.addEventListener("DOMContentLoaded", function () {
    trocarNome()
})

// funcoes trocar pagina
alteracaoPerfil = document.getElementById('alteracaoPerfil')
dashboard = document.getElementById('dashboard');
cursosDashboard = document.getElementById('cursos');
ranking = document.getElementById('ranking');

principal = document.querySelector('.principal');

function exibirAlteracaoPerfil() {
    if (alteracaoPerfil.style.display === "flex") {
        return
    } else {
        alteracaoPerfil.style.display = "flex"
        dashboard.style.display = "none";
        cursosDashboard.style.display = "none";
        ranking.style.display = "none";
        atividades.style.display = "none";

        principal.style.height = "100vh"
    }
}

function exibirDashboard() {
    if (dashboard.style.display === "flex") {
        return
    } else {
        alteracaoPerfil.style.display = "none"
        dashboard.style.display = "flex";
        cursosDashboard.style.display = "none";
        ranking.style.display = "none";
        atividades.style.display = "none";

        principal.style.height = "100vh"
    }
}
function exibirCursos() {
    if (cursosDashboard.style.display === "flex") {
        return
    } else {
        alteracaoPerfil.style.display = "none"
        dashboard.style.display = "none";
        cursosDashboard.style.display = "flex";
        ranking.style.display = "none";
        atividades.style.display = "none";

        principal.style.height = "100%"
    }
}
function exibirRanking() {
    if (ranking.style.display === "flex") {
        return
    } else {
        alteracaoPerfil.style.display = "none"
        dashboard.style.display = "none";
        cursosDashboard.style.display = "none";
        ranking.style.display = "flex";
        atividades.style.display = "none";

        principal.style.height = "100vh"
    }
}


// ---------- CURSOS ----------
let cursos = document.querySelectorAll('.curso');

function mostrarTexto(event) {
    let informacoesCurso = event.currentTarget.querySelector('.informacoesCurso');
    if (informacoesCurso.style.height !== "250px") {
        informacoesCurso.style.height = "250px";
    }

    let informacoesTexto = event.currentTarget.querySelector('.informacoesTexto');


    if (informacoesTexto) {
        // Definir um texto diferente para cada curso
        let texto = "";
        if (event.currentTarget.id === "cursoInvestimentos") {
            texto = "Descubra o poder das finanças e transforme sua relação com o dinheiro neste curso abrangente sobre finanças.";
        } else if (event.currentTarget.id === "cursoTecnologia") {
            texto = "Explore o mundo da tecnologia e descubra as mais recentes inovações neste curso emocionante.";
        } else if (event.currentTarget.id === "cursoMarketing") {
            texto = "Aprenda estratégias de marketing eficazes e melhore suas habilidades neste curso dinâmico.";
        }

        informacoesTexto.textContent = texto;
        informacoesTexto.style.opacity = '1';
        informacoesTexto.style.transform = 'translateY(0)';
    }
}

// Definir a função para esconder o texto ao retirar o cursor
function esconderTexto(event) {
    let informacoesCurso = event.currentTarget.querySelector('.informacoesCurso');
    if (informacoesCurso.style.height !== "175px") {
        informacoesCurso.style.height = "175px";
    }

    let informacoesTexto = event.currentTarget.querySelector('.informacoesTexto');

    if (informacoesTexto) {
        informacoesTexto.textContent = "";
        informacoesTexto.style.opacity = '0';
        informacoesTexto.style.transform = 'translateY(-20px)';
    }
}

// Adicionar os eventos de mouseover e mouseleave a cada curso
cursos.forEach(curso => {
    curso.addEventListener("mouseover", mostrarTexto);
    curso.addEventListener("mouseleave", esconderTexto);
});


// ---------- PERFIL ----------
// popup imagem
popupImagem = document.getElementById('alteracaoPerfil-imagem')

function popupFoto() {
    popupImagem.style.display = "flex";
}

function fecharPopupFoto() {
    popupImagem.style.display = "none";
}

// gerar foto
var mediaStream;

function abrirCamera() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(function (stream) {
            mediaStream = stream;
            const areaVideo = document.getElementById('camera');
            areaVideo.srcObject = stream;
        })
        .catch(function (error) {
            console.error('Erro ao acessar a câmera', error)
        })
};

function fecharCamera() {
    navigator.mediaDevices.getUserMedia({ video: false });

    const areaVideo = document.getElementById('camera')

    areaVideo.srcObject = null;
    mediaStream = null;
}

let downloadLink;
const perfilImg = document.getElementById('perfil-img');
const perfilImgPagina = document.getElementById('imagemPerfil');

function tirarFoto() {
    const areaVideo = document.getElementById('camera');
    const canvas = document.createElement('canvas');

    canvas.width = areaVideo.videoWidth;
    canvas.height = areaVideo.videoHeight;

    const context = canvas.getContext('2d');
    context.drawImage(areaVideo, 0, 0, canvas.width, canvas.height);

    const imageDataURL = canvas.toDataURL();
    const fotoDiv = document.getElementById('foto');

    fotoDiv.style.backgroundImage = `url(${imageDataURL})`;

    // armazena a foto no localStorage
    localStorage.setItem('fotoPerfil', imageDataURL);

    // def img do perfil com a foto capturada
    perfilImg.style.backgroundImage = `url(${imageDataURL})`;
    perfilImg.style.backgroundSize = "cover";

    perfilImgPagina.style.backgroundImage = `url(${imageDataURL})`;
    perfilImgPagina.style.backgroundSize = "cover";

    // remove o botão antigo
    if (downloadLink) {
        downloadLink.remove();
    }

    downloadLink = document.createElement('a');
    downloadLink.href = imageDataURL;
    downloadLink.download = 'foto.png';
    downloadLink.textContent = 'Clique para salvar';
    downloadLink.className = 'botaoPopup botaoPopupMaior';

    document.querySelector('#areaFoto').appendChild(downloadLink);
}

// Função para verificar e carregar a foto do localStorage ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
    const fotoSalva = localStorage.getItem('fotoPerfil');

    if (fotoSalva) {
        const fotoDiv = document.getElementById('foto');
        fotoDiv.style.backgroundImage = `url(${fotoSalva})`;

        perfilImg.style.backgroundImage = `url(${fotoSalva})`;
        perfilImg.style.backgroundSize = "cover";

        perfilImgPagina.style.backgroundImage = `url(${fotoSalva})`;
        perfilImgPagina.style.backgroundSize = "cover";

        // Cria o botão para baixar a foto caso exista no localStorage
        downloadLink = document.createElement('a');
        downloadLink.href = fotoSalva;
        downloadLink.download = 'foto.png';
        downloadLink.textContent = 'Clique para salvar';
        downloadLink.className = 'botaoPopup botaoPopupMaior ocultarResponsividade';
        downloadLink.id = 'apagarBotao'

        document.querySelector('#areaFoto').appendChild(downloadLink);
    }
});

function trocarNome(novoNome) {
    const inputNome = novoNome.trim() || 'Usuário';
    const nomes = document.querySelectorAll('.nomeDeUsuario');

    nomes.forEach(nome => {
        nome.textContent = inputNome;
    });

    // Armazenar o novo nome no localStorage
    localStorage.setItem('nomeUsuario', inputNome);
}

// Carregar o nome armazenado ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
    const nomeArmazenado = localStorage.getItem('nomeUsuario');

    if (nomeArmazenado) {
        trocarNome(nomeArmazenado);
    }
});

// Adiciona um evento para o botão
const botaoTrocarNome = document.getElementById('botaoTrocarNome');
botaoTrocarNome.addEventListener('click', function () {
    const novoNome = document.getElementById('inputNome').value;
    trocarNome(novoNome);
});

// grafico dashboard
function registrarTempoNoSite() {
    const agora = new Date();
    const dataAtual = `${agora.getFullYear()}-${agora.getMonth() + 1}-${agora.getDate()}`;

    let tempoNoSite = parseInt(localStorage.getItem(dataAtual)) || 0;

    const tempoGasto = calcularTempoGasto();
    tempoNoSite += tempoGasto;

    // Limitar o tempo total a 6 horas (21600 segundos)
    tempoNoSite = Math.min(tempoNoSite, 21600);

    localStorage.setItem(dataAtual, tempoNoSite);
}

function calcularTempoGasto() {
    let tempoGasto = parseInt(localStorage.getItem('tempoGasto')) || 0;

    const timer = setInterval(() => {
        tempoGasto++;

        // Verificar se o tempo gasto excedeu 6 horas
        if (tempoGasto > 21600) {
            clearInterval(timer); // Parar o timer quando exceder 6 horas
        }

        localStorage.setItem('tempoGasto', tempoGasto);
    }, 1000);

    return tempoGasto;
}

calcularTempoGasto();

// Chamar a função para calcular o tempo gasto
calcularTempoGasto();

function renderizarGraficoSemanal() {
    setTimeout(() => {
        const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
        const dias = [];
        const tempos = [];

        // Obter os dados do localStorage e prepará-los para o gráfico
        for (let i = 0; i < 7; i++) {
            const data = new Date();
            data.setDate(data.getDate() - i); // Obter as datas dos últimos 7 dias

            const dataFormatada = `${data.getFullYear()}-${data.getMonth() + 1}-${data.getDate()}`;
            const tempoNoSite = parseInt(localStorage.getItem(dataFormatada)) || 0;

            dias.unshift(diasDaSemana[data.getDay()]); // Adicionar o dia da semana
            tempos.unshift(tempoNoSite); // Adicionar o tempo gasto no site
        }

        // Use Chart.js para renderizar o gráfico dentro da div específica
        const ctx = document.getElementById('chartCanvas');

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: dias,
                datasets: [{
                    label: 'Tempo no Site (segundos)',
                    data: tempos,
                    backgroundColor: '#36a2eb',
                    borderColor: '#36a2eb',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                },
                layout: {
                    padding: 10
                },
                plugins: {
                    tooltip: {
                        titleFont: {
                            size: 16,
                            weight: 'bold',
                            color: '#ffffff'
                        },
                        bodyFont: {
                            size: 14,
                            weight: 'normal',
                            color: '#ffffff'
                        }
                    }
                }
            }
        });
    }, 500); // Aguarda 1 segundo para garantir que os dados estejam prontos
}

// Chamar a função para renderizar o gráfico ao carregar a página
window.addEventListener('load', renderizarGraficoSemanal);

