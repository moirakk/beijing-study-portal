---
title: 7.2 离散型随机变量及其分布列
date: 2026-08-10
---

# 7.2 离散型随机变量及其分布列

## 概念定义

**随机变量**：如果随机试验的结果可以用一个变量 $X$ 来表示，且 $X$ 随试验结果的不同而变化，则称 $X$ 为随机变量。

**离散型随机变量**：取值可以**一一列举**出来的随机变量称为离散型随机变量。

**分布列**：设离散型随机变量 $X$ 可能取值为 $x_1, x_2, \dots, x_n$，$X$ 取每个值 $x_i$ 的概率为 $p_i = P(X = x_i)$，则表格
$$
\begin{array}{c|cccc}
X & x_1 & x_2 & \cdots & x_n \\
\hline
P & p_1 & p_2 & \cdots & p_n
\end{array}
$$
称为 $X$ 的分布列。

**分布列性质**：$p_i \ge 0$；$\sum_{i=1}^n p_i = 1$。

## 知识梳理

| 项目 | 内容 |
| --- | --- |
| 定义 | 取值可一一列举的随机变量 |
| 分布列 | 列出 $X$ 各取值及其概率 |
| 性质 1 | $p_i \ge 0$ |
| 性质 2 | $\sum p_i = 1$ |
| 常见分布 | 两点分布、二项分布、超几何分布 |

## 分布列示意

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="d1a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker></defs>
  <line x1="40" y1="200" x2="330" y2="200" stroke="#64748b" stroke-width="2" marker-end="url(#d1a)"/>
  <line x1="40" y1="200" x2="40" y2="30" stroke="#64748b" stroke-width="2" marker-end="url(#d1a)"/>
  <text x="320" y="220" font-size="12" fill="#64748b">X</text>
  <text x="20" y="30" font-size="12" fill="#64748b">P</text>
  <line x1="80" y1="200" x2="80" y2="60" stroke="#2563eb" stroke-width="3"/>
  <line x1="150" y1="200" x2="150" y2="110" stroke="#2563eb" stroke-width="3"/>
  <line x1="220" y1="200" x2="220" y2="150" stroke="#2563eb" stroke-width="3"/>
  <line x1="290" y1="200" x2="290" y2="180" stroke="#2563eb" stroke-width="3"/>
  <text x="80" y="50" font-size="11" fill="#2563eb" text-anchor="middle">p₁</text>
  <text x="150" y="100" font-size="11" fill="#2563eb" text-anchor="middle">p₂</text>
  <text x="220" y="140" font-size="11" fill="#2563eb" text-anchor="middle">p₃</text>
  <text x="290" y="170" font-size="11" fill="#2563eb" text-anchor="middle">p₄</text>
  <text x="80" y="218" font-size="11" fill="#64748b" text-anchor="middle">x₁</text>
  <text x="150" y="218" font-size="11" fill="#64748b" text-anchor="middle">x₂</text>
  <text x="220" y="218" font-size="11" fill="#64748b" text-anchor="middle">x₃</text>
  <text x="290" y="218" font-size="11" fill="#64748b" text-anchor="middle">x₄</text>
  <text x="180" y="30" font-size="12" fill="#16a34a" text-anchor="middle">柱高 = 概率，各柱高之和 = 1</text>
</svg>

## 典型例题

**例 1**：抛掷一枚质地均匀的骰子，设 $X$ 表示出现的点数，写出 $X$ 的分布列。

**解**：$X$ 取 $1,2,3,4,5,6$，每个概率均为 $\dfrac{1}{6}$。分布列为 $P(X=k) = \dfrac{1}{6}$，$k=1,\dots,6$。

**例 2**：设随机变量 $X$ 的分布列为 $P(X=k) = \dfrac{a}{k(k+1)}$，$k=1,2,3$，求 $a$。

**解**：由 $\sum p_i = 1$：$\dfrac{a}{1\cdot2} + \dfrac{a}{2\cdot3} + \dfrac{a}{3\cdot4} = a(\dfrac{1}{2} + \dfrac{1}{6} + \dfrac{1}{12}) = a \cdot \dfrac{3}{4} = 1$，故 $a = \dfrac{4}{3}$。

## 易错点

- 分布列中所有概率之和必须为 1，用于求参数。
- 概率 $p_i$ 必须非负。
- 随机变量取值要**一一列举完整**，不能遗漏。
- 区分"随机变量"与"随机试验的结果"。

## 背记要点

1. 离散型随机变量取值可一一列举。
2. 分布列性质：$p_i \ge 0$，$\sum p_i = 1$。
3. 分布列是研究随机变量数字特征的基础。
4. 常见分布：两点分布、二项分布、超几何分布。

## 自测题

1. 抛两枚硬币，设 $X$ 为正面朝上的枚数，写出 $X$ 的分布列。
2. 分布列中所有概率之和等于____。
3. 若 $P(X=k) = c$（$k=1,2,3$），求 $c$。
4. 判断：随机变量 $X$ 的取值可以无限且不可列举。（　）

## 相关知识点

分布列的数字特征见 [[7.3 离散型随机变量的数字特征]]；常见分布见 [[7.4 二项分布与超几何分布]]。
