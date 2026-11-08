const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const stopBtn = document.getElementById('stop');

let startTime = 0;
let elapsed = 0;
let intervalId = null;

const h = document.getElementById('hours');
const m = document.getElementById('minutes');
const s = document.getElementById('seconds');


function updateDisplay(){
    let total = elapsed + (startTime ? Date.now() - startTime : 0);
    h.textContent = String(Math.floor(total / 3600000)).padStart(2, "0");
    m.textContent = String(Math.floor((total % 3600000) / 60000)).padStart(2, "0");
    s.textContent = String(Math.floor((total % 60000) / 1000)).padStart(2, "0");
}

startBtn.addEventListener('click', () => {
    if (intervalId) return;
    startTime = Date.now();
    intervalId = setInterval(updateDisplay, 10);
});

pauseBtn.addEventListener('click', () => {
    if (!intervalId) return;
    elapsed += Date.now() - startTime;
    startTime = 0;
    clearInterval(intervalId);
    intervalId = null;
});

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    elapsed = 0;
    startTime = 0;
    updateDisplay();
});