const catalogOpener = document.querySelector('.js-open-catalog-menu');


if(catalogOpener) {
    const catalog = document.querySelector('.catalog-menu');
    const closer = catalog.querySelector('.js-catalog-menu-closer');
    
    const onClickShowCatalog = () => {
        catalog.classList.toggle('opened');

        if(catalog.classList.contains('opened')) {
            init();
        }
    }

    catalogOpener.addEventListener('click', onClickShowCatalog);
    closer.addEventListener('click', onClickShowCatalog);

    let categoryItems = document.querySelectorAll('.catalog-menu__inner-item:not(.catalog-menu__back)');
    let catalogMenu = document.querySelector('.catalog-menu__list');
    let backBtn = document.querySelectorAll('.catalog-menu__back');

    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            catalogMenu.classList.add('mobile-hide');
        })
    })

    backBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            catalogMenu.classList.remove('mobile-hide');
        })
    })

    function setActiveProductList(activeInnerItem) {
        activeProductList.classList.remove('active');
        activeProductList = document.querySelector(`.catalog-menu__product-list[data-product=${activeInnerItem.getAttribute("data-product")}]`);
        activeProductList.classList.add('active');
    }

    function setActiveInnerItem(innerItems, activeItem) {
        innerItems.forEach(inner => {
            inner.classList.contains('active') ?
            inner.classList.remove('active') : null;
        });
        activeInnerItem = activeItem;
        activeInnerItem.classList.add('active'); 
    }

    function onMouseOverSetItem(evt) {
        if(type === 'mobile') {
            evt.preventDefault();
        }

        if(
            evt.currentTarget.classList.contains('catalog-menu__item')
            && !evt.currentTarget.classList.contains('active')
          ) {

            items.forEach(item => {
                item.classList.contains('active') ?
                item.classList.remove('active') : null;
            });

            evt.currentTarget.classList.add('active');

            innerItems.forEach(inner => {
                inner.removeEventListener('mouseover', onMouseOverSetInnerItem);
                inner.removeEventListener('click', onMouseOverSetInnerItem);
            });

            innerItems = evt.currentTarget.querySelectorAll('.catalog-menu__inner-item:not(.catalog-menu__back)');

            setActiveInnerItem(innerItems, innerItems[0]);
            setActiveProductList(activeInnerItem);

            innerItems.forEach(inner => {
                if(type === 'desktop') {
                    inner.addEventListener('mouseover', onMouseOverSetInnerItem);
                } else {
                    inner.addEventListener('click', onMouseOverSetInnerItem);
                }
            });
        }
    }

    function onMouseOverSetInnerItem(evt) {
        if(type === 'mobile') {
            evt.preventDefault();
        }

        if(
            evt.currentTarget.classList.contains('catalog-menu__inner-item')
          ) {
            setActiveInnerItem(innerItems, evt.currentTarget);
            setActiveProductList(activeInnerItem);
        }
    }
    
    function init() {
        if(type === 'desktop') {
            items.forEach(item => {
                item.addEventListener('mouseover', onMouseOverSetItem);
            });
        
            innerItems.forEach(inner => {
                inner.addEventListener('mouseover', onMouseOverSetInnerItem);
            });
        } else {
            items.forEach(item => {
                item.addEventListener('click', onMouseOverSetItem);
            });
        
            innerItems.forEach(inner => {
                inner.addEventListener('click', onMouseOverSetInnerItem);
            });
        }
    }

    const items = catalog.querySelectorAll('.catalog-menu__item:not(.catalog-menu__back)');
    let activeItem = items[0];
    let innerItems = activeItem.querySelectorAll('.catalog-menu__inner-item:not(.catalog-menu__back)');
    let activeInnerItem = innerItems[0];
    let activeProductList = document.querySelector(`.catalog-menu__product-list[data-product=${activeInnerItem.getAttribute("data-product")}]`);
    activeItem.classList.add('active');
    activeInnerItem.classList.add('active');
    activeProductList.classList.add('active');

    let type;

    if(window.innerWidth > 820) {
        type = 'desktop';
    } else {
        type = 'mobile';
    }
}