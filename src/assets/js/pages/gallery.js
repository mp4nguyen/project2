$(function() {
  "use strict";

  	$('#galleryContainer .alldepartment').each(function() {
	  	$(this).hoverdir();
	});

	setTimeout(function() {
		$('#galleryContainer').isotope({
		  // options
		  itemSelector: '.alldepartment',
      layoutMode: 'masonry'
		});
	},500);
	$('.gallery-inner .filter-button-group .btn').on('click', function() {
	  	var filterValue = $(this).attr('data-filter');
  		$('#galleryContainer').isotope({
  		  filter: filterValue
  		});
		  $('.gallery-inner .filter-button-group .btn').removeClass('active');
      $(this).addClass('active');
	});
	
	// Gallery fancybox
	$(".fancybox").fancybox({
        padding: 0,
        pixelRatio: 1,
        autoSize    : true,
        helpers : {
            title   : {
                type: 'outside'
            },
            thumbs  : {
                width   : 96,
                height  : 60
            }
        }
    });
	
	// Responsive menu filter
	$(document).on('click', function (event) {
        var clickover = $(event.target);
        var _opened = $(".gallery-inner #filters").hasClass("collapse in");
        if (_opened === true) {
            $(".gallery-inner .btn-primary").on('click');
        }
    });
  	$(window).on('resize load', function () {
    	if($(window).width() < 768) {
      		$('.gallery-inner #filters').addClass('collapse');
    	} else {
      		$('.gallery-inner #filters').removeClass('collapse');
    	}
  	});
  	$('.gallery-inner #filters .btn').on('click', function() {
  		var name_category = $(this).attr("data-category");
  		$('.gallery-inner .btn.btn-primary span').html(name_category);
  		$('.gallery-inner #filters').removeClass('in');
  	});
		
});