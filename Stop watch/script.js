let [hours, minutes, seconds] = [0,0,0];
const displayWatch = document.getElementById("dsply");
let timer = null;

const stopWatch = () =>{
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++
        }
    }
    let h = hours;
    let m = minutes;
    let s = seconds;

    if(h<10){
        h = "0"+hours;
    }
    if(m<10){
        m = "0"+minutes;
    }
    if(s<10){
        s = "0"+seconds;
    }
    displayWatch.innerHTML = h+":"+m+":"+s;
}

const startWatch = () =>{
    if(timer != null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 1000);
}

const stopTime = () =>{
    clearInterval(timer);
}

const resetWatch = () =>{
    clearInterval(timer);
    [hours, minutes, seconds] = [0,0,0];
    displayWatch.innerHTML = "00:00:00";
}