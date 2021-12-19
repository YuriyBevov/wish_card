'use strict'

import offersTabs from './modules/offersTabs.js'
import descriptionTabs from './modules/descriptionTabs.js'
import swiper from './modules/swiper.js'
import menu from './modules/menu.js'
import filter from './modules/filter.js'
import catalogMenu from './modules/catalogMenu.js'

//убрать в модуль!
let Masonry = require('masonry-layout');

let masonry = document.querySelector('.cats__grid');

masonry ?
new Masonry( '.cats__grid', {
  itemSelector: '.cats__grid-item',
  percentPosition: true,
  gutter: 16
}) : null;
  // !!