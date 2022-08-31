const mobileNavButton = document.querySelector('.header__burger');
const mobileNavIcon = document.querySelector('.header__burger-icon');
const mobileNav = document.querySelector('.mobile-nav');

mobileNavButton.addEventListener('click', function () {
  mobileNavIcon.classList.toggle('active');
  mobileNav.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
});
