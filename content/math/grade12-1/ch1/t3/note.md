---
title: 6.3 二项式定理
date: 2026-08-10
---

# 6.3 二项式定理

## 概念定义

**二项式定理**：$(a+b)^n = C_n^0 a^n + C_n^1 a^{n-1}b + \cdots + C_n^k a^{n-k}b^k + \cdots + C_n^n b^n$，其中 $n \in \mathbb{N}^*$。

**二项式系数**：展开式中各项的系数 $C_n^k$（$k = 0,1,\dots,n$）叫做二项式系数，注意与"项的系数"（含字母部分）区分。

**通项公式**：展开式的第 $k+1$ 项为 $T_{k+1} = C_n^k a^{n-k} b^k$。

**二项式系数的性质**：对称性 $C_n^k = C_n^{n-k}$；各二项式系数之和 $C_n^0 + C_n^1 + \cdots + C_n^n = 2^n$；奇数项系数和等于偶数项系数和，均为 $2^{n-1}$。

## 知识梳理

| 性质 | 内容 |
| --- | --- |
| 通项 | $T_{k+1} = C_n^k a^{n-k} b^k$ |
| 对称性 | $C_n^k = C_n^{n-k}$ |
| 系数和 | $\sum_{k=0}^n C_n^k = 2^n$ |
| 奇偶项和 | 奇数项和 $=$ 偶数项和 $= 2^{n-1}$ |
| 最大系数 | $n$ 为偶数时中间项最大；$n$ 为奇数时中间两项相等最大 |

## 杨辉三角示意

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <text x="180" y="24" font-size="13" fill="#2563eb" text-anchor="middle">杨辉三角（二项式系数）</text>
  <text x="180" y="52" font-size="12" fill="#334155" text-anchor="middle">1</text>
  <text x="150" y="76" font-size="12" fill="#334155" text-anchor="middle">1</text>
  <text x="210" y="76" font-size="12" fill="#334155" text-anchor="middle">1</text>
  <text x="120" y="100" font-size="12" fill="#334155" text-anchor="middle">1</text>
  <text x="180" y="100" font-size="12" fill="#dc2626" text-anchor="middle">2</text>
  <text x="240" y="100" font-size="12" fill="#334155" text-anchor="middle">1</text>
  <text x="90" y="124" font-size="12" fill="#334155" text-anchor="middle">1</text>
  <text x="150" y="124" font-size="12" fill="#dc2626" text-anchor="middle">3</text>
  <text x="210" y="124" font-size="12" fill="#dc2626" text-anchor="middle">3</text>
  <text x="270" y="124" font-size="12" fill="#334155" text-anchor="middle">1</text>
  <text x="60" y="148" font-size="12" fill="#334155" text-anchor="middle">1</text>
  <text x="120" y="148" font-size="12" fill="#dc2626" text-anchor="middle">4</text>
  <text x="180" y="148" font-size="12" fill="#dc2626" text-anchor="middle">6</text>
  <text x="240" y="148" font-size="12" fill="#dc2626" text-anchor="middle">4</text>
  <text x="300" y="148" font-size="12" fill="#334155" text-anchor="middle">1</text>
  <text x="180" y="180" font-size="12" fill="#64748b" text-anchor="middle">每行两端为 1，中间数 = 肩上两数之和</text>
  <text x="180" y="204" font-size="12" fill="#64748b" text-anchor="middle">第 n 行对应 (a+b)ⁿ 的系数</text>
</svg>

## 典型例题

**例 1**：求 $(x + \dfrac{2}{x})^6$ 展开式中 $x^2$ 项的系数。

**解**：通项 $T_{k+1} = C_6^k x^{6-k}(\dfrac{2}{x})^k = C_6^k 2^k x^{6-2k}$。令 $6 - 2k = 2$，得 $k = 2$。系数为 $C_6^2 \cdot 2^2 = 15 \times 4 = 60$。

**例 2**：求 $(1 + 2x)^5$ 展开式中各项系数之和。

**解**：令 $x = 1$，得各项系数之和为 $(1 + 2 \times 1)^5 = 3^5 = 243$。

## 易错点

- 混淆"二项式系数"与"项的系数"：前者是 $C_n^k$，后者含字母部分。
- 通项 $T_{k+1}$ 中 $k$ 从 0 开始，第 $k+1$ 项对应 $C_n^k$。
- 求系数和时令 $x=1$；求奇数项系数和需结合 $x=-1$。
- 展开式中 $a$、$b$ 的顺序不能颠倒，否则通项出错。

## 背记要点

1. 通项 $T_{k+1} = C_n^k a^{n-k} b^k$。
2. 二项式系数和 $= 2^n$；奇数项和 $=$ 偶数项和 $= 2^{n-1}$。
3. 令 $x=1$ 求各项系数和，令 $x=-1$ 求正负项差。
4. 杨辉三角第 $n$ 行即 $(a+b)^n$ 的二项式系数。

## 自测题

1. $(a+b)^4$ 展开式共有____项。
2. $(1+x)^n$ 展开式中二项式系数之和为 64，则 $n=$____。
3. 求 $(x-1)^5$ 展开式中 $x^3$ 项的系数。
4. 判断：二项式系数就是展开式中各项的系数。（　）

## 相关知识点

二项式系数来自组合数，见 [[6.2 排列与组合]]；计数原理见 [[6.1 分类加法计数原理与分步乘法计数原理]]。
