---
title: 15.1 轴对称及其性质
date: 2026-08-06
---

# 15.1 轴对称及其性质

## 概念定义

如果一个图形沿一条直线折叠，直线两旁的部分能够互相重合，这个图形就叫做轴对称图形，这条直线就是它的对称轴。

如果把一个图形沿着某一条直线折叠后，能够与另一个图形重合，那么就说这两个图形关于这条直线成轴对称，这条直线叫做对称轴，折叠后重合的点是对应点，叫做对称点。

<svg width="380" height="190" style="max-width:100%;display:block;margin:1em auto" viewBox="0 0 380 190">
  <!-- 对称轴 l -->
  <line x1="190" y1="10" x2="190" y2="180" stroke="#424242" stroke-width="2" stroke-dasharray="8,4"/>
  <text x="194" y="18" font-size="13" fill="#424242" font-style="italic">l</text>
  <!-- 三角形 ABC（左） -->
  <polygon points="50,160 130,160 90,30" fill="#e1bee7" stroke="#7b1fa2" stroke-width="2"/>
  <text x="86" y="22" font-size="13" fill="#7b1fa2" font-weight="bold" text-anchor="middle">A</text>
  <text x="36" y="172" font-size="13" fill="#7b1fa2" font-weight="bold">B</text>
  <text x="132" y="172" font-size="13" fill="#7b1fa2" font-weight="bold">C</text>
  <!-- 三角形 A'B'C'（右，对称） -->
  <polygon points="330,160 250,160 290,30" fill="#e1bee7" stroke="#9c27b0" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="290" y="22" font-size="13" fill="#9c27b0" font-weight="bold" text-anchor="middle">A'</text>
  <text x="334" y="172" font-size="13" fill="#9c27b0" font-weight="bold">B'</text>
  <text x="240" y="172" font-size="13" fill="#9c27b0" font-weight="bold">C'</text>
  <!-- 对应点连线（垂直于对称轴） -->
  <line x1="90" y1="30" x2="290" y2="30" stroke="#424242" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="50" y1="160" x2="330" y2="160" stroke="#424242" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="130" y1="160" x2="250" y2="160" stroke="#424242" stroke-width="1" stroke-dasharray="3,3"/>
  <!-- 箭头说明 -->
  <text x="190" y="185" font-size="12" fill="#424242" text-anchor="middle">△ABC 与 △A'B'C' 关于直线 l 成轴对称</text>
</svg>

## 轴对称的性质

1. 关于某条直线对称的两个图形全等。
2. 如果两个图形关于某直线对称，那么对称轴是任何一对对应点所连线段的垂直平分线。
3. 轴对称图形的对称轴，是任何一对对应点所连线段的垂直平分线。

## 常见轴对称图形

- **线段**：有两条对称轴，一条是线段所在直线，另一条是线段的垂直平分线。
- **角**：有一条对称轴，是角平分线所在的直线。
- **等腰三角形**：有一条对称轴，是底边上的高（中线、顶角平分线）所在的直线。
- **等边三角形**：有三条对称轴。
- **圆**：有无数条对称轴，都是经过圆心的直线。

## 例题解析

**例**：如图，$\triangle ABC$ 与 $\triangle A'B'C'$ 关于直线 $l$ 对称，$AB=6$，$\angle A=40^{\circ}$。求 $A'B'$ 和 $\angle A'$ 的度数。

因为轴对称的两个图形全等，所以：
$$A'B'=AB=6,\quad \angle A'=\angle A=40^{\circ}$$

## 易错点

- 对称轴是直线，不是线段或射线。
- 轴对称图形是一个图形自身的性质；两个图形成轴对称是两个图形之间的关系。
- 找对称轴时，要确保折叠后两部分完全重合。

## 轴对称与全等

轴对称图形沿对称轴折叠后两部分完全重合，因此轴对称的两个部分全等。这一性质常用于证明线段相等、角相等。

例如：等腰三角形是轴对称图形，底边上的高所在直线是对称轴，折叠后两腰重合，两底角相等。
- 轴对称图形至少有一条对称轴。

## 自测题

1. 如果一个图形沿一条直线折叠，直线两旁的部分能够____，这个图形就是轴对称图形。
2. 对称轴是任何一对对应点所连线段的____。
3. 等边三角形有____条对称轴。
4. 关于某直线对称的两个图形____（填"全等"或"相似"）。

相关知识点：[[15.1.2 线段的垂直平分线]]、[[15.2 画轴对称的图形]]、[[15.3 等腰三角形与等边三角形]]
