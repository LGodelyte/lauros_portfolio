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

// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     $('.grey-nav').toggleClass('show');
//   } else {
//    	$('.grey-nav').toggleClass('hidden');
//   }
// }

}());
