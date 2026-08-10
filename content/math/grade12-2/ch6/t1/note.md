---
title: 专题六 导数综合
date: 2026-08-10
---

# 专题六 导数综合

## 概念定义

**恒成立问题**：若 $f(x) \geq a$ 对 $x \in D$ 恒成立，则 $a \leq \min_{x \in D} f(x)$；若 $f(x) \leq a$ 恒成立，则 $a \geq \max_{x \in D} f(x)$。

**存在性问题**：若存在 $x \in D$ 使 $f(x) \geq a$，则 $a \leq \max_{x \in D} f(x)$；若存在使 $f(x) \leq a$，则 $a \geq \min_{x \in D} f(x)$。

**不等式证明**：证明 $f(x) > g(x)$ 常转化为证明 $h(x) = f(x) - g(x) > 0$，通过研究 $h(x)$ 的最小值。

**参数讨论**：含参函数单调性、极值、零点问题需对参数分类讨论。

## 知识梳理

| 题型 | 转化方法 | 关键 |
| --- | --- | --- |
| 恒成立 | 求最值 | $a \leq \min$ 或 $a \geq \max$ |
| 存在性 | 求最值 | $a \leq \max$ 或 $a \geq \min$ |
| 不等式证明 | 构造函数 | 证 $h(x)$ 最值 $>0$ |
| 零点个数 | 单调性+端点 | 结合图像 |

## 结构示意

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="s6a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker></defs>
  <rect x="110" y="15" width="140" height="30" rx="6" fill="#2563eb"/>
  <text x="180" y="35" font-size="12" fill="#fff" text-anchor="middle">导数综合应用</text>
  <line x1="150" y1="45" x2="60" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s6a)"/>
  <line x1="180" y1="45" x2="180" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s6a)"/>
  <line x1="210" y1="45" x2="300" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s6a)"/>
  <rect x="10" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="60" y="91" font-size="11" fill="#fff" text-anchor="middle">恒成立问题</text>
  <rect x="130" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="180" y="91" font-size="11" fill="#fff" text-anchor="middle">不等式证明</text>
  <rect x="250" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="300" y="91" font-size="11" fill="#fff" text-anchor="middle">参数讨论</text>
  <text x="180" y="130" font-size="12" fill="#dc2626" text-anchor="middle">核心方法</text>
  <line x1="180" y1="99" x2="180" y2="118" stroke="#64748b" stroke-width="1.5"/>
  <rect x="40" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="85" y="156" font-size="11" fill="#fff" text-anchor="middle">分离参数</text>
  <rect x="140" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="185" y="156" font-size="11" fill="#fff" text-anchor="middle">构造函数</text>
  <rect x="240" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="285" y="156" font-size="11" fill="#fff" text-anchor="middle">分类讨论</text>
  <text x="180" y="200" font-size="12" fill="#64748b" text-anchor="middle">恒成立与存在性最值方向相反</text>
  <text x="180" y="222" font-size="12" fill="#64748b" text-anchor="middle">证明不等式常构造差函数</text>
</svg>

## 典型例题

**例 1**：若 $x^2 - 2x + a \geq 0$ 对 $x \in [0, 2]$ 恒成立，求 $a$ 的范围。

**解**：$a \geq -(x^2 - 2x) = -x^2 + 2x$ 恒成立，即 $a \geq \max_{[0,2]}(-x^2 + 2x)$。$-x^2 + 2x = -(x-1)^2 + 1$，在 $[0,2]$ 上最大值为 $1$，故 $a \geq 1$。

**例 2**：证明当 $x > 0$ 时，$e^x > x + 1$。

**解**：令 $h(x) = e^x - x - 1$，则 $h'(x) = e^x - 1$。当 $x > 0$ 时 $h'(x) > 0$，$h(x)$ 单调递增，故 $h(x) > h(0) = 0$，即 $e^x > x + 1$。

## 易错点

- 恒成立与存在性问题中**最值方向混淆**。
- 分离参数时**未考虑分母符号**导致不等号方向错误。
- 构造函数后**忘记求导判断单调性**。
- 分类讨论时**漏掉临界情形**（如 $a = 0$）。
- 证明不等式时未说明**等号何时成立**。

## 背记要点

1. 恒成立 $f(x) \geq a$：$a \leq \min f(x)$。
2. 恒成立 $f(x) \leq a$：$a \geq \max f(x)$。
3. 存在 $f(x) \geq a$：$a \leq \max f(x)$。
4. 证明 $f(x) > g(x)$：构造 $h = f - g$ 证 $h_{\min} > 0$。
5. 分离参数法：$a \geq g(x)$ 恒成立 $\Rightarrow a \geq \max g(x)$。

## 自测题

1. 若 $x^2 + a \geq 0$ 对 $x \in \mathbb{R}$ 恒成立，则 $a$ 的范围是____。
2. 证明 $x > 0$ 时 $\ln x \leq x - 1$ 是否成立：____。
3. 若存在 $x \in [0,1]$ 使 $x^2 \leq a$，则 $a$ 的最小值是____。
4. 函数 $f(x) = x^3 - 3x + a$ 有三个零点，则 $a$ 的范围是____。
5. 恒成立 $f(x) \geq 0$ 等价于 $f(x)$ 的____大于等于 0。

## 相关知识点

导数综合是高考压轴题核心，见 [[专题五 导数及其应用]]；与零点问题结合见 [[专题四 函数的零点与方程]]；与不等式结合见 [[专题十二 不等式]]。
