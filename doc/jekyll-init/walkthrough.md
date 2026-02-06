# Jekyll セットアップ完了報告

以下の基本的なディレクトリ構成とファイルを作成しました。

```
blog/
├── _config.yml       # サイト設定
├── Gemfile           # 依存関係定義
├── index.md          # トップページ
├── _layouts/
│   └── default.html  # 基本レイアウト
├── _includes/        # (空) 部品用
├── _posts/           # (空) 記事用
└── assets/
    ├── css/
    │   └── style.css # スタイルシート
    └── images/       # (空) 画像用
```

## 実行手順

現在、システムに `bundle` コマンドが見つからない状態です。Jekyll を実行するには Ruby と Bundler のインストールが必要です。

### 1. Ruby と Bundler のインストール

Ubuntu/Debian 系の場合:
```bash
sudo apt update
sudo apt install ruby-full build-essential zlib1g-dev
sudo gem install jekyll bundler
```

### 2. 依存関係のインストール

プロジェクトのルートディレクトリで以下を実行してください。
システムへの書き込み権限エラーを防ぐため、プロジェクト内にインストールするように設定します:

```bash
bundle config set --local path 'vendor/bundle'
bundle install
```

### 3. ローカルサーバーの起動

```bash
bundle exec jekyll serve
```
起動後、ブラウザで `http://localhost:4000` にアクセスするとサイトが表示されます。
