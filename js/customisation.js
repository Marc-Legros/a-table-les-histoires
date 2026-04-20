// =============================
// QUEL THÈME EST ACTIF ?
// =============================
const searchParams = new URLSearchParams(window.location.search);
const themeId = searchParams.get("theme") || "theme-nuage";

// =============================
// ON RETIENT CE QUI EST SÉLECTIONNÉ
// =============================
let avatarActuel = "";
let accessoireActuel = "";

// =============================
// TOUS LES ASSETS PAR THÈME
// =============================
const themes = {
    "theme-nuage": {
        couleur: "#A89FD8",
        avatars: [
            "../assets/customisation/avatar/Group.svg",
            "../assets/customisation/avatar/Group1.svg",
            "../assets/customisation/avatar/Group2.svg",
            "../assets/customisation/avatar/Group3.svg",
            "../assets/customisation/avatar/Group4.svg",
            "../assets/customisation/avatar/Group5.svg",
        ],
        chapeaux: [
            "../assets/customisation/accessoires/chapeau/hat1.svg",
            "../assets/customisation/accessoires/chapeau/hat2.svg",
            "../assets/customisation/accessoires/chapeau/hat3.svg",
            "../assets/customisation/accessoires/chapeau/hat4.svg",
            "../assets/customisation/accessoires/chapeau/hat5.svg",
            "../assets/customisation/accessoires/chapeau/hat6.svg",
        ],
        tshirts: [
            "../assets/customisation/accessoires/t-shirt/t-shirt1.svg",
            "../assets/customisation/accessoires/t-shirt/t-shirt2.svg",
            "../assets/customisation/accessoires/t-shirt/t-shirt3.svg",
            "../assets/customisation/accessoires/t-shirt/t-shirt4.svg",
            "../assets/customisation/accessoires/t-shirt/t-shirt5.svg",
            "../assets/customisation/accessoires/t-shirt/t-shirt6.svg",
        ],
        bras: "../assets/customisation/avatar/hand.svg",
        accessoires: [
            "../assets/customisation/accessoires/objets/accessoire1.svg",
            "../assets/customisation/accessoires/objets/accessoire2.svg",
            "../assets/customisation/accessoires/objets/accessoire3.svg",
            "../assets/customisation/accessoires/objets/accessoire4.svg",
            "../assets/customisation/accessoires/objets/accessoire5.svg",
            "../assets/customisation/accessoires/objets/accessoire6.svg",
        ],
    },
    "theme-fees": {
        couleur: "#F5A623",
        avatars: [
            "../assets/customisation/avatar/Group.svg",
            "../assets/customisation/avatar/Group1.svg",
            "../assets/customisation/avatar/Group2.svg",
            "../assets/customisation/avatar/Group3.svg",
            "../assets/customisation/avatar/Group4.svg",
            "../assets/customisation/avatar/Group5.svg",
        ],
        chapeaux: [
            "../assets/customisation/accessoires/chapeau/fee/Calque_1.svg",
            "../assets/customisation/accessoires/chapeau/fee/couronne.svg",
            "../assets/customisation/accessoires/chapeau/fee/couronne de fleurs.svg",
            "../assets/customisation/accessoires/chapeau/fee/chapeau 6 1(2).svg",
            "../assets/customisation/accessoires/chapeau/fee/chapeau 2 1.svg",
            "../assets/customisation/accessoires/chapeau/fee/chapeau 1 1.svg",
        ],
        tshirts: [
            "../assets/customisation/accessoires/t-shirt/fee/Calque_1(2).svg",
            "../assets/customisation/accessoires/t-shirt/fee/t shirt 2 1(1).svg",
            "../assets/customisation/accessoires/t-shirt/fee/t shirt 5 1(2).svg",
            "../assets/customisation/accessoires/t-shirt/fee/t shirt 5 1(3).svg",
            "../assets/customisation/accessoires/t-shirt/fee/t shirt 6 1(1).svg",
            "../assets/customisation/accessoires/t-shirt/fee/t shirt 6 1(2).svg",
        ],
        bras: "../assets/customisation/avatar/hand.svg",
        accessoires: [
            "../assets/customisation/accessoires/objets/fee/baguette.svg",
            "../assets/customisation/accessoires/objets/fee/baguette(1).svg",
            "../assets/customisation/accessoires/objets/fee/Calque_1(3).svg",
            "../assets/customisation/accessoires/objets/fee/Calque_1(4).svg",
            "../assets/customisation/accessoires/objets/fee/Calque_1(5).svg",
            "../assets/customisation/accessoires/objets/fee/Calque_1(6).svg",
        ],
    },
};

// On récupère le thème actif
const theme = themes[themeId] || themes["theme-nuage"];

// =============================
// ON REMPLIT LES BOUTONS DE CHOIX
// =============================
function chargerTheme() {
    // Couleur du panel
    document.querySelector(".customisation").style.background = theme.couleur;

    // Avatars
    const choicesAvatar = document.querySelectorAll(".cate")[0].querySelectorAll(".choice");
    choicesAvatar.forEach((choice, i) => {
        const img = choice.querySelector("img");
        if (img && theme.avatars[i]) img.src = theme.avatars[i];
    });

    // Chapeaux
    const choicesChapeau = document.querySelectorAll(".cate")[1].querySelectorAll(".choice");
    choicesChapeau.forEach((choice, i) => {
        const img = choice.querySelector("img");
        if (img && theme.chapeaux[i]) img.src = theme.chapeaux[i];
    });

    // T-shirts
    const choicesTshirt = document.querySelectorAll(".cate")[2].querySelectorAll(".choice");
    choicesTshirt.forEach((choice, i) => {
        const img = choice.querySelector("img");
        if (img && theme.tshirts[i]) img.src = theme.tshirts[i];
    });

    // Accessoires
    const choicesAccessoire = document.querySelectorAll(".cate")[3].querySelectorAll(".choice");
    choicesAccessoire.forEach((choice, i) => {
        const img = choice.querySelector("img");
        if (img && theme.accessoires[i]) img.src = theme.accessoires[i];
    });
}

chargerTheme();

// =============================
// QUAND ON CLIQUE SUR UN AVATAR
// =============================
function cliquerAvatar(indexDansCate, src) {
    const avatar = document.getElementById("calque-avatar");
    avatar.src = src;
    avatarActuel = src;

    // Position de l'avatar selon lequel on a choisi
    if (indexDansCate === 0) { avatar.style.top = "100px"; avatar.style.left = "60px"; avatar.style.width = "180px"; }
    else if (indexDansCate === 1) { avatar.style.top = "100px"; avatar.style.left = "55px"; avatar.style.width = "190px"; }
    else if (indexDansCate === 2) { avatar.style.top = "110px"; avatar.style.left = "70px"; avatar.style.width = "170px"; }
    else if (indexDansCate === 3) { avatar.style.top = "100px"; avatar.style.left = "60px"; avatar.style.width = "180px"; }
    else if (indexDansCate === 4) { avatar.style.top = "135px"; avatar.style.left = "65px"; avatar.style.width = "175px"; }
    else if (indexDansCate === 5) { avatar.style.top = "110px"; avatar.style.left = "65px"; avatar.style.width = "165px"; }

    // On affiche les bras automatiquement
    const bras = document.getElementById("calque-bras");
    if (bras && theme.bras) {
        bras.src = theme.bras;
        bras.style.top = "150px";
        bras.style.left = "48px";
        bras.style.width = "70px";
    }

    // On repositionne l'accessoire si il y en a un
    placerAccessoire();
}

// =============================
// QUAND ON CLIQUE SUR UN CHAPEAU
// =============================
function cliquerChapeau(indexDansCate, src) {
    const chapeau = document.getElementById("calque-chapeau");
    chapeau.src = src;

    if (indexDansCate === 0) { chapeau.style.top = "75px"; chapeau.style.left = "38px"; chapeau.style.width = "230px"; }
    else if (indexDansCate === 1) { chapeau.style.top = "90px"; chapeau.style.left = "69px"; chapeau.style.width = "235px"; }
    else if (indexDansCate === 2) { chapeau.style.top = "80px"; chapeau.style.left = "38px"; chapeau.style.width = "230px"; }
    else if (indexDansCate === 3) { chapeau.style.top = "80px"; chapeau.style.left = "30px"; chapeau.style.width = "245px"; }
    else if (indexDansCate === 4) { chapeau.style.top = "63px"; chapeau.style.left = "73px"; chapeau.style.width = "230px"; }
    else if (indexDansCate === 5) { chapeau.style.top = "55px"; chapeau.style.left = "23px"; chapeau.style.width = "260px"; }
}

// =============================
// QUAND ON CLIQUE SUR UN T-SHIRT
// =============================
function cliquerTshirt(indexDansCate, src) {
    const tshirt = document.getElementById("calque-tshirt");
    tshirt.src = src;

    if (indexDansCate === 0) { tshirt.style.top = "242px"; tshirt.style.left = "40px"; tshirt.style.width = "220px"; }
    else if (indexDansCate === 1) { tshirt.style.top = "270px"; tshirt.style.left = "40px"; tshirt.style.width = "210px"; }
    else if (indexDansCate === 2) { tshirt.style.top = "275px"; tshirt.style.left = "45px"; tshirt.style.width = "210px"; }
    else if (indexDansCate === 3) { tshirt.style.top = "260px"; tshirt.style.left = "50px"; tshirt.style.width = "190px"; }
    else if (indexDansCate === 4) { tshirt.style.top = "275px"; tshirt.style.left = "50px"; tshirt.style.width = "210px"; }
    else if (indexDansCate === 5) { tshirt.style.top = "280px"; tshirt.style.left = "45px"; tshirt.style.width = "210px"; }

    // On repositionne les bras selon le t-shirt
    const bras = document.getElementById("calque-bras");
    if (bras && bras.src) {
        if (indexDansCate === 0) { bras.style.top = "242px"; bras.style.left = "40px"; bras.style.width = "220px"; }
        else if (indexDansCate === 1) { bras.style.top = "270px"; bras.style.left = "40px"; bras.style.width = "210px"; }
        else if (indexDansCate === 2) { bras.style.top = "275px"; bras.style.left = "45px"; bras.style.width = "210px"; }
        else if (indexDansCate === 3) { bras.style.top = "260px"; bras.style.left = "50px"; bras.style.width = "190px"; }
        else if (indexDansCate === 4) { bras.style.top = "275px"; bras.style.left = "50px"; bras.style.width = "210px"; }
        else if (indexDansCate === 5) { bras.style.top = "280px"; bras.style.left = "45px"; bras.style.width = "210px"; }
    }
}

// =============================
// QUAND ON CLIQUE SUR UN ACCESSOIRE
// =============================
function cliquerAccessoire(src) {
    const accessoire = document.getElementById("calque-accessoire");
    accessoire.src = src;
    accessoireActuel = src;
    placerAccessoire();
}

// =============================
// PLACER L'ACCESSOIRE AU BON ENDROIT
// =============================
function placerAccessoire() {
    if (!accessoireActuel) return;

    const accessoire = document.getElementById("calque-accessoire");
    accessoire.style.transform = "";

    const i = theme.accessoires.indexOf(accessoireActuel.replace(window.location.origin, "").replace(/^\//, "../"));

    if (themeId === "theme-nuage") {
        if (i === 0) { accessoire.style.top = "170px"; accessoire.style.left = "185px"; accessoire.style.width = "100px"; }
        else if (i === 1) { accessoire.style.top = "170px"; accessoire.style.left = "180px"; accessoire.style.width = "100px"; }
        else if (i === 2) { accessoire.style.top = "200px"; accessoire.style.left = "50px"; accessoire.style.width = "100px"; }
        else if (i === 3) { accessoire.style.top = "200px"; accessoire.style.left = "50px"; accessoire.style.width = "100px"; }
        else if (i === 4) { accessoire.style.top = "200px"; accessoire.style.left = "50px"; accessoire.style.width = "100px"; }
        else if (i === 5) {
            accessoire.style.transform = "rotate(45deg)";
            accessoire.style.top = "300px";
            accessoire.style.left = "150px";
            accessoire.style.width = "80px";
        }
    }
    else if (themeId === "theme-fees") {
        if (i === 0) { accessoire.style.top = "200px"; accessoire.style.left = "150px"; accessoire.style.width = "80px"; }
        else if (i === 1) { accessoire.style.top = "200px"; accessoire.style.left = "150px"; accessoire.style.width = "80px"; }
        else if (i === 2) { accessoire.style.top = "200px"; accessoire.style.left = "50px"; accessoire.style.width = "100px"; }
        else if (i === 3) { accessoire.style.top = "200px"; accessoire.style.left = "50px"; accessoire.style.width = "100px"; }
        else if (i === 4) { accessoire.style.top = "200px"; accessoire.style.left = "50px"; accessoire.style.width = "100px"; }
        else if (i === 5) { accessoire.style.top = "200px"; accessoire.style.left = "50px"; accessoire.style.width = "100px"; }
    }
    else {
        accessoire.style.top = "200px";
        accessoire.style.left = "50px";
        accessoire.style.width = "100px";
    }
}

// =============================
// ON ÉCOUTE TOUS LES CLICS
// =============================
const btns = document.querySelectorAll("img.btn");
const cates = document.querySelectorAll(".cate");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {

        const cateParent = btn.closest(".cate");
        const indexDansCate = Array.from(btn.closest(".choices").querySelectorAll("img")).indexOf(btn);

        if (cateParent === cates[0]) { cliquerAvatar(indexDansCate, btn.src); }
        else if (cateParent === cates[1]) { cliquerChapeau(indexDansCate, btn.src); }
        else if (cateParent === cates[2]) { cliquerTshirt(indexDansCate, btn.src); }
        else if (cateParent === cates[3]) { cliquerAccessoire(btn.src); }

    });
});

// =============================
// SAUVEGARDE ET REDIRECTION
// =============================
const btnAchat = document.getElementById("btn-achat");
const nomInput = document.getElementById("nom-perso");
const messagePret = document.getElementById("message-pret");

btnAchat.addEventListener("click", (e) => {
    e.preventDefault();

    const nom = nomInput.value.trim();

    if (!nom) {
        alert("Entre le prénom de ton héros !");
        return;
    }

    messagePret.textContent = nom + " est prêt !";
    messagePret.style.display = "block";

    const personnage = {
        nom: nom,
        theme: themeId,
        avatar: document.getElementById("calque-avatar").src,
        avatarTop: document.getElementById("calque-avatar").style.top,
        avatarLeft: document.getElementById("calque-avatar").style.left,
        avatarWidth: document.getElementById("calque-avatar").style.width,

        chapeau: document.getElementById("calque-chapeau").src,
        chapeauTop: document.getElementById("calque-chapeau").style.top,
        chapeauLeft: document.getElementById("calque-chapeau").style.left,
        chapeauWidth: document.getElementById("calque-chapeau").style.width,

        tshirt: document.getElementById("calque-tshirt").src,
        tshirtTop: document.getElementById("calque-tshirt").style.top,
        tshirtLeft: document.getElementById("calque-tshirt").style.left,
        tshirtWidth: document.getElementById("calque-tshirt").style.width,

        bras: document.getElementById("calque-bras").src,
        brasTop: document.getElementById("calque-bras").style.top,
        brasLeft: document.getElementById("calque-bras").style.left,
        brasWidth: document.getElementById("calque-bras").style.width,

        accessoire: document.getElementById("calque-accessoire").src,
        accessoireTop: document.getElementById("calque-accessoire").style.top,
        accessoireLeft: document.getElementById("calque-accessoire").style.left,
        accessoireWidth: document.getElementById("calque-accessoire").style.width,
        accessoireTransform: document.getElementById("calque-accessoire").style.transform,
    };

    localStorage.setItem("personnage", JSON.stringify(personnage));

    setTimeout(() => {
        window.location.href = "../html/inter-customisation.html";
    }, 1000);
});