const menuOpener = document.querySelectorAll('.js-menu-opener');
const menuCloser = document.querySelector('.js-menu-closer');
const menu = document.querySelector('.header-mobile');

const onClickOpenMenu = (evt) => {
    evt.stopPropagation();
    
    menu.classList.toggle('js-opened');

    menuOpener.forEach(btn => {
        btn.classList.toggle('js-menu-opened');
    })

    document.addEventListener('click', evt => {
        if(!menu.contains(evt.target)) {
            menu.classList.remove('js-opened');
            
            menuOpener.forEach(btn => {
                btn.classList.remove('js-menu-opened');
            });
        }
    })
}

menuCloser.addEventListener('click', () => {
    menu.classList.toggle('js-opened');
    
    menuOpener.forEach(btn => {
        btn.classList.toggle('js-menu-opened');
    })
})

menuOpener.forEach(btn => {
    btn.addEventListener('click', onClickOpenMenu);
})