var startPos = 0,winScrollTop = 0;
$(window).on('scroll',function(){
    winScrollTop = $(this).scrollTop();
    if (winScrollTop >= startPos) {
        $('.site-header').addClass('hide');
    } else {
        $('.site-header').removeClass('hide').css({"background":"#000"});
        $('.l-drawer').css({"background":"#000"});
        $('#stylesheet').html('.l-drawer__icon-parts, .l-drawer__icon-parts:before, .l-drawer__icon-parts:after{background:#fff;}');
        $('.l-drawer__title').css({"color":"#fff"});

        if ($(this).scrollTop() + $(window).height() - $('.slide').height() <= $('.slide').height()){
            var org = $('.site-header').removeClass('hide').css({"background":""});
            var org = $('.l-drawer').css({"background":""});
            var org = $('#stylesheet').html('.l-drawer__icon-parts, .l-drawer__icon-parts:before, .l-drawer__icon-parts:after{background:#000;}');
            var org = $('.l-drawer__title').css({"color":""});
        }else{
            $('.site-header').removeClass('hide');
            $(window).on('click', function() {
                $('#stylesheet').html('.l-drawer__icon-parts, .l-drawer__icon-parts:before, .l-drawer__icon-parts:after{background:#000;}');
                $('.l-drawer__title').css({"color":"#000"});
                $(window).off('click');
            });
        }
    }
    startPos = winScrollTop;
});