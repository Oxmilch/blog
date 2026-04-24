const subtitle = new MarqueeTexts(".test-marquee");

/** ■■■ HTMLロード時実行処理 ■■■  */
document.addEventListener("DOMContentLoaded", function(){
    subtitle.setting(0, "calc(-100% - 1rem)", 20000);
    subtitle.start();
});