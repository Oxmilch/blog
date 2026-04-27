/** ■■■ クラス：リンク先を開く ■■■
 * @author Sozosha Recurrent School Fukuoka 2025116B T.H.
 * @since 20260426
 * @description
 * (1) 複数あるHTMLファイルに対して、同じURLの設定や変更をしなくとも、JSで一括管理することにより、修正漏れや反映漏れを防ぐための仕組みとして実装しています
 * (2) 今後変更がされない(Fix)前提であれば、こちらを使用せずにJS利用不可の場合でも動く、アンカーリンクタグによる実装の方が望ましいです。
 * (3) 別サイトに遷移する際、当事業における分析ツール等の利用を想定し、"noreferrer" を意図的に設定していません。必要な場合は設定してください。
 */
class PageOpen{
    /* 特設サイト */
    /** 同じタブで開く：特設サイトトップページ */
    static eventTop() { window.location.href = "./index.html"; }

    /** 同じタブで開く：特設サイト当日ワークショップページ */
    static eventWorkShopMain() { window.location.href = "./workshop-main.html"; }

    /** 同じタブで開く：特設サイト事前ワークショップページ */
    static eventWorkShopInAdvance() { window.location.href = "./workshop-in-advance.html"; }

    /** 同じタブで開く：特設サイトTシャツ公募ページ */
    static eventPublicRecruitment() { window.location.href = "./public-recruitment.html"; }

    /** 新規タブで開く：応募先フォーム */
    static eventForm(){ window.open("", "_blank", "noopener"); }

    /** 新規タブで開く：事業専用インスタグラム */
    static eventInstagram(){ window.open("", "_blank", "noopener"); }


    /* 協力アーティスト情報 */
    /** 新規タブで開く：7/25 協力アーティストインタグラム */
    static eventCollaborator0725Instagram() { window.open("https://www.instagram.com/qp0123whyte/", "_blank", "noopener"); };

    /** 新規タブで開く：7/26 協力アーティストインタグラム */
    static eventCollaborator0726Instagram() { window.open("https://www.instagram.com/colorhythmrisa/", "_blank", "noopener"); };

    /** 新規タブで開く：8/1 協力アーティストインタグラム */
    static eventCollaborator0801Instagram() { window.open("https://www.instagram.com/yuriyoshinagaart/", "_blank", "noopener"); };

    /** 新規タブで開く：8/15 協力アーティストインタグラム */
    static eventCollaborator0815Instagram() { window.open("https://www.instagram.com/chihiro_miyata/", "_blank", "noopener"); };

    /** 新規タブで開く：8/16 協力アーティストインタグラム */
    static eventCollaborator0816Instagram() { PageOpen.eventCollaborator0725Instagram(); };

    /** 新規タブで開く：8/22 協力アーティストインタグラム */
    static eventCollaborator0822Instagram() { window.open("https://www.instagram.com/fuguriddim/", "_blank", "noopener"); };

    /** 新規タブで開く：8/30 協力アーティストインタグラム */
    static eventCollaborator0830Instagram() { window.open("https://www.instagram.com/yutarokumabe/", "_blank", "noopener"); };


    /* 主催情報 */
    /** 新規タブで開く：福岡青年会議所トップ */
    static fukuokaJC(){ window.open("https://www.fukuoka-jc.or.jp/", "_blank", "noopener"); }

    /** 新規タブで開く：福岡青年会議所フェイスブック */
    static fukuokaJCFacebook(){ window.open("https://www.facebook.com/jci.fukuoka/", "_blank", "noopener"); }

    /** 新規タブで開く：福岡青年会議所インスタグラム */
    static fukuokaJCInstagram(){ window.open("https://www.instagram.com/fukuokajc/", "_blank", "noopener"); }

    /** 新規タブで開く：福岡青年会議所TikTok */
    static fukuokaJCTikTok(){ window.open("https://www.tiktok.com/@fukuokajc", "_blank", "noopener"); }

    /** 新規タブで開く：福岡青年会議所YouTube */
    static fukuokaJCYoutube(){ window.open("https://www.youtube.com/channel/UCGsBcrSScCYV5_IvHejBXoA/", "_blank", "noopener"); }


    /* 会場情報 */
    /** 新規タブで開く：福岡市美術館 */
    static venueFukuokaArtMusium(){ window.open("https://www.fukuoka-art-museum.jp/", "_blank", "noopener"); }

    /** 新規タブで開く：福岡市美術館交通案内 */
    static venueFukuokaArtMusiumAccess(){ window.open("https://www.fukuoka-art-museum.jp/guide/access/", "_blank", "noopener"); }

    /** 新規タブで開く：学校 */
    static venueSchool1() { window.open("", "_blank", "noopener"); }

    /** 新規タブで開く：学校 */
    static venueSchool2() { window.open("", "_blank", "noopener"); }
}


/** ■■■ クラス：テキストを動かす ■■■
 * @author Sozosha Recurrent School Fukuoka 2025116B T.H.
 * @since 20260425
 * @description
 * (1) 親要素のクラスが marquee の場合に動作します。
 * (2) 厳密に言えばテキストだけではなく、要素自体をアニメーションさせているため、画像なども動かせます。
 * (3) XとYの設定次第で、斜めや縦方向へのアニメーションも可能です。
 * (4) 複雑なアニメーションはさせず、開始と終了の２点のキーフレームを結ぶ簡単なアニメーションのみ作成できます。
 * @todo
 * ・ウィンドウサイズによって、途中で途切れたりするため要対応
 * ・実際に使ってみたが、動作が想定しづらいため、パラメータ設定簡単にするのと、画面外から画面外に移動後インターバルの時間も読みづらい
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


/** ■■■ クラス：ハンバーガーメニュー ■■■
 * @author Sozosha Recurrent School Fukuoka 2025116B T.H.
 * @since 20260426
 * @description
*/
class HamburgerMenu{
    /** 開閉操作 */
    static toggle(){

    }

    /** 開く */
    static open(){

    }

    /** 閉じる */
    static close(){

    }
}
