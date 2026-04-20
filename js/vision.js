// exemple
function showStep(step) {
  gsap.fromTo(document.querySelector("#step" + step), {
    opacity: 0,
    x: 1200
  }, {
    duration: 0.5,
    ease: "power4.out",
    x: 0,
    opacity: 1,
  });
}