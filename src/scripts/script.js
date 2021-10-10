new  Swiper('.bikes__slider', {
  pagination: {
    el: '.bikes__pagination',
    type: 'bullets',
    clickable: false,
    bulletActiveClass: 'bikes__bullet_active',
    bulletClass: 'bikes__bullet',
  },

  spaceBetween: 18,

  autoplay: {
    delay: 5000
  },

  breakpoints: {
    750: {
      slidesPerView: 2,
      spaceBetween: 30,
      autoplay: false,

    },

    1150: {
      slidesPerView: 3,
      spaceBetween: 30,
      autoplay: false,

    },
  }
});

