const BtnAdd = document.querySelector(".btn-add");
const todoList = document.querySelector(".items");
const formControl = document.querySelector(".form");

const emailAddress = document.getElementById('address');
const SendEmail = document.querySelector('.btn-send');

/* When the button is clicked, run the AddNew function */
BtnAdd.addEventListener("click", AddNew);

SendEmail.addEventListener("click", Send);

/* This is to prevent the form from reloading the page, which 
is it's default behavior when it is submitted. */
formControl.addEventListener("submit",function(e){ 
    e.preventDefault();
})

function AddNew(){
    /* Get the text that the user typed in the input box, put in an object */
    inputEntered = document.getElementById('input');

    /* Create a new li tag, put it in an object */
    const newItem = document.createElement("li");

    /* Give the newly created li tag a classs name */
    newItem.className = "newListItem"; /* Could also use newItem.classList.add('newListItem'); */

    /* Add the new li tag to its parent (ul in this case) IF something has been typed */
    if (inputEntered.value != ''){
        todoList.appendChild(newItem);
    }

    /* Assign the value of the input box to the newly created li HTML text */
    newItem.innerHTML = inputEntered.value;


    /* Reset the input field (but without reloading the page) */
    formControl.reset();
}

function Send(){
    /* This works... save the link that formsubmit.co will need by concatonating strings. */
    var action = "https://formsubmit.co/" + emailAddress.value;

    /* This was just to make sure the above worked. */ 
    console.log(action);
    
    /* This changes the action of the .email form to be what we need. */
    document.querySelector('.email').action = action;
    
    /*
    document.querySelector('.email').submit();
    */
}