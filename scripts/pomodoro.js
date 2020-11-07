var numWork = localStorage.getItem('0')
var numPause = localStorage.getItem('1')
var numSection = localStorage.getItem('2')

var timer = document.querySelector('#timer')
timer.innerHTML = `${numWork > 9 ? '' + numWork : '0' + numWork} : 00`

function finish(t) {
    clearInterval(t)
}

var i = 0

function start() {
    timer.style.border = '4px solid #219653'

    var status = document.querySelector('#status')
    status.style.color = '#219653'
    status.innerHTML = 'Trabalho'

    var minutes = numWork - 1
    var seconds = 59
    
    var time = setInterval(function() {
        var minuteFinal = minutes > 9 ? '' + minutes : '0' + minutes
        var secondFinal = seconds > 9 ? '' + seconds : '0' + seconds
        timer.innerHTML = `${minuteFinal} : ${secondFinal}`

        if(seconds > 0) {
            seconds -= 1
        } else if(seconds == 0 && minutes > 0) {
            seconds = 59
            minutes -= 1
        } else {
            finish(time)
            i++
            if(i != numSection) {
                pause()   
            }
        }
    }, 10)
}

function pause() {
    timer.style.border = '4px solid #F2C94C'
    
    var status = document.querySelector('#status')
    status.style.color = '#F2C94C'
    status.innerHTML = 'Pausa'

    var minutes = numPause - 1
    var seconds = 59
    
    var time = setInterval(function() {
        var minuteFinal = minutes > 9 ? '' + minutes : '0' + minutes
        var secondFinal = seconds > 9 ? '' + seconds : '0' + seconds
        timer.innerHTML = `${minuteFinal} : ${secondFinal}`

        if(seconds > 0) {
            seconds -= 1
        } else if(seconds == 0 && minutes > 0) {
            seconds = 59
            minutes -= 1
        } else {
            finish(time)
            start()
        }
    }, 10)
}
