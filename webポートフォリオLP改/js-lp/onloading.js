window.onload = function () {
    //切り替えがわかるように2秒後にtestを実行するようにする
    setTimeout('loading()', 4000);		
}

function loading(){
    //ここでローディング画像を表示していたDIVを非表示にする
    document.getElementById('loading-wrap').style.display = 'none';
    
    //ここで本体を表示にさせる
    document.getElementById('main').style.display = 'block';
}