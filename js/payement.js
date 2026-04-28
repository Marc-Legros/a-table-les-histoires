// On vérifie si le panier a été activé depuis inter-customisation
const panierActif = localStorage.getItem("panierActif");
const panierVide = document.getElementById("panier-vide");
const panierPlein = document.getElementById("panier-plein");
const etapes = document.querySelector(".etapes");

if (panierActif === "true") {
    panierVide.style.display = "none";
    panierPlein.style.display = "block";
    etapes.style.display = "flex"; // ← on affiche les étapes
} else {
    panierVide.style.display = "flex";
    panierPlein.style.display = "none";
    etapes.style.display = "none"; // ← on cache les étapes
}

// Prix d'une box
const prixUnitaire = 20;

// Quantité actuelle
let quantite = 1;

// On récupère les éléments de la page
const btnMoins = document.querySelector(".qte-btn:first-child");
const btnPlus = document.querySelector(".qte-btn:last-child");
const quantiteAffichage = document.querySelector(".qte span");
const totalAffichage = document.querySelector(".total");
const btnSuppr = document.querySelector(".suppr");
const panier = document.querySelector(".panier-ligne");
const btnPaiement = document.querySelector(".btn-paiement");

// Bouton + : on augmente la quantité
if (btnPlus) {
    btnPlus.addEventListener("click", () => {
        quantite++;
        mettreAJour();
    });
}

// Bouton - : on diminue la quantité (minimum 1)
if (btnMoins) {
    btnMoins.addEventListener("click", () => {
        if (quantite > 1) {
            quantite--;
            mettreAJour();
        }
    });
}

// Bouton poubelle : on supprime la ligne du panier
if (btnSuppr) {
    btnSuppr.addEventListener("click", () => {
        panier.remove();
    });
}

// Fonction qui met à jour la quantité et le prix affiché
function mettreAJour() {
    quantiteAffichage.textContent = quantite;
    const total = prixUnitaire * quantite;
    totalAffichage.textContent = total.toFixed(2).replace(".", ",") + " €";
}

// Quand on clique sur PASSER AU PAIEMENT
// on sauvegarde la quantité et le total pour la page suivante
if (btnPaiement) {
    btnPaiement.addEventListener("click", () => {
        localStorage.setItem("quantite", quantite);
        localStorage.setItem("total", (prixUnitaire * quantite).toFixed(2).replace(".", ",") + " €");
    });
}

// Noms des boxes par thème
const nomsBoxes = {
    "theme-nuage": "LA LÉGENDE DE L'ÎLE NUAGE",
    "theme-fees": "LA POTION DES FÉES",
    "theme-dragon": "LA FLAMME DU DRAGON",
    "theme-jungle": "LE TRÉSOR DE LA JUNGLE",
    "theme-espace": "LES MÉTÉORITES CROUSTILLANTES",
};

// On récupère le thème depuis le personnage sauvegardé
const personnage = JSON.parse(localStorage.getItem("personnage"));
const themeActif = personnage ? personnage.theme : "theme-nuage";
const nomBox = nomsBoxes[themeActif] || "LA LÉGENDE DE L'ÎLE NUAGE";

// On met à jour le nom dans le panier
const articleSous = document.querySelector(".article-sous");
if (articleSous) articleSous.textContent = `"${nomBox}"`;