$(function(){
$(".l-drawer__icon").on("click", (function(){
    $('.l-drawer__item')
        .css({opacity: 0})
        .each(function(i){
            $(this).delay(20 * i).animate({opacity:1}, 400).hide().slideToggle(700);
        });
})
);
});