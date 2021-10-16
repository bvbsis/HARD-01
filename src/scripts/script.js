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

console.log(bikesSliderWrapper.content);

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

