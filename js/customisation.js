// =============================
// QUEL THÈME EST ACTIF ?
// =============================
const searchParams = new URLSearchParams(window.location.search);
const themeId = searchParams.get("theme") || "theme-nuage";

// =============================
// ON RETIENT CE QUI EST SÉLECTIONNÉ
// =============================
let avatarActuel = "";
let accessoireActuel = null; 
let tshirtActuel = 0;
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

    // On repositionne l'accessoire si il y en a un
    placerAccessoire();
}

// =============================
// QUAND ON CLIQUE SUR UN CHAPEAU
// =============================
function cliquerChapeau(indexDansCate, src) {
    const chapeau = document.getElementById("calque-chapeau");
    chapeau.src = src;

    // ---- POSITIONS THEME-NUAGE ----
    if (themeId === "theme-nuage") {
        if (indexDansCate === 0) { chapeau.style.top = "75px"; chapeau.style.left = "38px"; chapeau.style.width = "230px"; }
        else if (indexDansCate === 1) { chapeau.style.top = "90px"; chapeau.style.left = "59px"; chapeau.style.width = "235px"; }
        else if (indexDansCate === 2) { chapeau.style.top = "80px"; chapeau.style.left = "38px"; chapeau.style.width = "230px"; }
        else if (indexDansCate === 3) { chapeau.style.top = "80px"; chapeau.style.left = "30px"; chapeau.style.width = "245px"; }
        else if (indexDansCate === 4) { chapeau.style.top = "63px"; chapeau.style.left = "73px"; chapeau.style.width = "230px"; }
        else if (indexDansCate === 5) { chapeau.style.top = "55px"; chapeau.style.left = "23px"; chapeau.style.width = "260px"; }
    }

    // ---- POSITIONS THEME-FEES ----
    else if (themeId === "theme-fees") {
        if (indexDansCate === 0) { chapeau.style.top = "60px"; chapeau.style.left = "65px"; chapeau.style.width = "170px"; }
        else if (indexDansCate === 1) { chapeau.style.top = "65px"; chapeau.style.left = "110px"; chapeau.style.width = "80px"; }
        else if (indexDansCate === 2) { chapeau.style.top = "120px"; chapeau.style.left = "70px"; chapeau.style.width = "210px"; }
        else if (indexDansCate === 3) { chapeau.style.top = "75px"; chapeau.style.left = "110px"; chapeau.style.width = "80px"; }
        else if (indexDansCate === 4) { chapeau.style.top = "45px"; chapeau.style.left = "50px"; chapeau.style.width = "210px"; }
        else if (indexDansCate === 5) { chapeau.style.top = "70px"; chapeau.style.left = "100px"; chapeau.style.width = "100px"; }
    }

    // ---- POSITIONS PAR DÉFAUT ----
    else {
        chapeau.style.top = "75px";
        chapeau.style.left = "38px";
        chapeau.style.width = "230px";
    }
}
// =============================
// QUAND ON CLIQUE SUR UN T-SHIRT
// =============================
function cliquerTshirt(indexDansCate, src) {
    const tshirt = document.getElementById("calque-tshirt");
    tshirtActuel = indexDansCate;
    tshirt.src = src;

    // ---- POSITIONS THEME-NUAGE ----
    if (themeId === "theme-nuage") {
        if (indexDansCate === 0) { tshirt.style.top = "242px"; tshirt.style.left = "40px"; tshirt.style.width = "220px"; }
        else if (indexDansCate === 1) { tshirt.style.top = "265px"; tshirt.style.left = "15px"; tshirt.style.width = "289px"; }
        else if (indexDansCate === 2) { tshirt.style.top = "275px"; tshirt.style.left = "40px"; tshirt.style.width = "220px"; }
        else if (indexDansCate === 3) { tshirt.style.top = "260px"; tshirt.style.left = "50px"; tshirt.style.width = "190px"; }
        else if (indexDansCate === 4) { tshirt.style.top = "275px"; tshirt.style.left = "33px"; tshirt.style.width = "240px"; }
        else if (indexDansCate === 5) { tshirt.style.top = "280px"; tshirt.style.left = "45px"; tshirt.style.width = "210px"; }
    }

    // ---- POSITIONS THEME-FEES ----
    else if (themeId === "theme-fees") {
        if (indexDansCate === 0) { tshirt.style.top = "268px"; tshirt.style.left = "50px"; tshirt.style.width = "190px"; }
        else if (indexDansCate === 1) { tshirt.style.top = "230px"; tshirt.style.left = "40px"; tshirt.style.width = "220px"; }
        else if (indexDansCate === 2) { tshirt.style.top = "242px"; tshirt.style.left = "40px"; tshirt.style.width = "220px"; }
        else if (indexDansCate === 3) { tshirt.style.top = "242px"; tshirt.style.left = "40px"; tshirt.style.width = "220px"; }
        else if (indexDansCate === 4) { tshirt.style.top = "260px"; tshirt.style.left = "25px"; tshirt.style.width = "250px"; }
        else if (indexDansCate === 5) { tshirt.style.top = "260px"; tshirt.style.left = "25px"; tshirt.style.width = "250px"; }
    }

    // ---- POSITIONS PAR DÉFAUT ----
    else {
        tshirt.style.top = "242px";
        tshirt.style.left = "40px";
        tshirt.style.width = "220px";
    }

    // Bras gauche et droit — inchangés
    const brasGauche = document.getElementById("calque-bras-gauche");
    brasGauche.src = theme.bras;
    const brasDroit = document.getElementById("calque-bras-droit");
    brasDroit.src = theme.bras;

    if (themeId === "theme-nuage") {
        if (indexDansCate === 0) {
            brasGauche.style.top = "280px"; brasGauche.style.left = "0px"; brasGauche.style.width = "80px"; brasGauche.style.transform = "rotate(30deg)";
            brasDroit.style.top  = "280px"; brasDroit.style.left  = "210px"; brasDroit.style.width = "80px"; brasDroit.style.transform = "scaleX(-1) rotate(25deg)";
        }
        else if (indexDansCate === 1) {
            brasGauche.style.top = "212px"; brasGauche.style.left = "0px"; brasGauche.style.width = "80px"; brasGauche.style.transform = "rotate(75deg)";
            brasDroit.style.top  = "240px"; brasDroit.style.left  = "200px"; brasDroit.style.width = "80px"; brasDroit.style.transform = "scaleX(-1) rotate(45deg)";
        }
        else if (indexDansCate === 2) {
            brasGauche.style.top = "282px"; brasGauche.style.left = "0px"; brasGauche.style.width = "80px"; brasGauche.style.transform = "rotate(25deg)";
            brasDroit.style.top  = "280px"; brasDroit.style.left  = "205px"; brasDroit.style.width = "80px"; brasDroit.style.transform = "scaleX(-1) rotate(25deg)";
        }
        else if (indexDansCate === 3) {
            brasGauche.style.top = "290px"; brasGauche.style.left = "5px"; brasGauche.style.width = "80px"; brasGauche.style.transform = "rotate(25deg)";
            brasDroit.style.top  = "210px"; brasDroit.style.left  = "210px"; brasDroit.style.width = "80px"; brasDroit.style.transform = "scaleX(-1) rotate(75deg)";
        }
        else if (indexDansCate === 4) {
            brasGauche.style.top = "290px"; brasGauche.style.left = "18px"; brasGauche.style.width = "80px"; brasGauche.style.transform = "rotate(15deg)";
            brasDroit.style.top  = "299px"; brasDroit.style.left  = "210px"; brasDroit.style.width = "80px"; brasDroit.style.transform = "scaleX(-1) rotate(15deg)";
        }
        else if (indexDansCate === 5) {
            brasGauche.style.top = "290px"; brasGauche.style.left = "10px"; brasGauche.style.width = "80px"; brasGauche.style.transform = "rotate(18deg)";
            brasDroit.style.top  = "280px"; brasDroit.style.left  = "200px"; brasDroit.style.width = "80px"; brasDroit.style.transform = "scaleX(-1) rotate(20deg)";
        }
    }

    // ---- BRAS THEME-FEES ----
    else if (themeId === "theme-fees") {
        if (indexDansCate === 0) {
            brasGauche.style.top = "280px"; brasGauche.style.left = "0px"; brasGauche.style.width = "80px"; brasGauche.style.transform = "rotate(30deg)";
            brasDroit.style.top  = "280px"; brasDroit.style.left  = "210px"; brasDroit.style.width = "80px"; brasDroit.style.transform = "scaleX(-1) rotate(25deg)";
        }
        else if (indexDansCate === 1) {
            brasGauche.style.top = "255px"; brasGauche.style.left = "10px"; brasGauche.style.width = "80px"; brasGauche.style.transform = "rotate(30deg)";
            brasDroit.style.top  = "260px"; brasDroit.style.left  = "200px"; brasDroit.style.width = "80px"; brasDroit.style.transform = "scaleX(-1) rotate(25deg)";
        }
        else if (indexDansCate === 2) {
            brasGauche.style.top = "285px"; brasGauche.style.left = "5px"; brasGauche.style.width = "80px"; brasGauche.style.transform = "rotate(30deg)";
            brasDroit.style.top  = "285px"; brasDroit.style.left  = "210px"; brasDroit.style.width = "80px"; brasDroit.style.transform = "scaleX(-1) rotate(25deg)";
        }
        else if (indexDansCate === 3) {
            brasGauche.style.top = "285px"; brasGauche.style.left = "5px"; brasGauche.style.width = "80px"; brasGauche.style.transform = "rotate(30deg)";
            brasDroit.style.top  = "285px"; brasDroit.style.left  = "210px"; brasDroit.style.width = "80px"; brasDroit.style.transform = "scaleX(-1) rotate(25deg)";
        }
        else if (indexDansCate === 4) {
            brasGauche.style.top = "315px"; brasGauche.style.left = "20px"; brasGauche.style.width = "80px"; brasGauche.style.transform = "rotate(15deg)";
            brasDroit.style.top  = "315px"; brasDroit.style.left  = "198px"; brasDroit.style.width = "80px"; brasDroit.style.transform = "scaleX(-1) rotate(15deg)";
        }
        else if (indexDansCate === 5) {
            brasGauche.style.top = "315px"; brasGauche.style.left = "20px"; brasGauche.style.width = "80px"; brasGauche.style.transform = "rotate(15deg)";
            brasDroit.style.top  = "315px"; brasDroit.style.left  = "198px"; brasDroit.style.width = "80px"; brasDroit.style.transform = "scaleX(-1) rotate(15deg)";
        }
        // ... ajuste les positions pour chaque t-shirt fees
    }
    placerAccessoire();
}

// =============================
// QUAND ON CLIQUE SUR UN ACCESSOIRE
// =============================
function cliquerAccessoire(src, index) {
    const accessoire = document.getElementById("calque-accessoire");
    accessoire.src = src;
    accessoireActuel = index; 
    placerAccessoire();
}

// =============================
// PLACER L'ACCESSOIRE AU BON ENDROIT
// =============================
function placerAccessoire() {
    if (accessoireActuel === null) return; 
    console.log("placerAccessoire appelé — i:", accessoireActuel, "tshirt:", tshirtActuel, "theme:", themeId);

    const accessoire = document.getElementById("calque-accessoire");
    accessoire.style.transform = "";
    accessoire.style.zIndex = "";

    const i = accessoireActuel;

    if (themeId === "theme-nuage") {
        // Accessoire 0 — position selon le t-shirt actif
        if (i === 0) {
            if (tshirtActuel === 0) { accessoire.style.top = "360px"; accessoire.style.left = "170px"; accessoire.style.width = "100px"; accessoire.style.transform = "rotate(100deg)"; }
            else if (tshirtActuel === 1) { accessoire.style.top = "320px"; accessoire.style.left = "240px"; accessoire.style.width = "100px";}
            else if (tshirtActuel === 2) { accessoire.style.top = "360px"; accessoire.style.left = "170px"; accessoire.style.width = "100px"; accessoire.style.transform = "rotate(100deg)"; }
            else if (tshirtActuel === 3) { accessoire.style.top = "260px"; accessoire.style.left = "250px"; accessoire.style.width = "100px";}
            else if (tshirtActuel === 4) { accessoire.style.top = "360px"; accessoire.style.left = "170px"; accessoire.style.width = "100px"; accessoire.style.transform = "rotate(100deg)"; }
            else if (tshirtActuel === 5) { accessoire.style.top = "360px"; accessoire.style.left = "170px"; accessoire.style.width = "100px"; accessoire.style.transform = "rotate(100deg)"; }
        }
        // Accessoire 1
        else if (i === 1) {
            if (tshirtActuel === 0) { accessoire.style.top = "363px"; accessoire.style.left = "258px"; accessoire.style.width = "85px"; accessoire.style.transform = "rotate(160deg)"; }
            else if (tshirtActuel === 1) { accessoire.style.top = "218px"; accessoire.style.left = "-100px"; accessoire.style.width = "85px"; accessoire.style.transform = "scaleX(-1) rotate(100deg)"; }
            else if (tshirtActuel === 2) { accessoire.style.top = "363px"; accessoire.style.left = "252px"; accessoire.style.width = "85px"; accessoire.style.transform = "rotate(160deg)"; }
            else if (tshirtActuel === 3) { accessoire.style.top = "370px"; accessoire.style.left = "-60px"; accessoire.style.width = "85px"; accessoire.style.transform = "scaleX(-1) rotate(145deg)"; }
            else if (tshirtActuel === 4) { accessoire.style.top = "390px"; accessoire.style.left = "253px"; accessoire.style.width = "85px"; accessoire.style.transform = "rotate(160deg)"; }
            else if (tshirtActuel === 5) { accessoire.style.top = "365px"; accessoire.style.left = "244px"; accessoire.style.width = "86px"; accessoire.style.transform = "rotate(160deg)"; }
            // ... etc
        }
        // Accessoire 2
        else if (i === 2) {
            if (tshirtActuel === 0) { accessoire.style.top = "355px"; accessoire.style.left = "220px"; accessoire.style.width = "85px"; accessoire.style.transform = "rotate(-25deg)"; }
            else if (tshirtActuel === 1) { accessoire.style.top = "300px"; accessoire.style.left = "220px"; accessoire.style.width = "85px";}
            else if (tshirtActuel === 2) { accessoire.style.top = "355px"; accessoire.style.left = "215px"; accessoire.style.width = "85px"; accessoire.style.transform = "rotate(-25deg)"; }
            else if (tshirtActuel === 3) { accessoire.style.top = "245px"; accessoire.style.left = "230px"; accessoire.style.width = "85px";}
            else if (tshirtActuel === 4) { accessoire.style.top = "365px"; accessoire.style.left = "210px"; accessoire.style.width = "85px";}
            else if (tshirtActuel === 5) { accessoire.style.top = "350px"; accessoire.style.left = "205px"; accessoire.style.width = "85px";}
            // ... etc
        }
        // Accessoire 3
        else if (i === 3) {
            if (tshirtActuel === 0) { accessoire.style.top = "347px"; accessoire.style.left = "-67px"; accessoire.style.width = "80px"; accessoire.style.transform = "scaleX(-1) rotate(115deg)";}
            else if (tshirtActuel === 1) { accessoire.style.top = "227px"; accessoire.style.left = "-87px"; accessoire.style.width = "80px"; accessoire.style.transform = "scaleX(-1) rotate(85deg)";}
            else if (tshirtActuel === 2) { accessoire.style.top = "347px"; accessoire.style.left = "-67px"; accessoire.style.width = "80px"; accessoire.style.transform = "scaleX(-1) rotate(115deg)";}
            else if (tshirtActuel === 3) { accessoire.style.top = "360px"; accessoire.style.left = "-57px"; accessoire.style.width = "80px"; accessoire.style.transform = "scaleX(-1) rotate(125deg)";}
            else if (tshirtActuel === 4) { accessoire.style.top = "390px"; accessoire.style.left = "242px"; accessoire.style.width = "80px"; accessoire.style.transform = "rotate(160deg)";}
            else if (tshirtActuel === 5) { accessoire.style.top = "367px"; accessoire.style.left = "242px"; accessoire.style.width = "80px"; accessoire.style.transform = "rotate(150deg)";}
            // ... etc
        }
        // Accessoire 4
        else if (i === 4) {
            if (tshirtActuel === 0) { accessoire.style.top = "367px"; accessoire.style.left = "252px"; accessoire.style.width = "60px"; accessoire.style.transform = "rotate(150deg)"; }
            else if (tshirtActuel === 1) { accessoire.style.top = "300px"; accessoire.style.left = "242px"; accessoire.style.width = "60px";}
            else if (tshirtActuel === 2) { accessoire.style.top = "367px"; accessoire.style.left = "252px"; accessoire.style.width = "60px"; accessoire.style.transform = "rotate(150deg)";}
            else if (tshirtActuel === 3) { accessoire.style.top = "250px"; accessoire.style.left = "265px"; accessoire.style.width = "60px";}
            else if (tshirtActuel === 4) { accessoire.style.top = "365px"; accessoire.style.left = "245px"; accessoire.style.width = "60px";}
            else if (tshirtActuel === 5) { accessoire.style.top = "360px"; accessoire.style.left = "245px"; accessoire.style.width = "60px";}
            // ... etc
        }
        // Accessoire 5 — épée
        else if (i === 5) {
            if (tshirtActuel === 0) { accessoire.style.transform = "rotate(45deg)"; accessoire.style.top = "325px"; accessoire.style.left = "-120px"; accessoire.style.width = "150px"; }
            else if (tshirtActuel === 1) { accessoire.style.transform = "rotate(45deg)"; accessoire.style.top = "230px"; accessoire.style.left = "-130px"; accessoire.style.width = "150px"; }
            else if (tshirtActuel === 2) { accessoire.style.transform = "rotate(45deg)"; accessoire.style.top = "335px"; accessoire.style.left = "-120px"; accessoire.style.width = "150px"; }
            else if (tshirtActuel === 3) { accessoire.style.transform = "rotate(45deg)"; accessoire.style.top = "340px"; accessoire.style.left = "-120px"; accessoire.style.width = "150px"; }
            else if (tshirtActuel === 4) { accessoire.style.transform = "rotate(75deg)"; accessoire.style.top = "325px"; accessoire.style.left = "-75px"; accessoire.style.width = "150px"; }
            else if (tshirtActuel === 5) { accessoire.style.transform = "rotate(75deg)"; accessoire.style.top = "325px"; accessoire.style.left = "-90px"; accessoire.style.width = "150px"; }
            // ... etc
        }
    }
    else if (themeId === "theme-fees") {
        if (i === 0) {
            if (tshirtActuel === 0) { accessoire.style.top = "345px"; accessoire.style.left = "240px"; accessoire.style.width = "100px"; }
            else if (tshirtActuel === 1) { accessoire.style.top = "345px"; accessoire.style.left = "240px"; accessoire.style.width = "100px"; }
            else if (tshirtActuel === 2) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 3) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 4) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 5) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
        }
        else if (i === 1) {
            if (tshirtActuel === 0) { accessoire.style.top = "405px"; accessoire.style.left = "230px"; accessoire.style.width = "100px"; }
            else if (tshirtActuel === 1) { accessoire.style.top = "310px"; accessoire.style.left = "230px"; accessoire.style.width = "100px"; }
            else if (tshirtActuel === 2) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 3) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 4) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "30px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 5) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
        }
        else if (i === 2) {
            if (tshirtActuel === 0) { accessoire.style.top = "345px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 1) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 2) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 3) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 4) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 5) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
        }
        else if (i === 3) {
            if (tshirtActuel === 0) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 1) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 2) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 3) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 4) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 5) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
        }
        else if (i === 4) {
            if (tshirtActuel === 0) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 1) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 2) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 3) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 4) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 5) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
        }
        else if (i === 5) {
            if (tshirtActuel === 0) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 1) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 2) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 3) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 4) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 5) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
        }
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
        else if (cateParent === cates[3]) { 
            cliquerAccessoire(btn.src, indexDansCate); // ← on passe aussi l'index
        }

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

        // ← bras gauche et droit séparés
        brasGauche: document.getElementById("calque-bras-gauche").src,
        brasGaucheTop: document.getElementById("calque-bras-gauche").style.top,
        brasGaucheLeft: document.getElementById("calque-bras-gauche").style.left,
        brasGaucheWidth: document.getElementById("calque-bras-gauche").style.width,
        brasGaucheTransform: document.getElementById("calque-bras-gauche").style.transform,

        brasDroit: document.getElementById("calque-bras-droit").src,
        brasDroitTop: document.getElementById("calque-bras-droit").style.top,
        brasDroitLeft: document.getElementById("calque-bras-droit").style.left,
        brasDroitWidth: document.getElementById("calque-bras-droit").style.width,
        brasDroitTransform: document.getElementById("calque-bras-droit").style.transform,

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