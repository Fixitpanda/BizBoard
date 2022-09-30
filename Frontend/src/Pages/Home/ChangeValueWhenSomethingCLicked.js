const player = {
    currentChoice: null
}
const computer = {
    currentChoice: null
}



const choices = ["Lapis", "Papyrus", "Scalpellus"];

document.querySelector('#Lapis').onclick = setLapis
document.querySelector('#Papyrus').onclick = setPapyrus
document.querySelector('#Scalpellus').onclick = setScalpellus;

function setLapis(){
    player.currentChoice = choices[0];
    console.log(player.currentChoice);
}
function setPapyrus(){
    player.currentChoice = choices[1];
    console.log(player.currentChoice);
}
function setScalpellus(){
    player.currentChoice = choices[2];
    console.log(player.currentChoice);
}