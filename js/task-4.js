const formElem = document.querySelector(".js-login-form");

formElem.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const email = formElem.elements.email.value.trim();
  const pass = formElem.elements.password.value.trim();

  if (email === "" || pass === "") {
    alert("All form fields must be filled in");
  } else {
    const userData = { email, pass };
    console.log(userData);
    formElem.reset();
  }
}
