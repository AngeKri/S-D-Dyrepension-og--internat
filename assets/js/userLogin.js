// Get elements from the HTML document, to make variables for future functions
const dropdownBtn = document.querySelector(".dropdownBtn");
const dropMenu = document.querySelector(".dropdownContent");

// When function "toggleDrop" is activated, give dropdown div class "show"
const toggleDrop = function() {
    dropMenu.classList.toggle("show");
    console.log("clicked");
}

// toggleDrop();

// When button is clicked, run function "eventDropdown" and "toggleDrop"
dropdownBtn.addEventListener("click", function(eventDropdown){
    // When function "eventDropdown" is activated, prevent parent element from being activated
    // eventDropdown.preventDefault();
    toggleDrop();
})

