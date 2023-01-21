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
 * TABS CONTENT
 */

// Tabs varibles
const oneDay  = document.querySelector(".one-day-btn");
const week    = document.querySelector(".week-btn");
const month   = document.querySelector(".month-btn");
const allTime = document.querySelector(".all-time-btn");

// content changer
function contentChanger(){
    if(window.innerWidth >= 834){
        
        // change text inssid the buttons when the secreen is more then 834px
        oneDay.innerText = "Today";

        week.innerText   = "This Week";

        month.innerText  = "Tis Month";
    }else{

        // set back the text insid the buttons to the orginale text when the screen is less then 834px
        oneDay.innerText = "1d";

        week.innerText   = "7d";

        month.innerText  = "30d";
    }
};

// run contentChaner function when the page is loaded
window.addEventListener("load", contentChanger); 

// also run it when the screen is resized
window.addEventListener("resize", contentChanger);


/**
 * TABS
 */

// elements variable
const dayBtn   = document.querySelector(".one-day-btn");
const weekBtn  = document.querySelector(".week-btn");
const monthBtn = document.querySelector(".month-btn");
const allTimeBtn = document.querySelector(".all-time-btn");

const dayRanckings = document.querySelector(".day-rancking");
const weekRanckings = document.querySelector(".week-rancking");
const monthRanckings = document.querySelector(".month-rancking");


//  toggle betwen the tabs
function toggleTab(event){
    switch(!event.target.classList.contains("nfts-tab")){
        case event.target.classList.contains('one-day-btn'):
            console.log(event.target);

            // add the style from NFTs button tab
            event.target.classList.add("nfts-tab");
    
            // remove a bit of sytling to the reset of the tabs
            weekBtn.classList.remove("nfts-tab");
            monthBtn.classList.remove("nfts-tab");
            allTimeBtn.classList.remove("nfts-tab");

            // display the nfts tab
            dayRanckings.style.display = "grid";

            // indisplay the reset of tabs
            weekRanckings.style.display = "none";
            monthRanckings.style.display = "none";
            
        break;

        case event.target.classList.contains('week-btn'):
            console.log(event.target);

            // add the style from NFTs button tab
            event.target.classList.add("nfts-tab");
    
            // remove a bit of sytling to the reset of the tabs
            dayBtn.classList.remove("nfts-tab");
            monthBtn.classList.remove("nfts-tab");
            allTimeBtn.classList.remove("nfts-tab");

            // display the nfts tab
            weekRanckings.style.display = "grid";
            
            // indisplay the reset of tabs
            dayRanckings.style.display   = "none";
            monthRanckings.style.display = "none";
        break;

        case event.target.classList.contains('month-btn'):
            console.log(event.target);

            // add the style from NFTs button tab
            event.target.classList.add("nfts-tab");

            // remove a bit of sytling to the reset of the tabs
            dayBtn.classList.remove("nfts-tab");
            weekBtn.classList.remove("nfts-tab");
            allTimeBtn.classList.remove("nfts-tab");

            // display the nfts tab
            monthRanckings.style.display = "grid";

            // indisplay the reset of tabs
            dayRanckings.style.display   = "none";
            weekRanckings.style.display = "none";
        break;

        case event.target.classList.contains('all-time-btn'):
            console.log(event.target);

            // add the style from NFTs button tab
            event.target.classList.add("nfts-tab");
    
            // remove a bit of sytling to the reset of the tabs
            dayBtn.classList.remove("nfts-tab");
            monthBtn.classList.remove("nfts-tab");
            weekBtn.classList.remove("nfts-tab");
    
            // display the nfts tab
            dayRanckings.style.display = "grid";
            
            // indisplay the reset of tabs
            weekRanckings.style.display   = "none";
            monthRanckings.style.display = "none";
        break;
    }
};
   
   
   dayBtn.addEventListener("click", toggleTab);
   weekBtn.addEventListener("click", toggleTab);
   monthBtn.addEventListener("click", toggleTab);
   allTimeBtn.addEventListener("click", toggleTab);