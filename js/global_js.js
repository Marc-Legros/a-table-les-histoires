// Lenis
const lenis = new Lenis({
    duration: .8,
    easing: (t) => 1 - Math.pow(1 - t, 3),
    smoothWheel: true,
    smoothTouch: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


// Position Aware Button Hover
const buttons = document.querySelectorAll(".btn-aware");
const buttonFooter = document.querySelectorAll(".btn-footer");

// Position hover pour les dégradé
buttons.forEach(button => {
    button.addEventListener("mouseenter", function (e) {
        const span = this.querySelector("span");

        // Ici on récupère les coordonnées du bouton
        const rect = this.getBoundingClientRect();

        // Calcule la position de la souris dans le bouton
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;

        span.style.top = relY + "px";
        span.style.left = relX + "px";
    });

    // Même chose quand la souris sort du bouton
    button.addEventListener("mouseout", function (e) {
        const span = this.querySelector("span");

        const rect = this.getBoundingClientRect();

        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;

        span.style.top = relY + "px";
        span.style.left = relX + "px";
    });
});

// Position hover pour le bouton du footer
buttonFooter.forEach(button => {
    button.addEventListener("mouseenter", function (e) {
        const span = this.querySelector("span");

        // Ici on récupère les coordonnées du bouton
        const rect = this.getBoundingClientRect();

        // Calcule la position de la souris dans le bouton
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;

        span.style.top = relY + "px";
        span.style.left = relX + "px";
    });

    // Même chose quand la souris sort du bouton
    button.addEventListener("mouseout", function (e) {
        const span = this.querySelector("span");

        const rect = this.getBoundingClientRect();

        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;

        span.style.top = relY + "px";
        span.style.left = relX + "px";
    });
});



// Scroll header
let dernierScroll = 0
let dernierTemps = Date.now()
const vitesseCap = 0.4
const header = document.getElementById("nav")

window.addEventListener("scroll", () => {
    // Ici on récupère le scroll actuel et le temps actuel
    let scrollActuel = window.scrollY
    let tempsActuel = Date.now()

    // On calcule la distance et le temps
    let distance = scrollActuel - dernierScroll
    let tempsEcoule = tempsActuel - dernierTemps

    if (tempsEcoule > 0) {

        // calcule de la vitesse
        let vitesse = Math.abs(distance / tempsEcoule)

        // Si il y a de la distance, je décent donc cache le header
        if (distance > 0) {
            header.classList.add("cache")
        } else if (distance < 0) {
            // Si la vitesse est supérieur au cap alors montre le header
            if (vitesse > vitesseCap) {
                header.classList.remove("cache")
            }
        }
    }

    if (scrollActuel <= 75) {
        header.classList.remove("cache")
    }

    // On actualise le dernier scroll et le dernier temps
    dernierScroll = scrollActuel
    dernierTemps = tempsActuel
})

// Si le scroll actuel et plus élevé que le dernier, on cache le header car on décent
// if (scrollActuel > dernierScroll) {
//     header.classList.add("cache")
// } else {
//     header.classList.remove("cache")

// }