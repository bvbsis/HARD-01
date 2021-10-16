new Swiper('.bikes__slider', {
  pagination: {
    el: '.bikes__pagination',
    type: 'bullets',
    clickable: false,
    bulletActiveClass: 'bikes__bullet_active',
    bulletClass: 'bikes__bullet',
  },

  spaceBetween: 18,

  observer: true,

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

new Swiper('.coatings__slider', {
  navigation: {
    nextEl: '.button-left',
    prevEl: '.button-right',
  },
  spaceBetween: 400,
  slidesPerView: 1,
  allowTouchMove: false,
});

const select = document.querySelector(".bikes__select");
const highwayTemplate = document.querySelector("#highway");
const gravelTemplate = document.querySelector("#gravel");
const ttTemplate = document.querySelector("#tt");
const bikesSliderWrapper = document.querySelector(".bikes__slider-wrapper");
const desctopHighwayButton = document.querySelector("#desc-highway-button");
const desctopGravelButton = document.querySelector("#desc-gravel-button");
const desctopTtButton = document.querySelector("#desc-tt-button");

select.addEventListener('change', function() {
  if(this.value === 'highway') {
    bikesSliderWrapper.innerHTML = "";
    bikesSliderWrapper.append(highwayTemplate.content.cloneNode(true));
  } else if(this.value === 'gravel') {
    bikesSliderWrapper.innerHTML = "";
    bikesSliderWrapper.append(gravelTemplate.content.cloneNode(true));
  } else {
    bikesSliderWrapper.innerHTML = "";
    bikesSliderWrapper.append(ttTemplate.content.cloneNode(true));
  }
});

desctopHighwayButton.addEventListener("click", function(){
  bikesSliderWrapper.innerHTML = "";
  bikesSliderWrapper.append(highwayTemplate.content.cloneNode(true));
  desctopGravelButton.classList.remove('bikes__nav-element_active');
  desctopTtButton.classList.remove('bikes__nav-element_active');
  desctopHighwayButton.classList.add('bikes__nav-element_active');
});

desctopGravelButton.addEventListener("click", function(){
  bikesSliderWrapper.innerHTML = "";
  bikesSliderWrapper.append(gravelTemplate.content.cloneNode(true));
  desctopTtButton.classList.remove('bikes__nav-element_active');
  desctopHighwayButton.classList.remove('bikes__nav-element_active');
  desctopGravelButton.classList.add('bikes__nav-element_active');
});

desctopTtButton.addEventListener("click", function(){
  bikesSliderWrapper.innerHTML = "";
  bikesSliderWrapper.append(ttTemplate.content.cloneNode(true));
  desctopHighwayButton.classList.remove('bikes__nav-element_active');
  desctopGravelButton.classList.remove('bikes__nav-element_active');
  desctopTtButton.classList.add('bikes__nav-element_active');
});

const burgerButton = document.querySelector(".burger-btn__label");
const header = document.querySelector(".header");
const headerToggle = header.querySelector(".toggle");
const headerToggleLabel = header.querySelector(".toggle__label");
const headerBurgerInput = header.querySelector(".burger-btn__input")
const page = document.querySelector(".page");
const buttonLeft = document.querySelector(".button-left");
const buttonRight = document.querySelector(".button-right");
const footer = document.querySelector(".footer");
const footerLicense = footer.querySelector(".footer__license");
const headerNavLinks = document.querySelectorAll(".header__nav-link")


burgerButton.addEventListener("click", function() {
  header.classList.toggle("header_opened");
  headerToggle.classList.toggle("toggle_opened")
});

for (let i = 0; i < headerNavLinks.length; i++) {
  headerNavLinks[i].addEventListener("click", function() {
    header.classList.remove("header_opened");
    headerToggle.classList.remove("toggle_opened");
    headerBurgerInput.checked = false;
  });
}

headerToggleLabel.addEventListener("click", function() {
  page.classList.toggle("page_theme_dark");
  headerToggleLabel.classList.toggle("toggle__label_theme_dark");
  headerToggle.classList.toggle("toggle_theme_dark");
  buttonLeft.classList.toggle("arrow-button_theme_dark");
  buttonRight.classList.toggle("arrow-button_theme_dark");
  footer.classList.toggle("footer_theme_dark");
  footerLicense.classList.toggle("footer__license_theme_dark");
});

const footerToggle = footer.querySelector(".toggle");
const footerToggleLabel = footer.querySelector(".toggle__label");

footerToggleLabel.addEventListener("click", function() {
  page.classList.toggle("page_theme_dark");
  footerToggleLabel.classList.toggle("toggle__label_theme_dark");
  footerToggle.classList.toggle("toggle_theme_dark");
  buttonLeft.classList.toggle("arrow-button_theme_dark");
  buttonRight.classList.toggle("arrow-button_theme_dark");
  footer.classList.toggle("footer_theme_dark");
  footerLicense.classList.toggle("footer__license_theme_dark");
})

// const footerInput = document.querySelector(".footer__input");
// const footerForm = document.querySelector(".footer__form");

// console.log(footerForm)

// footerForm.addEventListener("submit", function(e) {
//   e.preventDefault();
//   footerForm.value = "";
//   footerInput.placeholder = "Круто!";
// })



