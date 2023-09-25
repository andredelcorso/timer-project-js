let sec = 0;
let min = 0;
let hour = 0;

let breaking 

    function twoDigits (digit) { 
        if(digit < 10) { 
            return ('0' + digit)
        } else { 
            return (digit)
        }
    }

    function start () { 
        timer () 
        breaking = setInterval(timer, 1000)
}

    let started = window.document.getElementById('btnStart')
    started.addEventListener('click', start)

    function pause () { 
        clearInterval(breaking)
    }

    let paused = window.document.getElementById('btnPause')
    paused.addEventListener('click', pause)

    function hasItStopped () { 
        clearInterval(breaking)
        hour = 0
        min = 0
        sec = 0 
        document.getElementById('timer').innerText='00:00:00'
    }

    let stopped = window.document.getElementById('btnStop')
    stopped.addEventListener('click', hasItStopped)


function timer () { 
    sec++ 

    if (sec==60) { 
        min++ 
        sec=0
    } else if (min==60) { 
        hour++ 
        min=0
        sec=0
    }

    document.getElementById('timer').innerText = twoDigits(hour) + ':' + twoDigits(min) + ':' +  twoDigits(sec)
}