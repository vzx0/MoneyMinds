const container = document.querySelector(".container"),
    olhoSenha = document.querySelectorAll(".showHidePw"),
    vCampos = document.querySelectorAll(".senha"),
    registro = document.querySelector(".registro-link"),
    login = document.querySelector(".login-link");

olhoSenha.forEach(iconOlho => {
    iconOlho.addEventListener("click", () => {
        vCampos.forEach(vCampo => {
            if (vCampo.type === "password") {
                vCampo.type = "text";

                olhoSenha.forEach(icon => {
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                })
            } else {
                vCampo.type = "password";

                olhoSenha.forEach(icon => {
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                })
            }
        })
    })
})

registro.addEventListener("click", () => {
    container.classList.add("active");
});
login.addEventListener("click", () => {
    container.classList.remove("active");
});

const passwordInput = document.querySelector(".senha-campo input");
const iconOlho = document.querySelector(".senha-campo i");
const requisitosContainer = document.querySelector(".requisitos");
const requisitosLista = document.querySelectorAll(".requisito-lista li");

const requisitos = [
    { regex: /.{8,}/, index: 0 },
    { regex: /[0-9]/, index: 1 },
    { regex: /[A-Z]/, index: 2 },
    { regex: /[^A-Za-z0-9]/, index: 3 },
    { regex: /[a-z]/, index: 4 },
    

]

// ... Seu JavaScript existente ...

passwordInput.addEventListener("input", (e) => {
    const valorInput = e.target.value;

    if (valorInput.trim() === "") {
        requisitosContainer.classList.add("esconder");
        container.classList.remove("mostrar-requisitos");
    } else {
        let todosRequisitos = true;

        requisitos.forEach(item => {
            const valido = item.regex.test(valorInput);
            const requisitoItem = requisitosLista[item.index];

            if (valido) {
                requisitoItem.classList.add("valido");
                requisitoItem.firstElementChild.className = "fa-solid fa-check";
            } else {
                requisitoItem.classList.remove("valido");
                requisitoItem.firstElementChild.className = "fa-solid fa-x";
                todosRequisitos = false;
            }
        });

        if (todosRequisitos) {
            requisitosContainer.classList.add("esconder");
            container.classList.remove("mostrar-requisitos");
        } else {
            requisitosContainer.classList.remove("esconder");
            container.classList.add("mostrar-requisitos");
        }
    }
});






