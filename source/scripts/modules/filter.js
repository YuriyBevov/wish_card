// показ фильтра по клику на название
const filter = document.querySelector('.filter');

if(filter) {

    const btns = document.querySelectorAll('.js-filter-expanded');

    let onClickShowContent = (evt) => {
        evt.target.classList.toggle('opened');
        evt.target.nextElementSibling.classList.toggle('js-opened');
    }

    btns.forEach(btn => {
        btn.addEventListener('click', onClickShowContent);
    })

    // показать больше

    const filters = document.querySelectorAll('.filter__list');

    // показ фильтра

    const filterOverlay = document.querySelector('.filter-overlay');
    const filterOpenBtn = document.querySelector('.js-show-filter');
    const filterCloseBtn = document.querySelector('.js-close-filter');
    const clearFilter = document.querySelector('.js-clear-filter');
    const filterParams = document.querySelector('.params-swiper-container');
    const applyFilter = document.querySelector('.js-apply-filter');
    const filterItems = document.querySelectorAll('.filter__list');
    const itemsToShow = 5;

    filterItems.forEach(list => {
        const items = list.querySelectorAll('.js-filter-limited');
        const showMoreBtn = list.parentNode.querySelector('.js-filter-more');

        for(let i = itemsToShow; i < items.length; i++) {
            items[i].classList.add('hidden');
        }

        if(itemsToShow >= items.length) {
            showMoreBtn.classList.add('hidden');
        }

        const onClickShowAllItems = () => {
            for(let i = itemsToShow; i < items.length; i++) {
                items[i].classList.remove('hidden');
            }
            showMoreBtn.classList.add('hidden');
        }

        showMoreBtn.addEventListener('click', onClickShowAllItems)
    })

    const onClickShowFilter = (evt) => {
        evt.preventDefault();

        filter.classList.toggle('opened');
        filterOverlay.classList.toggle('opened');
    }

    const onClickCloseFilter = (evt) => {
        if(evt.target === filterOverlay) {
            filter.classList.toggle('opened');
            filterOverlay.classList.toggle('opened');
        }
    }

    const onClickClearFilter = () => {
        filterParams.classList.remove('showed');
    }

    const onClickApplyFilterParams = () => {
        filterParams.classList.add('showed');
        filter.classList.toggle('opened');
        filterOverlay.classList.toggle('opened');
    }

    filterCloseBtn.addEventListener('click', onClickShowFilter);
    filterOverlay.addEventListener('click', onClickCloseFilter);

    filterOpenBtn.addEventListener('click', onClickShowFilter);
    clearFilter.addEventListener('click', onClickClearFilter);
    applyFilter.addEventListener('click', onClickApplyFilterParams);
}




