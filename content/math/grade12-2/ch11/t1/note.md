---
title: 专题十一 数列综合
date: 2026-08-10
---

# 专题十一 数列综合

## 概念定义

**求通项方法**：累加法（$a_{n+1} - a_n = f(n)$）、累乘法（$\frac{a_{n+1}}{a_n} = f(n)$）、构造法（$a_{n+1} = pa_n + q$ 构造等比）、$a_n = S_n - S_{n-1}$。

**求和方法**：公式法、倒序相加法、错位相减法（等差×等比）、裂项相消法、分组求和法。

**裂项公式**：$\frac{1}{n(n+1)} = \frac{1}{n} - \frac{1}{n+1}$，$\frac{1}{n(n+k)} = \frac{1}{k}\left(\frac{1}{n} - \frac{1}{n+k}\right)$。

**错位相减**：$S_n = \sum a_n b_n$（$a_n$ 等差、$b_n$ 等比）时，用 $qS_n$ 相减。

## 知识梳理

| 方法 | 适用情形 | 关键步骤 |
| --- | --- | --- |
| 累加法 | $a_{n+1}-a_n=f(n)$ | 逐项相加 |
| 累乘法 | $\frac{a_{n+1}}{a_n}=f(n)$ | 逐项相乘 |
| 错位相减 | 等差×等比 | 乘公比相减 |
| 裂项相消 | $\frac{1}{n(n+k)}$ | 拆项抵消 |
| 分组求和 | 混合数列 | 分组分别求和 |

## 结构示意

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="s11a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker></defs>
  <rect x="110" y="15" width="140" height="30" rx="6" fill="#2563eb"/>
  <text x="180" y="35" font-size="12" fill="#fff" text-anchor="middle">数列综合</text>
  <line x1="150" y1="45" x2="60" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s11a)"/>
  <line x1="180" y1="45" x2="180" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s11a)"/>
  <line x1="210" y1="45" x2="300" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s11a)"/>
  <rect x="10" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="60" y="91" font-size="11" fill="#fff" text-anchor="middle">求通项</text>
  <rect x="130" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="180" y="91" font-size="11" fill="#fff" text-anchor="middle">求和</text>
  <rect x="250" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="300" y="91" font-size="11" fill="#fff" text-anchor="middle">综合应用</text>
  <text x="180" y="130" font-size="12" fill="#dc2626" text-anchor="middle">核心方法</text>
  <line x1="180" y1="99" x2="180" y2="118" stroke="#64748b" stroke-width="1.5"/>
  <rect x="40" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="85" y="156" font-size="11" fill="#fff" text-anchor="middle">累加/累乘</text>
  <rect x="140" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="185" y="156" font-size="11" fill="#fff" text-anchor="middle">错位相减</text>
  <rect x="240" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="285" y="156" font-size="11" fill="#fff" text-anchor="middle">裂项相消</text>
  <text x="180" y="200" font-size="12" fill="#64748b" text-anchor="middle">构造法：aₙ₊₁=paₙ+q</text>
  <text x="180" y="222" font-size="12" fill="#64748b" text-anchor="middle">错位相减注意项数</text>
</svg>

## 典型例题

**例 1**：求数列 $\frac{1}{1 \times 2} + \frac{1}{2 \times 3} + \cdots + \frac{1}{n(n+1)}$ 的和。

**解**：$\frac{1}{n(n+1)} = \frac{1}{n} - \frac{1}{n+1}$，逐项相消得 $S_n = 1 - \frac{1}{n+1} = \frac{n}{n+1}$。

**例 2**：求 $S_n = 1 \times 2 + 2 \times 2^2 + 3 \times 2^3 + \cdots + n \times 2^n$。

**解**：这是等差 $\times$ 等比，用错位相减。$S_n = \sum n \cdot 2^n$，$2S_n = \sum n \cdot 2^{n+1}$，相减得 $S_n = (n-1)2^{n+1} + 2$。

## 易错点

- 错位相减时**相减后项数**计算错误。
- 裂项相消时**系数**漏乘（如 $\frac{1}{n(n+k)}$ 前有 $\frac{1}{k}$）。
- 由 $S_n$ 求 $a_n$ 时**忘记验证 $a_1$**。
- 构造等比数列时**常数项**处理错误。
- 分组求和时**分组不当**导致无法求和。

## 背记要点

1. 裂项：$\frac{1}{n(n+1)} = \frac{1}{n} - \frac{1}{n+1}$。
2. 裂项：$\frac{1}{n(n+k)} = \frac{1}{k}\left(\frac{1}{n} - \frac{1}{n+k}\right)$。
3. 错位相减适用于等差×等比。
4. $a_n = S_n - S_{n-1}$（$n \geq 2$），验证 $a_1$。
5. 构造法：$a_{n+1} + \lambda = p(a_n + \lambda)$。

## 自测题

1. 求 $\frac{1}{1 \times 2} + \frac{1}{2 \times 3} + \cdots + \frac{1}{99 \times 100}$ 的和：____。
2. 数列 $a_n = n$，求 $S_n$：____。
3. 若 $a_{n+1} = 2a_n + 1$，$a_1 = 1$，则 $a_2 =$____。
4. 求 $\sum_{k=1}^{n} 2^k$：____。
5. 数列 $a_n = 2n - 1$ 是等差还是等比：____。

## 相关知识点

数列综合以等差等比为基础，见 [[专题十 数列]]；与不等式证明结合见 [[专题十二 不等式]]；与函数单调性结合见 [[专题二 函数的概念与性质]]。
