---
title: 专题十六 概率与统计
date: 2026-08-10
---

# 专题十六 概率与统计

## 概念定义

**古典概型**：$P(A) = \frac{m}{n}$，其中 $n$ 为基本事件总数，$m$ 为事件 $A$ 包含的基本事件数，要求各基本事件等可能。

**条件概率**：$P(B \mid A) = \frac{P(AB)}{P(A)}$（$P(A) > 0$）。

**相互独立事件**：$P(AB) = P(A)P(B)$。

**离散型随机变量**：分布列、期望 $E(X) = \sum x_i p_i$、方差 $D(X) = \sum (x_i - E(X))^2 p_i$。

**统计**：频率分布直方图、平均数、中位数、众数、方差、标准差、回归分析、独立性检验。

## 知识梳理

| 概念 | 公式 | 用途 |
| --- | --- | --- |
| 古典概型 | $P(A)=\frac mn$ | 等可能事件 |
| 条件概率 | $P(B\mid A)=\frac{P(AB)}{P(A)}$ | 有前提 |
| 独立事件 | $P(AB)=P(A)P(B)$ | 互不影响 |
| 期望 | $E(X)=\sum x_ip_i$ | 平均水平 |
| 方差 | $D(X)=\sum(x_i-E)^2p_i$ | 离散程度 |

## 结构示意

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="s16a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker></defs>
  <rect x="110" y="15" width="140" height="30" rx="6" fill="#2563eb"/>
  <text x="180" y="35" font-size="12" fill="#fff" text-anchor="middle">概率与统计</text>
  <line x1="150" y1="45" x2="60" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s16a)"/>
  <line x1="180" y1="45" x2="180" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s16a)"/>
  <line x1="210" y1="45" x2="300" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s16a)"/>
  <rect x="10" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="60" y="91" font-size="11" fill="#fff" text-anchor="middle">概率</text>
  <rect x="130" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="180" y="91" font-size="11" fill="#fff" text-anchor="middle">随机变量</text>
  <rect x="250" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="300" y="91" font-size="11" fill="#fff" text-anchor="middle">统计</text>
  <text x="180" y="130" font-size="12" fill="#dc2626" text-anchor="middle">核心</text>
  <line x1="180" y1="99" x2="180" y2="118" stroke="#64748b" stroke-width="1.5"/>
  <rect x="40" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="85" y="156" font-size="11" fill="#fff" text-anchor="middle">古典概型</text>
  <rect x="140" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="185" y="156" font-size="11" fill="#fff" text-anchor="middle">期望方差</text>
  <rect x="240" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="285" y="156" font-size="11" fill="#fff" text-anchor="middle">分布直方图</text>
  <text x="180" y="200" font-size="12" fill="#64748b" text-anchor="middle">E(X)=Σxᵢpᵢ</text>
  <text x="180" y="222" font-size="12" fill="#64748b" text-anchor="middle">D(X)=Σ(xᵢ-E)²pᵢ</text>
</svg>

## 典型例题

**例 1**：掷一枚骰子，求掷出偶数的概率。

**解**：基本事件总数 $n = 6$，偶数有 $2, 4, 6$ 共 $m = 3$ 个，$P = \frac{3}{6} = \frac{1}{2}$。

**例 2**：随机变量 $X$ 的分布列为 $P(X=0) = \frac{1}{2}$，$P(X=1) = \frac{1}{2}$，求 $E(X)$ 和 $D(X)$。

**解**：$E(X) = 0 \times \frac{1}{2} + 1 \times \frac{1}{2} = \frac{1}{2}$；$D(X) = (0 - \frac{1}{2})^2 \times \frac{1}{2} + (1 - \frac{1}{2})^2 \times \frac{1}{2} = \frac{1}{4}$。

## 易错点

- 古典概型中**基本事件等可能**条件不满足时不能直接用。
- 条件概率与独立事件**混淆**。
- 分布列概率之和**必须为 1**，漏算或算错。
- 期望与方差公式中**平方**处理错误。
- 频率分布直方图中**组距**与频率关系错误。

## 背记要点

1. 古典概型：$P(A) = \frac{m}{n}$。
2. 条件概率：$P(B \mid A) = \frac{P(AB)}{P(A)}$。
3. 独立事件：$P(AB) = P(A)P(B)$。
4. 期望：$E(X) = \sum x_i p_i$。
5. 方差：$D(X) = \sum (x_i - E(X))^2 p_i$。

## 自测题

1. 掷一枚硬币，正面朝上的概率是____。
2. 从 1 到 10 中任取一个数，取到偶数的概率是____。
3. 若 $P(A) = 0.5$，$P(B) = 0.4$ 且 $A$、$B$ 独立，则 $P(AB) =$____。
4. 随机变量 $X$ 取 1、2 各概率 $\frac{1}{2}$，则 $E(X) =$____。
5. 分布列中所有概率之和等于____。

## 相关知识点

概率与计数原理结合，见 [[专题十七 计数原理与二项式]]；与数列结合求期望见 [[专题十 数列]]；统计与函数图像结合见 [[专题二 函数的概念与性质]]。
