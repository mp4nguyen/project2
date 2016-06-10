jQuery(function($) {
    "use strict";

    var SLZ = window.SLZ || {};

    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/

    SLZ.headerFunction = function() {
        if ($(window).width() > 991) {
            // Add class fixed for menu when scroll
            var window_height = $(window).height();
            var lastScroll = 50;
            $(window).on('scroll load', function(event) {
                var st = $(this).scrollTop();
                if ($(window).scrollTop() > window_height) {
                    $(".header-main").addClass('header-fixed');
                } else {
                    $(".header-main").removeClass('header-fixed');
                }

                if (st > lastScroll) {
                    $('.header-main').addClass('hide-menu');
                    if ($('.nav-search').hasClass('hide') == false) {
                        $('.nav-search').toggleClass('hide');
                    }
                } else if (st < lastScroll) {
                    $('.header-main').removeClass('hide-menu');
                }

                if ($(window).scrollTop() <= 200) {
                    $('.header-main').removeClass('.header-fixed').removeClass('hide-menu');
                }

                lastScroll = st;
            });

            // Show - hide box search on menu
            $('.button-search').on('click', function() {
                $('.nav-search').toggleClass('hide');
            });

            //hide box seach when click outside
            if ($(window).width() > 767) {
                $('body').on('click', function(event) {
                    if ($('.button-search').has(event.target).length == 0 && !$('.button-search').is(event.target) && $('.nav-search').has(event.target).length == 0 && !$('.nav-search').is(event.target)) {
                        if ($('.nav-search').hasClass('hide') == false) {
                            $('.nav-search').toggleClass('hide');
                        };
                    }
                });
            }

            // header with absolute position
            $('header .header-dermatology, header .header-psychology').addClass('absolute');
        }

        // V-ticker - effect for topbar
        $('.ticker-news').vTicker();
        if ($(window).width() <= 991 && $('.topbar-right').hasClass('ticker-info')) {
            $('.ticker-info').vTicker();
        }

        // js show menu when screen < 1024px
        $('.hamburger-menu').on('click', function() {
            $('.hamburger-menu-wrapper').toggleClass('open');
            $('body').toggleClass('show-nav');
        });

        if ($(window).width() <= 991) {
            // show hide dropdown menu
            $('.menu-mobile>.nav-links>.dropdown>.icons-dropdown').on('click', function() {
                if ($(this).parent().find('.dropdown-menu').hasClass('dropdown-focus') === true) {
                    $(this).parent().find('.dropdown-menu').removeClass('dropdown-focus');
                    $(this).removeClass('active');
                } else {
                    $('.menu-mobile .dropdown .dropdown-menu').removeClass('dropdown-focus');
                    $('.icons-dropdown').removeClass('active');
                    $(this).parent().find('.dropdown-menu:first').addClass('dropdown-focus');
                    $(this).addClass('active');
                }
            });
            $('.dropdown-submenu .icons-dropdown').on('click', function() {
                $(this).parent().find('.dropdown-menu-2:first').toggleClass('dropdown-focus');
                $(this).toggleClass('active');
            });
        }

    };

    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/

    $(document).ready(function() {
        SLZ.headerFunction();
    });

});
