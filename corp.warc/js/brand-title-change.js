const txts = $('.text');
let txtIndex = -1;
txts.hide()

function showNextTxt() {
    txtIndex++;
    txts.eq(txtIndex % txts.length).fadeIn(2000).delay(3000).fadeOut(2000, showNextTxt);
  }
  showNextTxt();