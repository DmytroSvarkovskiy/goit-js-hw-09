function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector('body');
const start = document.querySelector('[data-start]');
const off= document.querySelector('[data-stop]');
let timerId = null;

const onStartClick = () => {
    start.setAttribute('disabled', null);
    timerId = setInterval(()=>{
    body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}
const onOffClick=()=>{
    clearInterval(timerId);
    start.removeAttribute('disabled');
}

start.addEventListener('click', onStartClick);
off.addEventListener('click', onOffClick);