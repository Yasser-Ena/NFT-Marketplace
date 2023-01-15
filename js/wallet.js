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
 * NAVBARE (menu)
 */
utils.menu.addEventListener('click', ()=> {
    utils.nave;
    utils.sections;
    utils.toggleNav();
});


/**
 * CONNECT METAMASK WALLET
 */

// Variable
const matamaskWallet = document.querySelector("#metamask");

// Creat async function to connect the metamask wallet
async function connect() {
    try{
        // chek if the metamask extontion is installed on the browser 
        if(typeof window.ethereum !== "undefined"){

            await window.ethereum.request({method : "eth_requestAccounts"});
            console.log("is defined");

            // and back to the home page
            window.location.href="../home.html";

        }else{// if doesn't installed to the browser open official metamask webe site to installe the extontion

            window.open("https://metamask.io");
            console.log("is undefined");
        }
    }
    catch{
        (error)=> console.log(error);
    }
}

// call the async function when the metamask wallet button
matamaskWallet.addEventListener("click", connect);