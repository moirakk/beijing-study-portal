---
title: 专题三 基本初等函数
date: 2026-08-10
---

# 专题三 基本初等函数

## 概念定义

**指数函数**：$y = a^x$（$a > 0$ 且 $a \neq 1$），定义域 $\mathbb{R}$，值域 $(0, +\infty)$，恒过点 $(0, 1)$。当 $a > 1$ 时单调递增，当 $0 < a < 1$ 时单调递减。

**对数函数**：$y = \log_a x$（$a > 0$ 且 $a \neq 1$），定义域 $(0, +\infty)$，值域 $\mathbb{R}$，恒过点 $(1, 0)$。当 $a > 1$ 时单调递增，当 $0 < a < 1$ 时单调递减。

**幂函数**：$y = x^\alpha$（$\alpha$ 为常数），图像过点 $(1, 1)$，在第一象限的性质随 $\alpha$ 变化。

**指数与对数运算**：$a^m \cdot a^n = a^{m+n}$，$\log_a (MN) = \log_a M + \log_a N$，换底公式 $\log_a b = \frac{\log_c b}{\log_c a}$。

## 知识梳理

| 函数 | 定义域 | 值域 | 过定点 | 单调性 |
| --- | --- | --- | --- | --- |
| $y=a^x$ | $\mathbb{R}$ | $(0,+\infty)$ | $(0,1)$ | $a>1$ 增，$0<a<1$ 减 |
| $y=\log_a x$ | $(0,+\infty)$ | $\mathbb{R}$ | $(1,0)$ | $a>1$ 增，$0<a<1$ 减 |
| $y=x^\alpha$ | 视 $\alpha$ | 视 $\alpha$ | $(1,1)$ | 视 $\alpha$ |

## 结构示意

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="s3a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker></defs>
  <rect x="120" y="15" width="120" height="30" rx="6" fill="#2563eb"/>
  <text x="180" y="35" font-size="12" fill="#fff" text-anchor="middle">基本初等函数</text>
  <line x1="150" y1="45" x2="70" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s3a)"/>
  <line x1="180" y1="45" x2="180" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s3a)"/>
  <line x1="210" y1="45" x2="290" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s3a)"/>
  <rect x="20" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="70" y="91" font-size="11" fill="#fff" text-anchor="middle">指数函数 aˣ</text>
  <rect x="130" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="180" y="91" font-size="11" fill="#fff" text-anchor="middle">对数函数 logₐx</text>
  <rect x="240" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="290" y="91" font-size="11" fill="#fff" text-anchor="middle">幂函数 xᵅ</text>
  <text x="180" y="130" font-size="12" fill="#dc2626" text-anchor="middle">互为反函数</text>
  <line x1="180" y1="99" x2="180" y2="118" stroke="#64748b" stroke-width="1.5"/>
  <rect x="40" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="85" y="156" font-size="11" fill="#fff" text-anchor="middle">指数运算</text>
  <rect x="140" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="185" y="156" font-size="11" fill="#fff" text-anchor="middle">对数运算</text>
  <rect x="240" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="285" y="156" font-size="11" fill="#fff" text-anchor="middle">比较大小</text>
  <text x="180" y="200" font-size="12" fill="#64748b" text-anchor="middle">指数函数与对数函数互为反函数</text>
  <text x="180" y="222" font-size="12" fill="#64748b" text-anchor="middle">图像关于直线 y=x 对称</text>
</svg>

## 典型例题

**例 1**：比较 $a = 2^{0.3}$，$b = 0.3^2$，$c = \log_2 0.3$ 的大小。

**解**：$a = 2^{0.3} > 2^0 = 1$；$b = 0.3^2 = 0.09 \in (0, 1)$；$c = \log_2 0.3 < \log_2 1 = 0$。故 $a > b > c$。

**例 2**：计算 $\log_2 8 + \log_2 4$。

**解**：$\log_2 8 + \log_2 4 = \log_2 (8 \times 4) = \log_2 32 = 5$。

## 易错点

- 指数函数底数 $a$ 必须满足 $a > 0$ 且 $a \neq 1$，忽略 $a = 1$ 的情形。
- 对数运算中 $\log_a M + \log_a N = \log_a (MN)$，**不能**写成 $\log_a (M + N)$。
- 比较大小时不注意中间量 $0$ 和 $1$ 的过渡。
- 幂函数与指数函数混淆：$x^\alpha$ 与 $a^x$ 的底数、指数位置不同。
- 换底公式方向记反。

## 背记要点

1. $a^0 = 1$（$a \neq 0$），$a^{-n} = \frac{1}{a^n}$。
2. $\log_a 1 = 0$，$\log_a a = 1$，$a^{\log_a N} = N$。
3. $\log_a (MN) = \log_a M + \log_a N$，$\log_a \frac{M}{N} = \log_a M - \log_a N$。
4. 换底公式：$\log_a b = \frac{\log_c b}{\log_c a}$。
5. 指数函数与对数函数互为反函数，图像关于 $y = x$ 对称。

## 自测题

1. 计算 $2^3 \times 2^{-1} =$____。
2. 计算 $\log_3 9 =$____。
3. 比较大小：$0.5^{0.3}$ 与 $0.5^{0.5}$：____。
4. 函数 $y = 2^x$ 的反函数是____。
5. 计算 $\log_2 6 - \log_2 3 =$____。

## 相关知识点

基本初等函数是函数性质的具体载体，见 [[专题二 函数的概念与性质]]；其导数公式见 [[专题五 导数及其应用]]；零点问题见 [[专题四 函数的零点与方程]]。
