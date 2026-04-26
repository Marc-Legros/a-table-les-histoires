// Parallax.js
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
    invertX: false,
    invertY: false
});

// Duplique les cartes pour un défilement infini
const track = document.getElementById("avis-track");
if (track) {
    track.innerHTML += track.innerHTML;
}

// On observe la section chemin
const sectionChemin = document.getElementById("section-chemin");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Quand la section est visible on ajoute visible à tous
            document.querySelectorAll(
                "#numero1, #texte1, #numero2, #texte2, #numero3, #texte3, #numero4, #texte4"
            ).forEach(el => el.classList.add("visible"));
        } else {
            // Quand on quitte la section on enlève visible
            document.querySelectorAll(
                "#numero1, #texte1, #numero2, #texte2, #numero3, #texte3, #numero4, #texte4"
            ).forEach(el => el.classList.remove("visible"));
        }
    });
}, { threshold: 0.2 });

observer.observe(sectionChemin);