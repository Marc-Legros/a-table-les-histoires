const allNumbers = document.querySelectorAll(".number")

gsap.registerPlugin(CustomEase)

// const chemin = document.querySelector("#chemin-gsap")
const maskPath = document.querySelector("#masque-path");

const longueurChemin = maskPath.getTotalLength();

// Définis une courbe linéaire
CustomEase.create("linear", "M0,0 C0,0 1,1 1,1 ")

// Anim qui fait apparaître le chemin
gsap.fromTo(maskPath,
    {
        strokeDasharray: longueurChemin,
        strokeDashoffset: longueurChemin
    },
    {
        strokeDashoffset: 0,
        duration: 3.5,
        ease: "linear",
        // y: -500
    }
);


gsap.fromTo(document.querySelector("#marc-img"), {
    opacity: 0,
}, {
    duration: .2,
    ease: "linear",
    opacity: 1,
    delay: .66
});

gsap.fromTo(document.querySelector("#tiph-img"), {
    opacity: 0,
}, {
    duration: .2,
    ease: "linear",
    opacity: 1,
    delay: 2.38
});

gsap.fromTo(document.querySelector("#gaspar-img"), {
    opacity: 0,
}, {
    duration: .2,
    ease: "linear",
    opacity: 1,
    delay: 3.3
});


gsap.fromTo(document.querySelectorAll(".number"), {
    opacity: 0,
}, {
    duration: .4,
    ease: "linear",
    opacity: 1,
    delay: 3.5,

    onComplete: () => {
	  allNumbers.forEach(n => n.style.pointerEvents = "auto")
  },
});


// Parallax.js
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
    invertX: false,
    invertY: false
});