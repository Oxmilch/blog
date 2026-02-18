---
layout: page
title: "HTML5ベンチマーク"
description: "HTML5ベンチマーク"
tags: [Gadget, AYANEO, AYANEO POCKET MICRO, Android]
date: 2026-02-16
---

## 所持デバイスの性能を比較してみる
所持しているデバイスの性能の目安がすごく気になったので、環境に関わらず測定できる [HTML5ベンチマーク](https://s3-ap-northeast-1.amazonaws.com/mrfujita/web-bench/web-bench.html) で確認してみた。

## 所持デバイスの性能詳細 
### 所感 
CPU性能はブレが少なく、割と正確に測定できていると思うが、  
GPU性能については、最大30%程度の測定のブレが発生するため、GPU性能（Rectangle, Text, Circle BitBit）については参考程度で考えるの方が良さそう。

### 各性能比較 

| デバイス | OS | ALU | MLU |
| - | :-: | :-: | :-: |
| Mac Mini | macOS26.3 | -万 | -万 |
| Desktop PC | Win11 Pro | -万 | -万 |
| AYANEO Pro 2021 Retro Power | Win11 | 90万 | 253万 |
| Let's note SV7 | Win11 Pro | -万 | -万 |
| Let's note SZ6 | ZORIN OS 18 | 24万 | 93万 |
| Xperia 5 III | Android13 | 47万 | 156万 |
| iPhone 13 mini | iOS26.3 | 43万 | 222万 |
| CMFPhone(1) | NothingOS4 | 41万 | 138万 |
| AYANEO Pocket Micro | Android13 | -万 | -万 |
| iPhone SE 2 | iOS26.3 | 33万 | 160万 |
| iPad mini 5 | iPadOS26.3 | 28万 | 134万 |
| MacBookPro13 2017 | macOS13.7.8 | 14万 | 85万 |
| iPhone 5s | iOS12.5.8 | 5万 | 26万 |

### Android OS
#### AYANEO - AYANEO POCKET MICRO
- OS：Android
- SoC：Helio-G99
- ブラウザ：Brave

| 項目 | ターボ | ゲーム | セーブ |
| - | :-: | :-: | :-: |
| ALU | -万 | -万 | -万 |
| MLU | -万 | -万 | -万 |
| Rectangle | -万 | -万 | -万 |
| Text | -万 | -万 | -万 
| Circle | -万 | -万 | -万 |
| BitBit | -万 | -万 | -万 |

#### Nothing - CMFPhone(1)
- OS：Nothing OS 4
- SoC：Dimensity7300
- ブラウザ：Brave

| 項目 | 通常 | バッテリーセーバー |
| - | :-: | :-: |
| ALU | 41万 | 31万 |
| MLU | 138万 | 126万 |
| Rectangle | 12万 |
| Text | 12万 |
| Circle | 12万 |
| BitBit | 12万 |

#### Sony - Xperia5 III
- OS：Android 13
- SoC：Snapdragon 888
- ブラウザ：Brave

| 項目 | 通常 | スタミナ<br>(バランス) | スタミナ<br>(電池もち) |
| - | :-: | :-: | :-: |
| ALU | 47万 | 45万 | 45万 |
| MLU | 156万 | 160万 | 160万 |
| Rectangle | 20万 |
| Text | 15万 |
| Circle | 17万 |
| BitBit | 17万 |


### Linux OS
#### Panasonic - Let's Note CF-SZ6
- OS：ZORIN OS 18
- CPU：Intel Core i5 7300U
- GPU：Intel HD Graphics 620
- ブラウザ：Brave v1.87.186

| 項目 | パフォーマンス | バランス | 省電力 |
| - | :-: | :-: | :-: |
| ALU | 24万 | 20万 | 7万 |
| MLU | 93万 | 87万 | 29万 |
| Rectangle | 23万 | 15万 | 13万 |
| Text | 22万 | 11万 |  11万 
| Circle | 22万 | 14万 | 14万 |
| BitBit | 31万 | 12万 | 12万 |


### Windows OS
#### AYANEO - AYANEO Pro 2021 RETRO POWER
- OS：Windows11 Home
- CPU：AMD Ryzen7 4800U
- GPU：Radeon Graphics Vega
- ブラウザ：Brave v1.87.188

| 項目 | 25W | 20W | 15W | 11W | 6W |
| - | :-: | :-: | :-: | :-: | :-: |
| ALU | 90万 | 85万 | 75万 | 67万 | 42万 |
| MLU | 253万 | 248万 | 235万 | 220万 | 158万 |
| Rectangle | 18万 | 16万 | 16万 | 15万 | 17万 |
| Text | 18万 | 16万 |  16万 | 15万 | 15万 |
| Circle | 18万 | 16万 | 16万 | 15万 | 17万 |
| BitBit | 18万 | 16万 | 16万 | 15万 | 17万 |

#### Panasonic - Let's Note CF-SV7
- OS：Windows 11 Pro
- CPU：Intel Core i7 8350U
- GPU：Intel UHD Graphics 620
- ブラウザ：Brave v1.87.186

| 項目 | ACパフォーマンス | ACバランス | AC省電力 |パフォーマンス | バランス | 省電力 |
| - | :-: | :-: | :-: | :-: | :-: | :-: |
| ALU |  |  |  | 24万 | 20万 | 7万 |
| MLU |  |  |  | 93万 | 87万 | 29万 |
| Rectangle |  |  |  | 23万 | 15万 | 13万 |
| Text |  |  |  | 22万 | 11万 |  11万 
| Circle |  |  |  | 22万 | 14万 | 14万 |
| BitBit |  |  |  | 31万 | 12万 | 12万 |

#### Desktop PC 
- OS：Windows 11 Pro
- CPU：Intel Core i5 12400F
- GPU：AMD Radeon RX6700XT
- ブラウザ：Brave
- ALU：
- MLU：
- Rectangle：
- Circle：
- BitBit：

### iOS
#### Apple - iPhone 5s
- OS：iOS12.5.8
- SoC：Apple A9
- ブラウザ：Safari

| 項目 | 通常 | 低電力 |
| - | :-: | :-: |
| ALU | 5万 | 3万 |
| MLU | 26万 | 16万 |
| Rectangle | 3万 |
| Text | 1万 |
| Circle | 3万 |
| BitBit | 3万 |

#### Apple - iPhone SE 2nd Genaration
- OS：iOS26.3
- SoC：Apple A13 Bionic
- ブラウザ：Brave v1.86
- バッテリー最大容量：76%

| 項目 | 通常 | 低電力 |
| - | :-: | :-: |
| ALU | 33万 | 31万 |
| MLU | 160万 | 80万 |
| Rectangle | 22万 |
| Text | 18万 |
| Circle | 21万 |
| BitBit | 21万 |

#### Apple - iPhone 13 mini
- OS：iOS26.3
- SoC：Apple A15 Bionic
- ブラウザ：Brave v1.86
- バッテリー最大容量：100%

| 項目 | 通常 | 低電力 |
| - | :-: | :-: |
| ALU | 43万 | 38万 |
| MLU | 222万 | 117万 |
| Rectangle | 22万 |
| Text | 19万 |
| Circle | 22万 |
| BitBit | 22万 |

### iPadOS
#### Apple - iPad mini 5
- OS：iPadOS 26.3
- SoC：Apple A12
- ブラウザ：Brave
- バッテリー最大容量：82%

| 項目 | 通常 | 低電力 |
| - | :-: | :-: |
| ALU | 28万 | 23万 |
| MLU | 134万 | 87万 |
| Rectangle | 22万 |
| Text | 16万 |
| Circle | 22万 |
| BitBit | 22万 |

### macOS
#### Apple - MacBookPro13 2017
- OS：macOS 13.7.8
- CPU：Intel Core i5 7267U
- ブラウザ：Brave v1.86.148
- バッテリー最大容量：92%

| 項目 | AC通常 | AC低電力 | 通常 | 低電力 |
| - | :-: | :-: | :-: | :-: | 
| ALU | 14万 | 13万 | 14万 | 9万 |
| MLU | 85万 | 65万 | 65万 | 50万 |
| Rectangle | 18万 | 18万 | 17万 | 15万 |
| Text | 18万 | 18万 | 13万 | 12万 |
| Circle | 18万 | 18万 | 12万 | 11万 |
| BitBit | 18万 | 18万 | 14万 | 14万 |

#### Apple - Mac Mini
- OS：macOS 26
- CPU：Apple M4
- ブラウザ：Brave v1.86.148

| 項目 | AC通常 | AC低電力 |
| - | :-: | :-: | 
| ALU | 14万 | 13万 |
| MLU | 85万 | 65万 |
| Rectangle | 18万 |
| Text | 18万 |
| Circle | 18万 |
| BitBit | 18万 |
