'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const headerScrolledHandler = () => {
        const header = document.querySelector('.js-header');
        if (!header) return;

        let lastScroll = 0;

        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll > 10) {
                header.classList.add('is-scroll');
            } else {
                header.classList.remove('is-scroll');
            }

            if (currentScroll > lastScroll && currentScroll > 200) {
                header.classList.add('is-transform');
            } else {
                header.classList.remove('is-transform');
            }

            lastScroll = currentScroll;
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
    };

    headerScrolledHandler();
});
