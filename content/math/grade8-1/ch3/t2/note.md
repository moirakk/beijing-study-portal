---
title: 15.1.2 线段的垂直平分线
date: 2026-08-06
---

# 15.1.2 线段的垂直平分线

## 概念定义

经过线段中点并且垂直于这条线段的直线，叫做这条线段的垂直平分线，也叫中垂线。

<svg width="340" height="200" style="max-width:100%;display:block;margin:1em auto" viewBox="0 0 340 200">
  <!-- 线段 AB -->
  <line x1="60" y1="130" x2="280" y2="130" stroke="#7b1fa2" stroke-width="2.5"/>
  <circle cx="60" cy="130" r="4" fill="#7b1fa2"/>
  <circle cx="280" cy="130" r="4" fill="#7b1fa2"/>
  <text x="44" y="148" font-size="14" fill="#7b1fa2" font-weight="bold">A</text>
  <text x="282" y="148" font-size="14" fill="#7b1fa2" font-weight="bold">B</text>
  <!-- 中点 M -->
  <circle cx="170" cy="130" r="4" fill="#9c27b0"/>
  <text x="166" y="150" font-size="13" fill="#9c27b0" font-weight="bold">M</text>
  <!-- 垂直平分线 l -->
  <line x1="170" y1="20" x2="170" y2="185" stroke="#424242" stroke-width="2" stroke-dasharray="7,4"/>
  <rect x="164" y="124" width="6" height="6" fill="none" stroke="#424242" stroke-width="1.5"/>
  <text x="174" y="18" font-size="13" fill="#424242" font-style="italic">l</text>
  <!-- 点 P 在垂直平分线上 -->
  <circle cx="170" cy="65" r="4" fill="#7b1fa2"/>
  <text x="176" y="63" font-size="13" fill="#7b1fa2" font-weight="bold">P</text>
  <!-- PA, PB -->
  <line x1="170" y1="65" x2="60" y2="130" stroke="#9c27b0" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="170" y1="65" x2="280" y2="130" stroke="#9c27b0" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- 标注 PA=PB -->
  <text x="100" y="90" font-size="12" fill="#9c27b0" font-style="italic">PA</text>
  <text x="228" y="90" font-size="12" fill="#9c27b0" font-style="italic">PB</text>
  <text x="170" y="195" font-size="12" fill="#9c27b0" text-anchor="middle" font-weight="bold">PA = PB（垂直平分线上的点到两端点距离相等）</text>
</svg>

## 垂直平分线的性质定理

**性质定理**：线段垂直平分线上的点与这条线段两个端点的距离相等。

如图，直线 $l$ 是线段 $AB$ 的垂直平分线，点 $P$ 在 $l$ 上，则：
$$PA=PB$$

## 垂直平分线的判定定理

**判定定理**：与一条线段两个端点距离相等的点，在这条线段的垂直平分线上。

若 $PA=PB$，则点 $P$ 在线段 $AB$ 的垂直平分线上。

## 作图方法

用尺规作线段的垂直平分线：
1. 分别以线段的两个端点 $A$、$B$ 为圆心，以大于 $\dfrac{1}{2}AB$ 的长为半径画弧。
2. 两弧分别相交于两点 $C$、$D$。
3. 作直线 $CD$，即为线段 $AB$ 的垂直平分线。

## 例题解析

**例**：在 $\triangle ABC$ 中，$AB=AC$，$AB$ 的垂直平分线交 $AC$ 于点 $D$，$\triangle BCD$ 的周长为 $18$，$BC=8$。求 $AC$ 的长。

因为 $D$ 在 $AB$ 的垂直平分线上，所以 $DA=DB$。
$\triangle BCD$ 的周长为：
$$BC+CD+DB=BC+CD+DA=BC+AC=18$$
所以 $AC=18-8=10$。

## 易错点

- 垂直平分线是直线，不是线段。
- 用尺规作图时，半径必须大于线段长度的一半，否则两弧不相交。
- 垂直平分线常与等腰三角形、轴对称综合考查。
- 三角形三边垂直平分线的交点叫做外心，它到三个顶点的距离相等。

## 自测题

1. 线段的垂直平分线上的点到线段两个端点的____相等。
2. 到线段两个端点距离相等的点在线段的____上。
3. 用尺规作线段垂直平分线时，半径应____线段长的一半。
4. 若点 $P$ 在线段 $AB$ 的垂直平分线上，$PA=7$，则 $PB=$____。

相关知识点：[[15.1 轴对称及其性质]]、[[15.3 等腰三角形与等边三角形]]、[[14.3 角的平分线]]
