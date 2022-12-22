
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