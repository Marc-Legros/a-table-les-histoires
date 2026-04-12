// Parallax.js
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
    invertX: false,
    invertY: false
});

// Swiper
document.addEventListener("DOMContentLoaded", function() {
    const sectionSlider = document.querySelector('.section-slider');
    const scene = document.getElementById('scene');
    const mainTitle = document.getElementById('main-title');
    
    // NOUVEAU : On cible les tracés SVG (les <path>) de tes deux vagues
    const vaguePaths = document.querySelectorAll('.vague-path');

    function mettreAJourSlide(swiperInstance) {
        const activeSlide = swiperInstance.slides[swiperInstance.activeIndex];
        
        // 1. CHANGER LA COULEUR DE LA SECTION ET DES SVG
        const newColor = activeSlide.getAttribute('data-bg');
        if (newColor) {
            // Change le fond de la section
            sectionSlider.style.backgroundColor = newColor;
            
            // Change la couleur (fill) de chaque vague SVG
            vaguePaths.forEach(path => {
                path.style.fill = newColor;
            });
        }

        // 2. CHANGER LE TITRE
        const newTitle = activeSlide.getAttribute('data-title');
        if (newTitle) mainTitle.textContent = newTitle;

        // 3. APPLIQUER LE THÈME
        const newTheme = activeSlide.getAttribute('data-theme');
        if (newTheme) {
            scene.className = 'slider-backgrounds ' + newTheme; 
        }

        // 4. CHANGER LES IMAGES DE DÉCOR
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
            init: function () { mettreAJourSlide(this); },
            slideChange: function () { mettreAJourSlide(this); }
        }
    });
});