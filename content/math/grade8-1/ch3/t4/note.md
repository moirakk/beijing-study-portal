---
title: 15.3 等腰三角形与等边三角形
date: 2026-08-06
---

# 15.3 等腰三角形与等边三角形

## 等腰三角形的概念

有两边相等的三角形叫做等腰三角形。相等的两边叫做腰，另一边叫做底边，两腰的夹角叫做顶角，腰和底边的夹角叫做底角。

<svg width="360" height="200" style="max-width:100%;display:block;margin:1em auto" viewBox="0 0 360 200">
  <!-- 等腰三角形 ABC，AB=AC -->
  <polygon points="180,20 60,170 300,170" fill="#e1bee7" stroke="#7b1fa2" stroke-width="2"/>
  <!-- 顶点标注 -->
  <text x="175" y="14" font-size="14" fill="#7b1fa2" font-weight="bold" text-anchor="middle">A</text>
  <text x="44" y="184" font-size="14" fill="#7b1fa2" font-weight="bold">B</text>
  <text x="302" y="184" font-size="14" fill="#7b1fa2" font-weight="bold">C</text>
  <!-- 腰标注（AB=AC） -->
  <text x="108" y="90" font-size="13" fill="#9c27b0" font-weight="bold" text-anchor="middle">腰</text>
  <text x="252" y="90" font-size="13" fill="#9c27b0" font-weight="bold" text-anchor="middle">腰</text>
  <!-- 等号标记 -->
  <line x1="112" y1="78" x2="122" y2="72" stroke="#9c27b0" stroke-width="2"/>
  <line x1="108" y1="84" x2="118" y2="78" stroke="#9c27b0" stroke-width="2"/>
  <line x1="238" y1="72" x2="248" y2="78" stroke="#9c27b0" stroke-width="2"/>
  <line x1="242" y1="78" x2="252" y2="84" stroke="#9c27b0" stroke-width="2"/>
  <!-- 底边标注 -->
  <text x="180" y="188" font-size="13" fill="#7b1fa2" text-anchor="middle">底边 BC</text>
  <!-- 顶角标注 -->
  <path d="M180,20 Q168,38 162,36" fill="none" stroke="#7b1fa2" stroke-width="1.5"/>
  <text x="152" y="52" font-size="12" fill="#7b1fa2">顶角∠A</text>
  <!-- 底角标注 -->
  <path d="M60,170 Q78,158 80,148" fill="none" stroke="#9c27b0" stroke-width="1.5"/>
  <text x="82" y="158" font-size="12" fill="#9c27b0">∠B</text>
  <path d="M300,170 Q284,158 282,148" fill="none" stroke="#9c27b0" stroke-width="1.5"/>
  <text x="256" y="158" font-size="12" fill="#9c27b0">∠C</text>
  <!-- 三线合一 -->
  <line x1="180" y1="20" x2="180" y2="170" stroke="#424242" stroke-width="1.5" stroke-dasharray="5,3"/>
  <rect x="174" y="164" width="6" height="6" fill="none" stroke="#424242" stroke-width="1.5"/>
  <text x="180" y="200" font-size="12" fill="#424242" text-anchor="middle">∠B = ∠C（等边对等角）；AD 为高、中线、顶角平分线（三线合一）</text>
</svg>

## 等腰三角形的性质

1. **等边对等角**：等腰三角形的两个底角相等。
2. **三线合一**：等腰三角形顶角的平分线、底边上的中线、底边上的高互相重合。
3. 等腰三角形是轴对称图形，对称轴是底边上的高（中线、顶角平分线）所在的直线。

在 $\triangle ABC$ 中，若 $AB=AC$，则：
$$\angle B=\angle C$$
$$AD\perp BC,\quad BD=CD,\quad \angle BAD=\angle CAD$$

## 等腰三角形的判定

**等角对等边**：如果一个三角形有两个角相等，那么这两个角所对的边也相等。

## 等边三角形的性质与判定

**性质**：
- 三条边都相等，三个角都等于 $60^{\circ}$。
- 有三条对称轴。

**判定**：
1. 三条边都相等的三角形是等边三角形。
2. 三个角都相等的三角形是等边三角形。
3. 有一个角是 $60^{\circ}$ 的等腰三角形是等边三角形。

## 例题解析

**例**：在 $\triangle ABC$ 中，$AB=AC$，$\angle A=40^{\circ}$，求 $\angle B$ 的度数。

因为 $AB=AC$，所以 $\angle B=\angle C$。
$$\angle B=\frac{180^{\circ}-40^{\circ}}{2}=70^{\circ}$$

## 易错点

- "三线合一"必须是在等腰三角形中，且是针对底边而言。
- 等边三角形是特殊的等腰三角形，但等腰三角形不一定是等边三角形。
- 讨论等腰三角形时，注意分类讨论腰和底边。

## 自测题

1. 等腰三角形的两个底角____。
2. 等边三角形的每个内角都等于____。
3. 在 $\triangle ABC$ 中，$AB=AC$，$\angle B=50^{\circ}$，则 $\angle A=$____。
4. 有一个角是 $60^{\circ}$ 的等腰三角形是____三角形。

相关知识点：[[15.1 轴对称及其性质]]、[[15.1.2 线段的垂直平分线]]、[[13.1 三角形的概念]]
