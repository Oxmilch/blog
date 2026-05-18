# 実装計画: Design ページの作成

## 概要
`rouph-design-desktop.svg` (の要件) を元に、デザインポートフォリオ用のページ `design.html` を作成します。
スタイルは `style.css` をベースとし、`design.css` を新規作成して適用します。
Grid Layout を使用して青いブロック（作品リンク）を配置します。

## ユーザーレビューが必要な事項
- 特になし

## 変更内容

### HTML
#### [MODIFY] [design.html](file:///Users/oxmilch/github/portfolio/design.html)
- `engineering.html` のヘッダー・フッター構造をコピーします。
- メインコンテンツ内にグリッドレイアウト用のコンテナを追加します。
- グリッドアイテム（青いブロック）のプレビュー版を作成します（画像＋表題）。

### CSS
#### [NEW] [css/design.css](file:///Users/oxmilch/github/portfolio/css/design.css)
- `style.css` への依存（前提）を確認しつつ、固有のスタイルを定義します。
- Grid Layout:
    - 青いブロックのサイズ可変: 幅 250px~320px, 高さ 333px~480px
    - グリッドの自動配置 (`auto-fill` / `minmax`)

## 検証計画

### 手動検証
- ブラウザで `design.html` を開き、以下の点を確認します。
    - ヘッダー・フッターが `engineering.html` と同様に表示されているか。
    - 青いブロックがグリッド状に配置されているか。
    - ウィンドウサイズを変更した際、ブロックの幅が 250~320px の範囲で可変し、適切に折り返されるか。
