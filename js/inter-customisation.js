// ---- CONFIG DÉCORATIONS PAR THÈME ----
const decorationsThemes = {
    "theme-nuage": {
        couleurFond: "#5B54C8",
        decos: [
            { classe: "deco-perroquet", src: "../assets/la_legende_de_lile_nuage/perroquet.svg" },
            { classe: "deco-pieces",    src: "../assets/index/argent.svg" },
            { classe: "deco-gouvernail",src: "../assets/la_legende_de_lile_nuage/gouvernail.svg" },
            { classe: "deco-epee",      src: "../assets/la_legende_de_lile_nuage/epee.svg" },
            { classe: "deco-dessert",   src: "../assets/index/ileFlottante.png" },
        ],
    },
    "theme-fees": {
        couleurFond: "#F5A623",
        decos: [
            { classe: "deco-perroquet", src: "../assets/la_potion_des_fees/baguette.svg" },
            { classe: "deco-pieces",    src: "../assets/la_potion_des_fees/fee.svg" },
            { classe: "deco-gouvernail",src: "../assets/la_potion_des_fees/fleur.svg" },
            { classe: "deco-epee",      src: "../assets/la_potion_des_fees/traineeDetoiles.svg" },
            { classe: "deco-dessert",   src: "../assets/index/smoothie.png" },
        ],
    },
};

// ---- BOUTON PANIER ----
const btnPanier = document.querySelector(".btn-panier");
if (btnPanier) {
    btnPanier.addEventListener("click", () => {
        localStorage.setItem("panierActif", "true");
    });
}

// ---- RÉCUPÉRATION DU PERSONNAGE ----
const personnage = JSON.parse(localStorage.getItem("personnage"));

    if (personnage) {

        // On récupère le bon thème
        const themeId = personnage.theme || "pirate";
        const themeConfig = decorationsThemes[themeId];

        if (themeConfig) {
        // On applique la couleur de fond
        document.body.style.backgroundColor = themeConfig.couleurFond;

        // On applique la couleur au footer
        document.querySelector("footer").setAttribute("style", `background-color: ${themeConfig.couleurFond} !important`);

        // On charge les décorations
        themeConfig.decos.forEach(deco => {
            const el = document.querySelector("." + deco.classe);
            if (el) el.src = deco.src;
        });
    }

    // On affiche le nom
    const nomElement = document.getElementById("nom-perso");
    if (nomElement) nomElement.textContent = personnage.nom + " est prêt(e) !";

    // On remet l'avatar
    const avatar = document.getElementById("inter-avatar");
    if (avatar && personnage.avatar) {
        avatar.src = personnage.avatar;
        avatar.style.top = personnage.avatarTop;
        avatar.style.left = personnage.avatarLeft;
        avatar.style.width = personnage.avatarWidth;
    }

    // On remet le chapeau
    const chapeau = document.getElementById("inter-chapeau");
    if (chapeau && personnage.chapeau) {
        chapeau.src = personnage.chapeau;
        chapeau.style.top = personnage.chapeauTop;
        chapeau.style.left = personnage.chapeauLeft;
        chapeau.style.width = personnage.chapeauWidth;
    }

    // On remet le t-shirt
    const tshirt = document.getElementById("inter-tshirt");
    if (tshirt && personnage.tshirt) {
        tshirt.src = personnage.tshirt;
        tshirt.style.top = personnage.tshirtTop;
        tshirt.style.left = personnage.tshirtLeft;
        tshirt.style.width = personnage.tshirtWidth;
    }

    // On remet l'accessoire
    const accessoire = document.getElementById("inter-accessoire");
    if (accessoire && personnage.accessoire) {
        accessoire.src = personnage.accessoire;
        accessoire.style.top = personnage.accessoireTop;
        accessoire.style.left = personnage.accessoireLeft;
        accessoire.style.width = personnage.accessoireWidth;
        accessoire.style.transform = personnage.accessoireTransform;
    }
        // On remet le bras gauche
    const brasGauche = document.getElementById("inter-bras-gauche");
    if (brasGauche && personnage.brasGauche) {
        brasGauche.src = personnage.brasGauche;
        brasGauche.style.top = personnage.brasGaucheTop;
        brasGauche.style.left = personnage.brasGaucheLeft;
        brasGauche.style.width = personnage.brasGaucheWidth;
        brasGauche.style.transform = personnage.brasGaucheTransform;
    }

    // On remet le bras droit
    const brasDroit = document.getElementById("inter-bras-droit");
    if (brasDroit && personnage.brasDroit) {
        brasDroit.src = personnage.brasDroit;
        brasDroit.style.top = personnage.brasDroitTop;
        brasDroit.style.left = personnage.brasDroitLeft;
        brasDroit.style.width = personnage.brasDroitWidth;
        brasDroit.style.transform = personnage.brasDroitTransform;
    }

} else {
    window.location.href = "../html/customisation.html";
}