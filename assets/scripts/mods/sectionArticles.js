'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const articlesSliderHandler = () => {
        if (typeof Swiper === 'undefined') return;

        const sliderEls = document.querySelector('.js-articles-slider');
        if (!sliderEls) return;

        new Swiper(sliderEls, {
            slidesPerView: 3.5,
            spaceBetween: 30,
            speed: 700,
            breakpoints: {
                0: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },
                767: {
                    slidesPerView: 2.5,
                },
                992: {
                    slidesPerView: 3.5,
                    spaceBetween: 30,
                }
            }
        });
    };

    articlesSliderHandler();
});
