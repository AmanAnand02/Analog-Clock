let digitalElement = document.querySelector('.digital');
let secondElement = document.querySelector('.p_s');
let minuteElement = document.querySelector('.p_m');
let hourElement = document.querySelector('.p_h');

function updateClock() {
    let now = new Date();
    let second = now.getSeconds();
    let minute = now.getMinutes();
    let hour = now.getHours();

    digitalElement.innerHTML = `${fixedZero(hour)}:${fixedZero(minute)}:${fixedZero(second)}`;

    let secondDeg = ((360 / 60) * second) - 90;
    secondElement.style.transform = `rotate(${secondDeg}deg)`;

    let minuteDeg = ((360 / 60) * minute) - 90;
    minuteElement.style.transform = `rotate(${minuteDeg}deg)`;

    let hourDeg = ((360 / 12) * hour) - 90;
    hourElement.style.transform = `rotate(${hourDeg}deg)`;
};

function fixedZero(time) {
    return time < 10 ? `0${time}` : time;
};

setInterval(updateClock, 1000);
updateClock();