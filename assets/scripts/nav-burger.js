(function () {

"use strict";

$(document).ready(function(){
	$('.burger').click(function(){
		$('.main-nav').toggleClass('show');
	});

	$('.menu-item').click(function(){
		$('.main-nav').toggleClass('show');
	});
});

// window.onscroll = function() {scrollFunction()};

// let grey-nav = $(".top-nav");

// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     grey-nav.css("background-color", "$light-grey");
//   } else {
//    grey-nav.css("background-color", "");
//   }
// }

}());
