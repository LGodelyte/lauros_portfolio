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

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	let height = $('.hero').height();
  if (document.body.scrollTop > height || document.documentElement.scrollTop > height) {
    $('.top-nav').addClass('grey-nav');
  } else {
   $('.top-nav').removeClass('grey-nav');
  }
}

}());
