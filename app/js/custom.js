if ($(window).width() <= 767) {
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
$('.policy__name').on('click', function () {
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
$('.header__country-top').on('click', function () {
    $(this).next('.header__country-drop').toggle();
});
$('.header__lang-top').on('click', function () {
    $(this).next('.header__lang-drop').toggle();
});
$('body').on('mousedown', function (e) {
    if (!(($(e.target).parents('.header__lang').length) || ($(e.target).hasClass('header__lang')))) {
        $('.header__lang-drop').hide();
    }
    if (!(($(e.target).parents('.header__country').length) || ($(e.target).hasClass('header__country')))) {
        $('.header__country-drop').hide();
    }
    if (!(($(e.target).parents('.lk-select').length) || ($(e.target).hasClass('lk-select')))) {
        $('.lk-select').removeClass('active');
        $(".lk-select__drop").getNiceScroll().resize();
    }
});
$(".filters__cities-wrap").niceScroll({
    cursorwidth: "5px",
    cursorborder: "0px solid #fff",
    cursoropacitymin: 1
});
$(".filters__cities-wrap input").each(function () {
    $(this).on('change', function () {
        let nCit = '';
        $(this).closest('.filters__cities-wrap').find('input:checkbox:checked').each(function () {
            nCit = nCit + $(this).next('span').next('p').html() + ', ';
        });
        $(this).closest(".filters__cont").find('.filters__cities').html(nCit.slice(0, -2));
    });
});
$(function () {
    $(".catalog #slider-range").slider({
        range: true,
        min: 0,
        max: 300000,
        values: [70000, 190000],
        slide: function (event, ui) {
            $(".filters__price .first span").html(ui.values[0]);
            $(".filters__price .last span").html(ui.values[1]);
        }
    });
    $(".popup-create #slider-range").slider({
        range: true,
        min: 0,
        max: 300000,
        values: [70000, 190000],
        slide: function (event, ui) {
            $(".filters__price .first span").html(ui.values[0]);
            $(".filters__price .last span").html(ui.values[1]);
        }
    });
    $(".lk-s-res__zp #slider-range").slider({
        range: true,
        min: 0,
        max: 300000,
        values: [70000, 190000],
        slide: function (event, ui) {
            $(".filters__price .first span").html(ui.values[0]);
            $(".filters__price .last span").html(ui.values[1]);
        }
    });
});
$(".filters__top .filters__search").on('click', function (e) {
    e.preventDefault();
    $(".filters__top").next('.filters__wrap').submit();
});
$(".main__form").on('submit', function (e) {
    e.preventDefault();
    $(".filters__top").next('.filters__wrap').submit();
});
$(".filters__top > .filters__reset").on('click', function (e) {
    e.preventDefault();
    $(".filters__top").next('.filters__wrap').trigger("reset");
});
$(".main__form input").on('change', function () {
    $(".filters__wrap > input").val($(this).val());
});
$('.main__dop').on('click', function (e) {
    e.preventDefault();
    $(".overlay-filters").addClass('active');
    $('body').css("overflow", "hidden");
    $(".filters__cities-wrap").getNiceScroll().resize();
});
$('.filters__close').on('click', function (e) {
    $(this).closest('.overlay').removeClass('active');
    $('body').css("overflow", "visible");
    $(".filters__cities-wrap").getNiceScroll().resize();
});
$('.overlay-filters').on('click', function (e) {
    if (!(($(e.target).parents('.filters').length) || ($(e.target).hasClass('filters')))) {
        $('body').css("overflow", "visible");
        $('.overlay-filters').removeClass('active');
        $(".lk-select__drop").getNiceScroll().resize();
    }
});
$('.overlay-create').on('click', function (e) {
    if (!(($(e.target).parents('.popup-create').length) || ($(e.target).hasClass('popup-create')))) {
        $('body').css("overflow", "visible");
        $('.overlay-create').removeClass('active');
        $(".filters__cities-wrap").getNiceScroll().resize();
    }
});
$('.overlay-prof').on('click', function (e) {
    if (!(($(e.target).parents('.popup-create').length) || ($(e.target).hasClass('popup-create')))) {
        $('body').css("overflow", "visible");
        $('.overlay-prof').removeClass('active');
        $(".filters__cities-wrap").getNiceScroll().resize();
    }
});
$('.overlay-lang').on('click', function (e) {
    if (!(($(e.target).parents('.popup-create').length) || ($(e.target).hasClass('popup-create')))) {
        $('body').css("overflow", "visible");
        $('.overlay-lang').removeClass('active');
        $(".filters__cities-wrap").getNiceScroll().resize();
    }
});
$('.overlay-about').on('click', function (e) {
    if (!(($(e.target).parents('.popup-create').length) || ($(e.target).hasClass('popup-create')))) {
        $('body').css("overflow", "visible");
        $('.overlay-about').removeClass('active');
        $(".filters__cities-wrap").getNiceScroll().resize();
    }
});
$('.overlay-kval').on('click', function (e) {
    if (!(($(e.target).parents('.popup-create').length) || ($(e.target).hasClass('popup-create')))) {
        $('body').css("overflow", "visible");
        $('.overlay-kval').removeClass('active');
        $(".filters__cities-wrap").getNiceScroll().resize();
    }
});
$('.overlay-exp').on('click', function (e) {
    if (!(($(e.target).parents('.popup-create').length) || ($(e.target).hasClass('popup-create')))) {
        $('body').css("overflow", "visible");
        $('.overlay-exp').removeClass('active');
        $(".filters__cities-wrap").getNiceScroll().resize();
    }
});
$('.overlay-obr').on('click', function (e) {
    if (!(($(e.target).parents('.popup-create').length) || ($(e.target).hasClass('popup-create')))) {
        $('body').css("overflow", "visible");
        $('.overlay-obr').removeClass('active');
        $(".filters__cities-wrap").getNiceScroll().resize();
    }
});
$('.overlay-spec').on('click', function (e) {
    if (!(($(e.target).parents('.filters').length) || ($(e.target).hasClass('filters')))) {
        $('body').css("overflow", "visible");
        $('.overlay-spec').removeClass('active');
        $(".filters__cities-wrap").getNiceScroll().resize();
    }
});

$(".menu__title").on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).next('.menu__cont').toggle();
});
$(".header__menu").on('click', function (e) {
    e.preventDefault();
    $(".menu").addClass('active');
});
$(".menu-top__close").on('click', function (e) {
    e.preventDefault();
    $(".menu").removeClass('active');
});
$('.catalog__filters input').on('change', function () {
    $('.catalog__filters .btn-pr').hide();
    let btn = "<button class='btn btn--grey btn-pr' style='top:" + ($(this).closest('label').position().top - 15) + "px;'>Применить</button>";
    $(this).closest('.filters__cont').append(btn);
});
$('.catalog-drop__top').on('click', function (e) {
    e.preventDefault();
    $(this).next('.catalog-drop__drop').toggleClass('active');
});
$(".catalog__show").on('click', function (e) {
    e.preventDefault();
    $(".catalog__filters").addClass('active');
});
$(".catalog__close").on('click', function (e) {
    e.preventDefault();
    $(".catalog__filters").removeClass('active');
});
(function ($) {
    $(function () {

        $('.lk-r-tar__tabs').on('click', 'a:not(.active)', function (e) {
            e.preventDefault();
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.lk__cont').find('.lk-r-tar__cont-block').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);
$(".lk-select__drop").each(function () {
    $(this).niceScroll({
        cursorwidth: "5px",
        cursorborder: "0px solid #fff",
        cursoropacitymin: 1
    });
});
$('.lk-select__top').on('click', function () {
    $(this).closest('.lk-select').toggleClass('active');
    $(".lk-select__drop").getNiceScroll().resize();
});
$('.lk-select__drop a').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.lk-select').find('.lk-select__top').html($(this).html());
    $(this).closest('.lk-select').find('input').val($(this).html());
    $(this).closest('.lk-select').removeClass('active');
    $(".lk-select__drop").getNiceScroll().resize();
});
$('.popup-spec__more').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.popup-spec__block').find('a').show();
    $(this).hide();
});
$('.lk-r-vac__create').on('click', function (e) {
    e.preventDefault();
    $('.overlay-create').addClass('active');
    $('body').css('overflow', 'hidden');
});
$('.popup-create__spec, .lk-s-res__spec a').on('click', function (e) {
    e.preventDefault();
    $('.overlay-spec').addClass('active');
    $('body').css('overflow', 'hidden');
});
$('.modal-obr').on('click', function (e) {
    e.preventDefault();
    $('.overlay-obr').addClass('active');
    $('body').css('overflow', 'hidden');
});
$('.modal-about').on('click', function (e) {
    e.preventDefault();
    $('.overlay-about').addClass('active');
    $('body').css('overflow', 'hidden');
});
$('.modal-prof').on('click', function (e) {
    e.preventDefault();
    $('.overlay-prof').addClass('active');
    $('body').css('overflow', 'hidden');
});
$('.modal-lang').on('click', function (e) {
    e.preventDefault();
    $('.overlay-lang').addClass('active');
    $('body').css('overflow', 'hidden');
});
$('.modal-kval').on('click', function (e) {
    e.preventDefault();
    $('.overlay-kval').addClass('active');
    $('body').css('overflow', 'hidden');
});
$('.modal-exp').on('click', function (e) {
    e.preventDefault();
    $('.overlay-exp').addClass('active');
    $('body').css('overflow', 'hidden');
});