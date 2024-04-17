console.log("Hello I am trying my best I swear");
// nav
let openHam = document.getElementById("openHam");
let closeHam = document.getElementById("closeHam")
let navigationItems = document.getElementById("navigation-items");

// Arrow Function with arguments & parameters

const hamburgerEvent = (navigation, close , open )=> {
    navigationItems.style.display = navigation;
    closeHam.style.display = close
    openHam.style.display = open
};
// Add function to click events with the correct parameters

openHam.addEventListener("click", ()=> hamburgerEvent("flex","block","none"));
closeHam.addEventListener("click", ()=> hamburgerEvent("none","none","block"));
// end of nav

// cart overlay 
// Get all the elements:
let open = document.getElementById("openModal");
let close = document.getElementById("closeModal");
let overlay = document.getElementById("overlay");
let modal = document.getElementById("modal");

// Click functions 
// open
open.addEventListener("click", function() {
    overlay.style.display = "block";
    modal.style.display = "block";
});

//close
close.addEventListener("click", function() {
    overlay.style.display = "none";
    modal.style.display = "none";
});
