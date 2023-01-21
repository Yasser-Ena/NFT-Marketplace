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
 * Tabs
 */

// element variable
const nftBtn         = document.querySelector(".nfts-btn");
const collectionsBtn = document.querySelector(".collections-btn");

const nfts           = document.querySelector(".nfts");
const collections    = document.querySelector(".collections");

// toggle betwen coolections and nfts tab
function toggleTab(event){
    if(!event.target.classList.contains("nfts-tab") && event.target.classList.contains("nfts-btn")){
        // add a bit of style from NFTs button tab
        event.target.classList.add("nfts-tab");

        // remove the sytling to the collections button tab
        collectionsBtn.classList.remove("nfts-tab");

        // display the nfts tab
        nfts.style.display = "grid";

        // indisplay the collections tab
        collections.style.display = "none";

    }else if(!event.target.classList.contains("nfts-tab") && event.target.classList.contains("collections-btn")){

        // remove the style from NFTs button tab
        nftBtn.classList.remove("nfts-tab");

        // add a bit of sytling to the collections button tab
        event.target.classList.add("nfts-tab");

        // indisplay the nfts tab
        nfts.style.display = "none";

        // display the collections tab
        collections.style.display = "grid";

    }
};



nftBtn.addEventListener("click", toggleTab);
collectionsBtn.addEventListener("click", toggleTab);