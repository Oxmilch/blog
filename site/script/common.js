/* ■■■ URL定数 ■■■ */
/** URL：福岡商工会議所トップ */
const urlFukuokaCCI = "https://www.fukunet.or.jp/";
/** URL：福岡商工会議所フェイスブック */
const urlFukuokaCCIFacebook = "https://www.facebook.com/fukuoka.cci/";
/** URL：福岡商工会議所インスタグラム */
const urlFukuokaCCIInstagram = "https://www.instagram.com/fukuoka_cci/";
/** URL：福岡商工会議所X */
const urlFukuokaCCIX = "https://x.com/fukuoka_cci/";
/** URL：福岡市美術館交通案内 */
const urlFukuokaArtMusiumAccess = "https://www.fukuoka-art-museum.jp/guide/access/";
/** URL：イベント用インスタグラム */
const urlEventInstagram = "";
/** URL：イベント用ティックトック */
const urlEventTiktok = "";
/** URL：応募先フォーム */
const urlPublicRecruitment = "";


/* ■■■ 関数：新規タブを開く ■■■ */
/** 共通：新規タブを開く
 * @description 指定されたURLを新規タブで開きます。指定されない場合は、自身のページを新規タブで開きます。
 * @param {string | null} url 遷移先のURL
 */
function NewWindow(url){
    if(url){
        window.open(url, "_blank");
    }
    else{
        window.open(window.location.href, "_blank");
    }
}

/** 新規タブ：商工会議所トップ */
function GotoFukuokaCCI(){ NewWindow(urlFukuokaArtMusiumAccess); }

/** 新規タブ：商工会議所フェイスブック */
function GotoFukuokaCCIFacebook(){ NewWindow(urlFukuokaCCIFacebook); }

/** 新規タブ：商工会議所インスタグラム */
function GotoFukuokaCCIInstagram(){ NewWindow(urlFukuokaCCIInstagram); }

/** 新規タブ：商工会議所X */
function GotoFukuokaCCIX(){ NewWindow(urlFukuokaCCIX); }

/** 新規タブ：福岡市美術館交通案内に遷移 */
function GotoFukuokaArtMusiumAccess(){ NewWindow(urlFukuokaArtMusiumAccess); }

/** 新規タブ：イベント用インスタグラムへ遷移 */
function GotoEventInstagram(){ NewWindow(urlEventInstagram); }

/** 新規タブ：イベント用ティックトックに遷移 */
function GotoEventTiktok(){ NewWindow(urlEventTiktok); }

/** 新規タブ：応募先フォームに遷移 */
function GotoPublicRecruitment(){ NewWindow(urlPublicRecruitment); }

