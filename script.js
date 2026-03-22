// Aguarda o carregamento do HTML para não dar erro de "elemento nulo"
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona a "esteira" do carrossel
    const track = document.querySelector('.carrossel-grupo');
    const btnAnterior = document.getElementById('anterior');
    const btnProximo = document.getElementById('proximo');

    
    if (!track || !btnAnterior || !btnProximo) return;

    let index = 0;
    const totalSlides = document.querySelectorAll('.grupo-cards').length;


    const moverCarrossel = () => {
        track.style.transform = `translateX(-${index * 100}%)`;
    };

    btnProximo.addEventListener('click', () => {
        if (index < totalSlides - 1) {
            index++;
            moverCarrossel();
        }
    });

    btnAnterior.addEventListener('click', () => {
        if (index > 0) {
            index--;
            moverCarrossel();
        }
    });
});