'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const processHandler = () => {
        const processBoxes = document.querySelectorAll('.js-process-box');

        if (!processBoxes.length) return;

        processBoxes.forEach((box) => {
            box.addEventListener('click', () => {
                const isOpen = box.classList.contains('is-open');

                processBoxes.forEach((el) => el.classList.remove('is-open'));

                if (!isOpen) {
                    box.classList.add('is-open');
                }
            });
        });
    };

    processHandler();
});
