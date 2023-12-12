// executar funcoes quando a página carrega
document.addEventListener("DOMContentLoaded", function () {
    ocultarPaginas();
    dashboard.style.display = "flex";
})

// Definicao de variaveis que armazenam elementos através de id
alteracaoPerfil = document.getElementById('alteracaoPerfil')
dashboard = document.getElementById('dashboard');
cursosDashboard = document.getElementById('cursos');
ranking = document.getElementById('ranking');

// selecao do elemento com a classe "principal"
principal = document.querySelector('.principal');

// verifica se a largura da página é de no máximo 400px
// .matches retorna valor Boolean (Verdadeiro ou false)
const mobile = window.matchMedia('(max-width: 400px)').matches;

function ocultarPaginas() {
    alteracaoPerfil.style.display = "none"
    dashboard.style.display = "none";
    cursosDashboard.style.display = "none";
    ranking.style.display = "none";
}

// funcao para exibir a página com base no "onclick" do botao
function exibirAlteracaoPerfil() {
    // se a página já estiver sendo exibida, a funcao é encerrada
    if (alteracaoPerfil.style.display === "flex") {
        return
    } else {
        // se não, as outras páginas são ocultadas e a altura do conteudo é definido para ocupar toda a altura da página
        ocultarPaginas();
        alteracaoPerfil.style.display = "flex";

        principal.style.height = "100vh";
    }
}

function exibirDashboard() {
    if (dashboard.style.display === "flex") {
        return
    } else {
        ocultarPaginas();
        dashboard.style.display = "flex";

        principal.style.height = "auto"

        // neste caso, se o parametro mobile for verdadeiro, a altura do conteudo é definida para ocupar 100% do elemento "pai"
        // para se ajustar na responsividade
        if (mobile){
            principal.style.height = "100%";
        }
    }
}
function exibirCursos() {
    if (cursosDashboard.style.display === "flex") {
        return
    } else {
        ocultarPaginas();
        cursosDashboard.style.display = "flex";

        principal.style.height = "100%";
    }
}
function exibirRanking() {
    if (ranking.style.display === "flex") {
        return
    } else {
        ocultarPaginas();
        ranking.style.display = "flex";

        principal.style.height = "100vh";
    }
}


// ---------- CURSOS ----------
// seleciona e retorna todos os elementos com a classe curso em uma especie de "array"
let cursos = document.querySelectorAll('.curso');

// a funcao é chamada com base no parametro event
function mostrarTexto(event) {
    // aqui o elemento com a classe informacoesCurso que o usuário manipulou é selecionado
    let informacoesCurso = event.currentTarget.querySelector('.informacoesCurso');

    // entao se a a altura do elemento for diferente de 250px, a altura é definida como 250px
    if (informacoesCurso.style.height !== "250px") {
        informacoesCurso.style.height = "250px";
    }

    let informacoesTexto = event.currentTarget.querySelector('.informacoesTexto');

    // se o parametro informacoesTexto for verdadeiro
    if (informacoesTexto) {
        // define um texto diferente para cada curso

        // define o texto como vazio
        let texto = "";

        // se o elemento que o usuário manipulou possui o id correto, um texto específico é definido para cada banner
        if (event.currentTarget.id === "cursoInvestimentos") {
            texto = "Descubra o poder das finanças e transforme sua relação com o dinheiro neste curso abrangente sobre finanças.";
        } else if (event.currentTarget.id === "cursoTecnologia") {
            texto = "Explore o mundo da tecnologia e descubra as mais recentes inovações neste curso emocionante.";
        } else if (event.currentTarget.id === "cursoMarketing") {
            texto = "Aprenda estratégias de marketing eficazes e melhore suas habilidades neste curso dinâmico.";
        }

        // define o textContent do banner = ao respectivo texto
        informacoesTexto.textContent = texto;

        // animacao para o surgimento do texto de forma suave
        informacoesTexto.style.opacity = '1';

        // mover o elemento no eixo Y para 0
        informacoesTexto.style.transform = 'translateY(0)';
    }
}

// função para esconder o texto ao retirar o cursor
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

// eventos de mouseover e mouseleave para cada curso cada curso
cursos.forEach(curso => {
    curso.addEventListener("mouseover", mostrarTexto);
    curso.addEventListener("mouseleave", esconderTexto);
});


// ---------- PERFIL ----------
// popup imagem
popupImagem = document.getElementById('alteracaoPerfil-imagem')

// funcoes onclick para exibicao do popup
function popupFoto() {
    popupImagem.style.display = "flex";
}

function fecharPopupFoto() {
    popupImagem.style.display = "none";
}

// gerar foto
var mediaStream;

function abrirCamera() {
    // pega a midia de vídeo da camera do usuario
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(function (stream) {

            // entao ao permitir o acesso a camera, o video da mesma é exibido na constante areaVideo
            mediaStream = stream;
            const areaVideo = document.getElementById('camera');
            areaVideo.srcObject = stream;
        })

        // se um erro for detectado ou o acesso não for permitido, essa mensagem é exibida no console
        .catch(function (error) {
            console.error('Erro ao acessar a câmera', error)
        })
};

// desativa o acesso ao video da camera e a exibicao na tela
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
    // "desenha" o video da camera a partir do ponto 0 dos eixos x e y do canvas
    context.drawImage(areaVideo, 0, 0, canvas.width, canvas.height);

    // transforma o conteudo do canva na foto de perfil
    const imageDataURL = canvas.toDataURL();
    const fotoDiv = document.getElementById('foto');

    fotoDiv.style.backgroundImage = `url(${imageDataURL})`;

    // armazena a foto no localStorage
    localStorage.setItem('fotoPerfil', imageDataURL);

    // define a imagem do perfil com a foto capturada
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
    // define a constante fotoSalva como o item fotoPerfil do localStorage
    const fotoSalva = localStorage.getItem('fotoPerfil');

    // se houver uma fotoSalva
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

// funcao para trocar de nome com o parametro de novoNome
function trocarNome(novoNome) {
    // a constante inputNome recebe o novo nome cortando espacos em branco no inicio e fim com .trim()
    // se não haver nada no .trim() o inputNome é definido como usuário
    // || = OU
    const inputNome = novoNome.trim() || 'Usuário';
    const nomes = document.querySelectorAll('.nomeDeUsuario');

    // cada elemento que exibe o nome de usuario recebe o valor do inputNome
    nomes.forEach(nome => {
        nome.textContent = inputNome;
    });

    // armazena o novo nome no localStorage
    localStorage.setItem('nomeUsuario', inputNome);
}

// Carregar o nome armazenado ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
    const nomeArmazenado = localStorage.getItem('nomeUsuario');

    if (nomeArmazenado) {
        // se haver um nome armazenado no local storage, o nome é trocado para este
        trocarNome(nomeArmazenado);
    }
});

// Adiciona um evento para o botão
const botaoTrocarNome = document.getElementById('botaoTrocarNome');
botaoTrocarNome.addEventListener('click', function () {
    // a funcao trocar nome recebe o parametro novoNome, que é obtido extraindo o valor do inputNome
    const novoNome = document.getElementById('inputNome').value;
    trocarNome(novoNome);
});