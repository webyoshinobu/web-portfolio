$(function(){
    $('.sns .sns-bg .sns-wrap').addClass('move-right');
    $(window).scroll(function(){
      $(".sns .sns-bg").each(function(){
        var imgPos = $(this).offset().top;    
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
          $(this).find(".sns-wrap").removeClass('move-right');
        } else {
          $(this).find(".sns-wrap").addClass('move-right');
        }
      });
    });
  });