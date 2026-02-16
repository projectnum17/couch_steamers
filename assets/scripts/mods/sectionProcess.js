'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const processBoxes = document.querySelectorAll('.js-process-box');
    if (!processBoxes.length) return;

    const MOBILE_BREAKPOINT = 768;

    const handleClick = (box) => {
        const isOpen = box.classList.contains('is-open');

        processBoxes.forEach((el) => el.classList.remove('is-open'));

        if (!isOpen) {
            box.classList.add('is-open');
        }
    };

    const addEvents = () => {
        processBoxes.forEach((box) => {
            box.addEventListener('click', box._handler);
        });
    };

    const removeEvents = () => {
        processBoxes.forEach((box) => {
            box.removeEventListener('click', box._handler);
            box.classList.remove('is-open');
        });
    };

    const checkWidth = () => {
        if (window.innerWidth < MOBILE_BREAKPOINT) {
            addEvents();
        } else {
            removeEvents();
        }
    };

    processBoxes.forEach((box) => {
        box._handler = () => handleClick(box);
    });

    checkWidth();

    window.addEventListener('resize', checkWidth);
});
