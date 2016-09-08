$(document).ready(function() {

	if(Modernizr.mq('only all')) {
		$('html').addClass('mq');
	} else {
		$('html').addClass('no-mq');
	};


  // $( ".menu-btn" ).on('click touchstart', function() {
  //       $('.menu').toggleClass('show');
  //   });
$( "div.Saturday:first" ).prepend('<div class="schedule-break">Saturday</div>');
$( "div.Friday:first" ).prepend('<div class="schedule-break">Friday</div>');

  $('.hamburger-menu').on('click', function() {
      $('.bar').toggleClass('animate');
      $('.menu').toggleClass('show');
    });


});