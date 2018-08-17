// Any time an element with the class of "tagline" is clicked
// $("#jQtest").click(function(){
//     $(".jQblock").animate({
//         height: 'toggle'
//     }, 1500);
// });

// JQUERY UI LIBRARY SCRIPT TO HAVE GRADIENT SLIDE EFFECT ON INDEX.HTML
$(window).on("load", function() {
    $("#gradientslide").hide("slide", 1000);
});

$(".menuitemname").click(
    function() {
        $(".ingredients").animate({
                height: 'toggle'
            },
            1500
        );
    }
);

$("#showallingredients").click(
    function() {
        $(".ingredients").animate({
                height: 'toggle'
            },
            1500
        );
    }
);

$(document).ready(function() {
	$(window).fadeThis();
});