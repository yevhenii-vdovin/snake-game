let inputDirection = { x: 0, y: 0 };

document.querySelector(".up").addEventListener("click", (e) => {
  if (inputDirection.y !== 0) return;
  e.tagrget = inputDirection = { x: 0, y: -1 };
  return;
});
document.querySelector(".down").addEventListener("click", (e) => {
  if (inputDirection.y !== 0) return;
  e.tagrget = inputDirection = { x: 0, y: 1 };
  return;
});
document.querySelector(".left").addEventListener("click", (e) => {
  if (inputDirection.x !== 0) return;
  e.tagrget = inputDirection = { x: -1, y: 0 };
  return;
});
document.querySelector(".right").addEventListener("click", (e) => {
  if (inputDirection.x !== 0) return;
  e.tagrget = inputDirection = { x: 1, y: 0 };
  return;
});

// window.addEventListener("keydown", (e) => {
//   switch (e.key) {
//     case "ArrowUp":
//       inputDirection = { x: 0, y: -1 };
//       break;
//     case "ArrowDown":
//       inputDirection = { x: 0, y: 1 };
//       break;
//     case "ArrowLeft":
//       inputDirection = { x: -1, y: 0 };
//       break;
//     case "ArrowRight":
//       inputDirection = { x: 1, y: 0 };
//       break;
//   }
// });

export function getInputDirection() {
  return inputDirection;
}
