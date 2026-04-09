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