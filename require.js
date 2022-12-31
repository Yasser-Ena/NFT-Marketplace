
// Add event listener on muliple element with this fuction
const addEventOnElement = function(elements, eventType, callBack){
    // it tooks tree parmetters (the element and eventType and also the fuction)
    // it help me alot I don't need to write all this ever time
    for(let i = 0; i > elements.lenght; i++){
        elements[i].addEventListener(eventType, callBack);
    }
}





/**
 * Preloader
 */

const preloader = document.querySelector('.preloader');

window.addEventListener("load", ()=> {
    preloader.classList.add('loaded');
    document.body.classList.add('loaded');
});


/**
 * Navbare (menu)
 */

const nave = document.querySelector('.nave');
document.querySelector('#menu').addEventListener("click", ()=> {
    nave.classList.toggle('active');
});

/**
 * Count down timer
 */

function countDown(){

    //Variables for leading ziro
    let leadingSeconds = 0;
    let leadingMinutes = 0;
    let leadingHours = 0;

    const countDownTo = new Date("january 3, 2023 10:23:00");

    const now         = new Date().getTime();
    const gap         = countDownTo - now;

    // how the time is actuly worke 
    const seconds = 1000;
    const minutes = seconds * 60;
    const hours   = minutes * 60;
    const days    = hours * 24;

    // calculat the time
    const textDay = Math.floor(gap / days);
    const texthours = Math.floor((gap % days) / hours);
    const textminutes = Math.floor((gap % hours) / minutes);
    const textseconds = Math.floor((gap % minutes) / seconds);
    // turning the days into hours
    const hoursToMinutes = textDay * 24;

    // add the ziro for dont make leading of time empty when the leading is less thane 10
    if(texthours + hoursToMinutes < 10){
        leadingHours = "0" + texthours.toString();
    }else{
        leadingHours = texthours;
    }
    if(textminutes < 10){
        leadingMinutes = "0" + textminutes.toString();
    }else{
        leadingMinutes = textminutes;
    }
    if(textseconds < 10){
        leadingSeconds = "0" + textseconds.toString();
    }else{
        leadingSeconds = textseconds;
    }
    // display it on the browser
    document.querySelector(".hours").innerText = leadingHours + hoursToMinutes  ;// display number of hours plus the days
    document.querySelector(".minutes").innerText = leadingMinutes;
    document.querySelector(".seconds").innerText = leadingSeconds;
};
window.addEventListener("load", ()=> {
    setInterval(countDown, 1000);
});


/**
 *Subscritption
 */

// Varaibles
const inputE       = document.querySelector(`input[type= 'text']`);
const subscribeBtn = document.querySelector('#subscribe-btn');
const errorMessage = document.querySelector('#error-message');
const alert        = document.querySelector('.alert');
const closeBtn     = document.querySelector('#close');

// email validation function for the form one
// subscribeBtn.addEventListener("click", function validator1() {
//     let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
//     if(inputE.value.match(mailformat)){
//         document.querySelectorAll("form").submit();

//     }else if(inputE.value === ""){
//         inputE.style.borderColor = "#f96262";
//         errorMessage.innerText = "Whoops! It looks like you forgot to add your email";
        
//     }else{
//         errorMessage.innerText = "Please provide a valid email address";
//         inputE.style.borderColor = "#f96262";
//     }
// });


// email validation function for the form 2
subscribeBtn.addEventListener("click", function validator2() {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    if(inputE.value.match(mailformat)){
        document.getElementById("form1").submit();

    }else if(inputE.value === ""){
        inputE.style.borderColor = "#f96262";
        errorMessage.innerText = "Whoops! It looks like you forgot to add your email";
        
    }else{
        errorMessage.innerText = "Please provide a valid email address";
        inputE.style.borderColor = "#f96262";
    }
});


// add event listener
// subscribeBtn.addEventListener("click",()=> {
//     if(document.forms["form2"]["email2"].value === ''){
//         console.log('is form1');
//     }else{
//         console.log("is fomr2");
//     }


    
// });


