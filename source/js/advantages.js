import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

const minDesktopWidth = 1440;
let advantagesSlider;
let hasDuplicate = false;


const duplicateSlides = () => {
  const sliderWrapper = document.querySelector('.advantages__list');
  const slidesList = document.querySelectorAll('.advantages__item-content');

  if (window.innerWidth >= minDesktopWidth && !hasDuplicate) {
    slidesList.forEach((slide) => {
      const clonedSlide = slide.cloneNode(true);
      clonedSlide.classList.add('advantages__item-content--duplicate');
      clonedSlide.setAttribute('aria-hidden', 'true');
      sliderWrapper.appendChild(clonedSlide);
    });
    hasDuplicate = true;
  } else if(window.innerWidth < minDesktopWidth && hasDuplicate) {
    slidesList.forEach((slide) => {
      if (slide.classList.contains('advantages__item-content--duplicate')) {
        sliderWrapper.removeChild(slide);
      }
    });
    hasDuplicate = false;
  }
};

const initSwiper = () => {
  advantagesSlider = new Swiper('.advantages__slider', {
    modules: [Navigation],
    breakpoints: {
      1440: {
        loop: true,
        spaceBetween: 30,
        slidesPerGroup: 2,
        initialSlide: 2,
        slidesPerView: 'auto',
        centeredSlides: true,
        navigation: {
          nextEl: '.advantages__button--next',
          prevEl: '.advantages__button--prev'
        },
      },
    },
  });
};

const onWindowResize = () => {
  const isDesktop = window.innerWidth >= 1440;
  duplicateSlides();
  if (isDesktop && !advantagesSlider) {
    initSwiper();
  } else if (!isDesktop && advantagesSlider) {
    advantagesSlider.destroy(true, true);
    advantagesSlider = null;
  }
};

window.addEventListener('load', onWindowResize);
window.addEventListener('resize', onWindowResize);
