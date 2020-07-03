$(function(){
    $('header .nav .nav-list .nav-list-item a, .swiper-container .swiper-wrapper .swiper-slide a, .profile a, .l-drawer__menu .l-drawer__list .l-drawer__item a').click(function(){
        headerHeight = $("header").innerHeight();
        var id = $(this).attr('href');
        var position = $(id).offset().top - headerHeight;
        $('html, body').animate({
            'scrollTop':position
        },1000)
    })
})