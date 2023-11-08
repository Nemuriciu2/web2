const bouton = document.querySelector("#bouton");
const text = document.querySelector("#text");

bouton.addEventListener("mouseover", jeu);
bouton.addEventListener("click", jeuClick);

let fini = false;
let countClick = 0;
let timeout;
const delayInSeconds = 5;
const delayInMiliSeconds = delayInSeconds * 1000;

function jeu(){
    bouton.removeEventListener("mouseover",jeu);
    timeout = setTimeout(() => {
        text.innerHTML = "Game over, you did not click 10 times within 5s !";
        fini = true;
        console.log("probleme");
    }, delayInMiliSeconds);
}

function jeuClick(){
    countClick += 1;
    console.log(countClick);
    
    if(countClick >= 10 && fini == false){
        clearTimeout(timeout);
        text.innerHTML = `You win ! You clicked 10 times within ${delayInSeconds} ms`;
        bouton.removeEventListener("mouseover", jeu);
    }
}