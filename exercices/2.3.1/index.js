var form = document.querySelector("#formulaire");
var souhait = document.querySelector("#souhait");
var text = document.querySelector("#text");

function submitButon(event){
   event.preventDefault();
   form.style.display = "none";
   souhait.innerText = text.value;
}

form.addEventListener('submit', submitButon);