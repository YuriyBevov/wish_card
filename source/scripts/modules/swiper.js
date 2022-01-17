import SwiperCore, { Autoplay, Scrollbar, Navigation, Pagination, Thumbs } from 'swiper/core';
SwiperCore.use([Autoplay, Scrollbar, Navigation, Pagination, Thumbs]);
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
        loop: true,
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
      loop: true,

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
      loop: true,

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
         loop: true,
   
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


const productCardSliders = document.querySelectorAll('.product-card-swiper-container');

if(productCardSliders.length) {

   productCardSliders.forEach(slider => {

      const pcslider = new Swiper(slider, {
         slidesPerView: 1,
         nested: true,
         loop: true,
   
         autoplay: {
            delay: 2000
         },
   
         pagination: {
            el: ".product-card-swiper-pagination",
         },
   
         on: {
            afterInit: function() {
               this.autoplay.stop();
            }
         }
      });

      slider.addEventListener('mouseover', function() {
         pcslider.autoplay.start();
      })

      slider.addEventListener('mouseout', function() {
         pcslider.autoplay.stop();
      })
   })
}

const paramsSlider = document.querySelector('.params-swiper-container');

if(paramsSlider) {
   new Swiper(".params-swiper-container", {
      slidesPerView: 'auto',
      spaceBetween: 10,
      loop: true,
   })
};

const offerSlider = document.querySelector('.offers-swiper-container');

initOffersSlider(offerSlider);

const mainSliders = document.querySelectorAll('.main-slider');

mainSliders ?
mainSliders.forEach(slider => {
         
   new Swiper (slider, {
      slidesPerView: 1,
      loop: true,
      
      breakpoints: {
         375: {
            slidesPerView: 'auto',
         },
      },

      navigation: {
         nextEl: ".main-swiper-button-next",
         prevEl: ".main-swiper-button-prev",
      }
   });

}) : null

const offerSliders = document.querySelectorAll('.offer-slider');

offerSliders ?
offerSliders.forEach(slider => {
         
   new Swiper (slider, {
      slidesPerView: 'auto',
      loop: true,

      navigation: {
         nextEl: ".offer-swiper-button-next",
         prevEl: ".offer-swiper-button-prev",
      }
   });

}) : null

const bannerWideSlider = document.querySelector('.banner-wide-swiper-container');

if(bannerWideSlider) {
   new Swiper(".banner-wide-swiper-container", {
      slidesPerView: 'auto',
      loop: true,

      navigation: {
         nextEl: ".banner-wide-swiper-button-next",
         prevEl: ".banner-wide-swiper-button-prev",
      },

      pagination: {
         el: ".banner-wide-swiper-pagination",
         clickable: true,
      }
   })
};

const bannerThinSlider = document.querySelector('.banner-thin-swiper-container');

if(bannerThinSlider) {
   new Swiper(".banner-thin-swiper-container", {
      slidesPerView: 'auto',
      loop: true,

      pagination: {
         el: ".banner-thin-swiper-pagination",
         clickable: true,

         /*renderBullet: function (index, className) {
            return '<div class="swiper-pagination-container"><span class="' + className + '"></span></div>';
         }, */
      }
   })
};

export { initOffersSlider }
