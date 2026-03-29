document.addEventListener("DOMContentLoaded", () => {
  
  const track = document.querySelector(".carrossel-grupo");
  const btnAnterior = document.getElementById("anterior");
  const btnProximo = document.getElementById("proximo");

  if (track && btnAnterior && btnProximo) {
    let index = 0;
    const totalSlides = document.querySelectorAll(".grupo-cards").length;

    const moverCarrossel = () => {
      track.style.transform = `translateX(-${index * 100}%)`;
    };

    btnProximo.addEventListener("click", () => {
      if (index < totalSlides - 1) {
        index++;
        moverCarrossel();
      }
    });

    btnAnterior.addEventListener("click", () => {
      if (index > 0) {
        index--;
        moverCarrossel();
      }
    });
  }

  const form = document.getElementById("formContato");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const inputs = form.querySelectorAll("input, textarea");
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