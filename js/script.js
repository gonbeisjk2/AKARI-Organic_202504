// グローバルナビゲーション
const navOpen = document.querySelector('.l-header__navBtn');
const navClose = document.querySelector('.l-header__navClose');

navOpen.addEventListener('click', () => {
  document.body.classList.add('is-nav-open');
});

navClose.addEventListener('click', () => {
  document.body.classList.remove('is-nav-open');
});

// FAQ (jQuery)
$('.p-faq__listQ button').on('click', function (e) {
  // e.stopPropagation(); //親要素へのクリックの影響を阻止する（バブリングの抑止）
  $(this).closest('.p-faq__listItem').find('.p-faq__listA').slideToggle();
  $(this).toggleClass('is-open');
});