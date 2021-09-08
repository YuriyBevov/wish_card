// показ фильтра по клику на название

const btns = document.querySelectorAll('.js-filter-expanded');

let onClickShowContent = (evt) => {
    evt.target.nextElementSibling.classList.toggle('js-opened');
}

btns.forEach(btn => {
    btn.addEventListener('click', onClickShowContent);
})

// показать больше


const filters = document.querySelectorAll('.filter__list');




