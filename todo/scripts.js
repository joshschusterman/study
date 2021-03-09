const BtnAdd = document.querySelector(".btn-add");
const todoList = document.querySelector(".items");
const formControl = document.querySelector(".form");

/* When the button is clicked, run the AddNew function */
BtnAdd.addEventListener("click", AddNew);

/* This is to prevent the form from reloading the page, which 
is it's default behavior when it is submitted. */
formControl.addEventListener("submit",function(e){ 
    e.preventDefault();
})

function AddNew(){
    /* Create a new li tag, put it in an object */
    const newItem = document.createElement("li");

    /* Give the newly created li tag a classs name */
    newItem.className = "newListItem";

    /* Add the new li tag to its parent (ul in this case) */
    todoList.appendChild(newItem);

    /* Get the text that the user typed in the input box, put in an object */
    inputEntered = document.getElementById('input');

    /* Assign the value of the input box to the newly created li HTML text */
    newItem.innerHTML = inputEntered.value;

    /* Reset the input field (but without reloading the page) */
    formControl.reset();
}