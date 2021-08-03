import {
  update as updateSnake,
  draw as drawSnake,
  snakeSpeed,
} from "/snake.js";

let lastRenderTime = 0;
const gameBoard = document.getElementById("game-board");
console.log(gameBoard);

function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondSinceLastRender < 1 / snakeSpeed) return;

  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
}
