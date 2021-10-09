// new  Swiper('.bikes__slider', {
//   pagination: {
//     el: '.bikes__pagination',
//     type: 'bullets',
//     clickable: false,
//     bulletActiveClass: 'bikes__bullet_active',
//     bulletClass: 'bikes__bullet',
//   },

//   spaceBetween: 18,

//   loop: true,

//   autoplay: {
//     delay: 5000
//   },

//   ally: {
//     enabled: true,
//   }
// });

const header = document.querySelector(".header");
const burgerButton = document.querySelector('.burger-btn');

burgerButton.addEventListener("click", function(){
  header.classList.remove("header_closed")
});

