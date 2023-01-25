// import {preloader ,loaded ,menu ,nave ,toggleNav } from "./home.js";
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
 * AUCTION TIMER
 */

// Geat the element
const hoursEl   = document.querySelector(".hours");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");

const timer       = document.querySelector(".auction-timer");
const soled       = document.querySelector(".auction-soled")
const placeBidBtn = document.querySelector(".place-bid");


// Count down to 
const time = "january 25, 2023 18:10:00";

// Count down function
function countDown(){

    //Variables for leading ziro
    let leadingSeconds = 0;
    let leadingMinutes = 0;
    let leadingHours = 0;

    const countTo = new Date(time);
    const now    = new Date().getTime();
    const gap    = countTo - now;

    // How the time actuly is work
    const second = 1000;
    const minute = 60 * second;
    const hour   = 60 * minute;
    const day    = 24 * hour;

    // Calculate the time 
    const days    = Math.floor(gap / day);
    const hours   = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) /second);

    // Turn the the days to hours
    const daysToHours = days * 24 ;

    // add the ziro for dont make leading of time empty when the leading is less thane 10
    
    const toHours = hours + daysToHours;

    if(toHours < 10){
        leadingHours = "0" + toHours.toString();
    }else{
        leadingHours = toHours;
    }
    
    if(minutes < 10){
        leadingMinutes = "0" + minutes.toString();
    }else{
        leadingMinutes = minutes;
    }
    
    if(seconds < 10){
        leadingSeconds = "0" + seconds.toString();
    }else{
        leadingSeconds = seconds;
    }
    
    // display it on the browser
    document.querySelector(".hours").innerText   = leadingHours; // display number of hours plus the days
    document.querySelector(".minutes").innerText = leadingMinutes;
    document.querySelector(".seconds").innerText = leadingSeconds;



}

// Run the count down timer after the page is laoded and stopit when the is cmplete
window.addEventListener("load",()=> {

    // start the timer
    const interval = setInterval(()=> {
        countDown();
    // stopt the timer when place bid button is clicked
    placeBidBtn.addEventListener("click", ()=> {
        clearInterval(interval);

        timer.style.display = "none";
        soled.style.display = "grid";
    });
    }, 1000);
    
    // stope the timer
    const date  = new Date(time);
    const nowis = new Date().getTime();
    const gapis = date - nowis;
    
    setTimeout(()=> {
        clearInterval(interval);
        console.log("it's soled");
    }, gapis);
    
})
