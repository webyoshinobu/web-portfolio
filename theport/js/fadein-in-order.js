$(function(){
	$(window).scroll(function (){
		$('.fadein-in-order').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight){
				$(this).addClass('scrollin');
			}
		});
	});
});