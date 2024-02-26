// FORM VALIDATION USING JAVASCRIPT'S REGULAR EXPRESSION

// storing elements in variables

let user = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let phoneNumber = document.getElementById("phNumber");
let skill = document.getElementById("skill");
const form = document.getElementById("form");

let userError = document.getElementById("userError");
let emailError = document.getElementById("emailError");
let passError = document.getElementById("passError");
let PhoneError = document.getElementById("phoneError");
let skillError = document.getElementById("skillError");

let validUser;
let validEmail;
let validPassword;
let validPhoneNumber;
let validSkill;
// name validation

user.addEventListener("blur", () => {
  let nameRegex = /^[a-zA-Z]([0-9a-zA-Z\s]){2,19}$/;
  if (user.value == "") {
    userError.innerHTML = "Name field cannot be empty!";
    user.style.borderColor = "red";
    validUser = false;
  } else if (nameRegex.test(user.value)) {
    userError.innerHTML = null;
    user.style.borderColor = "green";
    validUser = true;
  } else {
    userError.innerHTML = "Please enter valid name!";
    user.style.borderColor = "red";
    validUser = false;
  }
});

// email validation
email.addEventListener("blur", () => {
  // muhammadkaif123@gmail.com.pk
  // muhammadkaif123@gmail.com
  // muhammadkaif123@gmail.pk

  let emailRegex =
    /^[a-zA-Z]([0-9a-zA-Z]){2,25}\@([a-zA-Z]){4,9}\.([a-zA-Z]){2,3}\.*([a-zA-Z]?){2}$/;
  if (email.value == "") {
    emailError.innerHTML = "Email field cannot be empty!";
    email.style.borderColor = "red";
    validEmail = false;
  } else if (emailRegex.test(email.value)) {
    emailError.innerHTML = null;
    email.style.borderColor = "green";
    validEmail = true;
  } else {
    emailError.innerHTML =
      "Please enter valid Email and Email length must be between 11 to 40 characters";
    email.style.borderColor = "red";
    validEmail = false;
  }

  // email minimum length is 11 and maximum is 40
});

// password validation

password.addEventListener("blur", () => {
  const passRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[`~!@#\$%\^&\*\(\)\-_=\+])(?!.*\s).{8,20}/;
  if (password.value == "") {
    passError.innerHTML = "Password field cannot be empty!";
    password.style.borderColor = "red";
    validPassword = false;
  } else if (passRegex.test(password.value)) {
    passError.innerHTML = null;
    password.style.borderColor = "green";
    validPassword = true;
  } else {
    passError.innerHTML =
      'Password must contain atleast 1 uppercase letter, 1 lowercase letter, 1 digit, 1 special character"`~!@#$%^&*()-_=+", no whitespaces and length must be between 8 to 20';
    password.style.borderColor = "red";
    validPassword = false;
  }
});

// phone number validation;

phoneNumber.addEventListener("blur", () => {
  let phoneRegex = /^[\d]{10}$/;
  if (phoneNumber.value == "") {
    PhoneError.innerHTML = "Phone number field cannot be empty!";
    phoneNumber.style.borderColor = "red";
    validPhoneNumber = false;
  } else if (phoneRegex.test(phoneNumber.value)) {
    PhoneError.innerHTML = null;
    phoneNumber.style.borderColor = "green";
    validPhoneNumber = true;
  } else {
    PhoneError.innerHTML = "Please enter valid phone number!";
    phoneNumber.style.borderColor = "red";
    validPhoneNumber = false;
  }
});

// choose skill validation

skill.addEventListener("blur", () => {
  if (skill.value == "Select") {
    skillError.innerHTML = "Please select one skill set";
    skill.style.borderColor = "red";
    validSkill = false;
  } else {
    skillError.innerHTML = null;
    skill.style.borderColor = "green";
    validSkill = true;
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    validUser &&
    validEmail &&
    validPassword &&
    validSkill &&
    validPhoneNumber
  ) {
    alert("form submitted successfully!");
  } else {
    alert("please fill the form properly!");
  }
});
