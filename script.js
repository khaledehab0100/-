let seconds = 0;
let minites = 0; 
let hours = 0;
let interval = null;

function updateTime(){
    seconds++;

    if(seconds === 60){
        seconds = 0;
        minutes++;
    }

    if(minites === 60){
        minutes = 0;
        hours++;
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minites < 10 ? "0" + minites : minites;
    let s = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("time").innerText = `${h}:${m}:${s}`;
}

function startTimer(){
    if(interval === null){
        interval = setInterval(updateTime, 1000);
    };
};

function stopTimer(){
    clearInterval(interval);
    interval = null;
};

function resetTimer(){
    stopTimer()
    hours = 0;
    seconds = 0;
    minites = 0
    document.getElementById("time").innerText = "00:00:00";
};