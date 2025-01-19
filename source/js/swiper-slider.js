import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';

const heroSlider = new Swiper('.hero__slider', {
  modules: [Pagination],
  loop: 'true',
  slidesPerView: 1,

  pagination: {
    clickable: true,
    el: '.hero__pagination',
    bulletClass: 'hero__pagination-button',
    bulletActiveClass: 'hero__pagination-button--active',
    renderBullet: (index, className) => `<button class="${className}" type="button" data-index="${index}"><span class="visually-hidden">Слайд ${index + 1}</span></button>`,
  },

  allowTouchMove: true, // Свайп включен для всех устройств
  breakpoints: {
    1440: {
      allowTouchMove: false, // Отключаем свайп на десктопе
    },
  },
});

const toursSlider = new Swiper('.tours__slider', {
  modules: [Navigation],

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

const trainersSlider = new Swiper('.training__slider', {
  modules: [Navigation],

  navigation: {
    nextEl: '.training__button--next',
    prevEl: '.training__button--prev'
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      initialSlide: 2,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 20,
    }
  },
});

const reviewsSlider = new Swiper('.reviews__slider', {
  modules: [Navigation],
  slidesPerView: 'auto',
  spaceBetween: 50,

  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev'
  },

  breakpoints: {
    768: {
      spaceBetween: 30,
    },
    1440: {
      spaceBetween: 120,
    }
  },
});

heroSlider.init();
toursSlider.init();
trainersSlider.init();
reviewsSlider.init();

