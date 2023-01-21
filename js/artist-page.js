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
 * CATs
 */

// Element variables
const copyBtn   = document.querySelector(".copy");
const followBtn = document.querySelector(".follow");
const followText= document.querySelector(".followText");
const followIcon= document.querySelector(".plus");

// copy
async function copy(){
    // get the text that we want ot copy them
    const copyedText = copyBtn.innerText;

    // copy the text inside the button
    await navigator.clipboard.writeText(copyedText);

    copyBtn.style.backgroundColor = "transparent";
    copyBtn.style.border = "2px solid #A259FF";
};

// follow 
function follow(){;
    if(followText.innerText = "Follow"){
        
        followBtn.style.backgroundColor = "#A259FF";
        
        followText.innerText = "Followed";
        
        followIcon.style.display = "none";

    }
};

copyBtn.addEventListener("click", copy);
followBtn.addEventListener("click", follow);

/**
 * TAB TOGGLER
 */

// Element variables
const createdTab    = document.querySelector(".created");
const ownedTab     = document.querySelector(".owned");
const collectionTab = document.querySelector(".collection");

const created    = document.querySelector(".created-tab");
const owned     = document.querySelector(".owned-tab");
const collection = document.querySelector(".collection-tab")

// toggle betwen the tabs
function toggleTab(event){
    switch(!event.target.classList.contains("nfts-tab")){
        case event.target.classList.contains("created"):
            // add the class to them
            event.target.classList.add("nfts-tab");

            // remove from the outhers
            ownedTab.classList.remove("nfts-tab");
            collectionTab.classList.remove("nfts-tab");

            // display the nft cards
            created.style.display = "grid";

            // indisplay the nfts cards
            owned.style.display = "none";
            collection.style.display = "none";
        break;

        case event.target.classList.contains("owned"):
            // add the class to them
            event.target.classList.add("nfts-tab");

            // remove from the outhers
            createdTab.classList.remove("nfts-tab");
            collectionTab.classList.remove("nfts-tab");

            // display the nft cards
            owned.style.display = "grid";
            
            // indisplay the nfts cards
            created.style.display = "none";
            collection.style.display = "none";
        break;

        case event.target.classList.contains("collection"):
            // add the class to them
            event.target.classList.add("nfts-tab");

            // remove from the outhers
            createdTab.classList.remove("nfts-tab");
            ownedTab.classList.remove("nfts-tab");

            // display the nft cards
            collection.style.display = "grid";
            
            // indisplay the nfts cards
            created.style.display = "none";
            owned.style.display = "none";
        break;

    }
}

// cllection when the tab button is clicked
createdTab.addEventListener("click", toggleTab);
ownedTab.addEventListener("click", toggleTab);
collectionTab.addEventListener("click", toggleTab);