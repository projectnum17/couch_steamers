'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const fancyInit = (selector) => {
        if (!selector) return;
        Fancybox.bind(`[data-fancybox=${selector}]`, {
            Thumbs: false,
            Toolbar: true,
        });
    };
    fancyInit('gallery');
});
