const desktopMarqueeText1 = new MarqueeTexts(".test-marquee");

/** ■■■ HTMLロード時実行処理 ■■■  */
document.addEventListener("DOMContentLoaded", function(){
    desktopMarqueeText1.set(15000);
    // desktopMarqueeText1.start();
});