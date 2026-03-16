// Parallax.js
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  invertX: false,
  invertY: false
});



const card = document.getElementById("card");

document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 25;
  const y = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
});

// document.addEventListener("mousemove", (e) => {
//   const x = (e.clientX / window.innerWidth) * 100;
//   const y = (e.clientY / window.innerHeight) * 100;

//   document.body.style.background =
//     `radial-gradient(circle at ${x}% ${y}%, #00f0ff, #001)`;
// });