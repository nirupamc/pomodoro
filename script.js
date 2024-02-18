
let workTitle = document.getElementById("work");
let breakTitle = document.getElementById("break");

let workTime = 25;
let breakTime = 5;

let seconds = "00";
let timer;

window.onload = () => {
    document.getElementById('min').innerHTML = workTime;
    document.getElementById('sec').innerHTML = seconds;
    workTitle.classList.add('active')
}

var start = () => {

    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    seconds = 59;

    let workMin = workTime - 1;
    let breakMin = breakTime - 1;

    let breakCount = 0;

    let timerFunction = () => {
        document.getElementById('min').innerHTML = workMin.toString().padStart(2, '0');
        document.getElementById('sec').innerHTML = seconds.toString().padStart(2, '0');

        seconds = seconds - 1;

        if (seconds === 0) {
            workMin = workMin - 1;
            if (workMin === -1) {
                if (breakCount % 2 === 0) {
                    workMin = breakMin;
                    breakCount++;

                    workTitle.classList.remove('active');
                    breakTitle.classList.add('active');


                } else {
                    workMin = workTime;
                    breakCount++;
                    breakTitle.classList.remove('active');
                    workTitle.classList.add('active');

                }

            }

            seconds = 59

        }

    }

    timer = setInterval(timerFunction, 1000);
}

var reset = () => {
    clearInterval(timer);
    document.getElementById('start').style.display = "block";
    document.getElementById('reset').style.display = "none";
    document.getElementById('min').innerHTML = workTime;
    document.getElementById('sec').innerHTML = "00";
    workTitle.classList.add('active');
    breakTitle.classList.remove('active');
    seconds = "00";
    breakCount = 0;
}
var toggleRotate = () => {
    document.getElementById('reset').classList.add('rotate');
}