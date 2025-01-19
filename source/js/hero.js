const heroSlider = document.querySelector('.hero');
const heroPagination = heroSlider.querySelector('.hero__pagination');
const slidesList = heroSlider.querySelectorAll('.hero__item');

//первоначальная настройка
const activeSlide = heroSlider.querySelector('.swiper-slide-active');
const activeIndex = Number(activeSlide.dataset.swiperSlideIndex);
checkTab(activeIndex);

function checkTab(index) {
  slidesList.forEach((slide) => {
    const slidesButton = slide.querySelector('.hero__button');
    if (Number(slide.dataset.swiperSlideIndex) === index) {
      slidesButton.setAttribute('tabindex', '0');
    } else {
      slidesButton.setAttribute('tabindex', '-1');
    }
  });
}

const onPaginationClick = (evt) => {
  const currentPaginationButton = evt.target.closest('.hero__pagination-button');
  if (!currentPaginationButton) {
    return;
  }
  const index = Number(currentPaginationButton.dataset.index);
  checkTab(index);
};

heroPagination.addEventListener('click', onPaginationClick);
