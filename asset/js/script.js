//================== JavaScript ==================//

// const dropdownMenu = document.querySelector(".dropdown");
// // const dropdownBtn = document.querySelector(".dropdown-toggle1");
// const toggleArrow = document.querySelector(".navbar-arrow");

// // Toggle dropdown function
// const toggleDropdown = function () {
//     dropdownMenu.classList.toggle("show");
//     toggleArrow.classList.toggle("arrow");
// };

// // Toggle dropdown open/close when dropdown button is clicked
// // dropdownMenu.forEach( drop => drop.addEventListener("click",function(e){
// //     e.stopPropagation();
// //     toggleDropdown();
// // }))

// dropdownMenu.addEventListener("click", function (e) {
//     e.stopPropagation();
//     toggleDropdown();
// });

// // Close dropdown when dom element is clicked
// document.addEventListener("click", function () {
//     if (dropdownMenu.classList.contains("show")) {
//         toggleDropdown();
//     }
// });



//================== Jquery ==================//

$(document).ready(function () {
  $(document).on("click", ".dropdown-toggle1", function () {
    let parent = $(this).closest(".dropdown");
    let child = parent.find(".navbar-arrow");
    child.addClass("arrow");

    let show = parent.find(".show").attr("class");
    console.log("show",show)

    if ($(this).hasClass("show")) {
      // alert("show")
      console.log("show");
      child.addClass("arrow");
    } 

    else {
      child.removeClass("arrow");
    }
  });
});
