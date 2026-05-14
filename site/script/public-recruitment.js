/** ■■■ クラス：Tシャツアニメーション ■■■
 * @author Sozosha Recurrent School Fukuoka 2025.11~2026.05 Class 6B Team A - T.H.
 * @since 20260515
 */
class TShirtAnimation{
    constructor(){
        // プラグインの読み込み
        gsap.registerPlugin(ScrollTrigger);
    }

    // アニメーション実行
    run(){
        gsap.to("#how-apply-t-shirt-1", {
            ease,
            scrollTrigger: {
                trigger: '.box',
                start: 'center center'
            }
        })
    }
}



/** DOMロード完了時イベント */
document.addEventListener("DOMContentLoaded", function(event){
    // const tshirt = new TShirtAnimation();
    // tshirt.run();
});