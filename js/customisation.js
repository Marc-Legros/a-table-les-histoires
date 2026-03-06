const btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
  btn.addEventListener("click", () => {

    if (btn.src.includes("Group")) {
      document.getElementById("calque-avatar").src = btn.src;
    } 
    
    else if (btn.src.includes("hat")) {
      document.getElementById("calque-chapeau").src = btn.src;
    } 
    
    
    else if (btn.src.includes("t-shirt")) {
      document.getElementById("calque-tshirt").src = btn.src;
    }

  });
});