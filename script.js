const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// success
const setSuccessMsg = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};
// error
const setErrorMsg = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};

// validate email
const isEmail = (emailVal) => {
  const mail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  //
  return mail;
  // let atSymbol = email.indexOf("@");
  // if (atSymbol < 1) return false;
  // let dot = email.lastIndexOf(".");
  // if (dot < atSymbol + 2) return false;
  // if (dot === email.length - 1) return false;
  // return true;
};

const validate = () => {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const phoneVal = phone.value.trim();
  const passwordVal = password.value.trim();
  const password2Val = password2.value.trim();
  //   validate your username
  if (usernameVal === "") {
    setErrorMsg(username, "username cannot be blank");
  } else if (usernameVal.length <= 2) {
    setErrorMsg(username, "username min 3 char");
  } else {
    setSuccessMsg(username);
  }
  //   validate your email
  if (emailVal === "") {
    setErrorMsg(email, "email cannot be blank");
  } else if (!isEmail(email)) {
    setErrorMsg(email, "not valid email");
  } else {
    setSuccessMsg(email);
  }
  //   validate your phone
  if (phoneVal === "") {
    setErrorMsg(phone, "phone number cannot be blank");
  } else if (phoneVal.length != 11) {
    setErrorMsg(phone, "not valid phone number");
  } else {
    setSuccessMsg(phone);
  }
  //   validate your password
  if (passwordVal === "") {
    setErrorMsg(password, "password cannot be blank");
  } else if (passwordVal.length <= 5) {
    setErrorMsg(password, "password must be 6 char");
  } else {
    setSuccessMsg(password);
  }
  //   validate your password
  if (password2Val === "") {
    setErrorMsg(password2, "password cannot be blank");
  } else if (passwordVal !== password2Val) {
    setErrorMsg(password2, "password are not match");
  } else {
    setSuccessMsg(password2);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log("the button has click");
  validate();
});
