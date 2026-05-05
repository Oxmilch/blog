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
     * @param {string} targetId 開閉対象のタグのId
     */
    static toggle(buttonObject, targetId){
        document.getElementById(targetId).classList.toggle("open");
    }
}
