var work = document.querySelector('#work')
var pause = document.querySelector('#pause')
var section = document.querySelector('#section')

var numWork = 5
var numPause = 5
var numSection = 3

function upBtnWork() {
    if(numWork <= 39) {
        work.innerHTML = numWork += 1
    }
}
function downBtnWork() {
    if(numWork >= 6) {
        work.innerHTML = numWork -= 1
    }
}
function upBtnPause() {
    if(numPause <= 39) {
        pause.innerHTML = numPause += 1
    }
}
function downBtnPause() {
    if(numPause >= 4) {
        pause.innerHTML = numPause -= 1
    }
}
function upBtnSection() {
    if(numSection <= 39) {
        section.innerHTML = numSection += 1
    }
}
function downBtnSection() {
    if(numSection >= 2) {
        section.innerHTML = numSection -= 1
    }
}

function submitData() {
    var a = [numWork, numPause, numSection]
    for(i in a) {
        localStorage.setItem(`${i}`, `${a[i]}`)
    }
}