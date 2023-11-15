function menuExtendido() {
    const menuBurger = document.getElementById("menuBurger");
    const barraDivisao = document.getElementById("barra-divisao");

    const opcoes = document.querySelectorAll(".opcao-menuBurger");
    const nomeOpcoes = document.querySelectorAll(".opcao-nome");

    if (menuBurger.style.width === "400px") {
        menuBurger.style.width = "100px";
        barraDivisao.style.width = "100px";

        opcoes.forEach(opcao => {
            opcao.style.width = "100px";
        });

        nomeOpcoes.forEach(nomeOpcao => {
            nomeOpcao.style.display = "none";
        });
    } else {
        menuBurger.style.width = "400px";
        barraDivisao.style.width = "400px";

        opcoes.forEach(opcao => {
            opcao.style.width = "400px";
        });

        nomeOpcoes.forEach(nomeOpcao => {
            nomeOpcao.style.display = "inline";
        });
    }
}
