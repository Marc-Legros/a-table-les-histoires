const btnPanier = document.querySelector(".btn-panier");

if (btnPanier) {
    btnPanier.addEventListener("click", () => {
        // On marque que le panier est actif
        localStorage.setItem("panierActif", "true");
    });
}


// On récupère le personnage sauvegardé
const personnage = JSON.parse(localStorage.getItem("personnage"));

if (personnage) {

    // On affiche le nom
    const nomElement = document.getElementById("nom-perso");
    if (nomElement) nomElement.textContent = personnage.nom + " est prêt(e) !";

    // On remet l'avatar avec ses positions
    const avatar = document.getElementById("inter-avatar");
    if (avatar && personnage.avatar) {
        avatar.src = personnage.avatar;
        avatar.style.top = personnage.avatarTop;
        avatar.style.left = personnage.avatarLeft;
        avatar.style.width = personnage.avatarWidth;
    }

    // On remet le chapeau avec ses positions
    const chapeau = document.getElementById("inter-chapeau");
    if (chapeau && personnage.chapeau) {
        chapeau.src = personnage.chapeau;
        chapeau.style.top = personnage.chapeauTop;
        chapeau.style.left = personnage.chapeauLeft;
        chapeau.style.width = personnage.chapeauWidth;
    }

    // On remet le t-shirt avec ses positions
    const tshirt = document.getElementById("inter-tshirt");
    if (tshirt && personnage.tshirt) {
        tshirt.src = personnage.tshirt;
        tshirt.style.top = personnage.tshirtTop;
        tshirt.style.left = personnage.tshirtLeft;
        tshirt.style.width = personnage.tshirtWidth;
    }

    // On remet l'accessoire avec ses positions et sa rotation
    const accessoire = document.getElementById("inter-accessoire");
    if (accessoire && personnage.accessoire) {
        accessoire.src = personnage.accessoire;
        accessoire.style.top = personnage.accessoireTop;
        accessoire.style.left = personnage.accessoireLeft;
        accessoire.style.width = personnage.accessoireWidth;
        accessoire.style.transform = personnage.accessoireTransform;
    }

} else {
    // Si aucun personnage sauvegardé on redirige vers la customisation
    window.location.href = "../html/customisation.html";
}