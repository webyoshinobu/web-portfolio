function scrollToMovie(){
  headerHeight = $("#header").innerHeight();
	  var element = document.getElementById('pr'); // 移動させたい位置の要素を取得
    var position = $(element).offset().top - headerHeight - 6;    // 一番上からの位置を取得
    $('html, body').animate({scrollTop:position}, 800, 'swing');
  	scrollTo(0, position);
}