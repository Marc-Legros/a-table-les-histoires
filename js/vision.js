// Anim qui fait apparaître le chemin
gsap.registerPlugin(CustomEase)

// const chemin = document.querySelector("#chemin-gsap")
const maskPath = document.querySelector("#masque-path");

const longueurChemin = maskPath.getTotalLength();

CustomEase.create("linear", "M0,0 C0,0 1,1 1,1 ")

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
    duration: .5,
    ease: "linear",
    opacity: 1,
    delay: .6
});

gsap.fromTo(document.querySelector("#tiph-img"), {
    opacity: 0,
}, {
    duration: .5,
    ease: "linear",
    opacity: 1,
    delay: 2.3
});

gsap.fromTo(document.querySelector("#gaspar-img"), {
    opacity: 0,
}, {
    duration: .5,
    ease: "linear",
    opacity: 1,
    delay: 3.2
});


gsap.fromTo(document.querySelectorAll(".number"), {
    opacity: 0,
}, {
    duration: .4,
    ease: "linear",
    opacity: 1,
    delay: 3.4
});
