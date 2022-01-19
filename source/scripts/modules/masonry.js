let Masonry = require('masonry-layout');

let masonry = document.querySelector('.cats__grid');

masonry ?
new Masonry( '.cats__grid', {
  itemSelector: '.cats__grid-item',
  percentPosition: true,
  gutter: 16
}) : null;

let catalogMasonry = document.querySelectorAll('.menu__grid');

catalogMasonry ?
catalogMasonry.forEach(grid => {
    new Masonry( grid, {
        itemSelector: '.menu__grid-item',
        percentPosition: true,
        gutter: 16
      })
}) : null;
