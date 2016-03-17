
(function ($) {   //Drupal 7 is in jQuery no-conflict mode
$(document).ready(function() {   //When page is done loading...

//Open Menu

$( ".mainMenuPopupIcon" ).on('click', function(e) {
  
	e.preventDefault();  //stops the a.click from going anywhere
	e.stopPropagation();  //stops the document.click from removing the pop up right away
  
	$(".mainMenuPopup").css("display", "block").hide().fadeToggle(400);
	$("body").toggleClass('stopScroll');
   
});


//Document click, close Menu   Need to add if this menu is up disable this 

$(".mainMenuPopup").on('click', function(e) {
  $(".mainMenuPopup").fadeToggle(400, function() { $(this).css("display", "none"); } );
  $("body").toggleClass('stopScroll');
    // Animation complete.
});


});   //document.ready
}(jQuery));   //The End?
