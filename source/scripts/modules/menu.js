console.log('menu')

const menuOpener = document.querySelectorAll('.js-menu-opener');
const menuCloser = document.querySelector('.js-menu-closer');
const menu = document.querySelector('.header-mobile');

console.log(menuOpener)

const onClickOpenMenu = () => {
    menu.classList.toggle('js-opened');

    menuOpener.forEach(btn => {
        btn.classList.toggle('js-menu-opened');
    })


}

menuCloser.addEventListener('click', () => {
    menu.classList.remove('js-opened');
    menuOpener.forEach(btn => {
        btn.classList.remove('js-menu-opened');
    })
})

menuOpener.forEach(btn => {
    btn.addEventListener('click', onClickOpenMenu);
}) 