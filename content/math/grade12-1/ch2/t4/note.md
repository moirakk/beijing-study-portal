---
title: 7.4 二项分布与超几何分布
date: 2026-08-10
---

# 7.4 二项分布与超几何分布

## 概念定义

**二项分布**：在 $n$ 次独立重复试验中，设事件 $A$ 发生的概率为 $p$，则 $A$ 发生次数 $X$ 服从二项分布，记作 $X \sim B(n, p)$，且 $P(X = k) = C_n^k p^k (1-p)^{n-k}$，$k = 0,1,\dots,n$。

**超几何分布**：从含 $M$ 件次品的 $N$ 件产品中不放回地抽取 $n$ 件，其中次品数 $X$ 服从超几何分布，$P(X = k) = \dfrac{C_M^k C_{N-M}^{n-k}}{C_N^n}$。

**数字特征**：二项分布 $E(X) = np$，$D(X) = np(1-p)$；超几何分布 $E(X) = n \cdot \dfrac{M}{N}$。

## 知识梳理

| 项目 | 二项分布 | 超几何分布 |
| --- | --- | --- |
| 抽样方式 | 有放回（独立） | 不放回 |
| 记法 | $X \sim B(n,p)$ | $X \sim H(N,M,n)$ |
| 概率 | $C_n^k p^k(1-p)^{n-k}$ | $\dfrac{C_M^k C_{N-M}^{n-k}}{C_N^n}$ |
| 期望 | $np$ | $n\dfrac{M}{N}$ |
| 方差 | $np(1-p)$ | $n\dfrac{M}{N}(1-\dfrac{M}{N})\dfrac{N-n}{N-1}$ |

## 二项分布概率示意

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="b1a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker></defs>
  <line x1="40" y1="200" x2="330" y2="200" stroke="#64748b" stroke-width="2" marker-end="url(#b1a)"/>
  <line x1="40" y1="200" x2="40" y2="30" stroke="#64748b" stroke-width="2" marker-end="url(#b1a)"/>
  <text x="320" y="220" font-size="12" fill="#64748b">k</text>
  <text x="20" y="30" font-size="12" fill="#64748b">P</text>
  <line x1="70" y1="200" x2="70" y2="180" stroke="#2563eb" stroke-width="3"/>
  <line x1="120" y1="200" x2="120" y2="120" stroke="#2563eb" stroke-width="3"/>
  <line x1="170" y1="200" x2="170" y2="70" stroke="#2563eb" stroke-width="3"/>
  <line x1="220" y1="200" x2="220" y2="120" stroke="#2563eb" stroke-width="3"/>
  <line x1="270" y1="200" x2="270" y2="180" stroke="#2563eb" stroke-width="3"/>
  <text x="70" y="218" font-size="11" fill="#64748b" text-anchor="middle">0</text>
  <text x="120" y="218" font-size="11" fill="#64748b" text-anchor="middle">1</text>
  <text x="170" y="218" font-size="11" fill="#64748b" text-anchor="middle">2</text>
  <text x="220" y="218" font-size="11" fill="#64748b" text-anchor="middle">3</text>
  <text x="270" y="218" font-size="11" fill="#64748b" text-anchor="middle">4</text>
  <text x="180" y="30" font-size="12" fill="#16a34a" text-anchor="middle">n=4, p=0.5 时二项分布概率分布</text>
  <text x="180" y="50" font-size="12" fill="#64748b" text-anchor="middle">中间概率最大，对称分布</text>
</svg>

## 典型例题

**例 1**：某射手每次射击命中率为 0.8，独立射击 5 次，求恰好命中 3 次的概率。

**解**：$X \sim B(5, 0.8)$，$P(X=3) = C_5^3 (0.8)^3 (0.2)^2 = 10 \times 0.512 \times 0.04 = 0.2048$。

**例 2**：袋中有 6 个白球、4 个黑球，不放回地取 3 个，求恰好取到 2 个白球的概率。

**解**：超几何分布，$N=10$，$M=6$，$n=3$，$k=2$：$P = \dfrac{C_6^2 C_4^1}{C_{10}^3} = \dfrac{15 \times 4}{120} = \dfrac{1}{2}$。

## 易错点

- 二项分布要求**独立重复试验**（有放回），超几何分布是**不放回**。
- 二项分布 $P(X=k)$ 中 $k$ 从 0 到 $n$。
- 超几何分布分子是 $C_M^k C_{N-M}^{n-k}$，分母是 $C_N^n$。
- 当 $n$ 相对 $N$ 很小时，超几何分布可近似看作二项分布。

## 背记要点

1. 二项分布 $P(X=k) = C_n^k p^k(1-p)^{n-k}$，$E = np$，$D = np(1-p)$。
2. 超几何分布 $P(X=k) = \dfrac{C_M^k C_{N-M}^{n-k}}{C_N^n}$，$E = n\dfrac{M}{N}$。
3. 二项分布对应有放回，超几何对应不放回。
4. 判断分布类型是解题第一步。

## 自测题

1. 抛掷硬币 10 次，正面朝上次数 $X$ 服从什么分布？
2. 二项分布 $B(6, 0.5)$ 的期望和方差各是多少？
3. 从 5 红 3 白球中不放回取 2 球，求取到 1 红 1 白的概率。
4. 判断：超几何分布是有放回抽样。（　）

## 相关知识点

二项分布是独立重复试验的推广，见 [[7.1 条件概率与全概率公式]]；数字特征见 [[7.3 离散型随机变量的数字特征]]。
