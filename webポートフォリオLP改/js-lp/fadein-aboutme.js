$(function(){
    $('.profile .profile-con-wrap .profile-con-right').addClass('move');
    $(window).scroll(function(){
      $(".profile").each(function(){
        var imgPos = $(this).offset().top;    
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
          $(this).find(".profile-con-right").removeClass('move');
        } else {
          $(this).find(".profile-con-right").addClass('move');
        }
      });
    });
  });