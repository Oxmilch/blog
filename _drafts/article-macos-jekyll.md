---
layout: page
title: "macOS Ventura で GitHub Pages の Jekyll の環境を整えた話"
description: ""
tags: [macOS(Intel), Ruby, Jekyll]
date: 2026-02-10
---

## はじめに　 
今回、ブログを始めるにあたって、ローカルでも見た目を整えながら作りたいよなぁと思い、ローカル環境を作ることに。  
最初は、Zorin OS 18上で簡単に作れたため、macOSでも楽にできるだろうと思ってたところ、想像以上に手こずったのでやったこととかを残します。  

## 当環境　 
- MacBook Pro 13 2017 (Core i5, ThunderBolt 3 x 2port, メモリ 8GB)
- macOS Ventura 13.7.8

## 手こずったところ
公式だと、ruby v2.5.0以上であれば良いよ！って書いてあるけれど、  
v4.0以上入れると動作しなかった・・(おま環？)
インストールする ruby のバージョンは、3.4.8 にしたら動いた

## 最終的な環境
- Homebrew v5.0.13
- rbenv v1.3.2
- ruby v3.4.8
- gem v3.6.9
- bundle v4.0.6

## 手順
### 注意書き
途中、めちゃくちゃ詰まったタイミングがあったので、もしかしたら要らない手順、足りなない手順があるかもしれません。

### 1:homebrewをインストールしよう
1. [Homebrew](https://brew.sh/ja/) からbashコマンドをコピーして、ターミナル.app から実行する  
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. 既にインストールしている場合は、アップデートを行う  
```bash
brew update
```

### 2:rbenvからrubyの環境を用意しよう
1. rbenv と ruby-build のインストールを行う  
```bash
brew install rbenv
brew install ruby-build
```

2. 1の手順を終えたら、インストール可能なrubyのバージョン一覧を確認して、3.4.x　をインストールする。  
＊自分の場合は、3.4.8だったので、このバージョンでインストールする
```bash
rbenv install --list
rbenv install 3.4.8
rbenv global 3.4.8
```

3. rubyのバージョンがインストールしたものに変わっているか確認する。  
```bash
ruby -v
```

4. 変わっていたら次の、[3:Jekyllの環境を用意しよう](#3jekyllの環境を用意しよう) に移る

#### rubyのバージョンが変わっていない場合の追加手順
1. バージョンが変わっていない場合は、rbenvのrubyが指定されていないので指定するための設定ファイルを作成する
```bash
touch ~/.bash_profile
```

2. ~/.bash_profile のファイルを開き、次の内容を追記して保存する。  
＊隠しファイルを表示してテキストエディタで編集するか、viコマンドで編集をする
```
eval "$(rbenv init -)"
```

3. 再度、rubyのバージョンを確認して変わってればOK。  
```bash
ruby -v
```

### 3:Jekyllの環境を用意しよう

### 4:GitHub Pages用の設定をしよう
### 5:ローカル環境で確認しよう

## 参考記事 
### 開発環境構築 
- [Jekyll - Jekyll on macOS](https://jekyllrb-ja.github.io/docs/installation/macos/)
- [宇宙物理メモ - Jekyll](https://github-nakasho.github.io/pro/jekyll)
- [DH研究情報ポータルサイト - JekyllとGitHub Pagesを使った静的ウェブサイトの構築](https://dhportal.ac.jp/?p=1716)
- [Qiita - Jekyll　config.ymlで使えるオプション15個](https://qiita.com/a999/items/365d28a106abad66df82)

### GitHub Pages 
- [GitHubドキュメント - GitHub Pagesのクイックスタート](https://docs.github.com/ja/pages/quickstart)
- [GitHubドキュメント - Jekyll を使用して GitHub Pages サイトをローカルでテストする](https://docs.github.com/ja/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll)
- [Qiita - GitHub Pagesの落とし穴と便利なTips](https://qiita.com/smallriv/items/997c9c19bef031460b0e)

## 終わりに 
OSサポートが25年秋で切れちゃってるので、まぁ使えなくても仕方ないかなと思いつつも、使っていきたいよねという気持ちが強い。  
Linuxは別のPCで導入済みなので、LinuxOSをインストールするのもなぁ・・と悩みどころ。  
Windows11, macOS Tahoe端末には環境整えていないので、また記事上げるかも。