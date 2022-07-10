function setActiveItem(prev, current, type) {
    prev.classList.remove('active');
    current.classList.add('active');

    if(type === 'cathegory') {
        let subcathegories = current.querySelectorAll('.catalog-menu__item--subcathegory');
        setActiveItem(catalog.querySelector('.catalog-menu__item--subcathegory.active'), subcathegories[0], 'subcathegory');
    };

    if(type === 'subcathegory') {
        let id = current.getAttribute('data-cathegory-id');
        let activeProduct = catalog.querySelector(`.catalog-menu__product-list[data-cathegory-id= "${ id }" ]`);

        setActiveItem(catalog.querySelector('.catalog-menu__product-list.active'), activeProduct , 'product');
    };
}

const catalog = document.querySelector('.catalog-menu');

if(catalog) {
    const catalogOpener = document.querySelector('.js-open-catalog-menu');
    const closer = catalog.querySelector('.js-catalog-menu-closer');

    const onClickShowCatalog = () => {
        catalog.classList.toggle('opened');

        if(!catalog.classList.contains('opened')) {
            //возвращаю каталог в изначальную позицию при закрытии
            setActiveItem(catalog.querySelector('.catalog-menu__item--cathegory.active'), cathegoryItems[0], 'cathegory');
            refreshMobileProducts();
        }
    }

    catalogOpener.addEventListener('click', onClickShowCatalog);
    closer.addEventListener('click', onClickShowCatalog);

    const cathegoryItems = catalog.querySelectorAll('.catalog-menu__item--cathegory');
    const subcathegoryItems = catalog.querySelectorAll('.catalog-menu__item--subcathegory');
    const products = catalog.querySelector('.catalog-menu__products');
    const backBtns = catalog.querySelectorAll('.catalog-menu__item--back');

    const onClickRefreshMobileProducts = (evt) => {
        evt.preventDefault();
        refreshMobileProducts();
    };

    const refreshMobileProducts = () => {
        products.classList.contains('showed') ?
        products.classList.remove('showed') : null;
    };

    backBtns.forEach(btn => {
        btn.addEventListener('click', onClickRefreshMobileProducts);
    });

    function showMobileProducts() {
        products.classList.add('showed');
    };

    const onClickSetActiveCathegory = (evt) => {
        evt.preventDefault();
        setActiveItem(catalog.querySelector('.catalog-menu__item--cathegory.active'), evt.currentTarget, 'cathegory');
    };

    const onClickShowActiveProducts = (evt) => {
        evt.preventDefault();
        evt.stopPropagation();

        if(window.innerWidth < 661) {
            showMobileProducts();
        }

        setActiveItem(catalog.querySelector('.catalog-menu__item--subcathegory.active'), evt.currentTarget, 'subcathegory');
    };

    cathegoryItems.forEach(item => {
        item.addEventListener('click', onClickSetActiveCathegory);
    });

    subcathegoryItems.forEach(item => {
        item.addEventListener('click', onClickShowActiveProducts);
    });

    const onResizeRefreshMobileProducts = () => {
        if(window.innerWidth > 660) {
            refreshMobileProducts();
        }
    };

    window.addEventListener('resize', onResizeRefreshMobileProducts);
}