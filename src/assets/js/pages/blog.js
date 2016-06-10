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

  /* Audio post */
  if($('#player2').length > 0) {
    $('#player2').mediaelementplayer({
      audioWidth: '100%',
      audioHeight: 84
    });
  }

   /*Page Blog 2col Variation*/
  if($('.blog-wrapper .post-wrapper.grid').length > 0) {
    setTimeout(function() {
      $('.blog-wrapper .post-wrapper.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true
      })
    }, 500);
  }

  /*Page Blog 2col Variation*/
  if($('.blog-2col .recent-news-list .grid').length > 0) {
    setTimeout(function() {
      $('.blog-2col .recent-news-list .grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true
      })
    }, 500);
  }

  /*Page Blog 2col with Sidebar*/

  if($('.blog-2col-sidebar .recent-news-list .grid').length > 0) {
    setTimeout(function() {
      $('.blog-2col-sidebar .recent-news-list .grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
      })
    }, 500);
  }

  /*Page Blog 2col non Sidebar*/
  if($('.blog-2col-non-sidebar .post-wrapper .grid').length > 0) {
    setTimeout(function() {
      $('.blog-2col-non-sidebar .post-wrapper .grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true
      })
    }, 500);
  }

  /*Page Blog 3col no Sidebar*/

  if($('.blog-3col .recent-news-list .grid').length > 0) {
    setTimeout(function() {
      $('.blog-3col .recent-news-list .grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true
      })
    }, 500);
  }

});