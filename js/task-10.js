function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const btnCreate =  document.querySelector('[data-create]');
const btnDestroy =  document.querySelector('[data-destroy]');

const boxes = document.querySelector ('#boxes');

let 

function createBoxes(amount)