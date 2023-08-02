const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

const DELEY = 1000;
let intervalID = null;
let disabled = true;

refs.startBtn.addEventListener("click", startChangeColor);

refs.stopBtn.addEventListener('click', stopChangeColor);

function startChangeColor(params) {
  if (disabled === true) {
    intervalID = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
      console.log(Date.now());
    }, DELEY);
    disabled = false;
  }
}

function stopChangeColor(params) {
      clearInterval(intervalID);
      disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};