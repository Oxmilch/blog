/* ★定数★ */
/**
 * パラメータインデックス
 */
const paramIdx = {
  /** 有効フラグ */
  enabled : 0,
  /** 検索先:検索URL{条件入力パラメータ} */
  url : 1,
  /** AND検索URL(結合記号) */
  and : 2,
  /** OR検索URL(結合記号) */
  or : 3,
  /** 除外検索URL(結合記号) */
  except : 4,
  /** 排他パラメータ */
  excludeParam : 5,
  /** 追加パラメータ結合URL記号 */
  addParamJoin : 6,
  /** 追加パラメータ */
  addParam :7
};

/**
 * 
 */
const condIdx = {
  prefix:0,
  join:1,
  saffix:2
};

/** URLチェック */
const cnstReUrlChk  = new RegExp(/^(https:\/\/)/);

/** */
const cnstrReSearchJoinChar = new RegExp(/\s/g);

/** 検索先設定定義 */
const paramSearch = {
  Amazon : [
    true,
    "https://www.amazon.co.jp/s?k={param}&__mk_ja_JP=カタカナ",
    [null, "+", null],
    ["|", "|", null],
    ["+-", "+-", null],
    { すべてのカテゴリー: "",
      Kindleストア: "&i=digital-text",
      PrimeVideo:"&i=instant-video",
      デジタルミュージック:"&i=digital-music",
      本:"&i=stripbooks",
      ミュージック:"&i=popular",
      TVゲーム:"&i=videogames",
      PCソフト:"&i=software",
      パソコンと周辺機器:"&i=computers",
      家電とカメラ:"&i=electronics",
      文房具とオフィス用品:"&i=office-products",
      ホームとキッチン:"&i=kitchen",
      ペット用品:"&i=pets",
      ドラッグストア:"&i=hpc",
      ビューティー:"&i=beauty",
      食品と飲料とお酒:"&i=food-beverage",
      ベビーとマタニティ:"&i=baby",
      ファッション:"&i=fashion",
      服とファッション小物:"&i=apparel",
      シューズとバック:"i=shoes",
      腕時計:"&i=watch",
      ジュエリー:"&i=jewelry",
      おもちゃ:"&i=toys",
      ホビー:"&i=hobby",
      楽器:"&i=mi",
      スポーツとアウトドア:"&i=sporting",
      車とバイク:"&i=automotive",
      DIYと工具とガーデン:"&i=diy",
      大型家電:"&i=appliances",
      産業と研究開発用品:"&i=industria",
      Amazonアウトレット:"&i=warehouse-deals"},
    null,
    null
  ],
  楽天市場 : [
    true,
    "https://search.rakuten.co.jp/search/mall/{param}",
    [null, "+", "/"],
    [null, null, null],
    ["?nitem=", "+", null],
    { すべてのジャンル:"",
      メンズファッション:"\/551177\/",
      レディースファッション:"\/100371\/",
      靴:"\/558885\/",
      バッグと小物とブランド雑貨:"\/216131\/",
      ジュエリーとアクセサリー:"\/216129\/",
      腕時計:"\/558929\/",
      インナーと下着とナイトウェア:"\/100433\/",
      キッズとベビーとマタニティ:"\/100533\/",
      食品:"\/100227\/",
      スイーツとお菓子:"\/551167\/",
      水とソフトドリンク:"\/100316\/",
      ワイン:"\/100317\/",
      ビールと洋酒:"\/510915\/",
      日本酒と焼酎:"\/510901\/",
      パソコンと周辺機器:"\/100026\/",
      スマートフォンとタブレット:"\/564500\/",
      TVとオーディオとカメラ:"\/211742\/",
      家電:"\/562637\/",
      光回線とモバイル通信:"\/565004\/",
      CDとDVD:"\/101240\/",
      楽器と音響機器:"\/112493\/",
      スポーツとアウトドア:"\/101070\/",
      ゴルフ用品:"\/101077\/",
      インテリアと寝具と収納:"\/100804\/",
      日用品雑貨と文房具と手芸:"\/215783\/",
      キッチン用品と食器と調理器具:"\/558944\/",
      花とガーデンとDIY:"\/100005\/",
      ペットとペットグッズ:"\/101213\/",
      ダイエットと健康:"\/100938\/",
      医薬品とコンタクトと介護:"\/551169\/",
      美容とコスメと香水:"\/100939\/",
      おもちゃ:"\/566382\/",
      テレビゲーム:"\/101205\/",
      本と雑誌とコミック:"\/200162\/",
      車とバイク:"\/101114\/",
      車用品とバイク用品:"\/503190\/",
      サービスとリフォーム:"\/101438\/",
      住宅と不動産:"\/111427\/",
      カタログギフトとチケット:"\/101381"},
      ["?", "&", ""],
      { SuperDEAL:"f=13",
        送料無料と送料無料ライン:"filter=fs-fsl"}],
  メルカリ : [
    true,
    "https://jp.mercari.com/search?keyword={param}&status=on_sale",
    [null, " ", null],
    [null, null, null],
    [" -", " -", null],
    { すべて:"",
      レディース:"&category_id=1",
      メンズ:"&category_id=2",
      キッズ:"&category_id=2",
      インテリアと住まい:"&category_id=4",
      本と音楽とゲーム:"&category_id=5",
      おもちゃとホビーとグッズ:"&category_id=1328",
      コスメと香水と美容:"&category_id=6",
      家電とスマホとカメラ:"&category_id=7",
      スポーツとレジャー:"&category_id=8",
      ハンドメイド:"&category_id=9",
      チケット:"&category_id=1027",
      自転車とオートバイ:"&category_id=1318",
      その他:"&category_id=10"},
    null,
    null],
  楽天ラクマ : [
    true,
    "https://fril.jp/s?query={param}&transaction=selling",
    [null, "+", null],
    [null, null, null],
    ["&excluded_query=", "+", null],
    { すべて:"",
      レディース:"&category_id=10001",
      メンズ:"&category_id=10005",
      コスメと美容:"&category_id=10004",
      キッズとベビーとマタニティ:"&category_id=10003",
      エンタメとホビー:"&category_id=10007",
      楽器:"&category_id=10013",
      チケット:"&category_id=10008",
      インテリアと住まいと日用品:"&category_id=10009",
      スマホと家電とカメラ:"&category_id=10006",
      ハンドメイド:"&category_id=10010",
      食品と飲料と酒:"&category_id=10012",
      スポーツとアウトドア:"&category_id=10014",
      自動車とバイク:"&category_id=10011",
      その他:"&category_id=10002"},
    null,
    null],
  ヤフオク : [
    true,
    "https://auctions.yahoo.co.jp/search/search?{param}&ngrm=2&l0=0&abatch=0&istatus=0&slider=0&ei=UTF-8&f_adv=1&fr=auc_adv&f=0x4",
    ["va=", "+", null],
    ["&vo=", "+", null],
    ["&ve=", "+", null],
    { すべてのカテゴリ:"&auccat=0",
      コンピュータ:"&auccat=23336",
      家電とAVとカメラ:"&auccat=23632",
      音楽:"&auccat=22152",
      本と雑誌:"&auccat=21600",
      映画とビデオ:"&auccat=21964",
      おもちゃとゲーム:"&auccat=25464",
      ホビーとカルチャー:"&auccat=24242",
      アンティークとコレクション:"&auccat=20000",
      スポーツとレジャー:"&auccat=24698",
      自動車とオートバイ:"&auccat=26318",
      ファッション:"&auccat=23000",
      アクセサリーと時計:"&auccat=23140",
      ビューティーとヘルスケア:"&auccat=42177",
      食品と飲料:"&auccat=23976",
      住まいとインテリア:"&auccat=24198",
      ペットと生き物:"&auccat=2084055844",
      事務と店舗用品:"&auccat=22896",
      花と園芸:"&auccat=26086",
      チケットと金券と宿泊予約:"&auccat=2084043920",
      ベビー用品:"&auccat=24202",
      タレントグッズ:"&auccat=2084032594",
      コミックとアニメグッズ:"&auccat=20060",
      不動産:"&auccat=2084060731",
      チャリティー:"&auccat=2084217893",
      その他:"&auccat=26084"},
      ["&", "&", ""],
      { 未使用:"istatus=1",
        送料無料:"pstagefree=1",
        新着:"new=1",
        匿名配送:"privacy_delivery=1"}],
  価格ドットコム : [
    true,
    "https://kakaku.com/search_results/{param}",
    [null, " ", "/"],
    [null, null, null],
    [null, null, null],
    { すべてのカテゴリ:"",
      パソコン:"?category=0001",
      家電:"?category=0002",
      カメラ:"?category=0003",
      自動車とバイク:"?category=0008",
      スマートフォンと携帯電話:"?category=0005",
      モバイルデータ通信:"?category=0031",
      スポーツ:"?category=0009",
      アウトドア:"?category=0050",
      腕時計とアクセサリー:"?category=0027",
      ファッション:"?category=0015",
      靴とシューズ:"?category=0035",
      住宅設備とリフォーム:"?category=0049",
      DIYと工具:"?category=0029",
      インテリアと家具:"?category=0017",
      キッチン用品:"?category=0030",
      生活雑貨:"?category=0025",
      コンタクトレンズ:"?category=0043",
      ビューティーとヘルス:"?category=0018",
      ベビーとキッズ:"?category=0013",
      ゲーム:"?category=0006",
      ホビー:"?category=0024",
      ドリンク:"?category=0016",
      食品:"?category=0028",
      ペット:"?category=0014",
      本とCDとDVD:"?category=0010"},
    null,
    null],
  Google : [
    true,
    "https://www.google.co.jp/search?q={param}",
    [null, "+", null],
    ["+OR+", "+OR+", null],
    ["+-", "+-", null],
    { すべて:"",
      ニュース:"&tbm=nws",
      ショッピング:"&tbm=shop",
      画像:"&tbm=isch",
      動画:"&tbm=vid",
      書籍:"&tbm=bks"},
    null,
    null],
  Bing : [
    true,
    "https://www.bing.com/search?q={param}",
    [null, "+", null],
    ["+OR+", "+OR+", null],
    ["+-", "+-", null],
    null,
    null,
    null],
  Yahoo : [
    true,
    "https://search.yahoo.co.jp/search?p={param}",
    [null, "+", null],
    ["+OR+", "+OR+", null],
    ["+-", "+-", null],
    null,
    null,
    null],
  Twitter : [
    true,
    "https://twitter.com/search?q={param}&src=typed_query",
    [null, " ", null],
    ["(", " ", ")"],
    [" -", " -", null],
    { 話題のツイート:"",
      最新:"&f=live",
      アカウント:"&f=user",
      画像:"&f=image",
      動画:"&f=video"},
      null,
      null],
  Instagram : [
    false,
    "",
    [null, null, null],
    [null, null, null],
    [null, null, null],
    null,
    null,
    null],
  YouTube : [
    true,
    "https://www.youtube.com/results?search_query={param}",
    [null, "+", null],
    ["+OR+", "+OR+", null],
    ["+-", "+-", null],
    null,
    null,
    null],
  ニコニコ動画 : [
    true,
    "https://www.nicovideo.jp/search/{param}?ref=nicotop_search",
    [null, " ", null],
    [null, null, null],
    [null, null, null],
    null,
    null,
    null],
  Github : [
    true,
    "https://github.com/search?q={param}",
    [null, "+", null],
    [null, null, null],
    [null, null, null],
    { Repositories:"&type=repositories",
      Code:"&type=code",
      Commits:"&type=commits",
      Issues:"&type=issues",
      Discussions:"&type=discussions",
      Packages:"&type=registrypackages",
      Marketplace:"&type=marketplace",
      Topics:"&type=topics",
      Wikis:"&type=wikis",
      Users:"&type=users"},
    null,
    null],
  Qiita : [
    true,
    "https://qiita.com/search?q={param}",
    [null, "+", null],
    ["+OR+", "+OR+", null],
    ["+-", "+-", null],
    { 関連順:"&sort=rel",
      新着順:"&sort=created",
      ストック数順:"&sort=stock",
      LGTM数順:"&sort=like"},
      null,
      null],
  Zenn : [
    true,
    "https://zenn.dev/search?q={param}",
    [null, " ", null],
    [null, null, null],
    [null, null, null],
    { Articles_Trending:"&order=daily&source=articles",
      Articles_Alltime:"&order=alltime&source=articles",
      Articles_Leatest:"&order=latest&source=articles",
      Books_Trending:"&order=daily&source=books",
      Books_Alltime:"&order=alltime&source=books",
      Books_Leatest:"&order=latest&source=books",
      Scraps_Trending:"&order=daily&source=scraps",
      Scraps_Alltime:"&order=alltime&source=scraps",
      Scraps_Leatest:"&order=latest&source=scraps"},
    null,
    null],
  slideshare : [
    true,
    "https://www.slideshare.net/search/slideshow?searchfrom=header&q={param}&ud=any&ft=all&lang=ja",
    [null, "+", null],
    [null, null, null],
    [null, null, null],
    null,
    null,
    null],
  Wikipedia :[
    true,
    "https://ja.wikipedia.org/w/index.php?search={param}&title=特別:検索&ns0=1",
    [null, "+", null],
    ["+OR+", "+OR+", null],
    ["+-", "+-", null],
    null,
    null,
    null]
};

/* ★イベントハンドラ★ */
// ★ロード完了時に一度だけ実行
window.onload = function(){
  // パラメータから一覧を生成する
  for(let hashKey in paramSearch){
    if(paramSearch[hashKey][paramIdx.enabled] && cnstReUrlChk.test(paramSearch[hashKey][paramIdx.url])){
      let tbl = getHtmlElement("tblSearchList");
      // URL設定先オブジェクトの生成
      let addRow  = document.createElement("tr");
      let addCol1 = document.createElement("td"); addCol1.style.border = "none";
      let addCol2 = document.createElement("td"); addCol2.style.border = "none"; addCol2.style.textAlign = "center";
      let addCol3 = document.createElement("td"); addCol3.style.border = "none";
      let addCol4 = document.createElement("td"); addCol4.style.border = "none";
      let addCol5 = document.createElement("td"); addCol5.style.border = "none";
      let addCol6 = document.createElement("td"); addCol6.style.border = "none";
      // リンクURLコピー用<input>タグ生成
      let btnSearchCopy = createATag("btnSearch" + hashKey, "styleURLCopyOff", "URL");
      btnSearchCopy.setAttribute("onclick"    , "copyToClipboard('" + hashKey + "')");
      btnSearchCopy.setAttribute("onmouseover", "copyBtnHoverChange('" + hashKey + "');");
      btnSearchCopy.setAttribute("onmouseout" , "copyBtnHoverChange('" + hashKey + "',false);");
      btnSearchCopy.disabled = true;
      addCol1.appendChild(btnSearchCopy);
      // リンク用の<a>タグ生成
      let aSearch = createATag("aSearch" + hashKey, "styleSearchOff", hashKey + "で検索！", "_blank", "noopener noreferrer");
      aSearch.style.whiteSpace = "nowrap";
      addCol2.appendChild(aSearch);
      // 検索可能内容
      let aAndTag    = createATag("", (paramSearch[hashKey][paramIdx.and][condIdx.join] != null) ? "styleCol3OK" : "styleCol3NG", "AND");
      addCol3.appendChild(aAndTag);
      let br1 = document.createElement("br");
      addCol3.appendChild(br1);
      let aOrTag     = createATag("", (paramSearch[hashKey][paramIdx.or][condIdx.join] != null) ? "styleCol3OK" : "styleCol3NG", "OR");
      addCol3.appendChild(aOrTag);
      let br2 = document.createElement("br");
      addCol3.appendChild(br2);
      let aExceptTag = createATag("", (paramSearch[hashKey][paramIdx.except][condIdx.join] != null) ? "styleCol3OK" : "styleCol3NG", "除外");
      addCol3.appendChild(aExceptTag);
      // 排他検索オプション
      if(paramSearch[hashKey][paramIdx.excludeParam] != null){
        let selSearch = document.createElement("select");
        selSearch.id = "selSearch" + hashKey;
        selSearch.name = "styleSelSearch";
        selSearch.setAttribute("onChange" , "searchExec()");
        for (let selHashKey in paramSearch[hashKey][paramIdx.excludeParam]){
          let optRow = document.createElement("option");
          optRow.value = paramSearch[hashKey][paramIdx.excludeParam][selHashKey];
          optRow.innerText = selHashKey;
          selSearch.appendChild(optRow);
        }
        addCol4.appendChild(selSearch);
      }
      // 追加検索オプション
      if(paramSearch[hashKey][paramIdx.addParam] != null){
        for(let chkHashKey in paramSearch[hashKey][paramIdx.addParam]){
          let chkSearch = document.createElement("input");
          chkSearch.type = "checkbox";
          chkSearch.id = "chkSearch" + hashKey + chkHashKey;
          chkSearch.name = "chkSearch" + hashKey;
          chkSearch.value = paramSearch[hashKey][paramIdx.addParam][chkHashKey];
          chkSearch.setAttribute("onChange" , "searchExec()");
          addCol5.appendChild(chkSearch);
          let lblChkName = document.createElement("label");
          lblChkName.innerText = chkHashKey;
          addCol5.appendChild(lblChkName);
          let br = document.createElement("br");
          addCol5.appendChild(br);
        }
      }
      // URL表記用の<a>タグ生成
      let aSearchURL = createATag("aSearch" + hashKey + "URL", "styleURL");
      addCol6.appendChild(aSearchURL);
      // タグをテーブルに格納
      addRow.appendChild(addCol1);
      addRow.appendChild(addCol2);
      addRow.appendChild(addCol3);
      addRow.appendChild(addCol4);
      addRow.appendChild(addCol5);
      addRow.appendChild(addCol6);
      tbl.appendChild(addRow);
    }
  }
};

/* ★ベースファンクション★ */
// 文字列のブランクチェック
function isStrBlank(s = "", isTrim = true){
  return ((s ?? "") != "" ? (isTrim ? ((s.trim() != "") ? false : true) : (s != "") ? false : true): true);
}
// ★ID名からHTMLElementを取得する
function getHtmlElement(pId = ""){
  return (pId ?? "" != "") ? objResult = document.getElementById(pId) : null;
}

/* ★ファンクション★ */
// ★HTMLElement aタグを作成する
function createATag(pId="", pname = "", pText = "", pTarget = "", pRel = ""){
  let htmlElementA = document.createElement("a");
  if (!isStrBlank(pId))    {htmlElementA.id        = pId;}
  if (!isStrBlank(pname))  {htmlElementA.name      = pname;}
  if (!isStrBlank(pText))  {htmlElementA.innerText = pText;}
  if (!isStrBlank(pTarget)){htmlElementA.target    = pTarget;}
  if (!isStrBlank(pRel))   {htmlElementA.rel       = pRel;}
  return htmlElementA;
}
// ★オブジェクトの有効無効設定の変更
function ctrlObjDisabled(pTargetObj, pDisabledFlg = false){
  pTargetObj.disabled = pDisabledFlg;
  return pDisabledFlg;
}
// ★URLコピーボタンのテキストの書き換え（オンマウス・マウスオフ）
function copyBtnHoverChange(pHashKey = "",pMouseHoverFlg = true){
  if(getHtmlElement("btnSearch" + pHashKey).name == "styleURLCopyOff"){
  }else if(getHtmlElement("btnSearch" + pHashKey).innerText != "Copied"){
    getHtmlElement("btnSearch" + pHashKey).innerText = (pMouseHoverFlg ? "Copy?" : "URL");
}
}
// ★URLをクリップボードにコピー
function copyToClipboard(pStrkey){
if(navigator.clipboard){
  let btnSearchCopy = getHtmlElement("btnSearch" + pStrkey);
  let strCopyText = getHtmlElement("aSearch" + pStrkey + "URL").innerText;
  if(btnSearchCopy.name == "styleURLCopy"){
  navigator.clipboard.writeText(strCopyText).then(function() {
    btnSearchCopy.innerText = "Copied";
    setTimeout(function(){ btnSearchCopy.innerText = "URL";}, 1500);
  });
  }
} else {
  alert('お使いのウェブブラウザでは、コピー機能が対応していません。');
}
}
// URLの検索条件の作成
function createUrlParameter(pHashKey = "", pSearchText = "", pParamIdx = -1, pIsParamUrl = false){
  let strHashKey    = pHashKey;
  let strSearchText = pSearchText;
  let intParamIdx   = pParamIdx;
  let strCreateURL  = "";
  if (!isStrBlank(strHashKey) && !isStrBlank(strSearchText) && intParamIdx >= paramIdx.and && intParamIdx <= paramIdx.except) {
    strCreateURL = (pIsParamUrl ? (paramSearch[strHashKey][intParamIdx][condIdx.prefix] ?? "") : "");
    if (!isStrBlank(paramSearch[strHashKey][intParamIdx][condIdx.join], false)){
      strCreateURL += strSearchText.trim().replace(cnstrReSearchJoinChar, paramSearch[strHashKey][intParamIdx][condIdx.join]);
    }
    strCreateURL += (pIsParamUrl ? (paramSearch[strHashKey][intParamIdx][condIdx.saffix] ?? "") : "");
  }
  return strCreateURL;
}
// ★検索用URL生成
function searchExec(){
  // 検索ワードの取得
  let strSearchAnd    = (getHtmlElement("txtSearchAnd").value ?? "");
  let txtSearchOr     = getHtmlElement("txtSearchOr");
  let strSearchOr     = (txtSearchOr.value ?? "");
  let txtSearchExcept = getHtmlElement("txtSearchExcept");
  let strSearchExcept = (txtSearchExcept.value ?? "");
  let flgSearchInput  = !isStrBlank(strSearchAnd);
  // パラメータからタグ、URLの生成
  for(let hashKey in paramSearch){
    // 有効チェック、パラメータチェック「https://」
    if(paramSearch[hashKey][paramIdx.enabled] && cnstReUrlChk.test(paramSearch[hashKey][paramIdx.url])){
    let aSearch       = getHtmlElement("aSearch" + hashKey);
    let btnSearchCopy = getHtmlElement("btnSearch" + hashKey);
    let aSearchURL    = getHtmlElement("aSearch" + hashKey + "URL");
    // 検索条件の入力チェック
    if(!flgSearchInput){
      btnSearchCopy.name = "styleURLCopyOff";
      aSearch.removeAttribute("href")
      aSearch.name   = "styleSearchOff";
      aSearchURL.innerText = "";
      ctrlObjDisabled(txtSearchOr, true);
      ctrlObjDisabled(txtSearchExcept, true);
    }else{
      let strURL = "";
      if(flgSearchInput){
        // AND条件
        strURL = createUrlParameter(hashKey, strSearchAnd, paramIdx.and, flgSearchInput);
        // OR条件
        if(!isStrBlank(strSearchOr)){ strURL += createUrlParameter(hashKey, strSearchOr, paramIdx.or, !isStrBlank(strURL)); }
        // 除外条件
        if(!isStrBlank(strSearchExcept)){ strURL += createUrlParameter(hashKey, strSearchExcept, paramIdx.except, !isStrBlank(strURL)); }
        // 排他条件
        if(getHtmlElement("selSearch" + hashKey) != undefined){ strURL += getHtmlElement("selSearch" + hashKey).value; }
        // 追加条件
        if(paramSearch[hashKey][paramIdx.addParam] != null){
          let strAddChkParam = "";
          for(let chkHashKey in paramSearch[hashKey][paramIdx.addParam]){
            if(getHtmlElement("chkSearch" + hashKey + chkHashKey).checked){
              strAddChkParam += paramSearch[hashKey][paramIdx.addParamJoin][isStrBlank(strAddChkParam) ? condIdx.prefix : condIdx.join]
                              + getHtmlElement("chkSearch" + hashKey + chkHashKey).value;
            }
          }
        strURL += strAddChkParam + paramSearch[hashKey][paramIdx.addParamJoin][condIdx.saffix];
        }
      }
      // 生成したURLを設定
      strURL = paramSearch[hashKey][paramIdx.url].replace("{param}", strURL);
      aSearch.href         = strURL;
      aSearchURL.innerText = strURL;
      aSearch.name         = "styleSearch";
      btnSearchCopy.name   = "styleURLCopy";
      ctrlObjDisabled(txtSearchOr);
      ctrlObjDisabled(txtSearchExcept);
      }
    }
  }
  return;
}