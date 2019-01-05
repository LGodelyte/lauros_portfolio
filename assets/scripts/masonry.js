(function () {

"use strict";
$(document).ready(function(e){
	$('.grid').masonry({
	  // options
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


}());