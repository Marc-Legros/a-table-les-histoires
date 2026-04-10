// On vient chercher l'id de la recette dans l'URL 
const searchParams = new URLSearchParams(window.location.search);
const recetteId = searchParams.get("id");

let avatarActuel = "";
let accessoireActuel = "";


function placerAccessoire() {
  if (!accessoireActuel) return; 

  const accessoire = document.getElementById("calque-accessoire");
  accessoire.style.transform = "";

  if (accessoireActuel.includes("accessoire1")) {
    if (avatarActuel.includes("Group.svg")) {
      accessoire.style.top = "170px";
      accessoire.style.left = "185px";
      accessoire.style.width = "100px";
    }
    else if (avatarActuel.includes("Group1.svg")) {
      accessoire.style.top = "170px";
      accessoire.style.left = "180px";
      accessoire.style.width = "100px";
    }
    // ... etc pour chaque avatar
  }

  else if (accessoireActuel.includes("accessoire6")) {
    accessoire.style.transform = "rotate(45deg)";
    if (avatarActuel.includes("Group.svg")) {
      accessoire.style.top = "300px";
      accessoire.style.left = "150px";
      accessoire.style.width = "80px";
    }
    else if (avatarActuel.includes("Group1.svg")) {
      accessoire.style.top = "320px";
      accessoire.style.left = "130px";
      accessoire.style.width = "90px";
    }
    // ... etc pour chaque avatar
  }
}

const btns = document.querySelectorAll("img.btn");

btns.forEach(btn => {
  btn.addEventListener("click", () => {

    // ---- AVATARS ----
    if (btn.src.includes("Group")) {
      const avatar = document.getElementById("calque-avatar");
      avatar.src = btn.src;
      avatarActuel = btn.src;

      if (btn.src.includes("Group.svg")) {
        avatar.style.top = "100px";
        avatar.style.left = "60px";
        avatar.style.width = "180px";
      } 
      else if (btn.src.includes("Group1.svg")) {
        avatar.style.top = "100px";
        avatar.style.left = "55px";
        avatar.style.width = "190px";
      }
      else if (btn.src.includes("Group2.svg")) {
        avatar.style.top = "110px";
        avatar.style.left = "70px";
        avatar.style.width = "170px";
      }
      else if (btn.src.includes("Group3.svg")) {
        avatar.style.top = "100px";
        avatar.style.left = "60px";
        avatar.style.width = "180px";
      }
      else if (btn.src.includes("Group4.svg")) {
        avatar.style.top = "135px";
        avatar.style.left = "65px";
        avatar.style.width = "175px";
      }
      else if (btn.src.includes("Group5.svg")) {
        avatar.style.top = "110px";
        avatar.style.left = "65px";
        avatar.style.width = "165px";
      }

      placerAccessoire(); // ← on repositionne l'accessoire quand on change d'avatar
    }

    // ---- CHAPEAUX ----
    else if (btn.src.includes("hat")) {
      const chapeau = document.getElementById("calque-chapeau");
      chapeau.src = btn.src;

      if (btn.src.includes("hat1")) {
        chapeau.style.top = "75px";
        chapeau.style.left = "38px";
        chapeau.style.width = "230px";
      }
      else if (btn.src.includes("hat2")) {
        chapeau.style.top = "90px";
        chapeau.style.left = "69px";
        chapeau.style.width = "235px";
      }
      else if (btn.src.includes("hat3")) {
        chapeau.style.top = "80px";
        chapeau.style.left = "38px";
        chapeau.style.width = "230px";
      }
      else if (btn.src.includes("hat4")) {
        chapeau.style.top = "80px";
        chapeau.style.left = "30px";
        chapeau.style.width = "245px";
      }
      else if (btn.src.includes("hat5")) {
        chapeau.style.top = "63px";
        chapeau.style.left = "73px";
        chapeau.style.width = "230px";
      }
      else if (btn.src.includes("hat6")) {
        chapeau.style.top = "55px";
        chapeau.style.left = "23px";
        chapeau.style.width = "260px";
      }
    }

    // ---- T-SHIRTS ----
    else if (btn.src.includes("t-shirt")) {
      const tshirt = document.getElementById("calque-tshirt");
      tshirt.src = btn.src;

      if (btn.src.includes("t-shirt1")) {
        tshirt.style.top = "242px";
        tshirt.style.left = "40px";
        tshirt.style.width = "220px";
      }
      else if (btn.src.includes("t-shirt2")) {
        tshirt.style.top = "270px";
        tshirt.style.left = "40px";
        tshirt.style.width = "210px";
      }
      else if (btn.src.includes("t-shirt3")) {
        tshirt.style.top = "275px";
        tshirt.style.left = "45px";
        tshirt.style.width = "210px";
      }
      else if (btn.src.includes("t-shirt4")) {
        tshirt.style.top = "260px";
        tshirt.style.left = "50px";
        tshirt.style.width = "190px";
      }
      else if (btn.src.includes("t-shirt5")) {
        tshirt.style.top = "275px";
        tshirt.style.left = "50px";
        tshirt.style.width = "210px";
      }
      else if (btn.src.includes("t-shirt6")) {
        tshirt.style.top = "280px";
        tshirt.style.left = "45px";
        tshirt.style.width = "210px";
      }
    }

    // ---- ACCESSOIRES ----
    else if (btn.src.includes("accessoire")) {
      const accessoire = document.getElementById("calque-accessoire");
      accessoire.src = btn.src;
      accessoireActuel = btn.src; // ← on sauvegarde l'accessoire cliqué
      placerAccessoire(); // ← on appelle la fonction
    }

  });
});

const btnAchat = document.getElementById("btn-achat");
const nomInput = document.getElementById("nom-perso");
const messagePret = document.getElementById("message-pret");

// Quand on clique sur J'ACHÈTE MA BOX
btnAchat.addEventListener("click", (e) => {
    e.preventDefault(); // on empêche la navigation pour sauvegarder d'abord

    const nom = nomInput.value.trim();

    // Si aucun nom entré on prévient
    if (!nom) {
        alert("Entre le prénom de ton héros !");
        return;
    }

    // On affiche "Céleste est prêt !"
    messagePret.textContent = nom + " est prêt !";
    messagePret.style.display = "block";

    // On sauvegarde tout dans le localStorage
    const personnage = {
        nom: nom,
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

        accessoire: document.getElementById("calque-accessoire").src,
        accessoireTop: document.getElementById("calque-accessoire").style.top,
        accessoireLeft: document.getElementById("calque-accessoire").style.left,
        accessoireWidth: document.getElementById("calque-accessoire").style.width,
        accessoireTransform: document.getElementById("calque-accessoire").style.transform,
    };

    localStorage.setItem("personnage", JSON.stringify(personnage));

    // On redirige vers la page panier après 1 seconde
    setTimeout(() => {
        window.location.href = "../html/inter-customisation.html";
    }, 1000);
});