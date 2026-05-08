# コーディング規約
## 対応デバイス
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
  - **記載OK** （パフォーマンスに影響あり）
    - CSS
      - iframeのloading=”lazy”
      - image-set()

[参考](https://deep-space.blue/web/2893#index_id5)


## サイズ計算
- 基準幅を375pxとし、最小320px、最大540pxとする。
- フォントサイズの倍率は、最小 0.91倍、最大 1.2倍とする
  - 計算式＝(基準幅 / 最小または最大幅)^(1/2)
- フォントを除く要素の倍率は、最小 0.85倍、最大 1.44倍とする
  - 計算式＝ 基準幅 / 最小または最大幅

## HTML
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

## CSS
- common.css に共通となるスタイルを全て記述する。
- idに対してのスタイルは設定しない。
- common.css のクラス名の命名ルールは、〇〇-styleとせず、分かりやすい名称をつける。

## JavaScript
- docstring を書くこと。


# 各構造
## ディレクトリ構造
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
    - index.html（トップページ）
    - workshop-main.html（当日ワークショップページ）
    - workshop-in-advance.html（事前ワークショップページ）
    - public-recruitment.html（Tシャツ公募ページ）

## 基本的なHTML構造
- body
  - dialog（ハンバーガーメニュー内画面：共通部品）
  - div（モバイルレイアウト）
    - header（ヘッダー：共通部品）
    - section（ファーストビュー）
    - main（主要な内容）
    - aside（補足的な内容）
    - footer（フッター：共通部品）
  - div（デスクトップレイアウト 広い画面でみたときに左右に表示されるもの：共通部品）


# フォント
## 利用フォント
- [Google Fonts - M PLUS Rounded 1c](https://fonts.google.com/specimen/M+PLUS+Rounded+1c)
- [Google Fonts - Noto Sans JP](https://fonts.google.com/noto/specimen/Noto+Sans+JP)

## サブセット化
- [武蔵システム - サブセットフォントメーカー](https://opentype.jp/subsetfontmk.htm)
  - 利用する文字は、平仮名・片仮名・常用漢字・数字・記号を対象 
    - [参考ページ：JAJAAAN! -【Webフォント高速化】使わない文字を除く！サブセット化の方法](https://jajaaan.co.jp/growth-hack/speed-up/web-font-remove/#sabusettofontomekawo_shiu)
- [武蔵システム - WOFFメーカー](https://opentype.jp/woffconv.htm)


# SNS
## ロゴ
- [Instagram](https://www.meta.com/ja-jp/brand/resources/instagram/instagram-brand/)
- [Tiktok](https://tiktokbrandhub.com/downloads)


# アクセシビリティ
## 参考サイト
- [Zenn - アクセシブルなハンバーガーメニュー](https://zenn.dev/m0r1m1ch1/articles/58f8c4f062fafc)

## ページ内読み上げテキスト一覧

| 機能 | alt / aria-expanded / tooltip のテキスト |
| - | - |
| index.html に移動 | 2026年福岡市民が作る大アート展のトップページに戻る |
| workshop-main.html に移動 | 2026年福岡市民が作る大アート展の2026年8月30日の当日ワークショップについて詳しく知る |
| workshop-in-advance.html に移動 | 22026年福岡市民が作る大アート展の2026年7月から8月の事前ワークショップについて詳しく知る |
| public-recruitment.html に移動 | 2026年福岡市民が作る大アート展のTシャツ公募について詳しく知る |
| ワークショップ申込みを開く | 2026年福岡市民が作る大アート展のワークショップのお申込みの Google Form のページを開く |
| Tシャツ公募ページを開く | 2026年福岡市民が作る大アート展のTシャツ公募のお申し込みの Google Form のページを開く |
| 当事業のインスタグラムアカウントを開く | 2026年福岡市民が作る大アート展のInstagramアカウントを開く |
| 主催者のインスタグラムアカウントを開く | 主催している福岡市青年会議所のInstagramアカウントを開く |
| 主催者のティックトックアカウントを開く | 主催している福岡市青年会議所のTikTokアカウントを開く |


# 特設サイト情報
## ページ
ドメインや環境について不明なため、どんな環境下でも動作するよう考慮する。

- 特設サイト
  - [トップページ](./site/index.html)
  - [みんなでつくる大アート展（当日ワークショップ）](/site/workshop-main.html)
  - [ワークショップにチャレンジ（事前ワークショップ）](./site/workshop-in-advance.html)
  - [Tシャツデザインにチャレンジ（Tシャツ公募）](./site/public-recruitment.html)
- 応募フォーム
  - [事前ワークショップ受付ページ ※5/3時点では不明]()
  - [Tシャツ公募受付ページ ※5/3時点では不明]()
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
  - [QP - qp0123whyte](https://www.instagram.com/qp0123whyte/)
  - [カラリズムリサ - colorhythmrisa](https://www.instagram.com/colorhythmrisa/)
  - [吉永有里 - yuriyoshinagaart](https://www.instagram.com/yuriyoshinagaart/)
  - [宮田ちひろ - chihiro_miyata](https://www.instagram.com/chihiro_miyata/)
  - [NONCHELEEE - fuguriddim](https://www.instagram.com/fuguriddim/)
  - [隈部裕太郎- yutarokumabe](https://www.instagram.com/yutarokumabe/)


# その他
## 計算ツール
- [Clamp関数生成ツール](https://free.page-craft.jp/clamp)
- [CSS Generators - Wavy Pattern](https://css-generators.com/wavy-shapes/)
