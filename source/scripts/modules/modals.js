import { bodyLocker } from '../utils/functions.js';

let modalOpeners = document.querySelectorAll('.modal-opener');

function initModal(opener, overlay, modal) {
    opener.removeEventListener('click', onClickOpenModal);
    overlay.classList.add('is-opened');
    modal.classList.add('is-active');

    const closer = modal.querySelector('.modal__close');

    const closeModal = () => {
        opener.addEventListener('click', onClickOpenModal);
        overlay.classList.remove('is-opened');
        modal.classList.remove('is-active');
        bodyLocker(false);
    }

    const onClickCloseModal = () => {
        closer.removeEventListener('click', onClickCloseModal);
        closeModal();
    };

    const closeByEscBtn = (evt) => {
        if (evt.key === "Escape") {
            document.removeEventListener('keydown', closeByEscBtn);
            closeModal();
        }
    }

    const closeByOverlayClick = (evt) => {
        if(evt.target === overlay) {
            document.removeEventListener('click', closeByOverlayClick);
            closeModal();
        }
    }

    closer.addEventListener('click', onClickCloseModal);
    document.addEventListener('keydown', closeByEscBtn);
    document.addEventListener('click', closeByOverlayClick);
}

const onClickOpenModal = (evt) => {
    let modalName = evt.currentTarget.getAttribute('data-modal-anchor');
    const modal = document.querySelector('.' + modalName);

    if(modal) {
        bodyLocker(true);
        initModal(evt.currentTarget, modal.parentNode, modal);
    }
}

if(modalOpeners) {
    modalOpeners.forEach(opener => {
      opener.addEventListener('click', onClickOpenModal);
  });
}