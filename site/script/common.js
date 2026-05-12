/** ■■■ クラス：ハンバーガーメニュー ■■■
 * @author Sozosha Recurrent School Fukuoka 2025.11~2026.05 Class 6B Team A - T.H.
 * @since 20260503
*/
class HamburgerMenu{
    /** 開く */
    static open(){ document.getElementById("hamburger-menu").showModal(); }

    /** 閉じる */
    static close(){ document.getElementById("hamburger-menu").close(); }
}


/** ■■■ クラス：アコーディオンメニュー ■■■
 * @author Sozosha Recurrent School Fukuoka 2025.11~2026.05 Class 6B Team A - T.H.
 * @since 20260512
*/
class AccordionMenu{
    /** 開閉する
     * @param {HTMLButtonElement} button くわしくみるボタン、またはとじるボタンのエレメント
     */
    static toggle(button){
        // ボタンが押されたアコーディオンメニューの要素を取得
        const accordionMenuElement = button.parentNode.querySelector(".accordion-menu");
        // くわしくみるボタンかチェック
        const isOpenButton = (button.classList.contains("accordion-button-open")
                            || button.classList.contains("accordion-button-open-red"));
        // とじるぼたんかチェック
        const isCloseButton = button.classList.contains("accordion-button-close");

        // アコーディオンメニューが見つからない場合は何もせずに処理を終える
        if(accordionMenuElement == null) return;

        // くわしくみるボタンを押された場合
        if(isOpenButton){
            // アコーディオンメニューを表示する
            accordionMenuElement.classList.toggle("accordion-menu-open");
            // くわしくみるボタンを隠す
            button.classList.toggle("button-hidden");
            // 閉じるボタンを表示する
            button.nextElementSibling.classList.toggle("button-hidden");
            return;
        }

        // とじるボタンが押された場合
        if(isCloseButton){
            // アコーディオンメニューを隠す
            accordionMenuElement.classList.toggle("accordion-menu-open");
            // 閉じるボタンを隠す
            button.classList.toggle("button-hidden");
            // くわしくみるボタンを表示する
            button.previousElementSibling.classList.toggle("button-hidden");
            return;
        }

        return;
    }
}
