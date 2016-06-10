$(function() {
  "use strict";

  	/* slider */
  	var post_slider = $('.post-slider').owlCarousel({
  		autoplay: true,
  		autoplayTimeout: 3000,
  		autoplaySpeed: 1200,
  		mouseDrag : false,
	  	items: 1,
	  	smartSpeed: 800,
	  	nav: false,
	  	loop: true,
	  	dots: false
	});
	
	$('.post-nav i.fa-angle-left').on('click', function() {
		post_slider.trigger('prev.owl.carousel');
	})
	$('.post-nav i.fa-angle-right').on('click', function() {
		post_slider.trigger('next.owl.carousel');
	});

	// if($(window).width() < 769) {
 //        $('.widget-other-services .howwedoit-content').slick({
 //            slidesToShow: 2,
 //            slidesToScroll: 2,
 //            dots: true,
 //            arrows: false,
 //            responsive: [
 //                {
 //                    breakpoint: 481,
 //                    settings: {
 //                        slidesToShow: 1,
 //                        slidesToScroll: 1
 //                    }
 //                }
 //            ]
 //        });
 //    }

});