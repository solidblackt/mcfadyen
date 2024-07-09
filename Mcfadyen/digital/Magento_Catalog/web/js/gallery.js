
require([
    'jquery',
    'slick',
    'matchMedia',
    'lazyloading'
], function ($, fotorama, mediaCheck) {
   'use strict';
    mediaCheck({
        media: '(min-width: 768px)',
        entry: function () {
            $('.gallery-placeholder').removeClass("mobile-slider");
            setTimeout(function() {
                $('.gallery-placeholder__image').Lazy({
                    effect: 'fadeIn'
                });
            } , 2000);
        },

        exit: function () {
            $('.gallery-placeholder').addClass("mobile-slider");
            $('.mobile-slider').slick({
                infinite: true,
                mobileFirst: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows : false,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: "unslick"
                    }
                ]
            });
        }	
    });
});