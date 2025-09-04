const navOpen = document.querySelector('.l-header__navBtn');
const navClose = document.querySelector('.l-header__navClose');

navOpen.addEventListener('click', () => {
  document.body.classList.add('is-nav-open');
});

navClose.addEventListener('click', () => {
  document.body.classList.remove('is-nav-open');
});