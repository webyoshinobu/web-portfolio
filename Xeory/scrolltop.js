window.onload = function scrollTop(){

    $("#scrolltop").hide(); //とりあえず隠す
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 900) { //100以上にスクロールされた／されている時は
            $("#scrolltop").fadeIn("fast"); //ふわっと表示
        } else { //それ意外は
            $("#scrolltop").fadeOut("fast"); //ふわっと非表示
        }

        scrollHeight = $(document).height(); //ドキュメントの高さ 
        scrollPosition = $(window).height() + $(window).scrollTop(); //現在地 
        footHeight = $("#links").innerHeight(); //footerの高さ（＝止めたい位置）
            if ( scrollHeight - scrollPosition  <= footHeight ) { //ドキュメントの高さと現在地の差がfooterの高さ以下になったら
            $("#scrolltop").css({
            "position":"absolute", //pisitionをabsolute（親：wrapperからの絶対値）に変更
            "bottom": footHeight + 80 //下からfooterの高さ + 20px上げた位置に配置
            });
            } else { //それ以外の場合は
                $("#scrolltop").css({
                "position":"fixed", //固定表示
                "bottom": "20px" //下から20px上げた位置に
            });
        }
    });

    $('#scrolltop').click(function () { // #topBtnをクリックすると
        $('body,html').animate({ // いちばん上にanimateする
        scrollTop: 0 // 戻る位置
        }, 400); // 戻るスピード
        return false;
    });
};