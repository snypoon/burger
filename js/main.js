// Hamberger Menu

const menu = document.querySelector('#hamburger__menu');
const link = document.querySelector('#hamburger-menu__link');
const bars = document.querySelector('#hamburger-menu__bars');
const body = document.querySelector('body');
const nav = document.querySelector('.hamburger__nav');

let activeMenu = function() {
  menu.classList.toggle('active');
  bars.classList.toggle('bars--active');
  body.classList.toggle('menu--active');
};

link.addEventListener('click', function(e){
  e.preventDefault();
  activeMenu();
});

nav.addEventListener('click', function(e){
  e.preventDefault();
  target = e.target;
  if ( target.className = 'nav__link'){
    activeMenu();
  };
});

// Team Accordeon

let teamAction = () => {
  let teamLink = document.querySelectorAll('.team-acco__title');
  teamLink.forEach(function(name){
    name.addEventListener('click',function(e){
      e.preventDefault();
      let teamActiveItem = document.querySelector('.team-acco__item.team-acco__item--active');
      if(teamActiveItem){
        teamActiveItem.classList.remove('team-acco__item--active');

      }
      if (!teamActiveItem || teamActiveItem.querySelector(".team-acco__title") !== this){
        let teamItem = this.closest('.team-acco__item');
        teamItem.classList.add('team-acco__item--active');
      }
    })
  })
}
teamAction();

// Menu Accordeon

let menuAction = () => {
  let menuLink = document.querySelectorAll('.menu-acco__block');
  menuLink.forEach(function(label){
    label.addEventListener('click',function(e){
      e.preventDefault();
      let menuActiveItem = document.querySelector('.menu-acco__item.menu-acco__item--active');
      if(menuActiveItem){
        menuActiveItem.classList.remove('menu-acco__item--active');

      }
      if (!menuActiveItem || menuActiveItem.querySelector(".menu-acco__block") !== this){
        let menuItem = this.closest('.menu-acco__item');
        menuItem.classList.add('menu-acco__item--active');
      }
    })
  })
}
menuAction();