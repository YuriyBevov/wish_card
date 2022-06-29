const items = document.querySelectorAll('.catalog-menu__cats-item');
let active = document.querySelector('.catalog-menu__cats-item.active');

const inners = document.querySelectorAll('.catalog-menu__inner-list');
let activeInner = inners[active.getAttribute('data-id') - 1]
activeInner.style.display = 'block';
let activeInnerItem = activeInner.querySelector('.catalog-menu__cats-link');
activeInnerItem.classList.add('active');

let activeProducts = activeInner.querySelector('.catalog-menu__product-list');

activeProducts.style.display = 'block';

const onMouseOverShowInnerList = (evt) => {
    if(evt.currentTarget !== active) {
        active.classList.remove('active');
        activeInner.style.display = 'none';
        activeProducts.style.display = 'none';
        activeInnerItem.classList.remove('active');
        active = evt.currentTarget;
        active.classList.add('active');
        
        activeInner = inners[active.getAttribute('data-id') - 1]
        activeInner.style.display = 'block';
        activeInnerItem = activeInner.querySelector('.catalog-menu__cats-link');
        activeInnerItem.classList.add('active');

        activeProducts = activeInner.querySelector('.catalog-menu__product-list');

        activeProducts.style.display = 'block';
    }
}

items.forEach(item => {
    item.addEventListener('mouseover', onMouseOverShowInnerList)
})