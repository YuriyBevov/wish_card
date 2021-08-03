import SwiperCore, { Scrollbar, Navigation, Thumbs } from 'swiper/core';
SwiperCore.use([Scrollbar, Navigation, Thumbs]);
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

//-------------


const cardSlider = document.querySelector('.card-swiper-container');

if(cardSlider) {
   let swiper = new Swiper(".card-slider-thumbs", {
      slidesPerView: 'auto',
      watchSlidesProgress: true,
      spaceBetween: 20,
      direction: "horizontal",

      breakpoints: {

         960: {
            spaceBetween: 35,
            slidesPerView: 4,
            direction: "vertical",
         },

         1024: {
            spaceBetween: 50,
            slidesPerView: 4,
            direction: "vertical",
         }
      }
   });

   let swiperThumbs = new Swiper(".card-slider", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 1,

      breakpoints: {

         768: {
            slidesPerView: 2,
         },

         960: {
            slidesPerView: 1,
         }
      },

      thumbs: {
        swiper: swiper,
      },

      navigation: {
         nextEl: ".card-slider-thumbs-swiper-button-next",
         prevEl: ".card-slider-thumbs-swiper-button-prev"
      },


   });
}

//-------------

const initOffersSlider = (slider) => {

   if(slider) {
      
      new Swiper (slider, {
         slidesPerView: 'auto',
         spaceBetween: 14,
   
         scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
         },
   
         navigation: {
            nextEl: ".offers-swiper-button-next",
            prevEl: ".offers-swiper-button-prev",
         }
      });
   }
}

const offerSlider = document.querySelector('.offers-swiper-container');

initOffersSlider(offerSlider);

export { initOffersSlider }
