// import {preloader ,loaded ,menu ,nave , sections ,toggleNav } from "./home.js";
import * as utils from "./utils.js";

/**
 * PRELAODER
 */
window.addEventListener("load", ()=> {
    utils.preloader;
    utils.loaded();
});

/**
 * Navbare (menu)
 */
utils.menu.addEventListener('click', ()=> {
    utils.nave;
    utils.sections;
    utils.toggleNav();
});


/**
 * USER INFO VALIDATION
 */

// variables
// inputs div
const inputs = document.querySelector('.inputs');

const sinUp       = document.querySelector(`input[type = submit]`);//creat acount button

// info
const formEl      = document.querySelector('form');
const userName    = document.querySelector('#username');
const email       = document.querySelector('#email');
const password    = document.querySelector('#password');
const confirmPass = document.querySelector('#confirm-password');

// vlidation errors
const usernameError    = document.querySelector('.username-error');
const emailError       = document.querySelector('.email-error-message');
const confirmPassError = document.querySelector('.password-confirmation-error');
const passwordError    = document.querySelector('.Password-error');

// Element stutas
let usernameStus  = "impty";
let emailStuts    = "invalid";
let passwordStuts = "invalid";
let confirmStuts  = "unmatched";

// user name valiada
function usernameValiadaiton(){

    // check if the user name field is impty
    if(userName.value === ""){

        // set the user name stuts
        usernameStus = "impty";

        // add the outline to the username field
        userName.style.outline = "2px solid #f96262";

        //display the error message
        inputs.classList.add('name-error');
        usernameError.innerText = "Whoops! It looks like you forgot to add your username";

    }else{

        // set the user name stuts
        usernameStus = "valid";
        
        // add the outline to the username field
        userName.style.outline = "none";

        //display the error message
        inputs.classList.remove('name-error');
        usernameError.innerText = "";

        // remove all errors class from inputs
        inputs.classList.remove('all-errors');
    }
};

// email valiadation 
function emailValiadation() {

    // mail format
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email.value.match(mailFormat)){

        // set the email stuts
        emailStuts = "valid";

        // remove the outline form email input
        email.style.outline = "none";

        // indisplay the error message
        inputs.classList.remove('email-error');
        emailError.innerText = "";
        
        // remove all errors class from inputs
        inputs.classList.remove('all-errors');

    }else if(email.value === ""){

        // add the outline to the email input
        email.style.outline = "2px solid #f96262";

        //display the error message
        inputs.classList.add('email-error');
        emailError.innerText = "Whoops! It looks like you forgot to add your email";

        // set the email stuts
        emailStuts = "impty";

    }else{

        // add the outline to the email input
        email.style.outline = "2px solid #f96262";

        //display the error message
        inputs.classList.add('email-error');
        emailError.innerText = "Please provide a valid email address";

        // set the email stuts
        emailStuts = "invalid";

        // clear the email input field
        email.value = "";
    }
};

// Password valiadation 
function passwordValiadation() {

    // password format
    let passwordRegularExpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

    if(password.value.match(passwordRegularExpression)){

        //set the password stuts
        passwordStuts = "valid";

        // rome the outline if it's have it
        password.style.outline = "none";

        // indisplay the error message
        inputs.classList.remove('password-error');
        passwordError.innerText = "";

        // remove all errors class from inputs
        inputs.classList.remove('all-errors');

    }else if(password.value === ""){

        // add bit of style to password input
        password.style.outline = "2px solid #f96262";

        // display the error message
        inputs.classList.add('password-error');
        passwordError.innerText = "Whoops! It looks like you forgot to add your password";

        //set the password stuts
        passwordStuts = "impty";

    }else{

        passwordStuts = "invalid";
        
        // clear the input field
        password.value = "";

        // add bit of style to password input
        password.style.outline = "2px solid #f96262";

        // display the error message
        inputs.classList.add('password-error');
        passwordError.innerText = "Please provide a valid password at least eight characters in total, at least one lowercase letter, one uppercase letter, one special charecter, and one digit";

    }
    // console.log(password.value);
};

// chek if the password is mached with confirm password
function confirmValiadation(){
    if(confirmPass.value === password.value  && confirmPass.value !== ""){

        // set confirm password Stuts
        confirmStuts = "mached";

        // remove outline from confirm password input if it's have it
        confirmPass.style.outline = "none";

        // indisplay the error message
        inputs.classList.remove('password-error');
        confirmPassError.innerText = "";

        // remove all errors class from inputs
        inputs.classList.remove('all-errors');

    }
    else if(confirmPass.value === ""){

        // add bit of style to confirm password input
        confirmPass.style.outline = "2px solid #f96262";

        // display the error message
        inputs.classList.add('password-error');
        confirmPassError.innerText = "Please add your confirm password!";

        // set confirm password Stuts
        confirmStuts = "impty";
    }
    else{

        // add bit of style to confirm password input
        confirmPass.style.outline = "2px solid #f96262";

        // display the error message
        inputs.classList.add('password-error');
        confirmPassError.innerText = "Please confirm your password!";

        // set confirm password Stuts
        confirmStuts = "unmached";

        // clear the confirm password field
        confirmPass.value = "";
    }
};

// generat the pssword and the pssword confirm error displayer
function passErroGenerator(){

    // chek if the password stuts is impty for display impty password error and indisplay the confirm pssword errors
    if(passwordStuts === "impty"){

    // indisplay the error message
    confirmPassError.innerText = "";

    }else if(passwordStuts === "invalid" && confirmStuts === "impty"){ //chek if pssword stuts is invalid and confirm stuts is impty for indisplay the confirm password inpyt error

    // indisplay the error message
    confirmPassError.innerText = "";

    }else if(passwordStuts === "invalid" && confirmStuts === "unmached"){//chek if pssword stuts is invalid and confirm stuts is invalid for indisplay the confirm password invalid error
    
    // indisplay the error message
    confirmPassError.innerText = "";

    }
}

// validat all the info
function valiadation() {
    formEl.addEventListener('submit', (event)=> {
        event.preventDefault()
    });
    usernameValiadaiton();
    emailValiadation();
    passwordValiadation();
    confirmValiadation();
    passErroGenerator();
    
    // check if the user info is valided for fetchen them
    if(usernameStus === "valid" && emailStuts === "valid" && passwordStuts === "valid" && confirmStuts === "mached" ){

        // get the data from the form
        const userData = new FormData(formEl);

        // teurn this data into encoded url link
        const data  = new URLSearchParams(userData);

        // fetching the data to the serveur
        fetch('https://reqres.in/api/users', {
            method  : 'POST',
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
            body    : data
        })
        .then(res => res.json())
        .then(data => console.log(data))

        .catch(error => console.log(error))
        
        // remove all errors class from inputs
        inputs.classList.remove('all-errors');

        // wait two seconds after fetching the form to the server and clear them
        setTimeout(()=>{

            formEl.reset();

        }, 2000); 

    }else if(usernameStus === "invalid" && emailStuts === "invalid" && passwordStuts === "invalid" && confirmStuts === "unmached" ){//chek if user , email , password stuts if invalid and confirm password stuts is unmach 
                                                                                                                                    // add all errors class to repostion password and confirm password icons
        // add all error message in the same time
        inputs.classList.add("all-errors");
    }
    else if(usernameStus !== "valid" && emailStuts !== "valid"){//check if the email and username isn't valid for repostion the user icon and email icon

        // add all error message in the same time
        inputs.classList.add('all-errors');

    }
    

};    

// call the validation function after creat acount is clicked
sinUp.addEventListener("click", valiadation);
