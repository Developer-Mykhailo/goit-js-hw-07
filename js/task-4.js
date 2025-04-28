const formElem = document.querySelector(".js-login-form");

formElem.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const email = formElem.elements.email.value.trim();
  const password = formElem.elements.password.value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  } else {
    const userData = { email, password };
    console.log(userData);
    formElem.reset();
  }
}
