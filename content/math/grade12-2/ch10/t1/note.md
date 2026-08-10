---
title: 专题十 数列
date: 2026-08-10
---

# 专题十 数列

## 概念定义

**数列**：按一定次序排列的一列数，第 $n$ 项记作 $a_n$，通项公式 $a_n = f(n)$，前 $n$ 项和 $S_n = a_1 + a_2 + \cdots + a_n$。

**等差数列**：$a_{n+1} - a_n = d$（常数），通项 $a_n = a_1 + (n-1)d$，前 $n$ 项和 $S_n = \frac{n(a_1 + a_n)}{2} = na_1 + \frac{n(n-1)}{2}d$。

**等比数列**：$\frac{a_{n+1}}{a_n} = q$（$q \neq 0$），通项 $a_n = a_1 q^{n-1}$，前 $n$ 项和 $S_n = \frac{a_1(1 - q^n)}{1 - q}$（$q \neq 1$）。

**等差中项**：$2a_n = a_{n-1} + a_{n+1}$；**等比中项**：$a_n^2 = a_{n-1} \cdot a_{n+1}$。

## 知识梳理

| 类型 | 通项公式 | 前 n 项和 | 判定 |
| --- | --- | --- | --- |
| 等差 | $a_1+(n-1)d$ | $\frac{n(a_1+a_n)}{2}$ | 差为常数 |
| 等比 | $a_1q^{n-1}$ | $\frac{a_1(1-q^n)}{1-q}$ | 比为常数 |
| 递推 | 由 $a_n$ 与 $S_n$ 关系 | 累加/累乘 | 转化 |

## 结构示意

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="s10a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker></defs>
  <rect x="120" y="15" width="120" height="30" rx="6" fill="#2563eb"/>
  <text x="180" y="35" font-size="12" fill="#fff" text-anchor="middle">数列</text>
  <line x1="150" y1="45" x2="70" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s10a)"/>
  <line x1="180" y1="45" x2="180" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s10a)"/>
  <line x1="210" y1="45" x2="290" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s10a)"/>
  <rect x="20" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="70" y="91" font-size="11" fill="#fff" text-anchor="middle">等差数列</text>
  <rect x="130" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="180" y="91" font-size="11" fill="#fff" text-anchor="middle">等比数列</text>
  <rect x="240" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="290" y="91" font-size="11" fill="#fff" text-anchor="middle">递推数列</text>
  <text x="180" y="130" font-size="12" fill="#dc2626" text-anchor="middle">通项与前 n 项和</text>
  <line x1="180" y1="99" x2="180" y2="118" stroke="#64748b" stroke-width="1.5"/>
  <rect x="40" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="85" y="156" font-size="11" fill="#fff" text-anchor="middle">通项公式</text>
  <rect x="140" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="185" y="156" font-size="11" fill="#fff" text-anchor="middle">前 n 项和</text>
  <rect x="240" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="285" y="156" font-size="11" fill="#fff" text-anchor="middle">中项性质</text>
  <text x="180" y="200" font-size="12" fill="#64748b" text-anchor="middle">aₙ=Sₙ-Sₙ₋₁ (n≥2)</text>
  <text x="180" y="222" font-size="12" fill="#64748b" text-anchor="middle">等比求和注意 q=1 讨论</text>
</svg>

## 典型例题

**例 1**：等差数列 $\{a_n\}$ 中，$a_1 = 2$，$d = 3$，求 $a_{10}$ 和 $S_{10}$。

**解**：$a_{10} = a_1 + 9d = 2 + 27 = 29$；$S_{10} = \frac{10(a_1 + a_{10})}{2} = 5 \times (2 + 29) = 155$。

**例 2**：等比数列 $\{a_n\}$ 中，$a_1 = 1$，$q = 2$，求 $S_5$。

**解**：$S_5 = \frac{a_1(1 - q^5)}{1 - q} = \frac{1 \times (1 - 32)}{1 - 2} = 31$。

## 易错点

- 等比数列求和时**忘记讨论 $q = 1$** 的情形。
- 由 $S_n$ 求 $a_n$ 时，$a_n = S_n - S_{n-1}$ 仅对 $n \geq 2$ 成立，**需单独验证 $a_1$**。
- 等比数列中**公比 $q \neq 0$**，各项均不为 0。
- 等差中项与等比中项公式**混淆**。
- 递推数列转化时**累加/累乘方向**错误。

## 背记要点

1. 等差通项：$a_n = a_1 + (n-1)d$。
2. 等差求和：$S_n = \frac{n(a_1 + a_n)}{2} = na_1 + \frac{n(n-1)}{2}d$。
3. 等比通项：$a_n = a_1 q^{n-1}$。
4. 等比求和：$S_n = \frac{a_1(1 - q^n)}{1 - q}$（$q \neq 1$）。
5. $a_n = S_n - S_{n-1}$（$n \geq 2$）。

## 自测题

1. 等差数列 $a_1 = 1$，$d = 2$，则 $a_5 =$____。
2. 等差数列 $a_1 = 1$，$a_5 = 9$，则 $S_5 =$____。
3. 等比数列 $a_1 = 2$，$q = 3$，则 $a_4 =$____。
4. 等比数列 $a_1 = 1$，$q = 2$，则 $S_4 =$____。
5. 若 $S_n = n^2$，则 $a_3 =$____。

## 相关知识点

数列综合应用见 [[专题十一 数列综合]]；数列与不等式结合见 [[专题十二 不等式]]；数列极限与导数联系见 [[专题五 导数及其应用]]。
