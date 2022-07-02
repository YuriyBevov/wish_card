const catalogOpener = document.querySelector('.js-open-catalog-menu');

if(catalogOpener) {
    const catalog = document.querySelector('.catalog-menu');

    const onClickShowCatalog = () => {
        catalog.classList.toggle('opened');
    }
    catalogOpener.addEventListener('click', onClickShowCatalog);

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
            });

            innerItems = evt.currentTarget.querySelectorAll('.catalog-menu__inner-item');

            setActiveInnerItem(innerItems, innerItems[0]);
            setActiveProductList(activeInnerItem);

            innerItems.forEach(inner => {
                inner.addEventListener('mouseover', onMouseOverSetInnerItem);
            });
        }
    }

    function onMouseOverSetInnerItem(evt) {
        if(
            evt.currentTarget.classList.contains('catalog-menu__inner-item')
            && !evt.currentTarget.classList.contains('active')
          ) {
            setActiveInnerItem(innerItems, evt.currentTarget);
            setActiveProductList(activeInnerItem);
        }
    }

    const items = catalog.querySelectorAll('.catalog-menu__item');
    let activeItem = items[0];
    activeItem.classList.add('active');

    let innerItems = activeItem.querySelectorAll('.catalog-menu__inner-item');
    let activeInnerItem = innerItems[0];
    activeInnerItem.classList.add('active');

    let activeProductList = document.querySelector(`.catalog-menu__product-list[data-product=${activeInnerItem.getAttribute("data-product")}]`);
    activeProductList.classList.add('active');

    items.forEach(item => {
        item.addEventListener('mouseover', onMouseOverSetItem);
    });

    innerItems.forEach(inner => {
        inner.addEventListener('mouseover', onMouseOverSetInnerItem);
    });
}