const chemin = document.querySelector("#chemin-gsap")

const longueurChemin = chemin.getTotalLength()

gsap.fromTo(chemin, {
    strokeDasharray: longueurChemin,
    strokeDashoffset: longueurChemin
}, {
    strokeDashoffset: 0,
    duration: 8,
    ease: "Power2.out"
})



gsap.fromTo(document.querySelector("#marc-img"), {
    opacity: 0,
}, {
    duration: 2,
    ease: "power1.out",
    opacity: 1,
});

gsap.fromTo(document.querySelector("#tiph-img"), {
    opacity: 0,
}, {
    duration: 2,
    ease: "power1.out",
    opacity: 1,
});

gsap.fromTo(document.querySelector("#gaspar-img"), {
    opacity: 0,
}, {
    duration: 2,
    ease: "power1.out",
    opacity: 1,
});