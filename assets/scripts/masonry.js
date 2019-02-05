(function () {

"use strict";
$(document).ready(function(e){
	$('.grid').masonry({
	  itemSelector: '.grid-item',
	  columnWidth: '.grid-item'
	});
});


$("#portfolio").on('click', function() {
  $.fancybox.open();
});

$("#gallery").on('click', function() {
  $.fancybox.open();
});

$("#project-03").on('click', function() {
  $.fancybox.open();
});

$("#project-04").on('click', function() {
  $.fancybox.open();
});


$("#project-05").on('click', function() {
  $.fancybox.open();
});

$("#project-06").on('click', function() {
  $.fancybox.open();
});

$("#project-07").on('click', function() {
  $.fancybox.open();
});

$("#project-08").on('click', function() {
  $.fancybox.open();
});



}());