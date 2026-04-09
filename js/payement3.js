window.addEventListener("load", () => {
    const quantite = localStorage.getItem("quantite") || "1";
    const total = localStorage.getItem("total") || "20,00 €";

    // Prix de livraison fixe
    const livraison = 2.98;

    // On convertit le total en nombre pour faire le calcul
    const totalNombre = parseFloat(total.replace(",", ".").replace(" €", ""));

    // Total final = total + livraison
    const totalFinal = totalNombre + livraison;

    // On met à jour le badge de quantité
    const badge = document.querySelector(".recap-badge");
    if (badge) badge.textContent = quantite;

    // On met à jour le prix de l'article
    const recapPrix = document.querySelector(".recap-prix");
    if (recapPrix) recapPrix.textContent = total;

    // On met à jour le sous-total (sans livraison)
    const sousTotal = document.querySelectorAll(".recap-ligne span:last-child")[0];
    if (sousTotal) sousTotal.textContent = total;

    // On met à jour le prix d'expédition
    const expedition = document.querySelectorAll(".recap-ligne span:last-child")[1];
    if (expedition) expedition.textContent = livraison.toFixed(2).replace(".", ",") + " €";

    // On met à jour le total final avec la livraison incluse
    const totalElement = document.querySelector(".total-prix");
    if (totalElement) totalElement.innerHTML = '<span class="total-eur">EUR</span> ' + totalFinal.toFixed(2).replace(".", ",") + " €";
});