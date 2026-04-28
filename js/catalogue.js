const boxIle = document.querySelector(".box-ile")
const boxFee = document.querySelector(".box-fee")
const boxDragon = document.querySelector(".box-dragon")
const boxJungle = document.querySelector(".box-jungle")
const boxMeteorite = document.querySelector(".box-meteorites")

let animIle = gsap.to(document.querySelector("#img-bg-ile"), {
    paused: true,
    opacity: 1,
    duration: .5
});

let animFee = gsap.to(document.querySelector("#img-bg-fee"), {
    paused: true,
    opacity: 1,
    duration: .5
});

let animDragon = gsap.to(document.querySelector("#img-bg-dragon"), {
    paused: true,
    opacity: 1,
    duration: .5
});

let animJungle = gsap.to(document.querySelector("#img-bg-jungle"), {
    paused: true,
    opacity: 1,
    duration: .5
});

let animMeteorite = gsap.to(document.querySelector("#img-bg-meteorite"), {
    paused: true,
    opacity: 1,
    duration: .5
});

// Hover
boxIle.addEventListener("mouseenter", () => animIle.play());
boxFee.addEventListener("mouseenter", () => animFee.play());
boxDragon.addEventListener("mouseenter", () => animDragon.play());
boxJungle.addEventListener("mouseenter", () => animJungle.play());
boxMeteorite.addEventListener("mouseenter", () => animMeteorite.play());

// Non hover
boxIle.addEventListener("mouseleave", () => animIle.reverse());
boxFee.addEventListener("mouseleave", () => animFee.reverse());
boxDragon.addEventListener("mouseleave", () => animDragon.reverse());
boxJungle.addEventListener("mouseleave", () => animJungle.reverse());
boxMeteorite.addEventListener("mouseleave", () => animMeteorite.reverse());