const menuButton = document.querySelector('.navigation__toggle');
const menuList = document.querySelector('.navigation__list');

menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('navigation__toggle--open');
  menuList.classList.toggle('navigation__list--open');

  if(menuButton.classList.contains('navigation__toggle--open')) {
    document.body.classList.add('page__body--overlay');
  } else {
    document.body.classList.remove('page__body--overlay');
  }
});

menuList.addEventListener('click', (evt) => {
  const currentLink = evt.target.closest('.site-list__link');
  if (!currentLink) {
    return;
  }
  menuList.classList.remove('navigation__list--open');
  menuButton.classList.remove('navigation__toggle--open');
  document.body.classList.remove('page__body--overlay');
});
