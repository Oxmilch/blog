/** ■■■ クラス：ページ内リンクへ移動する ■■■
 * @author Sozosha Recurrent School Fukuoka 2025116B T.H.
 * @since 20260501
 * @description
 */
class PageMove{
    /** パラメータとハッシュを除く */
    static removeHashLocation() {
        return window.location.href.replace(window.location.hash, "");
    }

    /** トップページに戻る */
    static top() { return PageMove.removeHashLocation() + "#top"; }
}


/** ■■■ クラス：リンク先を開く ■■■
 * @author Sozosha Recurrent School Fukuoka 2025116B T.H.
 * @since 20260430
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

    /** 新規タブで開く：福岡青年会議所トップ */
    static fukuokaJCPrivacyPolicy(){ window.open("https://www.fukuoka-jc.or.jp/pp", "_blank", "noopener"); }

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


/** ■■■ クラス：ハンバーガーメニュー ■■■
 * @author Sozosha Recurrent School Fukuoka 2025116B T.H.
 * @since 20260430
 * @description
*/
class HamburgerMenu{
    /** 開く */
    static open(){
        const menu = document.getElementById("menu-area");
        menu.showModal();
    }

    /** 閉じる */
    static close(){
        const menu = document.getElementById("menu-area");
        menu.close();
    }
}
