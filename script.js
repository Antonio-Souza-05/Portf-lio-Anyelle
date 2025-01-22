// Inicializar Swiper (Carrossel de Depoimentos)
const swiper = new Swiper('.swiper-container', {
    loop: true, // Permite que o carrossel continue em loop
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 1, // Exibe 1 slide por vez em telas pequenas
    spaceBetween: 20, // Espaço entre os slides
    breakpoints: {
      768: {
        slidesPerView: 2, // Exibe 2 slides por vez em telas maiores
      },
    },
  });

  // Menu de Hambúrguer
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('menu');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // Alternar a classe 'active' no menu
});