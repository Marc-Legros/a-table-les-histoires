// Parallax.js
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
    invertX: false,
    invertY: false
});

// Swiper
var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});