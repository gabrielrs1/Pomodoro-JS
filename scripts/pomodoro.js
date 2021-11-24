var minutesWork = localStorage.getItem('work');
var minutesPause = localStorage.getItem('pause');
var quantitySection = localStorage.getItem('section');

var timer = document.querySelector('#timer');
timer.innerHTML = `${minutesWork > 9 ? '' + minutesWork : '0' + minutesWork} : 00`;

var sectionEnd = 0;

var sectionCountWork = 0;
var sectionCountPause = 0;

function counter() {
    var time = setInterval(function() {
        var minuteFinal = minutes > 9 ? '' + minutes : '0' + minutes;
        var secondFinal = seconds > 9 ? '' + seconds : '0' + seconds;
        timer.innerHTML = `${minuteFinal} : ${secondFinal}`;

        if(seconds > 0) {
            seconds -= 1;
        } else if(seconds == 0 && minutes > 0) {
            seconds = 59;
            minutes -= 1;
        } else {
            return;
        }
    }, 10);

    return time;
}

function startTimer() {
    bulletChange("work", sectionCountWork, "#219653");
    timer.style.border = '4px solid #219653';
    nameActionTimer("Trabalho", "#219653");

    var minutes = minutesWork - 1;
    var seconds = 59;
    
    var time = setInterval(function() {
        var minuteFinal = minutes > 9 ? '' + minutes : '0' + minutes;
        var secondFinal = seconds > 9 ? '' + seconds : '0' + seconds;
        timer.innerHTML = `${minuteFinal} : ${secondFinal}`;

        if(seconds > 0) {
            seconds -= 1;
        } else if(seconds == 0 && minutes > 0) {
            seconds = 59;
            minutes -= 1;
        } else {
            finish(time);
            sectionCountWork++;
            sectionEnd++;
            if(sectionEnd != quantitySection) {
                pauseTimer();
            }
        }
    }, 10);
}

function pauseTimer() {
    bulletChange("pause", sectionCountPause, "#F2C94C");
    timer.style.border = '4px solid #F2C94C';
    nameActionTimer("Pausa", "#F2C94C");
    
    var minutes = minutesPause - 1;
    var seconds = 59;
    
    var time = setInterval(function() {
        var minuteFinal = minutes > 9 ? '' + minutes : '0' + minutes;
        var secondFinal = seconds > 9 ? '' + seconds : '0' + seconds;
        timer.innerHTML = `${minuteFinal} : ${secondFinal}`;
        
        if(seconds > 0) {
            seconds -= 1;
        } else if(seconds == 0 && minutes > 0) {
            seconds = 59;
            minutes -= 1;
        } else {
            finish(time);
            startTimer();
            sectionCountPause++;
        }
    }, 10);
}

// Change name action of timer
function nameActionTimer(name, color) {
    var status = document.querySelector('#status');
    status.style.color = color;
    status.innerHTML = name;
}

function bulletChange(name, value, color) {
    var bulletList = document.querySelectorAll('li');

    if(name == "work") {
        bulletList[value].dataset.id;
        bulletList[value].style.background = color;
    } else {
        bulletList[value].dataset.id;
        bulletList[value].style.background = color;
    }
}

function finish(t) {
    clearInterval(t);
}