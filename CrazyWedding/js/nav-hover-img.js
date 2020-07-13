$(function() {
    $('.menu-item-hover').hover(
      function() {
        $(this).find('.nav-hover-img-wrap').addClass('img-active').hide().fadeIn('slow');
      },
      function() {
        $(this).find('.nav-hover-img-wrap').removeClass('img-active').fadeOut('slow');
      }
    );
  });