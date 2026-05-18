---
sitemap: false
layout: page
title: "福岡青年会議所主催 福岡市民がつくる大アート展(2026) コンペ作品 - ポートフォリオ"
description: "福岡青年会議所主催 福岡市民がつくる大アート展(2026) コンペ作品 - ポートフォリオ"
tags: [Affinity3, figma, VSCode]
date: 2026-04-21
update: 2026-05-18
is-post-list: false
---
- [デザイン(職業訓練校) - ポートフォリオ に戻る](../vacational-school-2025-design.html)

## 詳細
- 制作ページ
  - <a href="./site/" target="_blank">制作したランディングページへ</a>
- 制作期間
  - 2026年 4月16日〜 5月15日（15日間）
    - 4月16日 初回ヒアリング
    - 4月17〜24日 デザインカンプ制作
    - 4月27日 中間プレゼンテーション
    - 4月30日〜5月14日 デザインカンプ修正・LP制作
    - 5月15日 最終プレゼンテーション
- 制作時間
  - 合計作業時間：145時間
    - プレゼン：2時間
    - プレゼン資料作成：10時間
    - 認識すり合わせ： 3時間
    - 画像出力・調整： 3時間
    - コーディング：127時間
      - 授業中作業：55時間
      - 授業外作業：72時間
- 制作ページ数
  - 4ページ
- チーム
  - 訓練校 Aチーム 5名
- 役割・担当
  - コーディングリーダー

### 制作において気をつけた部分
- 中間プレゼン後、デザインの修正にかける時間を最大限確保するため、自身が１人でコーディングする担当に変更。（当初はゴールデンウィーク明けくらいからメンバー全員でコーディングの予定だった）
- HTML構造、スタイルの共通化に時間をかけ、後々の作業の修正や変更にすぐ対応できるようにした。
- 納品先環境や担当者が不明だったため、不足している箇所をすぐに対応できるよう、README（このページのコーディング規約）に記載、いかなる環境に対応できるよう、フォントをwoff, woff2として用意。
- 多くのユーザー環境で正常に閲覧できるように、iOS15.5以降、iPhone SE 1（横解像度320px）の環境下でもレイアウト崩れなど起こさないように対応。
- スクリーンリーダーの利用者でも閲覧が可能なように、フォーカス、読み上げテキストの整備を行なった。（時間がなかったため、十分な動作確認はできていないのが心残り）
- OGP対応も実施。
- サイトの表示速度なども考え、画像の読み込み優先順や、SVG画像の利用、CSSでの描画を駆使し制作を行なった。

## 感想
- 結果は非採用となったが、実際のアクセシビリティを考えながらのコーディングは、ただ見栄えよく作るだけとは大きく異なり、適切なセクションやタグ、補助テキストを考えるのは非常に良い学習となった。
- もし今後LPを作る機会があれば、LPのデザインの打ち合わせの時点で見栄え以外の部分、アクセシビリティの部分を含めて提案など実施したい。


## コーディング規約
### 対応デバイス
- iOS 15.5 以上を対象とする。（iPhone SE1, 6s以降）
  - **記載禁止**（レイアウトが大幅に崩れるため）
    - HTML
    - CSS
      - &（入れ子構造）
      - コンテナクエリ
      ー Media Queries: Range Syntax（メディアクエリの@media (100px <= width <= 1900px)というような書き方）
  - **記載可能** 大きく崩れないが意図しない見た目になる
    - CSS
      - scrollbar-gutter / scrollbar-width
  - **記載OK** （パフォーマンスに影響が出るのみ）
    - CSS
      - iframeのloading=”lazy”
      - image-set()

[deep-space.blue - （随時更新）iOS○○から使えるCSSなどまとめ【iOS14以降で】](https://deep-space.blue/web/2893#index_id5)


### サイズ計算
- 基準幅を375pxとし、最小320px、最大540pxとする。
- フォントサイズの倍率は、最小 0.91倍、最大 1.2倍とする
  - 計算式＝(基準幅 / 最小または最大幅)^(1/2)
- フォントを除く要素の倍率は、最小 0.85倍、最大 1.44倍とする
  - 計算式＝ 基準幅 / 最小または最大幅

### HTML
- HTML上では文書と構造に関するものを記述する。style属性は使用しない。
- 基本的なclassの記述は、配置 →　外形 → 独自クラス →　テキスト配置 →　フォントファミリーとサイズ →　フォントの色 → 表示制御用クラス の順とする 
また独自クラス以外は、全て common.css に記載する。
  - **配置**
    - container（幅を制限した箱で中央揃え）
    - flex（フレックスボックス）
    - grid（グリッドレイアウト）
  - **外形**
    - box-〇〇（角丸の四角形や特殊形状の要素）
  - **独自スタイル**（個別のスタイルを指定する）
    - 〇〇-style
  - **テキスト配置**（インライン要素の配置）
    - text-left
    - text-center
    - text-right
  - **フォントファミリーとサイズ**（サイズは、クラス名の後に、-l ~ -l7, -s ~ -s3をつける）
    - font-title-black
    - font-title-exbold
    - font-text
  - **フォントの色・縁取り・影**
    - font-color
    - font-color-white
    - font-color-blue
    - font-color-yellow
    - font-color-red
    - font-color-green
- HTML上では基本的に、配置、外形とテキスト関連を記述する。 
そのため、背景色や装飾といったものは、すべて 〇〇-style に記載する。
- 装飾に使う、文字や形状は例外的に、〇〇-style内の ::before, ::after 内で全て記述する。
- 見出しタグ（h1~h5）、スモールタグ（small）は、フォントファミリーとフォントサイズを例外的に最初から指定する。 
ただし、デザイン上フォントサイズや装飾がある場合は、別途指定する。
- 独自クラスは、〇〇-styleの命名とし、共通のクラスから不足している内容を記載する。
- id を指定する場合は、ページ内リンク、またはJavaScriptで制御が必要な場合のみとする。

### CSS
- common.css に共通となるスタイルを全て記述する。
- idに対してのスタイルは設定しない。
- common.css のクラス名の命名ルールは、〇〇-styleとせず、分かりやすい名称をつける。

### JavaScript
- docstring を書くこと。


## 各構造
### ディレクトリ構造
太字は、フォルダを表す。  

- README.md（このファイル）
- **site**
  - **assets**
    - **fonts**（フォントデータ。本番環境下で、外部サーバーにあるデータを利用できない場合を考慮したときに使用する。）
      - **fullset**（woff, woff2形式のフォントデータ。Googleフォントから提供されているフォントをそのまま変換したもの。基本的に使用しない）
      - **license**（フォントのライセンスファイル）
      - **subset**（常用漢字の内容まで絞った、woff, woff2形式のフォントデータ）
    - **img**（画像データ保管用フォルダ）
      - **background**（背景画像）
      - **character**（キャラクター画像）
      - **collaborator**（アーティストの画像）
      - **decoration**（Webページに使用している装飾用の画像）
      - **icon**（Webページに使用しているアイコン画像）
      - **logo**（本事業のロゴ、SNSのロゴなど）
    - **css**
      - common.css（共通で利用するスタイル）
    - **script**
      - common.js（共通で利用するスクリプト）
    - index.html（トップページ）
    - workshop-main.html（当日ワークショップページ）
    - workshop-in-advance.html（事前ワークショップページ）
    - public-recruitment.html（Tシャツ公募ページ）

### 基本的なHTML構造
- body
  - dialog（ハンバーガーメニュー内画面：共通部品）
  - header（ヘッダー：共通部品）
  - div（フレックス構造）
    - div（中央：モバイルレイアウト）
      - section（ファーストビュー）
      - main（主要な内容）
      - aside（補足的な内容）
    - div（左：デスクトップ右レイアウト）
    - div（右：デスクトップ右レイアウト）
  - footer（フッター：共通部品）


## フォント
### 利用フォント
- [Google Fonts - M PLUS Rounded 1c](https://fonts.google.com/specimen/M+PLUS+Rounded+1c)
- [Google Fonts - Noto Sans JP](https://fonts.google.com/noto/specimen/Noto+Sans+JP)

### サブセット化
- [武蔵システム - サブセットフォントメーカー](https://opentype.jp/subsetfontmk.htm)
  - 利用する文字は、平仮名・片仮名・常用漢字・数字・記号を対象 
    - [参考ページ：JAJAAAN! -【Webフォント高速化】使わない文字を除く！サブセット化の方法](https://jajaaan.co.jp/growth-hack/speed-up/web-font-remove/#sabusettofontomekawo_shiu)
- [武蔵システム - WOFFメーカー](https://opentype.jp/woffconv.htm)

### サブセット化したフォントについて
- サブセット化したフォント名は、元のフォント名にサフィックスとして MinJp をつけています。
- Googleフォントの利用が可能な場合は、フォールバック用のフォントとして機能するようCSS上で指定しています。
- Googleフォントが利用できない場合でも、当フォントを使うようにしているため、フォントが存在しないことによる意図しないデザインの崩れ等の発生を極力防いでます。

| ファイル名 | フォント名 |
| - | - |
| MPLUSRounded1c-Black-Min-JP | MPLUSRounded1cBlackMinJP |
| MPLUSRounded1c-ExtraBold-Min-JP | MPLUSRounded1cExtraBoldMinJP |
| NotoSansJP-Bold-Min-JP | NotoSansBoldJPMinJP |
| NotoSansJP-Regular-Min-JP | NotoSansJPMinJP |

### フルセットのフォントについて
- 元のフォントデータをそのまま woff, woff2形式に変換したものになります。
- データ量が多いため、基本的に使用しないと思いますが、文言を変更した場合、サブセット化したフォントでは不足している場合に最終手段として利用してください。

## SNS
### ロゴ
- [Instagram](https://www.meta.com/ja-jp/brand/resources/instagram/instagram-brand/)
- [Tiktok](https://tiktokbrandhub.com/downloads)


## アクセシビリティ
### 参考サイト
- [Zenn - アクセシブルなハンバーガーメニュー](https://zenn.dev/m0r1m1ch1/articles/58f8c4f062fafc)

### ページ内読み上げテキスト一覧

| 機能 | alt / aria-expanded / tooltip のテキスト |
| - | - |
| index.html に移動 | 2026年福岡市民が作る大アート展のトップページに戻る |
| index.html スケジュール に移動 | 2026年福岡市民が作る大アート展の開催スケジュールを確認する |
| index.html アクセス に移動 | 2026年福岡市民が作る大アート展の開催場所について確認する |
| workshop-main.html に移動 | 2026年福岡市民が作る大アート展の2026年8月30日のワークショップ、大アート展について詳しく知る |
| workshop-in-advance.html に移動 | 2026年福岡市民が作る大アート展の2026年7月から8月に開催されるワークショップについて詳しく知る |
| public-recruitment.html に移動 | 2026年福岡市民が作る大アート展のTシャツデザインにチャレンジについて詳しく知る |
| ワークショップ申込みを開く | 2026年福岡市民が作る大アート展のワークショップのお申込みに進む |
| Tシャツ公募ページを開く | 2026年福岡市民が作る大アート展のTシャツデザインのお申し込みに進む |
| 当事業のインスタグラムアカウントを開く | 2026年福岡市民が作る大アート展のInstagramアカウントを開く |
| 主催者のインスタグラムアカウントを開く | 主催している福岡市青年会議所のInstagramアカウントを開く |
| 主催者のティックトックアカウントを開く | 主催している福岡市青年会議所のTikTokアカウントを開く |
| 主催者のホームページを開く | 主催している福岡市青年会議所のホームページを開く |
| プライバシーポリシーを開く | プライバシーポリシーについて確認する（主催している福岡市青年会議所のプライバシーポリシーのページを開く） |
| 福岡市美術館の交通案内を開く | 会場の福岡市美術館の交通案内ページを開く |

## 特設サイト情報
- ドメインや環境について不明なため、どんな環境下でも動作するよう考慮する。  
- URLがわからないものについては、次のURLを指定している。
  - #URL置換用ドメイン → 本事業の公開URL。
    - https://***.ドメイン/事業用ディレクトリ
      - ※最後のスラッシュは含めない。既に書いてます。
  - #URL置換用インスタグラム →　本事業用インスタグラムアカウントのURL
  - #URL置換用事前ワークショップ → ワークショップ受付フォームのURL
  - #URL置換用Tシャツ公募 → Tシャツ公募受付フォームのURL

決まり次第、全てのページに対して一括置換すること。


### 　URL一覧
- ~~[ドメイン](#URL置換用ドメイン/)~~
- 特設サイト
  - [トップページ](./site/index.html)
  - [みんなでつくる大アート展（当日ワークショップ）](/site/workshop-main.html)
  - [ワークショップにチャレンジ（事前ワークショップ）](./site/workshop-in-advance.html)
  - [Tシャツデザインにチャレンジ（Tシャツ公募）](./site/public-recruitment.html)
- 応募フォーム
  - ~~[事前ワークショップ受付ページ ※5/10時点では不明](#URL置換用事前ワークショップ)~~
  - ~~[Tシャツ公募受付ページ ※5/10時点では不明](#URL置換用Tシャツ公募)~~
- 事業用SNS
  - ~~[Instagram ※5/10時点では不明](#URL置換用インスタグラム)~~
- 主催者
  - [福岡青年会議所](https://www.fukuoka-jc.or.jp/)
  - [福岡青年会議所 - プライバシーポリシー](https://www.fukuoka-jc.or.jp/pp)
  - [福岡青年会議所 - フェイスブック](https://www.facebook.com/jci.fukuoka/)
  - [福岡青年会議所 - インスタグラム](https://www.instagram.com/fukuokajc/)
  - [福岡青年会議所 - ティックトック](https://www.tiktok.com/@fukuokajc)
  - [福岡青年会議所 - YouTube](https://www.youtube.com/channel/UCGsBcrSScCYV5_IvHejBXoA/)
- 会場
  - [福岡市美術館 - トップ](https://www.fukuoka-art-museum.jp/)
  - [福岡市美術館 - 交通案内](https://www.fukuoka-art-museum.jp/guide/access/)
  - [福岡市美術館 - GoogleMaps](https://maps.app.goo.gl/UhTmdb4mkmkTnJt88)
  - [福岡市立城西中学校](https://sites.google.com/fuku-c.ed.jp/jhjyosei/%E5%AD%A6%E6%A0%A1%E6%A6%82%E8%A6%81/%E6%89%80%E5%9C%A8%E5%9C%B0)
  - [福岡市立城西中学校 - GoogleMaps](https://maps.app.goo.gl/X8M8cR6w1UiL71rC9)
- 協力アーティスト インスタグラムアカウント
  - [QP さん - qp0123whyte](https://www.instagram.com/qp0123whyte/)
  - [カラリズムリサ さん - colorhythmrisa](https://www.instagram.com/colorhythmrisa/)
  - [吉永有里 さん - yuriyoshinagaart](https://www.instagram.com/yuriyoshinagaart/)
  - [宮田ちひろ さん - chihiro_miyata](https://www.instagram.com/chihiro_miyata/)
  - [NONCHELEEE さん - fuguriddim](https://www.instagram.com/fuguriddim/)
  - [隈部裕太郎 さん - yutarokumabe](https://www.instagram.com/yutarokumabe/)


## その他
### 計算ツール
- [Clamp関数生成ツール](https://free.page-craft.jp/clamp)
- [CSS Generators - Wavy Pattern](https://css-generators.com/wavy-shapes/)
### 参考
- [Qiita - 背景色がある角丸tableをつくる](https://qiita.com/c9qt/items/9d588c29d6c042f2a170) ※調べたけど面倒すぎて使ってない
