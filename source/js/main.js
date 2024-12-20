// https://swiperjs.com/get-started#installation
import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';


import './menu.js';

const heroSlider = new Swiper('.hero__slider', {
  modules: [Navigation, Pagination],
  // slidesPerView: 1,
  loop: 'true',

  pagination: {
    el: '.hero__pagination',
    bulletClass: 'hero__pagination-button',
    bulletActiveClass: 'hero__pagination-button--active',
    renderBullet: (index, className) => `<button class="${className}" type="button"><span class="visually-hidden">Слайд ${index + 1}</span></button>`,
    clickable: true,
  },

  // navigation: {
  //   nextEl: '.reviews__button--next',
  //   prevEl: '.reviews__button--prev'
  // },
});

const toursSlider = new Swiper('.tours__slider', {
  modules: [Navigation, Pagination],

  navigation: {
    nextEl: '.tours__button--next',
    prevEl: '.tours__button--prev'
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  },
});


heroSlider.init();
toursSlider.init();
