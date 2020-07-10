$(function(){
    $('.l-drawer__icon').on('click', function(event){
        event.preventDefault();
        $(this).toggleClass('color-change');

        if($(this).hasClass('color-change')){
            $('#stylesheet').html('.l-drawer__icon-parts, .l-drawer__icon-parts:before, .l-drawer__icon-parts:after{background:red;}');
        } else {
            $('#stylesheet').html('.l-drawer__icon-parts, .l-drawer__icon-parts:before, .l-drawer__icon-parts:after{background:blue;}');
        }
    });
});





$(window).on('click', function() {
    $('#stylesheet').html('.l-drawer__icon-parts, .l-drawer__icon-parts:before, .l-drawer__icon-parts:after{background:#000;}');
    $('.l-drawer__title').css({"color":"#000"});
    $(window).off('click');
});