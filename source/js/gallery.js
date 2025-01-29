import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

let gallerySlider;

const initSwiper = () => {
  gallerySlider = new Swiper('.gallery__slider', {
    modules: [Navigation],
    loop: true,

    navigation: {
      nextEl: '.gallery__button--next',
      prevEl: '.gallery__button--prev'
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      1440: {
        enabled: false,
      }
    },
  });
};

const onWindowResize = () => {
  const isDesktop = window.innerWidth >= 1440;
  if (!isDesktop && !gallerySlider) {
    initSwiper();
  } else if (isDesktop && gallerySlider) {
    gallerySlider.destroy(true, true);
    gallerySlider = null;
  }
};

window.addEventListener('load', onWindowResize);
window.addEventListener('resize', onWindowResize);
