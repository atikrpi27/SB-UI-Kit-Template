const dropdownMenu = document.querySelector(".dropdown");
// const dropdownBtn = document.querySelector(".dropdown-toggle1");
const toggleArrow = document.querySelector(".navbar-arrow");


// Toggle dropdown function
const toggleDropdown = function () {
    dropdownMenu.classList.toggle("show");
    toggleArrow.classList.toggle("arrow");
};

// Toggle dropdown open/close when dropdown button is clicked
// dropdownMenu.forEach( drop => drop.addEventListener("click",function(e){
//     e.stopPropagation();
//     toggleDropdown();
// }))


dropdownMenu.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropdown();
});

// Close dropdown when dom element is clicked
document.addEventListener("click", function () {
    if (dropdownMenu.classList.contains("show")) {
        toggleDropdown();
    }
});