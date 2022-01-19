const openBtn = document.querySelector('.js-open-catalog-menu');
const closeBtn = document.querySelector('.js-close-catalog-menu');
const catalog = document.querySelector('.catalog-menu');

const onClickShowCatalog = () => {
    catalog.classList.toggle('js-opened');
}

const onClickHideCatalog = () => {
    if(catalog.classList.contains('js-opened')) {
        catalog.classList.remove('js-opened');
    }
}

openBtn.addEventListener('click', onClickShowCatalog)
closeBtn.addEventListener('click', onClickHideCatalog)

const menuItems = document.querySelectorAll('.catalog-menu__item');
const innerLists = document.querySelectorAll('.catalog-menu__inner');

let isScrolled = false;

const onClickShowInnerList = (evt) => {
    evt.preventDefault();

    let elHeight = evt.currentTarget.offsetHeight;
    let num = evt.currentTarget.getAttribute('data-id');

    let posY = elHeight * (num - 1);

    !evt.currentTarget.classList.contains('active') ?
    isScrolled = false : null;

    isScrolled !== true ?
    catalog.scrollTo({
        top: posY,
        left: 0,
        behavior: 'smooth'
    }) : null;

    isScrolled = true;

    menuItems.forEach(item => {
        item.classList.contains('active') ?
        item.classList.remove('active') : null
    })

    innerLists.forEach(list => {
        list.classList.contains('active') ?
        list.classList.remove('active') : null
    })

    const menuItem = evt.currentTarget;

    menuItem.classList.add('active');
    menuItem.querySelector('.catalog-menu__inner').classList.add('active')
}

menuItems.forEach(item => {
    item.addEventListener('click', onClickShowInnerList)
})
