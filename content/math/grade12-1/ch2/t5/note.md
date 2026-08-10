---
title: 7.5 正态分布
date: 2026-08-10
---

# 7.5 正态分布

## 概念定义

**正态分布**：若随机变量 $X$ 的概率密度函数为 $f(x) = \dfrac{1}{\sqrt{2\pi}\sigma} e^{-\frac{(x-\mu)^2}{2\sigma^2}}$，则称 $X$ 服从正态分布，记作 $X \sim N(\mu, \sigma^2)$。其中 $\mu$ 是均值，$\sigma$ 是标准差。

**标准正态分布**：$\mu = 0$，$\sigma = 1$ 时的正态分布，记作 $N(0,1)$。

**3σ 原则**：$P(\mu-\sigma < X < \mu+\sigma) \approx 0.6827$；$P(\mu-2\sigma < X < \mu+2\sigma) \approx 0.9545$；$P(\mu-3\sigma < X < \mu+3\sigma) \approx 0.9973$。

**正态曲线性质**：关于 $x = \mu$ 对称；在 $x = \mu$ 处取最大值；曲线与 $x$ 轴围成的面积为 1；$\sigma$ 越大曲线越"矮胖"，$\sigma$ 越小越"高瘦"。

## 知识梳理

| 性质 | 内容 |
| --- | --- |
| 对称轴 | $x = \mu$ |
| 峰值 | $x = \mu$ 处最大 |
| 面积 | 曲线与 x 轴围成面积 = 1 |
| σ 影响 | σ 大则矮胖，σ 小则高瘦 |
| 3σ 原则 | 68.27% / 95.45% / 99.73% |

## 正态曲线示意

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="n1a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker></defs>
  <line x1="30" y1="200" x2="340" y2="200" stroke="#64748b" stroke-width="2" marker-end="url(#n1a)"/>
  <line x1="30" y1="200" x2="30" y2="30" stroke="#64748b" stroke-width="2" marker-end="url(#n1a)"/>
  <path d="M30,200 C60,200 100,60 180,40 C260,60 300,200 330,200" fill="none" stroke="#2563eb" stroke-width="3"/>
  <line x1="180" y1="200" x2="180" y2="40" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/>
  <text x="180" y="28" font-size="12" fill="#dc2626" text-anchor="middle">x = μ</text>
  <line x1="120" y1="200" x2="120" y2="120" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="240" y1="200" x2="240" y2="120" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="120" y="218" font-size="11" fill="#16a34a" text-anchor="middle">μ-σ</text>
  <text x="240" y="218" font-size="11" fill="#16a34a" text-anchor="middle">μ+σ</text>
  <text x="180" y="60" font-size="12" fill="#64748b" text-anchor="middle">σ 小：高瘦</text>
  <text x="180" y="80" font-size="12" fill="#64748b" text-anchor="middle">σ 大：矮胖</text>
  <text x="180" y="100" font-size="12" fill="#16a34a" text-anchor="middle">μ±σ 内面积约 68.3%</text>
</svg>

## 典型例题

**例 1**：设 $X \sim N(2, 4)$，求 $P(X \le 2)$。

**解**：正态曲线关于 $x = \mu = 2$ 对称，故 $P(X \le 2) = \dfrac{1}{2}$。

**例 2**：设 $X \sim N(0, 1)$，已知 $P(X < 1) = 0.8413$，求 $P(-1 < X < 1)$。

**解**：由对称性 $P(X < -1) = 1 - 0.8413 = 0.1587$，故 $P(-1 < X < 1) = 0.8413 - 0.1587 = 0.6826$。

## 易错点

- 正态曲线关于 $x = \mu$ 对称，不是关于 $y$ 轴对称（除非 $\mu = 0$）。
- $\sigma^2$ 是方差，$\sigma$ 是标准差，注意区分。
- 3σ 原则中 $\mu \pm \sigma$ 内概率约 68.27%，不是 95%。
- 求区间概率要利用对称性和总面积 1。

## 背记要点

1. $X \sim N(\mu, \sigma^2)$，曲线关于 $x=\mu$ 对称。
2. 曲线与 x 轴围成面积 = 1。
3. 3σ 原则：68.27% / 95.45% / 99.73%。
4. σ 越大曲线越矮胖，σ 越小越高瘦。

## 自测题

1. 标准正态分布 $N(0,1)$ 的均值是____，方差是____。
2. 设 $X \sim N(3, 9)$，求 $P(X \le 3)$。
3. 正态曲线在 $x =$____处取得最大值。
4. 判断：$\mu \pm 2\sigma$ 内概率约为 95.45%。（　）

## 相关知识点

正态分布是二项分布的极限，见 [[7.4 二项分布与超几何分布]]；数字特征见 [[7.3 离散型随机变量的数字特征]]。
