(function ($) {
    "use strict";
    // Collapse
    $('.faq-group a').on('click', function() {
        $(this).parent().parent().parent().parent().find('.panel-heading.active').removeClass('active');
        if($(this).hasClass('collapsed')) {
        	$(this).parent().parent().addClass('active');
        }
        else {
        	$(this).parent().parent().removeClass('active');
        }

    });
    
})(jQuery);