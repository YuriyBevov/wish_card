/*import { initOffersSlider } from '../modules/swiper.js'

let currentTab = document.querySelector('.offers__tabs>.active');
const tabs = document.querySelectorAll('.offers__tabs button');
const contents = document.querySelectorAll('.offers-swiper-container');
const title = document.querySelector('.offers__title');
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
                if(content.classList.contains('hidden')) {
                    content.classList.remove('hidden')                   

                    i + 1 === 1 ? 
                    title.innerHTML = 'В комплекте выгоднее!' : 
                    i + 1 === 2 ? 
                    title.innerHTML = 'Аксессуары по выгодной цене !' : null
                    initOffersSlider(content);
                } 
            }    
        })
    }
} 

tabs.forEach(tab => {
    tab.addEventListener('click', onClickShowTabInfo)    
});*/


let currentTab = document.querySelector('.offers__tabs>.active');
const tabs = document.querySelectorAll('.offers__tabs button');
const title = document.querySelector('.offers__title');
let currentTabID = '1'

const onClickShowTabInfo = (evt) => {

    const activeTab = evt.target;

    currentTab.classList.remove('active')
    activeTab.classList.add('active')
    
    currentTab = activeTab
    const dataID = activeTab.getAttribute('data-id');

    if(currentTabID !== dataID) {
        currentTabID = dataID

        currentTabID === '1' ? 
        title.innerHTML = 'В комплекте выгоднее!' : 
        currentTabID === '2' ? 
        title.innerHTML = 'Аксессуары по выгодной цене !' : null
    }
} 

tabs.forEach(tab => {
    tab.addEventListener('click', onClickShowTabInfo)    
});