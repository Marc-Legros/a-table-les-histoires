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