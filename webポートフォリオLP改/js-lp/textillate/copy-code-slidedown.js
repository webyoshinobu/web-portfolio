$(function () {
    $(window).scroll(function(){
      $('.code-copy-title, .code-copy-expl-title, .code-copy-expl-item').each(function(){
        var windowHeight = $(window).height();
        var scroll = $(window).scrollTop();
        var hogePoint = $(this).offset().top;
        if (scroll > hogePoint - windowHeight){
          $(this).css('opacity',1).textillate({
            in: {
                effect: 'fadeInLeftBig',	// エフェクトの指定
                delayScale: 1.5,	// 遅延時間の指数
                delay: 50,	// 文字ごとの遅延時間
                sync: false,	// アニメーションをすべての文字に同時に適用
                shuffle: false, // 文字のランダム表示
                reverse: false,	// エフェクトを逆に再生（「sync:true」のときは不可）
            }});
        }
      });
    });
  });