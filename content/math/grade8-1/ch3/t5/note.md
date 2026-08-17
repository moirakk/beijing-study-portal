---
title: 综合与实践：最短路径问题
date: 2026-08-06
---

# 综合与实践：最短路径问题

## 问题背景

最短路径问题是利用轴对称、平移等几何变换，将折线转化为直线，从而利用"两点之间线段最短"或"垂线段最短"解决问题。

<svg width="380" height="200" style="max-width:100%;display:block;margin:1em auto" viewBox="0 0 380 200">
  <!-- 直线 l -->
  <line x1="20" y1="130" x2="360" y2="130" stroke="#424242" stroke-width="2"/>
  <text x="362" y="128" font-size="13" fill="#424242" font-style="italic">l</text>
  <!-- 点 A（上方） -->
  <circle cx="80" cy="60" r="5" fill="#7b1fa2"/>
  <text x="66" y="56" font-size="14" fill="#7b1fa2" font-weight="bold">A</text>
  <!-- 点 B（上方） -->
  <circle cx="280" cy="80" r="5" fill="#7b1fa2"/>
  <text x="286" y="76" font-size="14" fill="#7b1fa2" font-weight="bold">B</text>
  <!-- A 关于 l 的对称点 A' -->
  <circle cx="80" cy="200" r="5" fill="#9c27b0"/>
  <text x="66" y="198" font-size="14" fill="#9c27b0" font-weight="bold">A'</text>
  <!-- A 到 l 的垂线（虚线） -->
  <line x1="80" y1="60" x2="80" y2="200" stroke="#9c27b0" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- 最优点 P（A'B 与 l 的交点，约在(160,130)） -->
  <circle cx="160" cy="130" r="5" fill="#7b1fa2"/>
  <text x="162" y="122" font-size="13" fill="#7b1fa2" font-weight="bold">P</text>
  <!-- A'B 连线（最短路径） -->
  <line x1="80" y1="200" x2="280" y2="80" stroke="#9c27b0" stroke-width="2"/>
  <!-- AP + PB 折线 -->
  <line x1="80" y1="60" x2="160" y2="130" stroke="#7b1fa2" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="160" y1="130" x2="280" y2="80" stroke="#7b1fa2" stroke-width="1.5" stroke-dasharray="4,3"/>
  <!-- 说明 -->
  <text x="190" y="170" font-size="12" fill="#9c27b0" text-anchor="middle" font-weight="bold">作 A 关于 l 的对称点 A'，连 A'B 交 l 于 P</text>
  <text x="190" y="185" font-size="12" fill="#424242" text-anchor="middle">PA + PB = A'B（最小值）</text>
</svg>

## 常见类型

**类型一：两点在直线同侧**

已知直线 $l$ 同侧有两点 $A$、$B$，在 $l$ 上找一点 $P$，使 $PA+PB$ 最小。

作法：
1. 作点 $A$ 关于直线 $l$ 的对称点 $A'$。
2. 连接 $A'B$，交直线 $l$ 于点 $P$。
3. 点 $P$ 即为所求，最小值为 $A'B$ 的长。

**类型二：点在直线两侧**

已知直线 $l$ 两侧有两点 $A$、$B$，在 $l$ 上找一点 $P$，使 $PA+PB$ 最小。

作法：直接连接 $AB$，交直线 $l$ 于点 $P$，点 $P$ 即为所求。

## 数学原理

- 轴对称变换保持点到对称轴上任意一点的距离不变。
- 两点之间，线段最短。
- 垂线段最短。

## 例题解析

**例**：如图，点 $A$、$B$ 在直线 $l$ 同侧，$A$ 到 $l$ 的距离为 $3$，$B$ 到 $l$ 的距离为 $5$，$AB=10$。求 $PA+PB$ 的最小值。

作 $A$ 关于 $l$ 的对称点 $A'$，则 $A'$ 到 $l$ 的距离也为 $3$，$A'$ 与 $B$ 在 $l$ 两侧的距离为 $3+5=8$。
由勾股定理：
$$A'B=\sqrt{8^2+10^2}=\sqrt{164}=2\sqrt{41}$$
所以 $PA+PB$ 的最小值为 $2\sqrt{41}$。

## 易错点

- 同侧问题必须作对称点，不能直接连接 $AB$。
- 对称点的距离要准确计算。
- 实际问题中要正确建立几何模型。

## 自测题

1. 最短路径问题常利用____变换把折线转化为直线。
2. 两点之间，____最短。
3. 点 $A$、$B$ 在直线 $l$ 同侧，要在 $l$ 上找一点 $P$ 使 $PA+PB$ 最小，需作点 $A$ 关于 $l$ 的____。
4. 轴对称变换____（填"改变"或"不改变"）点到对称轴的距离。

相关知识点：[[15.1 轴对称及其性质]]、[[15.2 画轴对称的图形]]、[[15.1.2 线段的垂直平分线]]
