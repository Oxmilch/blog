---
layout: page
title: "トップページ"
date: 2026-02-08
update: 2026-03-30
post-limit: 30
---
## Welcom to My Blog! 
- [GitHub Pages](https://oxmilch.github.io/blog/) でブログをはじめてみました。
- [ミルクせんせーについて](./about.html) 

### 最新の投稿 
<ul>
{% for post in site.posts limit:5 %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a> - {{ post.date | date: "%Y-%m-%d" }}
  </li>
{% endfor %}
</ul>

### 作るきっかけ 
2025年11月からWebとデザインの学び直しで学校に通い始めたのがきっかけです。  

### 所有端末 
#### Network Attached Storage
- Synology DS419Slim (4.5TB (SHR 1TB,2TBx3))
- Synology DS223j (8TB (SHR 8TBx2))

#### Windows 
- Desktop PC (Win11Pro, i5-12400F, RAM 32GB, RX6700XT(12GB), ROM 256GB + 2TB)
- Let's note SV7 (Win11Pro, i5-8350U, RAM 8GB, ROM 512GB)
- AYANEO 2021 Pro RETRO POWER (Win11, R7-4800U, RAM 16GB, ROM 2TB)

#### Linux 
- Let's note SZ6 (Zorin OS 18, i5-7300U, RAM 8GB, ROM 512GB)

#### macOS 
- Mac Mini 2024 (macOS Tahoe, Apple M4, RAM 32GB, ROM 512GB)
- MacBook Pro 13 2017 (macOS Ventura, i5-7267U, RAM 8GB, ROM 512GB)

#### iPad 
- iPad mini 5 (iPadOS26, Apple A12, RAM 3GB, ROM 256GB)

#### iPhone 
- iPhone SE 2nd Gen. (iOS26, Apple A13, RAM 3GB, ROM 256GB)
- iPhone 13 mini (iOS26, Apple A15, RAM 4GB, ROM 512GB)
- iPhone 5s (iOS12, Apple A7, RAM 1GB, ROM 32GB)

#### Android
- Nothing CMF Phone(1) (NothingOS4, Dimensity7300, RAM 8GB, ROM 256GB)
- Sony Xperia 5 III (Android13, Snapdragon888, RAM 8GB, ROM 128GB)
- AYANEO Pocket Micro (Android13, Helio G99, RAM 8GB, ROM 256GB)

#### Game Console (Active)
- Nintendo Switch2
- Nintendo Switch Lite
- Play Station 3
- Play Station 2
