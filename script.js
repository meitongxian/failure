// set clock hands

let hourHand = document.querySelector(".hour-hand");
let minuteHand = document.querySelector(".minute-hand");
let secondHand = document.querySelector(".second-hand");

function setClock() {
    hourHand.style.setProperty("--rotation", Math.random()*360);
    minuteHand.style.setProperty("--rotation", Math.random()*360);
    secondHand.style.setProperty("--rotation", Math.random()*360);
}

setClock();


// twitch


