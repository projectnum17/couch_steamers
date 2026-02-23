'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const animationHandler = () => {
        const animatedItems = document.querySelectorAll('.js-scroll');

        if (!animatedItems.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const el = entry.target;
                        el.classList.add('_animated');

                        el.addEventListener(
                            'transitionend',
                            () => {
                                if (el.classList.contains('_animated')) {
                                    el.style.transform = 'none';
                                    el.style.willChange = 'auto';
                                }
                            },
                            { once: true },
                        );

                        observer.unobserve(el);
                    }
                });
            },
            { threshold: 0.05 },
        );

        animatedItems.forEach((item) => observer.observe(item));
    };

    const headerScrolledHandler = () => {
        const header = document.querySelector('.js-header');
        if (!header) return;

        let lastScroll = 0;

        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll > 50) {
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

    const mobileMenuHandler = () => {
        const burger = document.querySelector('.js-menu-trigger');
        const mobileMenu = document.querySelector('.js-mob-menu');

        if (!burger || !mobileMenu) return;

        burger.addEventListener('click', () => {
            burger.classList.toggle('is-active');
            mobileMenu.classList.toggle('is-active');
            document.body.classList.toggle('is-locked');
        });
    };

    // const mobileSubMenuHandler = () => {
    //     const menuItems = document.querySelectorAll(
    //         '.mobile-menu__routes > li',
    //     );

    //     menuItems.forEach((item) => {
    //         const submenu = item.querySelector('ul');

    //         if (submenu) {
    //             item.addEventListener('click', (e) => {
    //                 e.preventDefault();

    //                 submenu.classList.toggle('is-active');
    //             });
    //         }
    //     });
    // };

    const mobileSubMenuHandler = () => {
        const menuItems = document.querySelectorAll(
            '.mobile-menu__routes > li',
        );

        menuItems.forEach((item) => {
            const trigger = item.querySelector(':scope > a');
            const submenu = item.querySelector(':scope > ul');

            if (!submenu || !trigger) return;

            trigger.addEventListener('click', (e) => {
                e.preventDefault();

                const isOpen = submenu.classList.contains('is-active');

                if (isOpen) {
                    submenu.style.height = submenu.scrollHeight + 'px';

                    requestAnimationFrame(() => {
                        submenu.style.height = '0px';
                    });

                    submenu.classList.remove('is-active');
                } else {
                    const fullHeight = submenu.scrollHeight;

                    submenu.style.height = fullHeight + 'px';
                    submenu.classList.add('is-active');
                }
            });
        });
    };

    animationHandler();
    mobileMenuHandler();
    mobileSubMenuHandler();
    headerScrolledHandler();
});
