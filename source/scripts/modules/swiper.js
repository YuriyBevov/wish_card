//import { offerChange } from './onSwiperChange.js';

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

         535: {
            spaceBetween: 50,
            slidesPerView: 4,
            direction: "vertical",
         },
      }
   });

   let swiperThumbs = new Swiper(".card-slider", {
      spaceBetween: 10,
      slidesPerView: 1,
      thumbs: {
        swiper: swiper,
      },

      navigation: {
         nextEl: ".card-slider-thumbs-swiper-button-next",
         prevEl: ".card-slider-thumbs-swiper-button-prev"
      },
   });

   const colorBtns = document.querySelectorAll('.color-list__item-inner');

   const onClickRefreshSlider = (evt) => {
      let active = document.querySelector('.color-list__item.active');

      if(active !== evt.currentTarget.parentNode) {
        active.classList.remove('active');
        evt.currentTarget.parentNode.classList.add('active');

        offerChangeGallery(); // функция из functions.js на сервере

        swiper.update();
        swiper.setProgress(0, 0);
        swiperThumbs.update();
        swiperThumbs.setProgress(0, 0);
      }
   }

   if(colorBtns) {
      colorBtns.forEach(btn => {
         btn.addEventListener('click', onClickRefreshSlider)
      })
   }
}

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


const productCardSliders = document.querySelectorAll('.product-card-swiper-container');

if(productCardSliders.length) {
   productCardSliders.forEach(slider => {

      const pcslider = new Swiper(slider, {
         slidesPerView: 1,
         nested: true,
   
         on: {
            slideChangeTransitionEnd: function () {
              let active_offer_id = slider.querySelector('.swiper-slide-active').getAttribute('data-offer');              
              offerChange(active_offer_id);
            },

            slideChange: function() {
               paginationBullets.forEach(bullet => {
                  bullet.classList.contains('active') ?
                  bullet.classList.remove('active') : null;
               })
               paginationBullets[pcslider.activeIndex].classList.add('active'); 
            }
         },
      });

      let productCard = slider.parentNode.parentNode;

      const paginationBullets = productCard.querySelectorAll('.pagination-bullet');

      if(paginationBullets) {
         const onCLickChangeSlide = function (evt) {

            paginationBullets.forEach(bullet => {
               bullet.classList.contains('active') ?
               bullet.classList.remove('active') : null;
            })

            evt.target.classList.add('active');
            let index = evt.target.getAttribute('data-id');
            pcslider.slideTo(index);
         }

         paginationBullets.forEach((btn,i) => {
            btn.addEventListener('click', onCLickChangeSlide);
         })
      }
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
      slidesPerView: 'auto',

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
         clickable: true
      }
   })
};

const introSlider = document.querySelector('.intro-swiper-container');

if(introSlider) {
   new Swiper(introSlider, {
      slidesPerView: '1',
      loop: true,

      pagination: {
         el: ".intro-swiper-pagination", 
         clickable: true
      }
   })
};

const bannerThinSlider = document.querySelector('.safety-swiper-container');

if(bannerThinSlider) {
   new Swiper(".safety-swiper-container", {
      slidesPerView: 'auto',
      loop: true,

      pagination: {
         el: ".safety-swiper-pagination",
         clickable: true
      }
   })
};

const burgerMenuSlider = document.querySelector('.burger-menu-swiper-container');

if(burgerMenuSlider) {
   new Swiper(burgerMenuSlider, {
      slidesPerView: 'auto',

      navigation: {
         nextEl: ".burger-menu-button-next",
         prevEl: ".burger-menu-button-prev"
      },
   })
};

export { initOffersSlider }
