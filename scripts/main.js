function ativarLinkMenu() {
    const paginaAtual = window.location.pathname.split("/").pop() || "index.html";
    const linksMenu = document.querySelectorAll(".cabecalho__menu__link");

    linksMenu.forEach((link) => {
        const linkPagina = link.getAttribute("href");

        if (linkPagina === paginaAtual) {
            link.classList.add("ativo");
        }
    });
}

function configurarBotaoTopo() {
    const botaoTopo = document.querySelector(".botao-topo");

    if (botaoTopo) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                botaoTopo.classList.add("aparecer");
            } else {
                botaoTopo.classList.remove("aparecer");
            }
        });

        botaoTopo.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
}

function configurarTema() {
    const botaoTema = document.querySelector(".botao-tema");
    const iconeTema = document.querySelector(".botao-tema__icone");

    if (botaoTema && iconeTema) {
        const temaSalvo = localStorage.getItem("tema");

        if (temaSalvo === "claro") {
            document.body.classList.add("tema-claro");
            iconeTema.src = "./assets/lua.png";
            iconeTema.alt = "Alterar para tema escuro";
            botaoTema.setAttribute("aria-label", "Alterar para tema escuro");
        } else {
            iconeTema.src = "./assets/sol.png";
            iconeTema.alt = "Alterar para tema claro";
            botaoTema.setAttribute("aria-label", "Alterar para tema claro");
        }

        botaoTema.addEventListener("click", () => {
            document.body.classList.toggle("tema-claro");

            const temaClaroAtivo = document.body.classList.contains("tema-claro");

            if (temaClaroAtivo) {
                localStorage.setItem("tema", "claro");
                iconeTema.src = "./assets/lua.png";
                iconeTema.alt = "Alterar para tema escuro";
                botaoTema.setAttribute("aria-label", "Alterar para tema escuro");
            } else {
                localStorage.setItem("tema", "escuro");
                iconeTema.src = "./assets/sol.png";
                iconeTema.alt = "Alterar para tema claro";
                botaoTema.setAttribute("aria-label", "Alterar para tema claro");
            }
        });
    }
}

ativarLinkMenu();
configurarBotaoTopo();
configurarTema();