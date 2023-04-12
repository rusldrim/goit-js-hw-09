const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
const CHANGE_COLOR = 1000;
let idInterval = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

btnStop.disabled = true;
btnStart.addEventListener('click', onBtnStartChangeColor);
btnStop.addEventListener('click', onBtnStopChangeColor);

function onBtnStartChangeColor() {
  btnStart.disabled = true;
  btnStop.disabled = false;

  idInterval = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor()
  }, CHANGE_COLOR);
}

function onBtnStopChangeColor() {
  btnStart.disabled = false;
  btnStop.disabled = true;

  clearInterval(idInterval);
}