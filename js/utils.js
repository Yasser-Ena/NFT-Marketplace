/**
 * PRELAODER
 */

// variables
export const preloader = document.querySelector('.preloader');

// indisplay the preloader and indsplay it also from the body
export function loaded(){
    preloader.classList.add('loaded');
    document.body.classList.add('loaded');
}

/**
 * Navbare (menu)
 */

// variables
export const nave = document.querySelector('.nave');
export const sections = document.querySelectorAll("section");
export const menu = document.querySelector('#menu');

// togle menu
export function toggleNav(){

    nave.classList.toggle('active');
    
    // if you clicked somewher outside navigation close the nave bar
    for(let b = 0; b < sections.length; b++){
        
        sections[b].addEventListener("click", ()=> {
            nave.classList.remove('active');
        });
    }
};


