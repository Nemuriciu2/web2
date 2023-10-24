const bouton = document.querySelector('#bouton');
const affichage = document.querySelector('#affichage');
const specialeEvent = document.querySelector('#specialeEvent');
var compteur = 0;

bouton.onclick = function() {
    compteur += 1;
    affichage.innerHTML = compteur;
    if(compteur === 5){
        specialeEvent.innerHTML = "Bravo, bel échauffement !";
    }
    if(compteur === 10){
        specialeEvent.innerHTML = "Vous êtes passé maître en l'art du clic !";
    }
};
