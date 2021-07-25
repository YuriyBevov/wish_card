let currentTab = document.querySelector('.description__header-btn.active');
const tabs = document.querySelectorAll('.description__header-btn');
const contents = document.querySelectorAll('.description__content-item');
let currentTabID = '1'

const onClickShowTabInfo = (evt) => {
    const activeTab = evt.target;
    currentTab.classList.remove('active')
    activeTab.classList.add('active')
    currentTab = activeTab
    const dataID = activeTab.getAttribute('data-id');

    if(currentTabID !== dataID) {
        currentTabID = dataID

        contents.forEach((content, i) => {
            if((i + 1).toString() !== dataID) {
                !content.classList.contains('hidden') ?
                content.classList.add('hidden') : null
            } else {
                content.classList.contains('hidden') ? 
                content.classList.remove('hidden') : null
            }    
        })
    }
}

tabs.forEach(tab => {
    tab.addEventListener('click', onClickShowTabInfo)    
});