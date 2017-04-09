$(function() {
    'use strict';

    $('.a').on('click', function(e) {
        e.preventDefault();
    });

    $('.anchor').on("click", function() {
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });

    $('.header__slider').slick({
        arrows: false,
        dots: true,
        mobileFirst: true,
        responsive: [{
            breakpoint: 1026,
            settings: {
                variableWidth: true,
                centerMode: true,
            }
        }]
    });

    $('.profile-info-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        adaptiveHeight: true,
        mobileFirst: true,
        asNavFor: '.artists-slider, .profile-photo-slider'
    });

    $('.profile-photo-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        adaptiveHeight: true,
        mobileFirst: true,
        asNavFor: '.artists-slider, .profile-info-slider'
    });

    $('.artists-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.profile-photo-slider, .profile-info-slider',
        dots: false,
        centerMode: true,
        mobileFirst: true,
        focusOnSelect: true,
        variableWidth: true,
        adaptiveHeight: true,
        arrows: false,
        responsive: [{
            breakpoint: 1169,
            settings: {
                arrows: true
            }
        }]
    });

    $('.zoom-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300,
            opener: function(element) {
                return element.find('img');
            }
        }

    });

});
