const couleur = document.querySelectorAll(".color-div");

couleur.forEach((c) => {
    c.addEventListener("click", function(){
        c.style.height = "125px";
        c.style.width = "125px";
        c.innerText = c.style.backgroundColor;
        console.log("click !");
    })
});
