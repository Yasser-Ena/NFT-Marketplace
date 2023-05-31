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
 * Count down timer
 */

// conunt down to:
const time = "january 18, 2023 16:00:00";


//conunt down function
function countDown(){
    
    //Variables for leading ziro
    let leadingSeconds = 0;
    let leadingMinutes = 0;
    let leadingHours = 0;
    
    
    const countDownTo = new Date(time);
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
    const daysToHours = textDay * 24;

    // add the ziro for dont make leading of time empty when the leading is less thane 10
    
    const toHours = texthours + daysToHours;

    if(toHours < 10){
        leadingHours = "0" + toHours.toString();
    }else{
        leadingHours = toHours;
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
    document.querySelector(".hours").innerText   = leadingHours; // display number of hours plus the days
    document.querySelector(".minutes").innerText = leadingMinutes;
    document.querySelector(".seconds").innerText = leadingSeconds;

};



window.addEventListener("load", ()=> {
    // start the timer
    const interval = setInterval(countDown, 1000);
    
    // stope the timer
    const date  = new Date(time);
    const nowis = new Date().getTime();
    const gapis = date - nowis;
    
    setTimeout(()=> {
        clearInterval(interval)
        console.log("it's soled");
    }, gapis);
});


/**
 * Subscription
 */

// Element variables
const inputel = document.querySelector(`input[type = text]`);
const formel  = document.querySelector('#form1');
const subscribeBtn = document.querySelector('#subscribe-btn');
const errorMessage = document.querySelector("#error-message");
const alertel = document.querySelector('.alert');
const closebtn = document.querySelector('#close');

// display the alert
function displayAlert() {
    alertel.style.display = "block";

    closebtn.addEventListener("click", ()=> {
        alertel.style.display = "none";
        formel.reset();
    });

};

// indisplay the alert
function indisplayAlert() {
    alertel.style.display = "none";
    formel.reset();
};


// email validation and fetching them to the server
subscribeBtn.addEventListener("click", ()=> {
   
        // mail format
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        // chek if is't match
        if(inputel.value.match(mailformat)){

            formel.addEventListener("submit", (event)=> {
                event.preventDefault();                
                    
            // get the data from the form and turn it into an object
            const userData = new FormData(formel);
            // console.log(userData);
            
            // turn it into urlencoded link in the headers
            const data = new URLSearchParams(userData);
            // console.log(data);
            
            // also fech them
            fetch('https://reqres.in/api/users', {
                method : 'POST',
                headers: {
                    'Content-Type' : 'application/x-www-form-urlencoded'
                },
                body   : data
            })
            .then(res => res.json())
            .then(data => console.log(data))
            
            .catch(error => console.log(error))
        });
        
            // display the alert
            displayAlert();
        
            // indsplay the alert
            setTimeout(indisplayAlert, 3000);
        
            inputel.style.outline = "none";
            errorMessage.innerText = "";
        
        }else if(inputel.value === ""){
        
            formel.addEventListener("submit", (event)=> {
                event.preventDefault();
                
            });
            
            inputel.style.outline = "1px solid #f96262";
            errorMessage.innerText = "Whoops! It looks like you forgot to add your email";
            
            formel.reset()
        }else{
            
            formel.addEventListener("submit", (event)=> {
                event.preventDefault();
                
            });
            
            
            inputel.style.outline = "1px solid #f96262";
            errorMessage.innerText = "Please provide a valid email address";
            formel.reset();
        }

});
  