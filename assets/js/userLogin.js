// Get elements from the HTML document, to make variables for future functions
const dropdownBtn = document.querySelector(".dropdownBtn");
const dropMenu = document.querySelector(".dropdownContent");


// When button is clicked, run function "toggleDrop"
dropdownBtn.addEventListener("click", toggleDrop);
        
// When function "toggleDrop" is activated, give dropdown div class "show"
function toggleDrop(){
    dropMenu.classList.toggle("show");
    console.log("clicked");
};
