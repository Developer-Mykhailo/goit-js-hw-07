const inputElem = document.querySelector("#name-input");

const outPutElem = document.querySelector("#name-output");

inputElem.addEventListener("input", handleUserNameInput);

function handleUserNameInput() {
  const catSpace = inputElem.value.trim();
  if (catSpace === "") {
    outPutElem.textContent = "Anonymous";
  } else {
    outPutElem.textContent = inputElem.value;
  }
}
