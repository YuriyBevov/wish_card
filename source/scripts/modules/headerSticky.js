const header = document.querySelector('.header');

let isCatalogPage = document.querySelector('.catalog');
isCatalogPage ?
header.style.position = 'static' : null;