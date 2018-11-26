// Hamberger Menu

const menu = document.querySelector('#hamburger__menu');
const link = document.querySelector('#hamburger-menu__link');
const bars = document.querySelector('#hamburger-menu__bars');
var body = document.querySelector('body');
const nav = document.querySelector('.hamburger__nav');

let activeMenu = function () {
  menu.classList.toggle('active');
  bars.classList.toggle('bars--active');
  body.classList.toggle('menu--active');
};

link.addEventListener('click', function (e) {
  e.preventDefault();
  activeMenu();
});

nav.addEventListener('click', function (e) {
  e.preventDefault();
  target = e.target;
  if (target.className = 'nav__link') {
    activeMenu();
  };
});

// Team Accordeon

let teamAction = () => {
  let teamLink = document.querySelectorAll('.team-acco__title');
  teamLink.forEach(function (name) {
    name.addEventListener('click', function (e) {
      e.preventDefault();
      let teamActiveItem = document.querySelector('.team-acco__item.team-acco__item--active');
      if (teamActiveItem) {
        teamActiveItem.classList.remove('team-acco__item--active');
      }
      if (!teamActiveItem || teamActiveItem.querySelector(".team-acco__title") !== this) {
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
  menuLink.forEach(function (label) {
    label.addEventListener('click', function (e) {
      e.preventDefault();
      let menuActiveItem = document.querySelector('.menu-acco__item.menu-acco__item--active');
      if (menuActiveItem) {
        menuActiveItem.classList.remove('menu-acco__item--active');

      }
      if (!menuActiveItem || menuActiveItem.querySelector(".menu-acco__block") !== this) {
        let menuItem = this.closest('.menu-acco__item');
        menuItem.classList.add('menu-acco__item--active');
      }
    })
  })
}
menuAction();

// Slider

const left = document.querySelector("#left");
const right = document.querySelector('#right');
const items = document.querySelector('#items');
const counter = items.children.length;
const step = parseInt(getComputedStyle(items.firstElementChild).width);
const minRight = 0;
const maxRight = parseInt(getComputedStyle(items).width);
let currentRight = 0;

items.style.right = currentRight;

right.addEventListener("click", function () {
  if (currentRight < maxRight * (counter - 1)) {
    currentRight += step;
  } else {
    currentRight = 0;
    items.style.right = 0;
  }
  items.style.right = currentRight + "px";
});

left.addEventListener("click", function () {
  if (currentRight > minRight) {
    currentRight -= step;
  } else {
    currentRight = maxRight * (counter - 1);
  }
  items.style.right = currentRight + "px";
});

// Modal
const modalTitle = document.querySelector('.modal__title');
const modalText = document.querySelector('.modal__text');
const reviewsTitle = document.querySelector(".reviews__title");
const reviewsText = document.querySelector('.reviews__text');
const modalCloseBtn = document.querySelector("#modal__close");
const modal = document.querySelector('#modal');
const listReviuew = document.querySelector('.reviews__list');
var body = document.querySelector('body');

let activeModal = () => {
  modal.classList.toggle('modal__active');
  body.classList.toggle('menu--active');
};

listReviuew.addEventListener('click',(e) => {
  e.preventDefault();
  let target = e.target;
  if (target.classList.contains('modal__open')) {
    modalTitle.innerHTML = reviewsTitle.textContent;
    modalText.innerHTML = reviewsText.textContent;
    activeModal();
  }
});

modalCloseBtn.addEventListener('click',(e) => {
  e.preventDefault();
  activeModal();
});

// FORM
const form = document.querySelector('#form');
const sendButton = document.querySelector('#sendButton');

var ajaxForm = function () {

  let formData = new FormData();
  formData.append("name", form.elements.name.value);
  formData.append("phone", form.elements.phone.value);
  formData.append("comment", form.elements.comment.value);
  formData.append("to", "snypoon@me.com");

  const xhr = new XMLHttpRequest();

  xhr.open("POST", "https://webdev-api.loftschool.com/sendmail");
  xhr.responseType = "json";
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xhr.send(formData);
  xhr.addEventListener('load', () => {
    if ( xhr.response.status){
      modalTitle.innerHTML = "отправка удалась!!!";
      modalText.innerHTML = "";
      activeModal();
    }
    else{
      modalTitle.innerHTML = "произошла ошибка!!!";
      modalText.innerHTML = "";
      activeModal();
    }
  })

  return xhr;
};

sendButton.addEventListener('click', e =>{
  e.preventDefault();
  ajaxForm();
});

