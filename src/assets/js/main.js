jQuery(function($) {
    "use strict";

    var SLZ = window.SLZ || {};

    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/

    SLZ.mainFunction = function() {
        // Page loader
        setTimeout(function() {
            $('body').addClass('loaded');
        }, 2500);

        // WOW js
        new WOW().init();

        // COUNT FUN FACT
        $('.counter-inner').text('0');
        setTimeout(function() {
            $('.progress-counter').appear(function() {
                $('.progress-counter').each(function() {
                    var data_value = $(this).attr('data-value');
                    $(this).find('.counter-inner').countTo({
                        to: data_value,
                        speed: 3000,
                        refreshInterval: 100
                    });
                });
            });
        }, 1000);

        // Slide Recent News
        $('.recent-news-wrapper .recent-news-list').slick({
            dots: true,
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            autoplay: false,
            speed: 500,
            responsive: [{
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });

        // Isotope Recent News 2
        var isotope_grid_item = $('.recent-news-2 .recent-news-item');

        setTimeout(function() {
            if ($(window).width() > 768 && $('.grid').hasClass('grid-isotope')) {
                $('.recent-news-2 .grid-item:not(.height-2x)').each(function() {
                    var recent_news_height = $(this).height(),
                        recent_news_height_2x = $('.recent-news-2 .grid-item.height-2x').height();
                    recent_news_height_2x += recent_news_height;
                    $('.grid-item.height-2x').css('height', recent_news_height_2x - $('.grid-item.height-2x .post-content').outerHeight());
                    $('.grid-item.height-2x .post-image').css('height', recent_news_height_2x - $('.grid-item.height-2x .post-content').outerHeight() + 30);
                });
                
                $('.recent-news-wrapper .grid').isotope({
                    itemSelector: '.grid-item'
                });
                
            }

            if ($(window).width() <= 768 && $(window).width() > 600) {
                var recent_news_height = $('.recent-news-2 .grid-item').height();
                console.log(recent_news_height);
                $('.recent-news-2 .grid-item.height-2x .post-image').css('height', recent_news_height + 150);
                $('.recent-news-2 .grid-item.height-2x').css('height', recent_news_height + 150 + $('.grid-item.height-2x .post-content').outerHeight());
            }

            if ($(window).width() <= 600) {
                var recent_news_height = $('.recent-news-2 .grid-item').height();
                console.log(recent_news_height);
                $('.recent-news-2 .grid-item.height-2x .post-image').css('height', recent_news_height);
                $('.recent-news-2 .grid-item.height-2x').css('height', recent_news_height + $('.grid-item.height-2x .post-content').outerHeight());
            }
        }, 500);

        // Datepicker Appointment
        $('#appointment-datepicker').datepicker();

        // Back to top
        if ($('.back-to-top').length) {
            var scrollTrigger = 100; // px
            var backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.back-to-top').addClass('show');
                } else {
                    $('.back-to-top').removeClass('show');
                }
            };
            backToTop();
            $(window).on('scroll', function() {
                backToTop();
            });
            $('.back-to-top').on('click', function(e) {
                e.preventDefault();
                $('html,body').animate({
                    scrollTop: 0
                }, 700);
            });
        }

        // Carousel
        var owl_slide = $('.slider-wrapper').owlCarousel({
            mouseDrag: false,
            touchDrag: false,
            autoplay: 5000,
            autoplayHoverPause: true,
            autoplaySpeed: 1400,
            items: 1,
            margin: 0,
            loop: true,
            nav: true,
            navText: ['&#10094;', '&#10095;'],
            dots: false
        });

        owl_slide.on('changed.owl.carousel', function(event) {
            var current = event.item.index;
            var datasrc = $(event.target).find('.owl-item').eq(current).find('.typo-adds-on').attr('data-hash');
            $(this).find('.typo-adds-on').removeClass('active');
            $('.slider-wrapper .item.' + datasrc + " .typo-adds-on").addClass('active');
        });

        // CROUSEL WITH THUMBNAILS
        var owl_slide_1 = $('.slider-howwedo-wrapper').owlCarousel({
            mouseDrag: false,
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            autoplay: 3000,
            autoplayHoverPause: true,
            autoplaySpeed: 1000,
            margin: 0,
            loop: true,
            nav: false,
            URLhashListener: true,
            dots: false,
            responsive: {
                0: {
                    items: 1
                }
            }
        });

        owl_slide_1.on('changed.owl.carousel', function(event) {
            var current = event.item.index;
            var datasrc = $(event.target).find('.owl-item').eq(current).find('.item').attr('data-hash');
            $('.thumbs-howwedo .thumb-item').removeClass('active');
            $('.thumbs-howwedo .thumb-item.' + datasrc).addClass('active');
        });


        $('.nav-howwedo-left').on('click', function() {
            owl_slide_1.trigger('prev.owl.carousel');
        });
        $('.nav-howwedo-right').on('click', function() {
            owl_slide_1.trigger('next.owl.carousel');
        });

        var owl_slide_2 = $('.thumbs-howwedo').owlCarousel({
            autoplay: 3000,
            autoplayHoverPause: true,
            autoplaySpeed: 1000,
            margin: 12.5,
            loop: true,
            nav: false,
            dots: false,
            responsive: {
                0: {
                    items: 3
                },
                400: {
                    items: 4
                },
                600: {
                    items: 5
                }
            }
        });

        var owl_slide_3 = $('.slider-testimonials').owlCarousel({
            autoplay: 3000,
            autoplayHoverPause: true,
            autoplaySpeed: 1000,
            margin: 0,
            loop: true,
            nav: false,
            responsive: {
                0: {
                    items: 1
                }
            }
        });

        $('.testimonials .nav-testimonial-inner-left').on('click', function() {
            owl_slide_3.trigger('prev.owl.carousel');
        });
        $('.testimonials .nav-testimonial-inner-right').on('click', function() {
            owl_slide_3.trigger('next.owl.carousel');
        });

        var owl_slide_4 = $('.team-wrapper').owlCarousel({
            autoplayHoverPause: true,
            autoplay: 3000,
            autoplaySpeed: 1000,
            loop: true,
            nav: false,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                601: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1200: {
                    dots: false,
                    items: 4
                }
            }
        });
        $('.nav-doctor-inner-left').on('click', function() {
            owl_slide_4.trigger('prev.owl.carousel');
        });
        $('.nav-doctor-inner-right').on('click', function() {
            owl_slide_4.trigger('next.owl.carousel');
        });

        var owl_slide_5 = $('.recent-post-wrapper.recent-slide .post-list').owlCarousel({
            autoplay: 3000,
            autoplayHoverPause: true,
            autoplaySpeed: 1000,
            loop: true,
            nav: true,
            margin: 30,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 2
                }
            }
        });

        var owl_slide_6 = $('.slider-testimonials-heart-center').owlCarousel({
            autoplay: 3000,
            autoplayHoverPause: true,
            autoplaySpeed: 1000,
            margin: 30,
            loop: true,
            nav: false,
            navText: ['&#10094;', '&#10095;'],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                }
            }
        });

        $('.testimonials.heart-center .nav-testimonial-inner-left, .testimonials.dermatology .nav-testimonial-inner-left').on('click', function() {
            owl_slide_6.trigger('prev.owl.carousel');
        });
        $('.testimonials.heart-center .nav-testimonial-inner-right, .testimonials.dermatology .nav-testimonial-inner-right').on('click', function() {
            owl_slide_6.trigger('next.owl.carousel');
        });


        // // FORM MATERIAL
        $('.form-md-line-input.form-md-floating-label input, .form-md-line-input.form-md-floating-label select, .form-md-line-input.form-md-floating-label textarea').on('blur', function() {
            if (!$(this).val()) {
                $(this).removeClass('edited');
            } else {
                $(this).addClass('edited');
            }
        });

        if ($(window).width() < 1025) {
            $('.whatwedo .services-wrapper, .whatwedo-cancer-center .services-wrapper').slick({
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: true,
                arrows: false,
                infinite: false,
                responsive: [{
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            });
            $('.list-features:not(.dental-care)').slick({
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: false,
                dots: true,
                arrows: false,
                responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                }, {
                    breakpoint: 678,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                }, {
                    breakpoint: 440,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            });
        }

        if ($(window).innerWidth < 992) {
            var owl_slide_6 = $('.team-wrapper-2').owlCarousel({
                autoplayHoverPause: true,
                autoplay: 3000,
                autoplaySpeed: 1000,
                loop: true,
                nav: false,
                margin: 0,
                dots: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    601: {
                        items: 2
                    },
                    768: {
                        items: 3
                    }
                }
            });
        }

        /* JS for section Videos bg */
        if($(".video-embed").length) {
            var gurl = $(".video-embed")[0].src;
            var height_video = $('.video-button-play').parents('.post-image').height();

            $(window).resize(function() {

                height_video = $('.video-button-play').parents('.post-image').height();
            });
            $(".video-button-play").on('click', function(event) {
                $('.video-bg, .video-button-play').addClass('fadeOut hide-video').removeClass('fadeIn show-video');
                $(".video-embed, .video-button-close").addClass('fadeIn show-video').removeClass('fadeOut hide-video');
                $(".video-embed")[0].src += "&autoplay=1";
                event.preventDefault();
            });

            $(".video-button-close").on('click', function(event) {
                $(".video-embed")[0].src = gurl;
                $('.video-bg, .video-button-play').addClass('fadeIn show-video').removeClass('fadeOut hide-video');
                $(".video-embed, .video-button-close").addClass('fadeOut hide-video').removeClass('fadeIn show-video');
                $('.video-button-close').removeClass('show-video');

            });
        }

    };

    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/

    $(document).ready(function() {
        SLZ.mainFunction();
    });

    /*=====  End of INIT FUNCTIONS  ======*/

    $(window).on('resize load', function() {
        // PREVENT DROPDOWN FROM OUT OF THE CONTAINER
        if ($(window).width() > 991) {

            $(".navbar-medic-collapse li").on('mouseenter mouseleave', function(e) {
                // Direction for dropdown
                if ($('ul', this).length) {
                    var elm = $(this);
                    var off = elm.offset();
                    var l = off.left;
                    var w = elm.width();
                    var docH = $(".container").height();
                    var docW = $(".container").width();
                    var isEntirelyVisible = (l + w <= docW);

                    if (!isEntirelyVisible) {
                        $(this).addClass('edge');
                    } else {
                        $(this).removeClass('edge');
                    }
                }

            });

            $(".navbar-medic-collapse li").on('mouseenter', function() {
                // HOVER DROPDOWN MENU
                $(this).addClass('open');
            });
            $(".navbar-medic-collapse li").on('mouseleave', function() {
                // HOVER DROPDOWN MENU
                $(this).removeClass('open');
            });
        }

        /* Act on the event */
        if ($('.how-we-do-it-wrapper .howwedoit-content .item').length > 0) {
            $('.how-we-do-it-wrapper .howwedoit-content .item').each(function(index, el) {
                $(this).find('.howwedoit-title').css('width', $(this).find('.howwedoit-inner')[0].getBoundingClientRect().width - 66);
            });
        }
    });

});
