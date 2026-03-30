---
layout: page
title: "jQueryメモ"
description: "jQueryメモ"
tags: [JavaScript, jQuery]
date: 2022-04-05
---

## テクニック
### チェックボックスでチェックされているものだけを配列風の文字列で取得する

```js
let example = String($("#チェックボックスのID:checked").map(function() { return $(this).val(); }).get().join(",");
```