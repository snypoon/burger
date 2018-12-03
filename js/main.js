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
  menu.classList.remove('active');
  bars.classList.remove('bars--active');
  body.classList.remove('menu--active');
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
        let teamContent = teamActiveItem.querySelector('.team-acco__content');
        teamContent.style.height = '0px';
        teamActiveItem.classList.remove('team-acco__item--active');
      }
      if (!teamActiveItem || teamActiveItem.querySelector(".team-acco__title") !== this) {
        let teamItem = this.closest('.team-acco__item');
        teamItem.classList.add('team-acco__item--active');
        let teamItemInfo = teamItem.querySelector('.team-acco__content');
        teamItemInfo.style.height = teamItemInfo.scrollHeight + 'px';
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

listReviuew.addEventListener('click', (e) => {
  e.preventDefault();
  let target = e.target;
  if (target.classList.contains('modal__open')) {
    modalTitle.innerHTML = reviewsTitle.textContent;
    modalText.innerHTML = reviewsText.textContent;
    activeModal();
  }
});

modalCloseBtn.addEventListener('click', (e) => {
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
    if (xhr.response.status) {
      modalTitle.innerHTML = "отправка удалась!!!";
      modalText.innerHTML = "";
      activeModal();
    } else {
      modalTitle.innerHTML = "произошла ошибка!!!";
      modalText.innerHTML = "";
      activeModal();
    }
  })

  return xhr;
};

sendButton.addEventListener('click', e => {
  e.preventDefault();
  ajaxForm();
});

// One Page Scroll (fullPage.js*css)

$(document).ready(function() {
	$('#fullpage').fullpage({
		licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
		autoScrolling:true,
    scrollHorizontally: true,
    // continuousVertical: true,
    navigation: true,
    // normalScrollElements: '#map',
	});
    $('.nav__best').on('click', () => {
      fullpage_api.moveTo(2);
    });
    $('.nav__slider').on('click', () => {
      fullpage_api.moveTo(3);
    });
    $('.nav__team').on('click', () => {
      fullpage_api.moveTo(4);
    });
    $('.nav__menu').on('click', () => {
      fullpage_api.moveTo(5);
    });
    $('.nav__reviews').on('click', () => {
      fullpage_api.moveTo(6);
    });
    $('.nav__video').on('click', () => {
      fullpage_api.moveTo(7);
    });
    $('.btn--red').on('click', () => {
      fullpage_api.moveTo(8);
    });
    $('.nav__map').on('click', () => {
      fullpage_api.moveTo(9);
    });
	$.fn.fullpage.setAllowScrolling(true);
});

// YaMap

ymaps.ready(init);
function init(){  
    var myMap = new ymaps.Map("map", {
        center: [59.940293, 30.312926],
        zoom: 11,
    });
    var myPlacemark1 = new ymaps.Placemark([59.947055, 30.383846], {balloonContent: "Mr.Burger, Тверская улица, 12/15А"}, {
      iconLayout: 'default#image',
      iconImageHref: './img/map-marker.svg',
      iconImageSize: [46, 57],
    });
    var myPlacemark2 = new ymaps.Placemark([59.972610, 30.307247], {balloonContent: "Mr.Burger, улица Чапыгина, 3"}, {
      iconLayout: 'default#image',
      iconImageHref: './img/map-marker.svg',
      iconImageSize: [46, 57],
      });
    var myPlacemark3 = new ymaps.Placemark([59.921632, 30.475123], {balloonContent: "Mr.Burger, улица Коллонтай, 24к2"}, {
      iconLayout: 'default#image',
      iconImageHref: './img/map-marker.svg',
      iconImageSize: [46, 57],
      }); 
    var myPlacemark4 = new ymaps.Placemark([59.890722, 30.318269], {balloonContent: "Mr.Burger, Московский проспект, 107Б"}, {
      iconLayout: 'default#image',
      iconImageHref: './img/map-marker.svg',
      iconImageSize: [46, 57],
      });    
    myMap.geoObjects.add(myPlacemark1);
    myMap.geoObjects.add(myPlacemark2);
    myMap.geoObjects.add(myPlacemark3);
    myMap.geoObjects.add(myPlacemark4);
    myMap.controls.remove('searchControl');
    myMap.controls.remove('typeSelector');
    myMap.behaviors.disable("scrollZoom");
}

// VideoPlayer

let VideoPlayer = document.querySelector('#player');
let PlayBtn = document.querySelectorAll('.play');
let SoundBtn = document.querySelector('.sound__img');
let VideoControl = document.querySelector('#playerlvl');
let VolumeControl = document.querySelector('#soundlvl');
let interval;
    // Функция запуска и паузы видео 
let PlayStop = ()=> {
  $('.play__btn').toggleClass('play__btn--active');
  VideoControl.max = VideoPlayer.duration;
  if(VideoPlayer.paused){
    VideoPlayer.play();
    Interval = setInterval(updateDuration,1000/66);
  }else{
    VideoPlayer.pause();
    clearInterval(Interval);
  }
};
    // Функция перемотки видео 
let setVideoDuration = ()=> {
  VideoPlayer.currentTime = VideoControl.value; 
  Interval = setInterval(updateDuration,1000/66);
};
    // Функция очищает интервал , позволяя двигать ползунок
let stopInterval = ()=> {
  clearInterval(Interval);
 }       
    // Функция позиции ползунка видео
let updateDuration = ()=> {
  VideoControl.value = VideoPlayer.currentTime;
};
    // Функция измения громкоски
let ChangeVolumeFunction = ()=> {
  VideoPlayer.volume = VolumeControl.value/10; 
};
    // Функция выключения громкости по кнопке
let VolumeOff = ()=> {
  if (VideoPlayer.volume === 0){
      VideoPlayer.volume = soundLevel;
      VolumeControl.value = soundLevel*10;
  }else{
      soundLevel = VideoPlayer.volume;
      VideoPlayer.volume = 0;
      VolumeControl.value = 0;
  }    
};
    //Клики по экрану и кнопкам
$(PlayBtn).on('click',PlayStop);
$(VideoPlayer).on('click',PlayStop);
$(VideoControl).on('click',setVideoDuration);
$(VideoControl).on('onmousemove',setVideoDuration);
$(VideoControl).on('mousedown',stopInterval);
$(VolumeControl).on('click',ChangeVolumeFunction);
$(VolumeControl).on('onmousemove',ChangeVolumeFunction);
$(SoundBtn).on('click',VolumeOff);
    //значения ползунков громкости и видео 
VideoControl.min = 0
VideoControl.value = 0;
VolumeControl.min = 0;
VolumeControl.max = 10;
