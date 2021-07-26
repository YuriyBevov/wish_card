import SwiperCore, { Scrollbar, Navigation } from 'swiper/core';
SwiperCore.use([Scrollbar, Navigation]);
import Swiper from 'swiper'

// ширина при которой происходит destroy
const breakpoint = window.matchMedia( '(min-width: 768px)' );

// тут будет слайдер. чтобы потом сделать destroy/init
let mySwiper;

// слушатель изменения vieport`a
const breakpointChecker = function() {
   // 
   if ( breakpoint.matches === true ) {
      if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
      return;
   } else if ( breakpoint.matches === false ) {
      return enableSwiper();
   }
};


const enableSwiper = function() {
   mySwiper = new Swiper ('.description-swiper-container', {
        slidesPerView: 'auto',
        slideToClickedSlide: true,
        spaceBetween: 15,
    });
};

// слежу за изменением viewport`a
breakpoint.addEventListener('change', breakpointChecker);
// проверяю ширину viewport`а при загрузке
breakpointChecker();


const offerSlider = document.querySelector('.offers-swiper-container');

if(offerSlider) {
   new Swiper (offerSlider, {
      slidesPerView: 'auto',
      slideToClickedSlide: true,
      spaceBetween: 15,

      scrollbar: {
         el: '.swiper-scrollbar',
         draggable: true,
      },

      navigation: {
      nextEl: ".offers-swiper-button-next",
      prevEl: ".offers-swiper-button-prev",
      },
   });
}