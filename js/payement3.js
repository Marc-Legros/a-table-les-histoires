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

    // Nom de la box dynamique
    const nomsBoxes = {
        "theme-nuage": "LA LÉGENDE DE L'ÎLE NUAGE",
        "theme-fees": "LA POTION DES FÉES",
        "theme-dragon": "LA FLAMME DU DRAGON",
        "theme-jungle": "LE TRÉSOR DE LA JUNGLE",
        "theme-espace": "LES MÉTÉORITES CROUSTILLANTES",
    };

    const personnage = JSON.parse(localStorage.getItem("personnage"));
    const themeActif = personnage ? personnage.theme : "theme-nuage";
    const nomBox = nomsBoxes[themeActif] || "LA LÉGENDE DE L'ÎLE NUAGE";

    const recapNom = document.querySelector(".recap-nom");
    if (recapNom) recapNom.textContent = `Box "${nomBox}"`;

    const couleursFond = {
        "theme-nuage":  "#6872FF",
        "theme-fees":   "#FFD04D",
        "theme-dragon": "#A5DB76",
        "theme-jungle": "#FF8411",
        "theme-espace": "#74B5FF",
    };

    const desserts = {
        "theme-nuage":  "../assets/index/ileFlottante.png",
        "theme-fees":   "../assets/index/smoothie.png",
        "theme-dragon": "../assets/index/cremeBrulee.png",
        "theme-jungle": "../assets/index/saladeDeFruits.png",
        "theme-espace": "../assets/index/cookies.png",
    };

    const recapBox     = document.getElementById("recap-box-visuel");
    const recapDessert = document.getElementById("recap-dessert");

    if (recapBox)     recapBox.style.backgroundColor = couleursFond[themeActif] || "#6872FF";
    if (recapDessert) recapDessert.src = desserts[themeActif] || "../assets/index/ileFlottante.png";
});