// progresso em cada curso
let porcentagemProgressoInvestimento = 0;
let porcentagemProgressoTecnologia = 0;
let porcentagemProgressoMarketing = 0;

// função para ajustar as porcentagens para uma escala de 0 a 100
function ajustarPara100(valor) {
    return (valor / 4) * 100;
}

// Funções de progresso definidas fora do bloco condicional
function progressoInvestimento() {
    const circuloInvestimento = document.querySelector('#circuloProgressoInvestimento');
    const porcentagemAjustada = ajustarPara100(porcentagemProgressoInvestimento);

    document.getElementById("porcentagemProgressoInvestimento").innerHTML = porcentagemAjustada + "%";
    circuloInvestimento.style.strokeDashoffset = 440 - (440 * porcentagemAjustada) / 100;
}

function progressoTecnologia() {
    const circuloInvestimento = document.querySelector('#circuloProgressoTecnologia');
    const porcentagemAjustada = ajustarPara100(porcentagemProgressoTecnologia);

    document.getElementById("porcentagemProgressoTecnologia").innerHTML = porcentagemAjustada + "%";
    circuloInvestimento.style.strokeDashoffset = 440 - (440 * porcentagemAjustada) / 100;
}

function progressoMarketing() {
    const circuloInvestimento = document.querySelector('#circuloProgressoMarketing');
    const porcentagemAjustada = ajustarPara100(porcentagemProgressoMarketing);

    document.getElementById("porcentagemProgressoMarketing").innerHTML = porcentagemAjustada + "%";
    circuloInvestimento.style.strokeDashoffset = 440 - (440 * porcentagemAjustada) / 100;
}

document.addEventListener('DOMContentLoaded', function () {
    if (window.location.href.includes('perfil.html')) {
        // Recuperar os valores do localStorage
        porcentagemProgressoInvestimento = parseInt(localStorage.getItem('porcentagemProgressoInvestimento')) || 0;
        porcentagemProgressoTecnologia = parseInt(localStorage.getItem('porcentagemProgressoTecnologia')) || 0;
        porcentagemProgressoMarketing = parseInt(localStorage.getItem('porcentagemProgressoMarketing')) || 0;

        // Exibir o progresso com os valores recuperados
        progressoInvestimento();
        progressoMarketing();
        progressoTecnologia();
    }
});

// Botões de progresso dos cursos em outras páginas
const btnProgressoInvestimento = document.querySelectorAll('.btnProgressoInvestimento');

btnProgressoInvestimento.forEach(btnI => {
    btnI.addEventListener('click', () => {
        if (porcentagemProgressoInvestimento > 100) {
            porcentagemProgressoInvestimento = 100;
        } else {
            // Incrementar a porcentagem
            porcentagemProgressoInvestimento++;
        }

        // Salvar no localStorage
        localStorage.setItem('porcentagemProgressoInvestimento', porcentagemProgressoInvestimento);
    });
});

const btnProgressoTecnologia = document.querySelectorAll('.btnProgressoTecnologia');

btnProgressoTecnologia.forEach(btnT => {
    btnT.addEventListener('click', () => {
        if (porcentagemProgressoTecnologia > 100) {
            porcentagemProgressoTecnologia = 100;
        } else {
            // Incrementar a porcentagem
            porcentagemProgressoTecnologia++;
        }

        // Salvar no localStorage
        localStorage.setItem('porcentagemProgressoTecnologia', porcentagemProgressoTecnologia);
    });
});

const btnProgressoMarketing = document.querySelectorAll('.btnProgressoMarketing');

btnProgressoMarketing.forEach(btnM => {
    btnM.addEventListener('click', () => {
        if (porcentagemProgressoMarketing > 100) {
            porcentagemProgressoMarketing = 100;
        } else {
            // Incrementar a porcentagem
            porcentagemProgressoMarketing++;
        }

        // Salvar no localStorage
        localStorage.setItem('porcentagemProgressoMarketing', porcentagemProgressoMarketing);
    });
});
