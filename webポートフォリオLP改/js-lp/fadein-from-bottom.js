$(function(){
    $('.profile .scroll-link .works-btn, .works .code-copy .github .github-btn').addClass('move');
    $(window).scroll(function(){
      $(".profile .scroll-link, .works .code-copy .github").each(function(){
        var imgPos = $(this).offset().top;    
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
          $(this).find(".works-btn, .github-btn").removeClass('move');
        } else {
          $(this).find(".works-btn, .github-btn").addClass('move');
        }
      });
    });
});