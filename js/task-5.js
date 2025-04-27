function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnTochange = document.querySelector(".change-color");

btnTochange.addEventListener("click", changeColor);

function changeColor() {
  const body = document.querySelector("body");
  body.style.backgroundColor = getRandomHexColor();

  const bgColor = body.style.backgroundColor;

  const colorOutput = document.querySelector(".color");
  colorOutput.textContent = bgColor;
}
