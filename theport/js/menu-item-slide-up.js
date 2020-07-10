$(function(){
    $('.l-drawer__checkbox').on('click', function(){
        $(".l-drawer__item-top-inner").hide().slideDown(200);
    });
});

$(function(){
    $('.l-drawer__checkbox').on('click', function(){
        $('.l-drawer__item-bottom-inner').toggle();
        setTimeout(function(){
            $(".l-drawer__item-bottom-inner").hide().slideDown(200);
        },300);
    });
});