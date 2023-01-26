const sound = new Audio("sound/agemasen.mp3");
const carrot = document.getElementById("carrot");
const spe = document.getElementById("spe")

function agemasen(){
    spe.classList.remove("hidden");
    carrot.classList.add("hidden");
    sound.play();
    setTimeout(nesamega, 1000);
}

function nesamega(){
    spe.classList.add("hidden");
    carrot.classList.remove("hidden");
}

carrot.addEventListener("click", agemasen)