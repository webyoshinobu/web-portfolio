$(function(){
    $('.profile .profile-con-wrap .profile-con-left .profile-con-left-img, .contact .contact-title-sub, h1, .contact-icon-wrap').addClass('move-center');
    $(window).scroll(function(){
      $(".profile, .contact").each(function(){
        var imgPos = $(this).offset().top;    
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
          $(this).find(".profile-con-left-img, .contact-title-sub,h1,.contact-icon-wrap").removeClass('move-center');
        } else {
          $(this).find(".profile-con-left-img, .contact-title-sub,h1,.contact-icon-wrap").addClass('move-center');
        }
      });
    });
  });