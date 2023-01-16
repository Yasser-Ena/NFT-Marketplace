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

// Element variable
const matamaskWallet = document.querySelector("#metamask");

// Creat async function to connect the metamask wallet
async function connectMetamask() {
    try{
        // chek if the metamask extontion is installed on the browser 
        if(typeof window.ethereum !== "undefined"){

            const accounts = await window.ethereum.request({method : "eth_requestAccounts"});

            //notes the user that is connect
            alert(`${accounts}` + ": is connected");
        

            // and back to the home page
                window.location.href="../home.html";

        }else{// if doesn't installed to the browser open official metamask webe site to installe the extontion

            window.open("https://metamask.io");
            console.log("is undefined");
        }
    }
    catch{
        error=> console.log(error);
    }
}

// call the async connectMitamask function when the metamask wallet button id clicked
matamaskWallet.addEventListener("click", connectMetamask);


/**
 * CONNECT WALLETCONNECT
 */

// Element variable
const walletConnect = document.querySelector("#walletconnect");

// instantiate(represent) WalletConnect web3 provider
var provider = new WalletConnectProvider.default({
    rpc: {
      1: "https://cloudflare-eth.com/", //ethreum 
      137: "https://polygon-rpc.com/", //mateks
    },
  });

//Creat aysnc function to connect the WalletConnect software
async function connectWalletConnect () {
    try{
        //  Enable session (triggers QR Code modal)
        await provider.enable();

       
    //   //  Create Web3 instance
    //     const web3 = new Web3(provider);

    //     const accounts  = await web3.eth.getAccounts(); // get all connected accounts
    //     const account = accounts[0]; // get the primary account
        
    //     // notes the user is connect
    //     alert(`${account}` + " is connected");

    //     // and back to the home page
    //         window.location.href="../home.html";

    }
    
    catch{
        error => console.log(error);
    }
};

// call the async connectWalletConnect function when walletConnect button is clicked

walletConnect.addEventListener("click", connectWalletConnect);