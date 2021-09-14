// показ фильтра по клику на название

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
const filter = document.querySelector('.filter');
const filterOverlay = document.querySelector('.filter-overlay');
const filterOpenBtn = document.querySelectorAll('.js-show-filter');
const filterCloseBtn = document.querySelector('.js-close-filter');

const onClickShowFilter = (evt) => {
    console.log('show')
    evt.preventDefault();

    filter.classList.toggle('opened');
    filterOverlay.classList.toggle('opened');
}

filterCloseBtn.addEventListener('click', onClickShowFilter);

filterOpenBtn.forEach(btn => {
    btn.addEventListener('click', onClickShowFilter);
})




