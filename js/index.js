const btnCusto = document.querySelectorAll(".text")

// Parallax.js
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
    invertX: false,
    invertY: false
});

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