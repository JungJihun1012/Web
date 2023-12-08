const swiper = new Swiper('.swiper-container', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    slideToClickedSlide: true,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      slideShadows: false,
      stretch: 50,
    },
  });

let index = 0;