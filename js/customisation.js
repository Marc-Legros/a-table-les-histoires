const btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
  btn.addEventListener("click", () => {

    // ---- AVATARS ----
    if (btn.src.includes("Group")) {
      const avatar = document.getElementById("calque-avatar");
      avatar.src = btn.src;

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
      // continue pour Group3, Group4, Group5...
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
        chapeau.style.top = "59px";
        chapeau.style.left = "30px";
        chapeau.style.width = "250px";
      }
      // continue pour hat4, hat5, hat6...
    }

    // ---- T-SHIRTS ----
    else if (btn.src.includes("t-shirt") || btn.src.includes("t shirt")) {
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
      // continue pour les autres t-shirts...
    }

  });
});

