// Main JS File Unminified 
$(function(){

	// Mobile Nav
	$('.mobile-toggle').click(function(event) {
	    event.preventDefault();
		$('.nav').toggleClass('nav-open');
	});

	// Sticky Photo
	function navFade(){
		var y = $(document).scrollTop();
		var t = $('.content').offset().top;
		//var t = 70;

		if (y > t) {
		    $('.site-navigation').addClass('sticky');
		} else {
		    $('.site-navigation').removeClass('sticky');
		}
	}
	// Scroll Functions
	$(document).scroll(function () {
		navFade();
	});


});