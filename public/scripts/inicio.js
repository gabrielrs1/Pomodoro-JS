var work = document.querySelector('#work');
var pause = document.querySelector('#pause');
var section = document.querySelector('#section');

var minutesWork = 5;
var minutesPause = 5;
var quantitySection = 3;

// Work
function upButtonWork() {
    if(minutesWork < 60) {
        work.innerHTML = minutesWork += 1;
    }
}
function downButtonWork() {
    if(minutesWork > 5) {
        work.innerHTML = minutesWork -= 1;
    }
}

// Pause
function upButtonPause() {
    if(minutesPause < 20) {
        pause.innerHTML = minutesPause += 1;
    }
}
function downButtonPause() {
    if(minutesPause > 5) {
        pause.innerHTML = minutesPause -= 1;
    }
}

// Sections
function upButtonSection() {
    if(quantitySection < 5) {
        section.innerHTML = quantitySection += 1;
    }
}
function downButtonSection() {
    if(quantitySection > 3) {
        section.innerHTML = quantitySection -= 1;
    }
}

function submitData() {
    var timerValues = [minutesWork, minutesPause, quantitySection];
    var timerNames = ["work", "pause", "section"];

    for(i in timerValues) {
        localStorage.setItem(`${timerNames[i]}`, `${timerValues[i]}`);
    }
}