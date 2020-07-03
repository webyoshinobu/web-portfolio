$(function(){
    $('.sns .sns-bg h1').addClass('move');
    $(window).scroll(function(){
      $(".sns .sns-bg").each(function(){
        var imgPos = $(this).offset().top;    
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
          $(this).find("h1").removeClass('move');
        } else {
          $(this).find("h1").addClass('move');
        }
      });
    });
});