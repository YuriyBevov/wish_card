const tabs = document.querySelectorAll('.description__header-btn');
const contents = document.querySelectorAll('.description__content-item');

const onClickShowTabInfo = (evt) => {
    let activeID = evt.target.getAttribute('data-id');

    tabs.forEach(tab => {
        tab.classList.contains('active') ?
        tab.classList.remove('active') : null;

        tab.getAttribute('data-id') === activeID ?
        tab.classList.add('active') : null;
    })

    contents.forEach(cont => {
        !cont.classList.contains('hidden') ?
        cont.classList.add('hidden') : null;

        cont.getAttribute('data-id') === activeID ?
        cont.classList.remove('hidden') : null;
    })
}

tabs.forEach(tab => {
    tab.addEventListener('click', onClickShowTabInfo)    
});