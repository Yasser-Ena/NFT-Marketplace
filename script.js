// Element variables
const inputE       = document.querySelectorAll(`input[type = 'text']`);
const subscribeBtn = document.querySelector('#subscribe-btn');
const errorMessage = document.querySelectorAll('#error-message');
const alertel      = document.querySelector('.alert');
const closeBtn     = document.querySelector('#close');
const formel       = document.querySelectorAll("form");

// Each element varibles
let forEachInput = '';
let forEachForm  = '';
let forEachError = '';

// display the alert function
function displayAlert(){

    alertelstyle.display = "block";
    
    //close the alert
    closeBtn.addEventListener("click", ()=> {
        alertelstyle.display = "none";
        // forEachForm.reset();
    });
}

// indisplay the alert function
function indisplayAlert(){
    alertelstyle.display = "none";
}



// email validation function for the formssy
function validation() {
    
    // for each input
    for(let i = 0; i < inputE.length; i++){
        inputE[i].addEventListener("change", ()=> {
            forEachInput = inputE[i];
            
        });
    }

    // for each form with this function
    for(let j = 0; j < formel.length; j++){
        forEachForm = formel[j];
    }

    // for each error message with this function
    for(let a = 0; a < errorMessage.length; a++){
        forEachError = errorMessage[a];
    }

    // btn function
    function btn(event){
        event.preventDefault();
    }

    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(forEachInput.value.match(mailformat)){
        
        function fetching(event){
            event.preventDefault();
            
            const userData = new FormData(forEachForm);
            // console.log([...userData]);
            const objectData = Object.fromEntries(userData);//conver the userData to real object
            // console.log(objectData);
            
            fetch('http://httpbin.org/post', {
                method: "POST",
                body  : JSON.stringify(objectData),// set the objectData to josn
            })
            .then(res => res.json())
            .then(data => console.log(data))
            // 
            .catch(err => console.log('ther is an:',err));
        
        }

        // add event listener to each form
        addEventOnElement(formel, "submit", fetching);

        // display the alert after submit the form
        displayAlert();

         // indisplay the alert after 4seconds
        setTimeout(indisplayAlert, 3000);
        
        // indisplay the error message if it didplayed and set the input border to orginal color
        forEachInput.style.borderColor = "#A259FF";
        forEachError.innerText = " ";

    }else if(forEachInput.value === " "){
        addEventOnElement(formel, "submit", btn);

        forEachInput.style.borderColor = "#f96262";
        forEachError.innerText = "Whoops! It looks like you forgot to add your email";

        forEachForm.reset();

    }else{
        addEventOnElement(formel, "submit", btn);

        forEachError.innerText = "Please provide a valid email address";
        forEachInput.style.borderColor = "#f96262";

        forEachForm.reset();
    }

    //clear the form after pass through the conditions
    function clearFormFields(){
        forEachForm.reset();
    }
    setTimeout(clearFormFields, 3000);
};

window.addEventListener("load", ()=> {
    addEventOnElement(subscribeBtn, "click", validation);
});