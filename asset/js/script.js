//========================= JavaScript =========================//

// let dropdownBtn = document.querySelectorAll('.dropdown-toggle1');

// For navbar rotate icon

// dropdownBtn.forEach(drop => {
//     drop.addEventListener('click', function(){
//         let dropdownIcon = drop.querySelector('.navbar-arrow')

//         if (drop.classList.contains('show')){
//             dropdownIcon.classList.add('arrow')
//         }
//         else{
//             dropdownIcon.classList.remove('arrow')
//         }
//     })	
// })

//========================= JQuery =========================//

// For navbar rotate icon

$(document).ready(function(){
    $(document).on('click', '.dropdown-toggle1', function(){
        let parent=$(this).closest('.dropdown')
        let child =parent.find('.navbar-arrow')
        child.addClass('arrow')

        if($(this).hasClass("show")){
            console.log("show")
            child.addClass('arrow')
        }
        else{
            child.removeClass('arrow')
        }
    })

    $('body').on("click", function () {
        $(".navbar-arrow").removeClass("arrow");
      })
})