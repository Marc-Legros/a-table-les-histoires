// On récupère la case à cocher et le bouton continuer
const checkbox = document.querySelector(".checkbox input");
const btnContinuer = document.querySelector(".btn-paiement");

// Au chargement de la page
// on remet les données sauvegardées si elles existent
window.addEventListener("load", () => {
    const donnees = JSON.parse(localStorage.getItem("coordonnees"));
    if (donnees) {
        checkbox.checked = true;
        document.querySelector('[placeholder="Adresse-mail"]').value = donnees.email || "";
        document.querySelector('[placeholder="Prénom"]').value = donnees.prenom || "";
        document.querySelector('[placeholder="Nom"]').value = donnees.nom || "";
        document.querySelector('[placeholder="Adresse"]').value = donnees.adresse || "";
        document.querySelector('[placeholder="Code postal"]').value = donnees.codePostal || "";
        document.querySelector('[placeholder="Ville"]').value = donnees.ville || "";
        document.querySelector('[placeholder="Téléphone"]').value = donnees.telephone || "";
    }
});

// Quand on clique sur CONTINUER
// on sauvegarde les données si la case est cochée
if (btnContinuer) {
    btnContinuer.addEventListener("click", () => {
        if (checkbox.checked) {
            // On récupère toutes les valeurs des champs
            const donnees = {
                email: document.querySelector('[placeholder="Adresse-mail"]').value,
                prenom: document.querySelector('[placeholder="Prénom"]').value,
                nom: document.querySelector('[placeholder="Nom"]').value,
                adresse: document.querySelector('[placeholder="Adresse"]').value,
                codePostal: document.querySelector('[placeholder="Code postal"]').value,
                ville: document.querySelector('[placeholder="Ville"]').value,
                telephone: document.querySelector('[placeholder="Téléphone"]').value,
            };
            // On les sauvegarde dans le localStorage
            localStorage.setItem("coordonnees", JSON.stringify(donnees));
        } else {
            // Si la case n'est pas cochée on supprime les données
            localStorage.removeItem("coordonnees");
        }
    });
}