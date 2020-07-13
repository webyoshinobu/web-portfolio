$(function(){
  $('.brand .brand-left, .brand .brand-right, .interview .interview-right, .career .career-left, .career .career-right, .news .news-left, .news .news-right').addClass('move');
  $(window).scroll(function(){
    $(".brand, .interview, .career, .news").each(function(){
      var imgPos = $(this).offset().top;    
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).find(".brand-left, .brand-right, .interview-right, .career-left, .career-right, .news-left, .news-right").removeClass('move');
      } else {
        $(this).find(".brand-left, .brand-right, .interview-right, .career-left, .career-right, .news-left, .news-right").addClass('move');
      }
    });
  });
});