// Parallax.js
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
    invertX: false,
    invertY: false
});

// Swiper
const sectionSlider = document.querySelector('.section-slider');

const swiper = new Swiper('.mySwiper', {
    loop: true,
    speed: 500,
    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },
    on: {
        // Cette fonction se déclenche à chaque fois que la slide change
        slideChange: function () {
            // Récupère la slide actuellement visible
            const activeSlide = this.slides[this.activeIndex];
            
            // Récupère la couleur que tu as mise dans le HTML
            const newColor = activeSlide.getAttribute('data-bg');
            
            // Change la couleur de la section globale
            if (newColor) {
                sectionSlider.style.backgroundColor = newColor;
            }
        }
    }
});