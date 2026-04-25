/** ■■■ クラス：リンク先を開く ■■■
 * @author Sozosha Recurrent School Fukuoka 2025116B T.H.
 * @since 20260425
 * @description
 * 複数あるHTMLファイルに対して、同じURLの設定や変更をしなくとも、JSで一括管理することにより、修正漏れや反映漏れを防ぐための仕組みとして実装しています
 */
class PageOpen{
    /** 同じタブで開く：特設サイトトップページ */
    static eventTop() { window.location.href = "./index.html"; }

    /** 同じタブで開く：特設サイト当日ワークショップページ */
    static eventWorkShopMain() { window.location.href = "./workshop-main.html"; }

    /** 同じタブで開く：特設サイト事前ワークショップページ */
    static eventWorkShopInAdvance() { window.location.href = "./workshop-in-advance.html"; }

    /** 同じタブで開く：特設サイトTシャツ公募ページ */
    static eventPublicRecruitment() { window.location.href = "./public-recruitment.html"; }

    /** 新規タブで開く：応募先フォームに遷移 */
    static eventForm(){ window.open("", "_blank", "noopener"); }

    /** 新規タブで開く：事業専用インスタグラムへ遷移 */
    static eventInstagram(){ window.open("", "_blank", "noopener"); }

    /** 新規タブで開く：事業専用ティックトックに遷移 */
    static eventTiktok(){ window.open("", "_blank", "noopener"); }

    /** 新規タブで開く：商工会議所トップ */
    static fukuokaCCI(){ window.open("https://www.fukunet.or.jp/", "_blank", "noopener"); }

    /** 新規タブで開く：商工会議所フェイスブック */
    static fukuokaCCIFacebook(){ window.open("https://www.facebook.com/fukuoka.cci/", "_blank", "noopener"); }

    /** 新規タブで開く：商工会議所インスタグラム */
    static fukuokaCCIInstagram(){ window.open("https://www.instagram.com/fukuoka_cci/", "_blank", "noopener"); }

    /** 新規タブで開く：商工会議所X */
    static fukuokaCCIX(){ window.open("https://x.com/fukuoka_cci/", "_blank", "noopener"); }

    /** 新規タブで開く：福岡市美術館交通案内に遷移 */
    static fukuokaArtMusiumAccess(){ window.open("https://www.fukuoka-art-museum.jp/guide/access/", "_blank", "noopener"); }
}


/** ■■■ クラス：テキストを動かす ■■■ 
 * @author Sozosha Recurrent School Fukuoka 2025116B T.H.
 * @since 20260425
 * @description
 * 
*/
class MarqueeTexts{
    /** 動かす要素のIDやクラス名 */
    _targets;
    /** 動かす要素 */
    _marqueeElements;
    /** アニメーションのキーフレーム設定 */
    _keyframes;
    /** アニメーションのオプション */
    _options;

    /** 初期化
     * @param {string} targets 動かしたい要素
     */
    constructor(targets){
        this._targets = targets;
    }

    /** 設定反映
     * @param {number} duration 再生時間(ミリ秒)(初期値:10000ミリ秒)
     * @param {number} delay アニメーションの開始を遅らせる時間(ミリ秒)(初期値:0ミリ秒)
     * @param {string} startPositionX 開始時の横の位置(初期値:0)
     * @param {string} endPositionX 終了時の横の位置(初期値:-100%)
     * @param {string} startPositionY 開始時の横の位置(初期値:0)
     * @param {string} endPositionY 終了時の横の位置(初期値:0)
     * @param {string} easing イージング(初期値:linear=一定, ease=最初と終了の時は緩やか、ease-in, ease-out, ease-in-out)
     * @param {number} iterations 繰り返し回数(初期値:Infinity)
     * @param {string} direction 実行する方向(初期値:noraml=通常, reverse=逆方向, alternate=通常方向のアニメーション終了後、逆方向にアニメーションをする、 alternate-reverse=逆方向へのアニメーション後、通常のアニメーションを行う)
     */
    set(duration=10000, delay=0, startPositionX="0", endPositionX="-100%", startPositionY="0", endPositionY="0",
        easing="linear", iterations=Infinity, direction="normal"){
        this._marqueeElements = Array.from(document.querySelectorAll(this._targets));
        this._keyframes = [{transform: `translate(${startPositionX}, ${startPositionY})`},
                           {transform: `translate(${endPositionX}, ${endPositionY})`}];
        this._options = {
            duration: duration,
            delay: delay,
            easing: easing,
            iterations: iterations,
            direction: direction
        };
        // 要素へアニメーションの設定を行う
        this._marqueeElements.forEach((mqrqueeElement) => {
            mqrqueeElement.animate(this._keyframes, this._options);
        });
        // 設定次第アニメーションが開始されるため、一時停止
        this.stop();
    }

    /** アニメーション開始 */
    start(){ this._marqueeElements.forEach((mqrqueeElement) => { mqrqueeElement.getAnimations()[0].play();}); }

    /** アニメーション停止 */
    stop(){ this._marqueeElements.forEach((mqrqueeElement) => { mqrqueeElement.getAnimations()[0].pause();}); }
}

