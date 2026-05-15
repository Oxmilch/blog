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
 * @since 20260513
 * @summary リングノート風のアコーディオンメニューの開閉に使用する
*/
class AccordionMenu{
    /** 開閉する
     * @param {HTMLButtonElement} button くわしくみるボタン、またはとじるボタンのエレメント
     */
    static toggle(button){
        /** アコーディオンメニュー展開時CSSクラス名 */ 
        const cssClassAccordionMenuOpen = "accordion-menu-open";
        /** アコーディオンメニュー開閉ボタン非表示CSSクラス名 */
        const cssClassAccordionButtonHidden = "button-hidden";

        /** ボタンが押されたアコーディオンメニューの要素を取得 */
        const accordionMenuElements = button.parentNode.querySelectorAll(".accordion-menu");
        /** 「くわしくみる」ボタンチェック */
        const isOpenButton = (button.classList.contains("accordion-button-open")
                            || button.classList.contains("accordion-button-open-red"));
        /** 「とじる」ボタンチェック */
        const isCloseButton = button.classList.contains("accordion-button-close");

        // アコーディオンメニューが見つからない場合は何もせずに処理を終える
        if(accordionMenuElements.length == 0) return;

        // くわしくみるボタンを押された場合
        if(isOpenButton){
            // アコーディオンメニューを表示する
            accordionMenuElements.forEach(elem => { elem.classList.toggle(cssClassAccordionMenuOpen); });
            // くわしくみるボタンを隠す
            button.classList.toggle(cssClassAccordionButtonHidden);
            // 閉じるボタンを表示する
            button.nextElementSibling.classList.toggle(cssClassAccordionButtonHidden);
            return;
        }

        // とじるボタンが押された場合
        if(isCloseButton){
            // アコーディオンメニューを隠す
            accordionMenuElements.forEach(elem => { elem.classList.toggle(cssClassAccordionMenuOpen); });
            // 閉じるボタンを隠す
            button.classList.toggle(cssClassAccordionButtonHidden);
            // くわしくみるボタンを表示する
            button.previousElementSibling.classList.toggle(cssClassAccordionButtonHidden);
            return;
        }

        return;
    }
}
