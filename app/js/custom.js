if ($( window ).width() <= 767) {
    const swiper = new Swiper('.team .swiper', {

        slidesPerView: 2,
        spaceBetween: 40,

        // Navigation arrows
        navigation: {
            nextEl: '.team__next',
            prevEl: '.team__prev',
        }
    });
}
$('.policy__name').on('click', function (){
    if ($(this).closest('.policy__wrap').hasClass('active')) {
        $(this).next('.policy__cont').slideUp();
        $(this).closest('.policy__wrap').removeClass('active')
        $(this).find('.policy__arrow').removeClass('active')
    } else {
        $(this).next('.policy__cont').slideDown();
        $(this).closest('.policy__wrap').addClass('active')
        $(this).find('.policy__arrow').addClass('active')
    }

});
(function ($) {
    $(function () {

        $('.price__tabs').on('click', 'button:not(.active)', function (e) {
            e.preventDefault();
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.price').find('.price__cont-block').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);
const swiper2 = new Swiper('.home-work .swiper', {

    slidesPerView: 3,
    spaceBetween: 48,
    pagination: {
        el: ".home-work__nav",
    },
    // Navigation arrows
    navigation: {
        nextEl: '.home-work__next',
        prevEl: '.home-work__prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 3,
            spaceBetween: 48
        }
    }
});
const swiper3 = new Swiper('.home-vac .swiper', {

    slidesPerView: 2,
    spaceBetween: 48,
    pagination: {
        el: ".home-vac__nav",
    },
    // Navigation arrows
    navigation: {
        nextEl: '.home-vac__next',
        prevEl: '.home-vac__prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 2,
            spaceBetween: 48
        }
    }
});
const swiper4 = new Swiper('.home-news .swiper', {

    slidesPerView: 5,
    spaceBetween: 0,
    pagination: {
        el: ".home-news__nav",
    },
    // Navigation arrows
    navigation: {
        nextEl: '.home-news__next',
        prevEl: '.home-news__prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 3,
            spaceBetween: 0
        },
        // when window width is >= 640px
        1200: {
            slidesPerView: 5,
            spaceBetween: 0
        }
    }
});
$('.header__country-top').on('click', function(){
    $(this).next('.header__country-drop').toggle();
});
$('.header__lang-top').on('click', function(){
    $(this).next('.header__lang-drop').toggle();
});
$('body').on('mousedown', function (e) {
    if (!(($(e.target).parents('.header__lang').length) || ($(e.target).hasClass('header__lang')))) {
        $('.header__lang-drop').hide();
    }
    if (!(($(e.target).parents('.header__country').length) || ($(e.target).hasClass('header__country')))) {
        $('.header__country-drop').hide();
    }
});