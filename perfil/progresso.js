// as variaveis de progresso em cada curso são originalmente definidas para 0
let porcentagemProgressoInvestimento = 0;
let porcentagemProgressoTecnologia = 0;
let porcentagemProgressoMarketing = 0;

// função para ajustar as porcentagens para uma escala de 0 a 100
function ajustarPara100(valor) {
    // retorna o valor convertido, possuindo o limite de 100 através do math.min
    return Math.min(100, Math.round((valor / 3) * 100)); 
}


function progressoInvestimento() {
    const circuloInvestimento = document.querySelector('#circuloProgressoInvestimento');
    const porcentagemAjustada = ajustarPara100(porcentagemProgressoInvestimento);

    // exibicao da % de progresso no curso concatenando o valor da porcentagem com o simbolo "%"
    document.getElementById("porcentagemProgressoInvestimento").innerHTML = porcentagemAjustada + "%";

    // a progressão do grafico é feita através de uma tecnica CSS utilizando uma propriedade em SVG
    // strokeDashoffset determina o espacamento entre linhas tracejadas
    // 440 é o valor equivalente a todo o comprimento do grafico, então é feito um calculo para diminuir o strokeDashoffset
    // com base na % de progresso
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

// no carregamento da pagina
document.addEventListener('DOMContentLoaded', function () {
    // se a pagina for perfil.html
    if (window.location.href.includes('perfil.html')) {
        // recuperar os valores do localStorage, ou 0 caso não haja
        porcentagemProgressoInvestimento = parseInt(localStorage.getItem('porcentagemProgressoInvestimento')) || 0;
        porcentagemProgressoTecnologia = parseInt(localStorage.getItem('porcentagemProgressoTecnologia')) || 0;
        porcentagemProgressoMarketing = parseInt(localStorage.getItem('porcentagemProgressoMarketing')) || 0;

        // Exibir o progresso com os valores recuperados
        progressoInvestimento();
        progressoMarketing();
        progressoTecnologia();
    }
});

// constante que armazena todos botoes de progresso de investimento em nodeJS, de forma semelhante a um array
const btnProgressoInvestimento = document.querySelectorAll('.btnProgressoInvestimento');

btnProgressoInvestimento.forEach(btnI => {
    btnI.addEventListener('click', () => {
        // ao clicar em um botao de prosseguir para o proximo capítulo
        // se a % for maior que 100
        if (porcentagemProgressoInvestimento > 100) {
            porcentagemProgressoInvestimento = 100;
        } else {
            // incrementa a porcentagem
            porcentagemProgressoInvestimento++;
        }

        // salvar no localStorage
        localStorage.setItem('porcentagemProgressoInvestimento', porcentagemProgressoInvestimento);
    });
});

const btnProgressoTecnologia = document.querySelectorAll('.btnProgressoTecnologia');

btnProgressoTecnologia.forEach(btnT => {
    btnT.addEventListener('click', () => {
        if (porcentagemProgressoTecnologia > 100) {
            porcentagemProgressoTecnologia = 100;
        } else {
            porcentagemProgressoTecnologia++;
        }

        localStorage.setItem('porcentagemProgressoTecnologia', porcentagemProgressoTecnologia);
    });
});

const btnProgressoMarketing = document.querySelectorAll('.btnProgressoMarketing');

btnProgressoMarketing.forEach(btnM => {
    btnM.addEventListener('click', () => {
        if (porcentagemProgressoMarketing > 100) {
            porcentagemProgressoMarketing = 100;
        } else {
            porcentagemProgressoMarketing++;
        }

        localStorage.setItem('porcentagemProgressoMarketing', porcentagemProgressoMarketing);
    });
});
