const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

var errorFN = document.getElementsByClassName('error-FN');
var errorLN = document.getElementsByClassName('error-LN');
var errorEmail = document.getElementsByClassName('error-Email');
var errorPassword = document.getElementsByClassName('error-Password');

const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const nameFormat = /^[a-zA-Z]+$/;

function validateForm() {    let fStatus = 0;

    // First Name:
    if (firstName.value != "" && firstName.value.match(nameFormat)) {
        fStatus += 1;
        firstName.classList.remove('input-error');
    } 
    else {
        firstName.classList.add('input-error');
        for (var i=0; i < errorFN.length; i += 1) {
            errorFN[i].style.display = "block";
        }
    }

    // Last Name:
    if (lastName.value != "" && lastName.value.match(nameFormat)) {
        fStatus += 1;
        lastName.classList.remove('input-error');
    } 
    else {
        lastName.classList.add('input-error');
        for (var i=0; i < errorLN.length; i += 1) {
            errorLN[i].style.display = "block";
        }
    }

    // Email:
    if (email.value != "" && email.value.match(emailFormat)) {
        fStatus += 1;
        email.classList.remove('input-error');
    } 
    else {
        email.classList.add('input-error');
        for (var i=0; i < errorEmail.length; i += 1) {
            errorEmail[i].style.display = "block";
        }
    }

    // Password:
    if (password.value != "" && password.value.match(nameFormat)) {
        fStatus += 1;
        password.classList.remove('input-error');
    } 
    else {
        password.classList.add('input-error');
        for (var i=0; i < errorPassword.length; i += 1) {
            errorPassword[i].style.display = "block";
        }
    }
    if(fStatus == 4) {
        console.log("Everything is ok");
    }
    else {
        console.log("Something is WRONG!");
    }
}