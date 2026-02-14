'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const quizHandler = () => {
        const form = document.querySelector('.js-form-quiz form');
        if (!form) return;

        const steps = form.querySelectorAll('.quiz__step');
        const nextButtons = form.querySelectorAll('.quiz__btn[type="button"]');
        const progressBar = form.querySelector('.quiz__progress span');
        const progressValue = form.querySelector('.quiz__val');

        let currentStep = 0;
        const totalSteps = steps.length;

        steps[currentStep].classList.add('is-active');
        updateProgress();

        // --- PROGRESS ---
        function updateProgress() {
            const percent = Math.round((currentStep / (totalSteps - 1)) * 100);
            progressBar.style.width = percent + '%';
            progressValue.textContent = percent + '%';
        }

        // --- STEP HANDLER ---
        function showStep(index) {
            steps[currentStep].classList.remove('is-active');
            currentStep = index;
            steps[currentStep].classList.add('is-active');
            updateProgress();
        }

        // --- RADIO VALIDATION ---
        function validateStep(step) {
            const radios = step.querySelectorAll('input[type="radio"]');
            if (!radios.length) return true;

            const checked = step.querySelector('input[type="radio"]:checked');

            if (!checked) {
                radios.forEach((radio) => {
                    radio.closest('.quiz__check').classList.add('is-error');
                });
                return false;
            }

            return true;
        }

        // --- CHANGE ERROR STATE ---
        form.addEventListener('change', (e) => {
            if (e.target.matches('input[type="radio"]')) {
                const step = e.target.closest('.quiz__step');
                const checks = step.querySelectorAll('.quiz__check');

                checks.forEach((check) => {
                    check.classList.remove('is-error');
                });
            }
        });

        // --- NEXT ---
        nextButtons.forEach((btn) => {
            btn.addEventListener('click', () => {
                const stepEl = steps[currentStep];

                if (!validateStep(stepEl)) return;

                if (currentStep < totalSteps - 1) {
                    showStep(currentStep + 1);
                }
            });
        });

        // --- SUBMIT ---
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const stepEl = steps[currentStep];
            if (!validateStep(stepEl)) return;

            form.reset();
            showStep(0);

            console.log('Quiz submitted');
        });
    };

    quizHandler();
});
