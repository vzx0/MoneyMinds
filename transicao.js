

document.addEventListener('DOMContentLoaded', function () {
    const cortinaEsquerda = gsap.to(".cortina-esquerda", { width: "0%", duration: 1.5, ease: "power2.out", delay: 0.5 });
    const cortinaDireita = gsap.to(".cortina-direita", { width: "0%", duration: 1.5, ease: "power2.out", delay: 0.5 });

    // Combine as animações para esperar que ambas terminem antes de ocultar o contêiner
    gsap.timeline({ onComplete: fecharIntro }).add(cortinaEsquerda).add(cortinaDireita, 0);
});

// - Explicação do GSAP para vcs
// - .add adiciona a animação a timeline, no caso adicionamos as funções:
// - 'cortinaEsquerda' / 'cortinaDireita'
// - Nós utilizamos o 'gsap.timeline' pois é uma opção do GSAP de sincronizar várias
// - animações juntas..
// - Por fim, utilizamos o tal do "onComplete", que quando a transição é completada
// - ele ativa um callback, e assim, escolhemos a função que ele quer ativar no callback
// - no caso, o callbakc foi a função abaixo, que utiliza o display 'none' para remover a
// - div da intro, e é isso

const fecharIntro = () => {
    const introContainer = document.querySelector('.cortina-container');
    introContainer.style.display = 'none';
};

// menuMobile
// Verifica se a largura da página é menor ou igual a 425px
const mobile = window.matchMedia('(max-width: 425px)').matches;
const iconMenuMobile = document.getElementById('iconMenuMobile');

const inicioMenuMobile = document.getElementById('inicioMenuMobile');
const escurecimentoFundo = document.getElementById('escurecimentoFundo');

function abrirInicioMenuMobile() {
    escurecimentoFundo.style.display = 'flex';
    setTimeout(() => {
        escurecimentoFundo.style.opacity = '1';
        inicioMenuMobile.style.right = '0';
    }, 50);
    inicioMenuMobile.style.display = 'flex';
}

function fecharInicioMenuMobile() {
    escurecimentoFundo.style.opacity = '0';
    setTimeout(() => {
        escurecimentoFundo.style.display = 'none';
        inicioMenuMobile.style.right = '-300px';
    }, 500);
    setTimeout(() => {
        inicioMenuMobile.style.display = 'none';
    }, 1500);
}

