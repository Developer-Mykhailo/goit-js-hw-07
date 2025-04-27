const inputElem = document.querySelector("#name-input");

const outPutElem = document.querySelector("#name-output");

inputElem.addEventListener("input", handlerUserNameInput);

function handlerUserNameInput() {
  const catSpace = inputElem.value.trim();
  if (catSpace === "") {
    outPutElem.textContent = "Anonymous";
  } else {
    outPutElem.textContent = inputElem.value;
  }
}
