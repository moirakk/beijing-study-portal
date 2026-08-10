---
title: 7.3 离散型随机变量的数字特征
date: 2026-08-10
---

# 7.3 离散型随机变量的数字特征

## 概念定义

**数学期望（均值）**：设离散型随机变量 $X$ 的分布列为 $P(X=x_i) = p_i$，则 $E(X) = \sum_{i=1}^n x_i p_i$ 称为 $X$ 的数学期望，反映随机变量取值的**平均水平**。

**方差**：$D(X) = \sum_{i=1}^n (x_i - E(X))^2 p_i$ 称为 $X$ 的方差，反映取值**偏离平均水平的程度**。标准差 $\sigma = \sqrt{D(X)}$。

**性质**：$E(aX+b) = aE(X) + b$；$D(aX+b) = a^2 D(X)$。方差也可用 $D(X) = E(X^2) - [E(X)]^2$ 计算。

## 知识梳理

| 项目 | 公式 | 意义 |
| --- | --- | --- |
| 期望 | $E(X) = \sum x_i p_i$ | 平均水平 |
| 方差 | $D(X) = \sum (x_i - E)^2 p_i$ | 离散程度 |
| 线性性质 | $E(aX+b) = aE(X)+b$ | 平移伸缩 |
| 方差性质 | $D(aX+b) = a^2 D(X)$ | 平移不变 |
| 简化公式 | $D(X) = E(X^2) - [E(X)]^2$ | 便于计算 |

## 期望与方差示意

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="e1a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker></defs>
  <line x1="40" y1="200" x2="330" y2="200" stroke="#64748b" stroke-width="2" marker-end="url(#e1a)"/>
  <line x1="40" y1="200" x2="40" y2="30" stroke="#64748b" stroke-width="2" marker-end="url(#e1a)"/>
  <text x="320" y="220" font-size="12" fill="#64748b">X</text>
  <text x="20" y="30" font-size="12" fill="#64748b">P</text>
  <line x1="90" y1="200" x2="90" y2="70" stroke="#2563eb" stroke-width="3"/>
  <line x1="170" y1="200" x2="170" y2="120" stroke="#2563eb" stroke-width="3"/>
  <line x1="250" y1="200" x2="250" y2="160" stroke="#2563eb" stroke-width="3"/>
  <line x1="185" y1="200" x2="185" y2="40" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/>
  <text x="185" y="32" font-size="12" fill="#dc2626" text-anchor="middle">E(X) 期望</text>
  <text x="90" y="60" font-size="11" fill="#2563eb" text-anchor="middle">x₁</text>
  <text x="170" y="110" font-size="11" fill="#2563eb" text-anchor="middle">x₂</text>
  <text x="250" y="150" font-size="11" fill="#2563eb" text-anchor="middle">x₃</text>
  <text x="180" y="30" font-size="12" fill="#16a34a" text-anchor="middle">方差 D(X) 衡量取值围绕期望的离散程度</text>
</svg>

## 典型例题

**例 1**：设 $X$ 的分布列为 $P(X=0)=\dfrac{1}{2}$，$P(X=1)=\dfrac{1}{3}$，$P(X=2)=\dfrac{1}{6}$，求 $E(X)$ 和 $D(X)$。

**解**：$E(X) = 0 \times \dfrac{1}{2} + 1 \times \dfrac{1}{3} + 2 \times \dfrac{1}{6} = \dfrac{1}{3} + \dfrac{1}{3} = \dfrac{2}{3}$。$E(X^2) = 0 + 1 \times \dfrac{1}{3} + 4 \times \dfrac{1}{6} = \dfrac{1}{3} + \dfrac{2}{3} = 1$。故 $D(X) = E(X^2) - [E(X)]^2 = 1 - \dfrac{4}{9} = \dfrac{5}{9}$。

**例 2**：已知 $E(X) = 2$，$D(X) = 3$，求 $E(2X+1)$ 和 $D(2X+1)$。

**解**：$E(2X+1) = 2E(X) + 1 = 2 \times 2 + 1 = 5$；$D(2X+1) = 2^2 D(X) = 4 \times 3 = 12$。

## 易错点

- 期望是加权平均，不是简单平均。
- 方差性质中系数要**平方**：$D(aX+b) = a^2 D(X)$。
- 用 $D(X) = E(X^2) - [E(X)]^2$ 时注意 $E(X^2)$ 与 $[E(X)]^2$ 的区别。
- 标准差是方差的算术平方根。

## 背记要点

1. $E(X) = \sum x_i p_i$。
2. $D(X) = E(X^2) - [E(X)]^2$。
3. $E(aX+b) = aE(X)+b$；$D(aX+b) = a^2 D(X)$。
4. 期望反映平均水平，方差反映离散程度。

## 自测题

1. 两点分布 $P(X=1)=p$，求 $E(X)$ 和 $D(X)$。
2. 若 $E(X)=3$，求 $E(3X-2)$。
3. 若 $D(X)=4$，求 $D(2X)$。
4. 判断：$D(X) = [E(X)]^2 - E(X^2)$。（　）

## 相关知识点

数字特征应用于二项分布、超几何分布，见 [[7.4 二项分布与超几何分布]]；分布列见 [[7.2 离散型随机变量及其分布列]]。
