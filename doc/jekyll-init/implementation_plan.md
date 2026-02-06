# Jekyll GitHub Pages セットアップ実装計画

## ゴール
GitHub Pages でホスト可能な Jekyll ブログの基本構成をセットアップする。

## 変更内容

### コンフィグレーション
#### [NEW] [_config.yml](file:///home/oxmilch/github/blog/_config.yml)
Jekyll の基本設定ファイル。
- サイトのタイトル、説明、URL設定。
- `jekyll-feed`, `jekyll-seo-tag` 等の標準的なプラグイン設定。

#### [NEW] [Gemfile](file:///home/oxmilch/github/blog/Gemfile)
- `github-pages` gem を指定し、GitHub Pages のビルド環境とバージョンを合わせる。

### コンテンツとレイアウト
#### [NEW] [index.md](file:///home/oxmilch/github/blog/index.md)
- サイトのトップページコンテンツ。

#### [NEW] [_layouts/default.html](file:///home/oxmilch/github/blog/_layouts/default.html)
- 基本的な HTML 構造を持つレイアウトテンプレート。

### ディレクトリ構成
以下の標準ディレクトリを作成する：
- `_includes/` : ヘッダー、フッターなどの部品
- `_posts/` : ブログ記事 (`YYYY-MM-DD-title.md` 形式)
- `assets/css/` : スタイルシート
- `assets/images/` : 画像ファイル

## 検証計画
### 手動検証
1. `bundle install` で依存関係がインストールできること。
2. `bundle exec jekyll serve` でローカルサーバーが起動すること。
3. ブラウザでトップページが表示されること。
