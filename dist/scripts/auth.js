// Login-new account form data validate
const form = document.querySelector('.form-tab');
const username = document.getElementById('username');
const fiscalCode = document.getElementById('fiscal-code');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function checkUsername(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    validData(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

function validData(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control';
}

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      validData(input);
    }
  });
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters long`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less then  ${max} characters`
    );
  } else {
    validData(input);
  }
}

function checkPasswordsMatch(password, password2) {
  if (password.value !== password2.value) {
    showError(password2, 'Passwords do not match');
  }
}

function getFieldName(input) {
  return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  checkRequired([username, fiscalCode, password, password2]);
  checkPasswordsMatch([password, password2]);
  checkUsername(username);
});
