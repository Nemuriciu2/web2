const rouge = document.querySelector(".red");
const orange = document.querySelector(".orange");
const vert = document.querySelector(".green");

var afficherRouge;
var afficherOrange;
var afficherVert;
var passerVert = false;

startFeu();

function startFeu(){
    afficherRouge = setInterval(feuRouge,2000);
    afficherOrange = setInterval(feuOrange,4000);
    afficherVert = setInterval(feuVert,6000);
    afficherOrange = setInterval(feuOrange,4000);
}


function feuRouge(){
    rouge.style.backgroundColor = 'red';
    orange.style.backgroundColor = 'white';
    vert.style.backgroundColor = 'white';
    clearInterval(afficherRouge);
}

function feuOrange(){
    rouge.style.backgroundColor = 'white';
    orange.style.backgroundColor = 'orange';
    vert.style.backgroundColor = 'white';
    clearInterval(afficherOrange);
    if(passerVert == true){
        passerVert = false;
        startFeu();
    }
}

function feuVert(){
    rouge.style.backgroundColor = 'white';
    orange.style.backgroundColor = 'white';
    vert.style.backgroundColor = 'green';
    clearInterval(afficherVert);
    passerVert = true;
    afficherOrange = undefined;
}