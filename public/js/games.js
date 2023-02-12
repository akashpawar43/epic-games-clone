document.addEventListener("DOMContentLoaded", () => {
    let dropdownmenu = document.querySelector("#drop_down");
    let navabr_1 = document.querySelector("#navbar_1");
    let navabr_2 = document.querySelector("#navbar_2");

    document.querySelector("#singup1").addEventListener("click", e => {
        e.preventDefault();
        dropdownmenu.classList.remove("form_hidden");
    });

    document.querySelector("#download_link1").addEventListener("click", e => {
        e.preventDefault();
        dropdownmenu.classList.add("form_hidden");
    });

    document.querySelector('#ham').addEventListener("click", e => {
        e.preventDefault();
        navabr_1.classList.add("form_hidden");
        navabr_2.classList.remove("form_hidden");
    });

    document.querySelector('#epic_logo').addEventListener("click", e => {
        e.preventDefault();
        navabr_1.classList.add("form_hidden");
        navabr_2.classList.add("form_hidden");
    });
});



// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar2 = document.getElementById("nav2");

// Get the offset position of the navbar
var sticky = navbar2.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar2.classList.add("sticky")
    } else {
        navbar2.classList.remove("sticky");
    }
}   

