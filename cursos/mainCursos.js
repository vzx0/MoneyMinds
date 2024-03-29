// executar funcoes quando a página carrega
document.addEventListener("DOMContentLoaded", function () {
    ocultarConteudos;
    secaoVideo.style.display = "flex";

    ocultarConteudos2;
    secaoVideo2.style.display = "flex";

    ocultarConteudos3;
    secaoVideo3.style.display = "flex";
})

// ---------- menu burger ----------
// cap1
// definindo constantes para capturar os elementos
const opcaoVideo = document.getElementById('opcaoVideo');
const opcaoTexto = document.getElementById('opcaoTexto');
const opcaoQuestoes = document.getElementById('opcaoQuestoes');


const secaoVideo = document.getElementById('secaoVideo');
const secaoTexto = document.getElementById('secaoTexto');
const secaoQuestoes = document.getElementById('secaoQuestoes');

const principal = document.querySelector('.principal');

// abrir e fechar menu mobile
// seleciona todos elementos com a class "capituloMenu" e armazena em capituloMenus
const capituloMenus = document.querySelectorAll('.capituloMenu');

const menuMobile = document.getElementById('menuMobile');
const escurecimentoFundo = document.getElementById('escurecimentoFundo');

// funcoes onclick para abrir e fechar menu
function abrirMenuMobile() {
    escurecimentoFundo.style.display = 'flex';

    // após 50 milissegundos a funcao é executada
    setTimeout(() => {
        // tornando o escurecimentoFundo visivel através da opacidade
        escurecimentoFundo.style.opacity = '1';

        // movendo o menuMobile para a tela, fazendo com que o o mesmo fique a 0px de distancia do lado direito da página
        menuMobile.style.right = '0';
    }, 50);
    menuMobile.style.display = 'flex';
}

function fecharMenuMobile(){
        escurecimentoFundo.style.opacity = '0';
    setTimeout(() => {
        escurecimentoFundo.style.display = 'none';
        menuMobile.style.right = '-300px';
    }, 500);
    setTimeout(() => {
        menuMobile.style.display = 'none';
    }, 1500);
}



// Verifica se está no modo mobile ou original/desktop
const mobile = window.matchMedia('(max-width: 400px)').matches;
const original = window.matchMedia('min-width: 401px').matches;

if (mobile) {
    // loop forEach que percorre cada elemento no array capituloMenus
    capituloMenus.forEach(capituloMenu => {
        // Move cada elemento capituloMenu para o menuMobile
        menuMobile.appendChild(capituloMenu);
    });
}

// caso seja a versão original
const menuDesktop = document.getElementById('menuDesktop');

if (original) {
    capituloMenus.forEach(capituloMenu => {
        // Move cada elemento capituloMenu para o menuDesktop
        menuDesktop.appendChild(capituloMenu);
    });
}

// ao clicar na opcao, a mesma executa uma funcao que oculta as demais secoes da página e exibe a pagina correspondente ao botao
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
// declaracao de arrays para botoesCapitulo e capitulos
const botoesCapitulo = [];
const capitulos = [];

// loop for itera até o numero total de capitulos (3)
for (let i = 1; i <= 3; i++) {

    // envia para o array botoesCapitulo, o elemento correspondente ao id resultante da concatenacao: botaoCapitulo e o valor de i
    botoesCapitulo.push(document.getElementById(`botaoCapitulo${i}`));
    capitulos.push(document.getElementById(`capitulo${i}`));

    // acessa cada botao especifico do array
    botoesCapitulo[i - 1].addEventListener('click', () => {
        capitulos.forEach((capitulo, index) => {
            // se o indice do capitulo for igual a i - 1
            if (index === i - 1) {
                capitulo.style.display = 'flex';
            } else {
                capitulo.style.display = 'none';
            }
        });
    });
}


// ---------- curso VIDEO ----------
// arrays com elementos de cada secao
const videos = [
    document.getElementById('video1'),
    document.getElementById('video2'),
    document.getElementById('video3')
];

const botoes = [
    document.getElementById('videoBotao1'),
    document.getElementById('videoBotao2'),
    document.getElementById('videoBotao3')
];

const barrasProgresso = [
    document.getElementById('progresso1'),
    document.getElementById('progresso2'),
    document.getElementById('progresso3')
];

videos.forEach((video, index) => {
    // quando o video termina, o botao com index correspondente é ativado
    video.addEventListener('ended', function () {
        // tornando falsa, a tag disabled
        botoes[index].disabled = false;
        botoes[index].style.backgroundColor = "var(--corBotaoDestaque)";
        // alterando o icone do cursor
        botoes[index].style.cursor = "pointer";
    });

    botoes[index].addEventListener('click', () => {
        ocultarConteudos();
        secaoTexto.style.display = 'flex';
        principal.style.height = '100%';
        opcaoTexto.disabled = "false"

        // remove a classe desativado
        opcaoTexto.classList.remove('desativado');
    });

    // funcao para a progressao da barra dentro do botao "Prosseguir"
    video.addEventListener('timeupdate', () => {
        // constante progresso extrai o momento atual do video, dividindo pela duracao extraida do video e multiplicando por 100
        const progresso = (video.currentTime / video.duration) * 100;

        // a barra de progresso correspondente recebe a largura equivalente a % de progresso do video
        barrasProgresso[index].style.width = progresso + '%';
    });
});

