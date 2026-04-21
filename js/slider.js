// Swiper
document.addEventListener("DOMContentLoaded", function () {
    const sectionSlider = document.querySelector('.section-slider');
    const scene = document.getElementById('scene');
    const mainTitle = document.getElementById('main-title');

    const vaguePaths = document.querySelectorAll('.vague-path');

    function mettreAJourSlide(swiperInstance) {
        const activeSlide = swiperInstance.slides[swiperInstance.activeIndex];

        // CHANGE LE FOND
        const newColor = activeSlide.getAttribute('data-bg');
        if (newColor) {
            sectionSlider.style.backgroundColor = newColor;

            vaguePaths.forEach(path => {
                path.style.fill = newColor;
            });
        }

        // CHANGE LE TITRE
        const newTitle = activeSlide.getAttribute('data-title');
        if (newTitle) mainTitle.textContent = newTitle;

        // CHANGE THÈME
        const newTheme = activeSlide.getAttribute('data-theme');
        if (newTheme) {
            scene.className = 'slider-backgrounds ' + newTheme;

             // ← AJOUTE JUSTE CETTE LIGNE
           const lienPerso = document.getElementById("btn");
            if (lienPerso) lienPerso.href = `html/customisation.html?theme=${newTheme}`;
        }

        // CHANGE LE BACKGROUNDS
        for (let i = 1; i <= 7; i++) {

            const decorImg = document.getElementById('decor-' + i);

            if (!decorImg) continue;

            const newSrc = activeSlide.getAttribute('data-img' + i);

            if (newSrc) {
                decorImg.src = newSrc;
                decorImg.style.display = 'block';
            } else {
                decorImg.style.display = 'none';
            }
        }
    }

    const swiper = new Swiper('.mySwiper', {
        loop: true,
        speed: 500,
        navigation: {
            nextEl: '.btn-next',
            prevEl: '.btn-prev',
        },
        on: {
            init: function () {
                mettreAJourSlide(this);
            },

            slideChange: function () {
                mettreAJourSlide(this);

                const activeIndex = this.realIndex;

                const btn = document.getElementById("btn");

                console.log(btn);

                btn.href = `html/customisation.html?slide=${activeIndex}`;

                // window.history.replaceState(null, null, `?slide=${activeIndex}`);
            }
        }
    });
});

// ================
// ANCIEN SLIDER
// ================
// let index = 1;

// const moveTo = e => {
//     showSlide(index = e)
// }

// const changeSlide = e => {
//     showSlide(index += e)
// }

// const showSlide = e => {
//     const images = document.querySelectorAll('.slider-item img');
//     const indicators = document.querySelectorAll('.slider-indicators span');
//     const contents = document.querySelectorAll('.slider-content h3');

//     (e > images.length) ? (index = 1) : null;
//     (e < 1) ? (index = images.length) : null;

//     for (let image of images) {
//         image.style.opacity = '0'
//     }

//     for (let indicator of indicators) {
//         indicator.style.width = '8px'
//         indicator.style.background = '#ffffffaf'
//     }

//     for (let content of contents) {
//         content.style.scale = '0'
//         content.style.opacity = '0'
//         content.style.transitionDelay = '.2s'
//     }

//     images[index - 1].style.opacity = '1'
//     indicators[index - 1].style.width = '26px'
//     indicators[index - 1].style.background = '#fff'
//     contents[index - 1].style.scale = '1'
//     contents[index - 1].style.opacity = '1'

// }

// showSlide();