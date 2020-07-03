/*
*   A simple loading icon based on my 
*   own logo that I use for reddit and
*   GitHub. Made entirely with CSS components
*   with no external resources. Click the
*   loader to view the original logo.
*
*   Yes, it's based on the Photoshop logo.
*/
function fill(){
    full=!full;
    document.getElementById("logocontainer").style.backgroundColor=full?"#3ebffa":"transparent";
}

window.onload = function () {
    //切り替えがわかるように2秒後にtestを実行するようにする
    setTimeout('test()', 3000);		
}

function test(){
    //ここでローディング画像を表示していたDIVを非表示にする
    document.getElementById('loading').style.display = 'none';
    
    //ここで本体を表示にさせる
    document.getElementById('header').style.display = 'flex';
    document.getElementById('swiper-container').style.opacity = '1';
    document.getElementById('profile').style.display = 'block';
    document.getElementById('works').style.display = 'block';
    document.getElementById('sns').style.display = 'block';
    document.getElementById('contact').style.display = 'block';
    document.getElementById('footer').style.display = 'block';
}

var full=false;