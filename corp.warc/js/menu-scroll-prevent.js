var state = false;
$('.l-drawer__checkbox').click(function(){
  $('html').toggleClass('open-menu-scroll-prevent');
  if (state == false){
    $(window).on('touchmove.noScroll', function(e) {
      e.preventDefault();
    });
    state = true;
  } else {
    $(window).off('.noScroll');
    state = false;
  }
});