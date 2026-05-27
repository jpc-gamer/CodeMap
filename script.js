document.addEventListener("DOMContentLoaded", () => {

    const grupo =
        document.getElementById("grupo");

    const btnAnterior =
        document.getElementById("anterior");

    const btnProximo =
        document.getElementById("proximo");

    const grupos =
        document.querySelectorAll(".grupo-cards");

    const cards =
        document.querySelectorAll(".card");

    let index = 0;

    function atualizarCarrossel() {

        // MOBILE
        if (window.innerWidth <= 768) {

            const larguraCard =
                cards[0].offsetWidth + 20;

            grupo.style.transform =
                `translateX(-${index * larguraCard}px)`;
        }

        // DESKTOP
        else {

            grupo.style.transform =
                `translateX(-${index * 100}%)`;
        }
    }

    btnProximo.addEventListener("click", () => {

        // MOBILE
        if (window.innerWidth <= 768) {

            if (index < cards.length - 1) {
                index++;
            }

        }

        // DESKTOP
        else {

            if (index < grupos.length - 1) {
                index++;
            }

        }

        atualizarCarrossel();
    });

    btnAnterior.addEventListener("click", () => {

        if (index > 0) {
            index--;
        }

        atualizarCarrossel();
    });

    window.addEventListener("resize", () => {

        index = 0;
        atualizarCarrossel();
    });

    // FORMULÁRIO
    const form = document.getElementById("formContato");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            const inputs =
                form.querySelectorAll("input, textarea");

            let valido = true;

            inputs.forEach(function (campo) {

                if (campo.value.trim() === "") {
                    valido = false;
                }
            });

            if (!valido) {

                alert("Por favor, preencha todos os campos!");
                return;
            }

            alert("Mensagem enviada com sucesso!");

            form.reset();
        });
    }

});

function toggleMenu() {

    document
        .getElementById("menu")
        .classList
        .toggle("ativo");
}