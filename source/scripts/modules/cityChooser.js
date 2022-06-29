document.addEventListener("DOMContentLoaded", function() {
    const initModal = document.querySelector('.city-ask');
    const chooserModal = document.querySelector('.city-chooser');
    const chooserOpener = document.querySelector('.city-info__choose a');

    const onClickCloseModal = (evt) => {
        const modalName = evt.currentTarget.getAttribute('data-id');
        let modal = document.querySelector('.' + modalName);
        modal.classList.remove('active');
        let closers = modal.querySelectorAll('.close-button');
        closers.forEach(closer => {
            closer.removeEventListener('click', onClickCloseModal);
        });
    }

    const onClickOpenChooser = (evt) => {
        initModal.classList.remove('active');
        const modalName = evt.currentTarget.getAttribute('data-id');
        const modal = document.querySelector('.' + modalName);
        modal.classList.add('active');

        init(modal);
    }

    initModal.classList.add('active');

    function init(modal) {
        let closers = modal.querySelectorAll('.close-button');

        closers.forEach(closer => {
            closer.addEventListener('click', onClickCloseModal);
        });
        
        let opener = modal.querySelector('.open-button');
        if(opener) {
            opener.addEventListener('click', onClickOpenChooser);
        }
    }

    init(initModal);

    chooserOpener.addEventListener('click', () => {
        chooserModal.classList.add('active');
        init(chooserModal);
    })
});
