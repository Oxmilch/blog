/** ■■■ クラス：リンク先を新規タブで開く ■■■
 * @author 2025116B T.H.
 * @since 20260424 初期実装
 * @description
 * 
 */
class NewWindow{
    /** URL：福岡商工会議所トップ */
    get urlFukuokaCCI() { return "https://www.fukunet.or.jp/"; }
    /** URL：福岡商工会議所フェイスブック */
    get urlFukuokaCCIFacebook() { return "https://www.facebook.com/fukuoka.cci/";}
    /** URL：福岡商工会議所インスタグラム */
    get urlFukuokaCCIInstagram() { return "https://www.instagram.com/fukuoka_cci/"};
    /** URL：福岡商工会議所X */
    get urlFukuokaCCIX() { return "https://x.com/fukuoka_cci/";}
    /** URL：福岡市美術館交通案内 */
    get urlFukuokaArtMusiumAccess() { return "https://www.fukuoka-art-museum.jp/guide/access/";}
    /** URL：イベント用インスタグラム */
    get urlEventInstagram() { return "";}
    /** URL：イベント用ティックトック */
    get urlEventTiktok() { return "";}
    /** URL：応募先フォーム */
    get urlPublicRecruitment() { return "";}


    /** 共通：新規タブを開く
     * @description 指定されたURLを新規タブで開きます。指定されない場合は、自身のページを新規タブで開きます。
     * @param {string | null} url 遷移先のURL
     */
    static open(url){
        if(url){
            window.open(url, "_blank");
        }
        else{
            window.open(window.location.href, "_blank");
        }
    }

    /** 新規タブ：商工会議所トップ */
    static gotoFukuokaCCI(){ NewWindow(urlFukuokaArtMusiumAccess); }

    /** 新規タブ：商工会議所フェイスブック */
    static GotoFukuokaCCIFacebook(){ NewWindow(urlFukuokaCCIFacebook); }

    /** 新規タブ：商工会議所インスタグラム */
    static GotoFukuokaCCIInstagram(){ NewWindow(urlFukuokaCCIInstagram); }

    /** 新規タブ：商工会議所X */
    static GotoFukuokaCCIX(){ NewWindow(urlFukuokaCCIX); }

    /** 新規タブ：福岡市美術館交通案内に遷移 */
    static GotoFukuokaArtMusiumAccess(){ NewWindow(urlFukuokaArtMusiumAccess); }

    /** 新規タブ：イベント用インスタグラムへ遷移 */
    static GotoEventInstagram(){ NewWindow(urlEventInstagram); }

    /** 新規タブ：イベント用ティックトックに遷移 */
    static GotoEventTiktok(){ NewWindow(urlEventTiktok); }

    /** 新規タブ：応募先フォームに遷移 */
    static GotoPublicRecruitment(){ NewWindow(urlPublicRecruitment); }
}


/** ■■■ クラス：テキストを動かす ■■■ 
 * @author 2025116B T.H.
 * @since 20260424 初期実装
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
     * @param {number} duration 再生時間(ミリ秒)
     * @param {string} startPosition 開始時の位置
     * @param {string} endPosition 終了時の位置
     * @param {number} delay アニメーションの開始を遅らせる時間(ミリ秒)
     * @param {string} easing イージング(初期値:linear=一定, ease=最初と終了の時は緩やか、ease-in, ease-out, ease-in-out)
     * @param {number} iterations 繰り返し回数(初期値:Infinity)
     * @param {string} direction 実行する方向(初期値:noraml=通常, reverse=逆方向, alternate=通常方向のアニメーション終了後、逆方向にアニメーションをする、 alternate-reverse)
     */
    set(duration, startPosition="100%", endPosition="-100%", delay=0, easing="linear", iterations=Infinity, direction="normal"){
        this._marqueeElements = Array.from(document.querySelectorAll(this._targets));
        this._keyframes = [{transform: `translateX(${startPosition})`},
                           {transform: `translateX(${endPosition})`}];
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
