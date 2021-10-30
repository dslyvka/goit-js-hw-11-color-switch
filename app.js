const startBtnRef = document.querySelector("[data-action='start']");
const stopBtnRef = document.querySelector("[data-action='stop']");
const bodyRef = document.querySelector('body');

let intervalId = null;

console.log(bodyRef);

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtnRef.addEventListener('click', () => {
  startBtnRef.setAttribute('disabled', 'disabled');
  intervalId = setInterval(() => {
    let colorIndex = randomIntegerFromInterval(0, colors.length - 1);
    bodyRef.style.backgroundColor = colors[colorIndex];
  }, 1000);
});

stopBtnRef.addEventListener('click', () => {
    startBtnRef.removeAttribute('disabled');
    clearInterval(intervalId);
    bodyRef.style.backgroundColor = '#FFFFFF';
})
