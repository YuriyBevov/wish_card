let btn = document.querySelector('.chars__btn');

const onClickShowChars = () => {
    let headerHeight = document.querySelector('.header').getBoundingClientRect().height;
    let descriptionPosY = document.querySelector('.description').offsetTop - headerHeight - 50;

    let desc_btns = document.querySelectorAll('.description__header-btn');

    desc_btns.forEach(btn => {
        btn.classList.contains('active') ?
        btn.classList.remove('active') : null;

        btn.getAttribute('data-type') === 'chars' ?
        btn.classList.add('active') : null;
    })
    let tabs = document.querySelectorAll('.description__content-item');

    tabs.forEach(tab => {
        !tab.classList.contains('hidden') ?
        tab.classList.add('hidden') : null;

        tab.getAttribute('data-type') === 'chars' ?
        tab.classList.remove('hidden') : null;
    })

    window.scrollTo({
        top: descriptionPosY,
        behavior: 'smooth'
    })
}

if(btn) {
    btn.addEventListener('click', onClickShowChars);
}