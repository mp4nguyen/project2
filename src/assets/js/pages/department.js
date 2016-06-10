$(function() {
    "use strict";
    setTimeout(function() {
    	$('.department-wrapper .department-inner .department-body').each(function() {
	    	var department_img = $(this).prev().height(),
	    		department_body = $(this).height();
	    	if(department_body < department_img && $(window).width() > 600) {
				$(this).height(department_img-4);
			}
    	});
    },500);
});