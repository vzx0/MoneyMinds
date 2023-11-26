document.addEventListener("DOMContentLoaded", function() {
    progressoInvestimento();
    progressoTecnologia()
    progressoMarketing()
})

// progresso em cada curso
porcentagemProgressoInvestimento = 100;
porcentagemProgressoTecnologia = 75;
porcentagemProgressoMarketing = 75;

// funcoes para exibir o progresso em cada curso
function progressoInvestimento() {
    let circuloInvestimento = document.querySelector('#circuloProgressoInvestimento');

    document.getElementById("porcentagemProgressoInvestimento").innerHTML = porcentagemProgressoInvestimento + "%";

    circuloInvestimento.style.strokeDashoffset = 440 - (440 * porcentagemProgressoInvestimento) / 100;
}

function progressoTecnologia() {
    let circuloInvestimento = document.querySelector('#circuloProgressoTecnologia');

    document.getElementById("porcentagemProgressoTecnologia").innerHTML = porcentagemProgressoTecnologia + "%";

    circuloInvestimento.style.strokeDashoffset = 440 - (440 * porcentagemProgressoTecnologia) / 100;
}

function progressoMarketing() {
    let circuloInvestimento = document.querySelector('#circuloProgressoMarketing');

    document.getElementById("porcentagemProgressoMarketing").innerHTML = porcentagemProgressoMarketing + "%";

    circuloInvestimento.style.strokeDashoffset = 440 - (440 * porcentagemProgressoMarketing) / 100;
}

