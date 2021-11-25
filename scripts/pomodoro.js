var work = localStorage.getItem('work');
var pause = localStorage.getItem('pause');
var section = localStorage.getItem('section');

var start = document.getElementById("start");
start.addEventListener("click", () => {
    if(verifyTypeStart) {
        startTimer();
    } else {
        pauseTimer();
    }
});

var timer = document.querySelector('#timer');
timer.innerHTML = `${work > 9 ? '' + work : '0' + work} : 00`;

var sectionEnd = 0;

var sectionCountWork = 0;
var sectionCountPause = 0;

var minutes = work - 1;
var seconds = 59;

var time = null;
var verifyTypeStart = true;

function startTimer() {
    timer.style.border = '4px solid #219653';

    bulletChange("work", sectionCountWork, "#219653");
    nameActionTimer("Trabalho", "#219653");
    
    time = setInterval(function() {
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
            if(sectionEnd != section) {
                minutes = work - 1;
                seconds = 59;
                verifyTypeStart = false;

                pauseTimer();
            }
        }
    }, 10);
}

function pauseTimer() {
    timer.style.border = '4px solid #F2C94C';

    bulletChange("pause", sectionCountPause, "#F2C94C");
    nameActionTimer("Pausa", "#F2C94C");
    
    time = setInterval(function() {
        var minuteFinal = minutes > 9 ? '' + minutes : '0' + minutes;
        var secondFinal = seconds > 9 ? '' + seconds : '0' + seconds;
        timer.innerHTML = `${minuteFinal} : ${secondFinal}`;

        if(seconds > 0) {
            seconds -= 1;
        } else if(seconds == 0 && minutes > 0) {
            seconds = 59;
            minutes -= 1;
        } else {
            minutes = work - 1;
            seconds = 59;
            sectionCountPause++;
            verifyTypeStart = true;

            finish(time);
            startTimer();
        }
    }, 10);
}

function stop() {
    clearInterval(time);
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
        if(value > 0) {
            bulletList[0].style.background = color;
        }
        if(value > 1) {
            bulletList[1].style.background = color;
        }

        bulletList[value].style.background = color;
    } else {
        if(value > 0) {
            bulletList[0].style.background = color;
        }
        if(value > 1) {
            bulletList[1].style.background = color;
        }

        bulletList[value].style.background = color;
    }
}

function finish(t) {
    clearInterval(t);
}