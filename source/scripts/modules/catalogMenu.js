const openBtn = document.querySelector('.js-open-catalog-menu');
const closeBtn = document.querySelector('.js-close-catalog-menu');
const catalog = document.querySelector('.catalog-menu');
let body = document.querySelector('body');
const header = document.querySelector('.header');

let headerHeight = header.getBoundingClientRect().height;

const setCatalogPos = () => {
    catalog.style.marginTop = headerHeight + 'px';
    catalog.style.maxHeight = 'calc(100vh - ' + headerHeight + 'px)';
};

const onClickShowCatalog = () => {
    catalog.classList.toggle('js-opened');
    body.classList.toggle('body-locked');

    setCatalogPos();
}

const onClickHideCatalog = () => {
    if(catalog.classList.contains('js-opened')) {
        catalog.classList.remove('js-opened');
        body.classList.remove('body-locked');
    }
}

openBtn.addEventListener('click', onClickShowCatalog)
closeBtn.addEventListener('click', onClickHideCatalog)

const menuItems = document.querySelectorAll('.catalog-menu__item');
const innerLists = document.querySelectorAll('.catalog-menu__inner');

let isScrolled = false;
let windowWidth = window.innerWidth;

const onClickShowInnerList = (evt) => {
    if(windowWidth < 960) {
        let btn = evt.currentTarget.querySelector('button');

        if(evt.target === btn) {
            evt.preventDefault();
            
            let active = evt.currentTarget.querySelector('.catalog-menu__inner');
            active.scrollTo({top: 0})

            const menuItem = evt.currentTarget;

            menuItem.classList.toggle('active');
            menuItem.querySelector('.catalog-menu__inner').classList.toggle('active')
        }
    }
}

const onHoverShowInnerList = (evt) => {
    if(windowWidth > 959) {
        /*catalog.scrollTo({
            top: 0,
            left: 0
        });*/

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
        menuItem.querySelector('.catalog-menu__inner').classList.add('active');
    }
    
}


menuItems.forEach(item => {
    item.addEventListener('mouseover', onHoverShowInnerList);
    item.addEventListener('click', onClickShowInnerList);
})

const onResizeSetWindowWidth = () => {
    windowWidth = window.innerWidth;
    let currentHeaderHeight = header.getBoundingClientRect().height;

    if(headerHeight !== currentHeaderHeight) {
        headerHeight = currentHeaderHeight;
        setCatalogPos();
    }
}

window.addEventListener('resize', onResizeSetWindowWidth);

