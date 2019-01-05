(function () {

"use strict";

$(document).ready(function(){
	$('.burger').click(function(){
		$('.menu-item').toggleClass('show'),

	});
	$('.burger').click(function(){
		$('.grey-nav').toggleClass('show');
	});
	$('.menu-item').click(function(){
		$('.main-nav').toggleClass('hidden');
	});
});




}());
