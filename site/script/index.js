const desktopMarqueeText1 = new MarqueeTexts(".test-marquee1");
const desktopMarqueeText2 = new MarqueeTexts(".test-marquee2");
const desktopMarqueeText3 = new MarqueeTexts(".test-marquee3");
const desktopMarqueeText4 = new MarqueeTexts(".test-marquee4");

/** ■■■ HTMLロード時実行処理 ■■■  */
document.addEventListener("DOMContentLoaded", function(){
    desktopMarqueeText1.set(12000, 0, "100vw", "-100vw", "10vh", "10vh");
    desktopMarqueeText2.set(12000, 0, "100vw", "-200vw", "35vh", "35vh");
    desktopMarqueeText3.set(12000, 0, "100vw", "-300vw", "60vh", "60vh");
    desktopMarqueeText4.set(12000, 0, "100vw", "-400vw", "85vh", "85vh");
    desktopMarqueeText1.start();
    desktopMarqueeText2.start();
    desktopMarqueeText3.start();
    desktopMarqueeText4.start();
});
