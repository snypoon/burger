// Hamberger Menu

const menu = document.querySelector('#hamburger__menu');
const link = document.querySelector('#hamburger-menu__link');
const bars = document.querySelector('#hamburger-menu__bars');

link.addEventListener('click', function(e){
  e.preventDefault();
  menu.classList.toggle('active');
  bars.classList.toggle('bars--active');
});

// Team Accordion
