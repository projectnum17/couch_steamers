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

        const phoneInput = form.querySelector('#contactModalPhone');
        if (!phoneInput) return;

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

        const validatePhone = () => {
            const value = phoneInput.value.trim();
            const digits = value.replace(/\D/g, '');

            if (!value || digits.length < 10) {
                phoneInput.classList.add('is-error');
                return false;
            }

            phoneInput.classList.remove('is-error');
            return true;
        };

        phoneInput.addEventListener('input', () => {
            if (phoneInput.classList.contains('is-error')) {
                validatePhone();
            }
        });

        modal.querySelectorAll('.js-contact-close').forEach((btn) => {
            btn.addEventListener('click', hideModal);
        });

        openTriggers.forEach((trigger) => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                showModal();
            });
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            if (!validatePhone()) return;

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
