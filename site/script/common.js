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
 * @since 20260506
*/
class AccordionMenu{
    /** 開閉する
     * @param {string} accordionMenuId 開閉対象のタグのId
     */
    static toggle(accordionMenuId){
        document.getElementById(accordionMenuId).classList.toggle("open");
    }

    /** アコーディオンメニューを開くボタンを隠し、閉じるボタンを表示する
     * @param {Element} openButtonElement 開くボタン
     * @param {string} closeButtonId 表示する閉じるボタン
     */
    static openButton(openButtonElement, closeButtonId){
        openButtonElement.classList.add("button-hidden");
        document.getElementById(closeButtonId).classList.remove("button-hidden");
    }

    /** アコーディオンメニューを閉じるボタンを隠し、元のボタンを表示する
     * @param {Element} closeButtonElement 閉じるボタン
     * @param {string} openButtonId 表示する開くボタン
     */
    static closeButton(closeButtonElement, openButtonId){
        closeButtonElement.classList.add("button-hidden");
        document.getElementById(openButtonId).classList.remove("button-hidden");
    }
}
