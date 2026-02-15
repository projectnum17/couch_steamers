'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const modalHandler = () => {
        const openTriggers = document.querySelectorAll('.js-contact-trigger');
        const modal = document.querySelector('.js-contact-modal');

        if (!openTriggers.length || !modal) return;

        const modalContent = modal.querySelector('.js-contact-content');
        if (!modalContent) return;

        const form = modal.querySelector('form');
        if (!form) return;

        const body = document.body;
        let isOpen = false;

        const showModal = () => {
            if (isOpen) return;

            body.classList.add('is-locked');
            modal.classList.add('is-show');
            isOpen = true;
        };

        const hideModal = () => {
            if (!isOpen) return;

            body.classList.remove('is-locked');
            modal.classList.remove('is-show');
            isOpen = false;
        };

        openTriggers.forEach((trigger) => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                showModal();
            });
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            hideModal();

            form.reset();
        });

        modal.addEventListener('click', (e) => {
            if (!modalContent.contains(e.target)) {
                hideModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isOpen) {
                hideModal();
            }
        });
    };

    modalHandler();
});
