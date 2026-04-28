// ============================================================
// QUEL THÈME EST ACTIF ?
// On regarde l'URL pour savoir quel thème utiliser
// ex: customisation.html?theme=theme-fees → themeId = "theme-fees"
// ============================================================
const searchParams = new URLSearchParams(window.location.search);
const themeId = searchParams.get("theme") || "theme-nuage";

// ============================================================
// VARIABLES QU'ON RETIENT QUAND L'UTILISATEUR CLIQUE
// ============================================================
let avatarActuel = 0;      // index de l'avatar choisi (0 à 5)
let accessoireActuel = null; // index de l'accessoire choisi (null = aucun)
let tshirtActuel = 0;      // index du t-shirt choisi (0 à 5)

// ============================================================
// TOUS LES ASSETS PAR THÈME
// Pour ajouter un thème : copie un bloc et change les chemins
// ============================================================
const themes = {

    // ---- THÈME PIRATE ----
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
        // Une seule main pour tous les avatars du thème pirate
        bras: [
            "../assets/customisation/avatar/hand.svg",
            "../assets/customisation/avatar/hand.svg",
            "../assets/customisation/avatar/hand.svg",
            "../assets/customisation/avatar/hand2.svg",
            "../assets/customisation/avatar/hand3.svg",
            "../assets/customisation/avatar/hand4.svg",
        ],
        accessoires: [
            "../assets/customisation/accessoires/objets/accessoire1.svg",
            "../assets/customisation/accessoires/objets/accessoire2.svg",
            "../assets/customisation/accessoires/objets/accessoire3.svg",
            "../assets/customisation/accessoires/objets/accessoire4.svg",
            "../assets/customisation/accessoires/objets/accessoire5.svg",
            "../assets/customisation/accessoires/objets/accessoire6.svg",
        ],
    },

    // ---- THÈME FÉES ----
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
        // Tableau de mains — une par avatar
        // avatar 0, 1, 2 → même main | avatar 3, 4, 5 → mains différentes
        bras: [
            "../assets/customisation/avatar/hand.svg",
            "../assets/customisation/avatar/hand.svg",
            "../assets/customisation/avatar/hand.svg",
            "../assets/customisation/avatar/hand2.svg",
            "../assets/customisation/avatar/hand3.svg",
            "../assets/customisation/avatar/hand4.svg",
        ],
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

// On récupère le thème actif selon l'URL
const theme = themes[themeId] || themes["theme-nuage"];

// ============================================================
// REMPLIR LES BOUTONS DE CHOIX AVEC LES BONS ASSETS
// ============================================================
function chargerTheme() {
    document.querySelector(".customisation").style.background = theme.couleur;

    const categories = [
        { index: 0, assets: theme.avatars },
        { index: 1, assets: theme.chapeaux },
        { index: 2, assets: theme.tshirts },
        { index: 3, assets: theme.accessoires },
    ];

    categories.forEach(({ index, assets }) => {
        const choices = document.querySelectorAll(".cate")[index].querySelectorAll(".choice");
        choices.forEach((choice, i) => {
            const img = choice.querySelector("img");
            if (img && assets[i]) img.src = assets[i];
        });
    });
}

chargerTheme();

// ============================================================
// CLIC SUR UN AVATAR
// ============================================================
function cliquerAvatar(indexDansCate, src) {
    const avatar = document.getElementById("calque-avatar");
    avatar.src = src;
    avatarActuel = indexDansCate; // ← on retient l'index pour les bras

    // Position selon l'avatar choisi
    if (indexDansCate === 0) { avatar.style.top = "100px"; avatar.style.left = "60px"; avatar.style.width = "180px"; }
    else if (indexDansCate === 1) { avatar.style.top = "100px"; avatar.style.left = "55px"; avatar.style.width = "190px"; }
    else if (indexDansCate === 2) { avatar.style.top = "110px"; avatar.style.left = "70px"; avatar.style.width = "170px"; }
    else if (indexDansCate === 3) { avatar.style.top = "100px"; avatar.style.left = "60px"; avatar.style.width = "180px"; }
    else if (indexDansCate === 4) { avatar.style.top = "135px"; avatar.style.left = "65px"; avatar.style.width = "175px"; }
    else if (indexDansCate === 5) { avatar.style.top = "110px"; avatar.style.left = "65px"; avatar.style.width = "165px"; }

    placerAccessoire(); // repositionne l'accessoire si il y en a un
}

// ============================================================
// CLIC SUR UN CHAPEAU
// ============================================================
function cliquerChapeau(indexDansCate, src) {
    const chapeau = document.getElementById("calque-chapeau");
    chapeau.src = src;

    if (themeId === "theme-nuage") {
        if (indexDansCate === 0) { chapeau.style.top = "75px";  chapeau.style.left = "38px"; chapeau.style.width = "230px"; }
        else if (indexDansCate === 1) { chapeau.style.top = "90px";  chapeau.style.left = "59px"; chapeau.style.width = "235px"; }
        else if (indexDansCate === 2) { chapeau.style.top = "80px";  chapeau.style.left = "38px"; chapeau.style.width = "230px"; }
        else if (indexDansCate === 3) { chapeau.style.top = "80px";  chapeau.style.left = "30px"; chapeau.style.width = "245px"; }
        else if (indexDansCate === 4) { chapeau.style.top = "63px";  chapeau.style.left = "73px"; chapeau.style.width = "230px"; }
        else if (indexDansCate === 5) { chapeau.style.top = "55px";  chapeau.style.left = "23px"; chapeau.style.width = "260px"; }
    }
    else if (themeId === "theme-fees") {
        if (indexDansCate === 0) { chapeau.style.top = "60px";  chapeau.style.left = "65px";  chapeau.style.width = "170px"; }
        else if (indexDansCate === 1) { chapeau.style.top = "65px";  chapeau.style.left = "110px"; chapeau.style.width = "80px"; }
        else if (indexDansCate === 2) { chapeau.style.top = "120px"; chapeau.style.left = "70px";  chapeau.style.width = "210px"; }
        else if (indexDansCate === 3) { chapeau.style.top = "75px";  chapeau.style.left = "110px"; chapeau.style.width = "80px"; }
        else if (indexDansCate === 4) { chapeau.style.top = "45px";  chapeau.style.left = "50px";  chapeau.style.width = "210px"; }
        else if (indexDansCate === 5) { chapeau.style.top = "70px";  chapeau.style.left = "100px"; chapeau.style.width = "100px"; }
    }
    else {
        chapeau.style.top = "75px"; chapeau.style.left = "38px"; chapeau.style.width = "230px";
    }
}

// ============================================================
// CLIC SUR UN T-SHIRT
// ============================================================
function cliquerTshirt(indexDansCate, src) {
    const tshirt = document.getElementById("calque-tshirt");
    tshirtActuel = indexDansCate;
    tshirt.src = src;

    // --- Position du t-shirt ---
    if (themeId === "theme-nuage") {
        if (indexDansCate === 0) { tshirt.style.top = "242px"; tshirt.style.left = "40px"; tshirt.style.width = "220px"; }
        else if (indexDansCate === 1) { tshirt.style.top = "265px"; tshirt.style.left = "15px"; tshirt.style.width = "289px"; }
        else if (indexDansCate === 2) { tshirt.style.top = "275px"; tshirt.style.left = "40px"; tshirt.style.width = "220px"; }
        else if (indexDansCate === 3) { tshirt.style.top = "260px"; tshirt.style.left = "50px"; tshirt.style.width = "190px"; }
        else if (indexDansCate === 4) { tshirt.style.top = "275px"; tshirt.style.left = "33px"; tshirt.style.width = "240px"; }
        else if (indexDansCate === 5) { tshirt.style.top = "280px"; tshirt.style.left = "45px"; tshirt.style.width = "210px"; }
    }
    else if (themeId === "theme-fees") {
        if (indexDansCate === 0) { tshirt.style.top = "268px"; tshirt.style.left = "50px"; tshirt.style.width = "190px"; }
        else if (indexDansCate === 1) { tshirt.style.top = "230px"; tshirt.style.left = "40px"; tshirt.style.width = "220px"; }
        else if (indexDansCate === 2) { tshirt.style.top = "242px"; tshirt.style.left = "40px"; tshirt.style.width = "220px"; }
        else if (indexDansCate === 3) { tshirt.style.top = "242px"; tshirt.style.left = "40px"; tshirt.style.width = "220px"; }
        else if (indexDansCate === 4) { tshirt.style.top = "260px"; tshirt.style.left = "25px"; tshirt.style.width = "250px"; }
        else if (indexDansCate === 5) { tshirt.style.top = "260px"; tshirt.style.left = "25px"; tshirt.style.width = "250px"; }
    }
    else {
        tshirt.style.top = "242px"; tshirt.style.left = "40px"; tshirt.style.width = "220px";
    }

    // --- Choisir la bonne main selon l'avatar ---
    // Si bras est un tableau (theme-fees) → on prend la main selon l'avatar
    // Si bras est une string (theme-nuage) → même main pour tout le monde
    let brasSrc;
    if (Array.isArray(theme.bras)) {
        if (avatarActuel === 0) { brasSrc = theme.bras[0]; }
        else if (avatarActuel === 1) { brasSrc = theme.bras[1]; }
        else if (avatarActuel === 2) { brasSrc = theme.bras[2]; }
        else if (avatarActuel === 3) { brasSrc = theme.bras[3]; }
        else if (avatarActuel === 4) { brasSrc = theme.bras[4]; }
        else if (avatarActuel === 5) { brasSrc = theme.bras[5]; }
        else { brasSrc = theme.bras[0]; }
    } else {
        brasSrc = theme.bras;
    }

    const brasGauche = document.getElementById("calque-bras-gauche");
    const brasDroit  = document.getElementById("calque-bras-droit");
    brasGauche.src = brasSrc;
    brasDroit.src  = brasSrc;

    // --- Position des bras selon le t-shirt ---
    if (themeId === "theme-nuage") {
        if (indexDansCate === 0) {
            brasGauche.style.top = "280px"; brasGauche.style.left = "0px";   brasGauche.style.width = "80px"; brasGauche.style.transform = "rotate(30deg)";
            brasDroit.style.top  = "280px"; brasDroit.style.left  = "210px"; brasDroit.style.width  = "80px"; brasDroit.style.transform  = "scaleX(-1) rotate(25deg)";
        }
        else if (indexDansCate === 1) {
            brasGauche.style.top = "212px"; brasGauche.style.left = "0px";   brasGauche.style.width = "80px"; brasGauche.style.transform = "rotate(75deg)";
            brasDroit.style.top  = "240px"; brasDroit.style.left  = "200px"; brasDroit.style.width  = "80px"; brasDroit.style.transform  = "scaleX(-1) rotate(45deg)";
        }
        else if (indexDansCate === 2) {
            brasGauche.style.top = "282px"; brasGauche.style.left = "0px";   brasGauche.style.width = "80px"; brasGauche.style.transform = "rotate(25deg)";
            brasDroit.style.top  = "280px"; brasDroit.style.left  = "205px"; brasDroit.style.width  = "80px"; brasDroit.style.transform  = "scaleX(-1) rotate(25deg)";
        }
        else if (indexDansCate === 3) {
            brasGauche.style.top = "290px"; brasGauche.style.left = "5px";   brasGauche.style.width = "80px"; brasGauche.style.transform = "rotate(25deg)";
            brasDroit.style.top  = "210px"; brasDroit.style.left  = "210px"; brasDroit.style.width  = "80px"; brasDroit.style.transform  = "scaleX(-1) rotate(75deg)";
        }
        else if (indexDansCate === 4) {
            brasGauche.style.top = "290px"; brasGauche.style.left = "18px";  brasGauche.style.width = "80px"; brasGauche.style.transform = "rotate(15deg)";
            brasDroit.style.top  = "299px"; brasDroit.style.left  = "210px"; brasDroit.style.width  = "80px"; brasDroit.style.transform  = "scaleX(-1) rotate(15deg)";
        }
        else if (indexDansCate === 5) {
            brasGauche.style.top = "290px"; brasGauche.style.left = "10px";  brasGauche.style.width = "80px"; brasGauche.style.transform = "rotate(18deg)";
            brasDroit.style.top  = "280px"; brasDroit.style.left  = "200px"; brasDroit.style.width  = "80px"; brasDroit.style.transform  = "scaleX(-1) rotate(20deg)";
        }
    }
    else if (themeId === "theme-fees") {
        if (indexDansCate === 0) {
            brasGauche.style.top = "280px"; brasGauche.style.left = "0px";   brasGauche.style.width = "80px"; brasGauche.style.transform = "rotate(30deg)"; brasGauche.style.zIndex = "1";
            brasDroit.style.top  = "280px"; brasDroit.style.left  = "210px"; brasDroit.style.width  = "80px"; brasDroit.style.transform  = "scaleX(-1) rotate(25deg)"; brasDroit.style.zIndex = "1";
        }
        else if (indexDansCate === 1) {
            brasGauche.style.top = "255px"; brasGauche.style.left = "10px";  brasGauche.style.width = "80px"; brasGauche.style.transform = "rotate(30deg)"; brasGauche.style.zIndex = "1";
            brasDroit.style.top  = "260px"; brasDroit.style.left  = "200px"; brasDroit.style.width  = "80px"; brasDroit.style.transform  = "scaleX(-1) rotate(25deg)"; brasDroit.style.zIndex = "1";
        }
        else if (indexDansCate === 2) {
            brasGauche.style.top = "285px"; brasGauche.style.left = "5px";   brasGauche.style.width = "80px"; brasGauche.style.transform = "rotate(30deg)"; brasGauche.style.zIndex = "1";
            brasDroit.style.top  = "285px"; brasDroit.style.left  = "210px"; brasDroit.style.width  = "80px"; brasDroit.style.transform  = "scaleX(-1) rotate(25deg)"; brasDroit.style.zIndex = "1";
        }
        else if (indexDansCate === 3) {
            brasGauche.style.top = "285px"; brasGauche.style.left = "5px";   brasGauche.style.width = "80px"; brasGauche.style.transform = "rotate(30deg)"; brasGauche.style.zIndex = "1";
            brasDroit.style.top  = "285px"; brasDroit.style.left  = "210px"; brasDroit.style.width  = "80px"; brasDroit.style.transform  = "scaleX(-1) rotate(25deg)"; brasDroit.style.zIndex = "1";
        }
        else if (indexDansCate === 4) {
            brasGauche.style.top = "315px"; brasGauche.style.left = "20px";  brasGauche.style.width = "80px"; brasGauche.style.transform = "rotate(15deg)"; brasGauche.style.zIndex = "1";
            brasDroit.style.top  = "315px"; brasDroit.style.left  = "198px"; brasDroit.style.width  = "80px"; brasDroit.style.transform  = "scaleX(-1) rotate(15deg)"; brasDroit.style.zIndex = "1";
        }
        else if (indexDansCate === 5) {
            brasGauche.style.top = "315px"; brasGauche.style.left = "20px";  brasGauche.style.width = "80px"; brasGauche.style.transform = "rotate(15deg)"; brasGauche.style.zIndex = "1";
            brasDroit.style.top  = "315px"; brasDroit.style.left  = "198px"; brasDroit.style.width  = "80px"; brasDroit.style.transform  = "scaleX(-1) rotate(15deg)"; brasDroit.style.zIndex = "1";
        }
    }

    placerAccessoire(); // repositionne l'accessoire si il y en a un
}

// ============================================================
// CLIC SUR UN ACCESSOIRE
// ============================================================
function cliquerAccessoire(src, index) {
    const accessoire = document.getElementById("calque-accessoire");
    accessoire.src = src;
    accessoireActuel = index; // on retient quel accessoire est choisi
    placerAccessoire();
}

// ============================================================
// PLACER L'ACCESSOIRE AU BON ENDROIT
// Cette fonction est appelée à chaque fois qu'on change
// d'avatar, de t-shirt ou d'accessoire
// ============================================================
function placerAccessoire() {
    if (accessoireActuel === null) return; // rien à faire si pas d'accessoire

    const accessoire = document.getElementById("calque-accessoire");
    accessoire.style.transform = ""; // reset la rotation
    accessoire.style.zIndex = "";    // reset le z-index

    const i = accessoireActuel; // quel accessoire (0 à 5)

    // ---- POSITIONS THÈME PIRATE ----
    if (themeId === "theme-nuage") {

        if (i === 0) { // Accessoire 0
            if (tshirtActuel === 0) { accessoire.style.top = "360px"; accessoire.style.left = "225px"; accessoire.style.width = "100px"; }
            else if (tshirtActuel === 1) { accessoire.style.top = "320px"; accessoire.style.left = "240px"; accessoire.style.width = "100px"; }
            else if (tshirtActuel === 2) { accessoire.style.top = "360px"; accessoire.style.left = "225px"; accessoire.style.width = "100px"; }
            else if (tshirtActuel === 3) { accessoire.style.top = "260px"; accessoire.style.left = "250px"; accessoire.style.width = "100px"; }
            else if (tshirtActuel === 4) { accessoire.style.top = "390px"; accessoire.style.left = "200px"; accessoire.style.width = "100px"; }
            else if (tshirtActuel === 5) { accessoire.style.top = "370px"; accessoire.style.left = "210px"; accessoire.style.width = "100px"; }
        }
        else if (i === 1) { // Accessoire 1
            if (tshirtActuel === 0) { accessoire.style.top = "363px"; accessoire.style.left = "258px"; accessoire.style.width = "85px"; accessoire.style.transform = "rotate(160deg)"; }
            else if (tshirtActuel === 1) { accessoire.style.top = "218px"; accessoire.style.left = "-100px"; accessoire.style.width = "85px"; accessoire.style.transform = "scaleX(-1) rotate(100deg)"; }
            else if (tshirtActuel === 2) { accessoire.style.top = "363px"; accessoire.style.left = "252px"; accessoire.style.width = "85px"; accessoire.style.transform = "rotate(160deg)"; }
            else if (tshirtActuel === 3) { accessoire.style.top = "370px"; accessoire.style.left = "-60px"; accessoire.style.width = "85px"; accessoire.style.transform = "scaleX(-1) rotate(145deg)"; }
            else if (tshirtActuel === 4) { accessoire.style.top = "390px"; accessoire.style.left = "253px"; accessoire.style.width = "85px"; accessoire.style.transform = "rotate(160deg)"; }
            else if (tshirtActuel === 5) { accessoire.style.top = "365px"; accessoire.style.left = "244px"; accessoire.style.width = "86px"; accessoire.style.transform = "rotate(160deg)"; }
        }
        else if (i === 2) { // Accessoire 2
            if (tshirtActuel === 0) { accessoire.style.top = "355px"; accessoire.style.left = "220px"; accessoire.style.width = "85px"; accessoire.style.transform = "rotate(-25deg)"; }
            else if (tshirtActuel === 1) { accessoire.style.top = "300px"; accessoire.style.left = "220px"; accessoire.style.width = "85px"; }
            else if (tshirtActuel === 2) { accessoire.style.top = "355px"; accessoire.style.left = "215px"; accessoire.style.width = "85px"; accessoire.style.transform = "rotate(-25deg)"; }
            else if (tshirtActuel === 3) { accessoire.style.top = "245px"; accessoire.style.left = "230px"; accessoire.style.width = "85px"; }
            else if (tshirtActuel === 4) { accessoire.style.top = "365px"; accessoire.style.left = "210px"; accessoire.style.width = "85px"; }
            else if (tshirtActuel === 5) { accessoire.style.top = "350px"; accessoire.style.left = "205px"; accessoire.style.width = "85px"; }
        }
        else if (i === 3) { // Accessoire 3
            if (tshirtActuel === 0) { accessoire.style.top = "347px"; accessoire.style.left = "-67px"; accessoire.style.width = "80px"; accessoire.style.transform = "scaleX(-1) rotate(115deg)"; }
            else if (tshirtActuel === 1) { accessoire.style.top = "227px"; accessoire.style.left = "-87px"; accessoire.style.width = "80px"; accessoire.style.transform = "scaleX(-1) rotate(85deg)"; }
            else if (tshirtActuel === 2) { accessoire.style.top = "347px"; accessoire.style.left = "-67px"; accessoire.style.width = "80px"; accessoire.style.transform = "scaleX(-1) rotate(115deg)"; }
            else if (tshirtActuel === 3) { accessoire.style.top = "360px"; accessoire.style.left = "-57px"; accessoire.style.width = "80px"; accessoire.style.transform = "scaleX(-1) rotate(125deg)"; }
            else if (tshirtActuel === 4) { accessoire.style.top = "390px"; accessoire.style.left = "242px"; accessoire.style.width = "80px"; accessoire.style.transform = "rotate(160deg)"; }
            else if (tshirtActuel === 5) { accessoire.style.top = "367px"; accessoire.style.left = "242px"; accessoire.style.width = "80px"; accessoire.style.transform = "rotate(150deg)"; }
        }
        else if (i === 4) { // Accessoire 4
            if (tshirtActuel === 0) { accessoire.style.top = "367px"; accessoire.style.left = "252px"; accessoire.style.width = "60px"; accessoire.style.transform = "rotate(150deg)"; }
            else if (tshirtActuel === 1) { accessoire.style.top = "300px"; accessoire.style.left = "242px"; accessoire.style.width = "60px"; }
            else if (tshirtActuel === 2) { accessoire.style.top = "367px"; accessoire.style.left = "252px"; accessoire.style.width = "60px"; accessoire.style.transform = "rotate(150deg)"; }
            else if (tshirtActuel === 3) { accessoire.style.top = "250px"; accessoire.style.left = "265px"; accessoire.style.width = "60px"; }
            else if (tshirtActuel === 4) { accessoire.style.top = "365px"; accessoire.style.left = "245px"; accessoire.style.width = "60px"; }
            else if (tshirtActuel === 5) { accessoire.style.top = "360px"; accessoire.style.left = "245px"; accessoire.style.width = "60px"; }
        }
        else if (i === 5) { // Accessoire 5 — épée
            if (tshirtActuel === 0) { accessoire.style.transform = "rotate(45deg)";  accessoire.style.top = "325px"; accessoire.style.left = "-120px"; accessoire.style.width = "150px"; }
            else if (tshirtActuel === 1) { accessoire.style.transform = "rotate(45deg)";  accessoire.style.top = "230px"; accessoire.style.left = "-130px"; accessoire.style.width = "150px"; }
            else if (tshirtActuel === 2) { accessoire.style.transform = "rotate(45deg)";  accessoire.style.top = "335px"; accessoire.style.left = "-120px"; accessoire.style.width = "150px"; }
            else if (tshirtActuel === 3) { accessoire.style.transform = "rotate(45deg)";  accessoire.style.top = "340px"; accessoire.style.left = "-120px"; accessoire.style.width = "150px"; }
            else if (tshirtActuel === 4) { accessoire.style.transform = "rotate(75deg)";  accessoire.style.top = "325px"; accessoire.style.left = "-75px";  accessoire.style.width = "150px"; }
            else if (tshirtActuel === 5) { accessoire.style.transform = "rotate(75deg)";  accessoire.style.top = "325px"; accessoire.style.left = "-90px";  accessoire.style.width = "150px"; }
        }
    }

    // ---- POSITIONS THÈME FÉES ----
    else if (themeId === "theme-fees") {

        if (i === 0) { // Accessoire 0 — baguette 1
            if (tshirtActuel === 0) { accessoire.style.top = "345px"; accessoire.style.left = "240px"; accessoire.style.width = "100px"; }
            else if (tshirtActuel === 1) { accessoire.style.top = "320px"; accessoire.style.left = "220px"; accessoire.style.width = "100px"; }
            else if (tshirtActuel === 2) { accessoire.style.top = "180px"; accessoire.style.left = "20px";  accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 3) { accessoire.style.top = "180px"; accessoire.style.left = "20px";  accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 4) { accessoire.style.top = "180px"; accessoire.style.left = "20px";  accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 5) { accessoire.style.top = "180px"; accessoire.style.left = "20px";  accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
        }
        else if (i === 1) { // Accessoire 1 — baguette 2
            if (tshirtActuel === 0) { accessoire.style.top = "345px"; accessoire.style.left = "230px"; accessoire.style.width = "100px"; }
            else if (tshirtActuel === 1) { accessoire.style.top = "320px"; accessoire.style.left = "230px"; accessoire.style.width = "100px"; }
            else if (tshirtActuel === 2) { accessoire.style.top = "180px"; accessoire.style.left = "20px";  accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 3) { accessoire.style.top = "180px"; accessoire.style.left = "20px";  accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 4) { accessoire.style.top = "180px"; accessoire.style.left = "20px";  accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 5) { accessoire.style.top = "180px"; accessoire.style.left = "20px";  accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
        }
        else if (i === 2) { // Accessoire 2
            if (tshirtActuel === 0) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 1) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 2) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 3) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 4) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 5) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
        }
        else if (i === 3) { // Accessoire 3
            if (tshirtActuel === 0) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 1) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 2) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 3) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 4) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 5) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
        }
        else if (i === 4) { // Accessoire 4
            if (tshirtActuel === 0) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 1) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 2) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 3) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 4) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 5) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
        }
        else if (i === 5) { // Accessoire 5
            if (tshirtActuel === 0) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 1) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 2) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 3) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 4) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
            else if (tshirtActuel === 5) { accessoire.style.top = "180px"; accessoire.style.left = "20px"; accessoire.style.width = "300px"; accessoire.style.zIndex = "-1"; }
        }
    }

    // ---- POSITIONS PAR DÉFAUT (autres thèmes) ----
    else {
        accessoire.style.top = "200px";
        accessoire.style.left = "50px";
        accessoire.style.width = "100px";
    }
}

// ============================================================
// ÉCOUTER TOUS LES CLICS SUR LES BOUTONS
// ============================================================
const btns  = document.querySelectorAll("img.btn");
const cates = document.querySelectorAll(".cate");

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const cateParent    = btn.closest(".cate");
        const indexDansCate = Array.from(btn.closest(".choices").querySelectorAll("img")).indexOf(btn);

        if (cateParent === cates[0]) { cliquerAvatar(indexDansCate, btn.src); }
        else if (cateParent === cates[1]) { cliquerChapeau(indexDansCate, btn.src); }
        else if (cateParent === cates[2]) { cliquerTshirt(indexDansCate, btn.src); }
        else if (cateParent === cates[3]) { cliquerAccessoire(btn.src, indexDansCate); }
    });
});

// ============================================================
// SAUVEGARDE ET REDIRECTION
// Quand on clique sur "J'achète ma box"
// ============================================================
const btnAchat    = document.getElementById("btn-achat");
const nomInput    = document.getElementById("nom-perso");
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

    // On sauvegarde tout le personnage dans le localStorage
    // pour pouvoir l'afficher sur la page suivante
    const personnage = {
        nom:   nom,
        theme: themeId,

        avatar:       document.getElementById("calque-avatar").src,
        avatarTop:    document.getElementById("calque-avatar").style.top,
        avatarLeft:   document.getElementById("calque-avatar").style.left,
        avatarWidth:  document.getElementById("calque-avatar").style.width,

        chapeau:      document.getElementById("calque-chapeau").src,
        chapeauTop:   document.getElementById("calque-chapeau").style.top,
        chapeauLeft:  document.getElementById("calque-chapeau").style.left,
        chapeauWidth: document.getElementById("calque-chapeau").style.width,

        tshirt:       document.getElementById("calque-tshirt").src,
        tshirtTop:    document.getElementById("calque-tshirt").style.top,
        tshirtLeft:   document.getElementById("calque-tshirt").style.left,
        tshirtWidth:  document.getElementById("calque-tshirt").style.width,

        brasGauche:          document.getElementById("calque-bras-gauche").src,
        brasGaucheTop:       document.getElementById("calque-bras-gauche").style.top,
        brasGaucheLeft:      document.getElementById("calque-bras-gauche").style.left,
        brasGaucheWidth:     document.getElementById("calque-bras-gauche").style.width,
        brasGaucheTransform: document.getElementById("calque-bras-gauche").style.transform,

        brasDroit:          document.getElementById("calque-bras-droit").src,
        brasDroitTop:       document.getElementById("calque-bras-droit").style.top,
        brasDroitLeft:      document.getElementById("calque-bras-droit").style.left,
        brasDroitWidth:     document.getElementById("calque-bras-droit").style.width,
        brasDroitTransform: document.getElementById("calque-bras-droit").style.transform,

        accessoire:          document.getElementById("calque-accessoire").src,
        accessoireTop:       document.getElementById("calque-accessoire").style.top,
        accessoireLeft:      document.getElementById("calque-accessoire").style.left,
        accessoireWidth:     document.getElementById("calque-accessoire").style.width,
        accessoireTransform: document.getElementById("calque-accessoire").style.transform,
        accessoireZIndex:    document.getElementById("calque-accessoire").style.zIndex,
    };

    localStorage.setItem("personnage", JSON.stringify(personnage));

    // Redirection après 1 seconde
    setTimeout(() => {
        window.location.href = "../html/inter-customisation.html";
    }, 1000);
});