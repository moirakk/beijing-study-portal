---
title: 综合与实践：确定匀质薄板的重心位置
date: 2026-08-06
---

# 综合与实践：确定匀质薄板的重心位置

## 概念定义

- **重心**：物体各部分所受重力的合力的作用点，叫做物体的重心。
- **匀质薄板**：质量分布均匀、厚度很薄的板状物体。

对于匀质薄板，重心只与几何形状有关，称为形心。规则图形的重心在其几何中心。

<svg width="320" height="200" style="max-width:100%;display:block;margin:1em auto" viewBox="0 0 320 200">
  <!-- 三角形 ABC -->
  <polygon points="160,15 30,175 290,175" fill="#e1bee7" stroke="#7b1fa2" stroke-width="2"/>
  <!-- 三条中线 -->
  <!-- D为BC中点(160,175), E为AC中点(225,95), F为AB中点(95,95) -->
  <line x1="160" y1="15" x2="160" y2="175" stroke="#9c27b0" stroke-width="1.5" stroke-dasharray="6,3"/>
  <line x1="30" y1="175" x2="225" y2="95" stroke="#9c27b0" stroke-width="1.5" stroke-dasharray="6,3"/>
  <line x1="290" y1="175" x2="95" y2="95" stroke="#9c27b0" stroke-width="1.5" stroke-dasharray="6,3"/>
  <!-- 重心 G（三中线交点，约在(160,122)） -->
  <circle cx="160" cy="122" r="5" fill="#7b1fa2"/>
  <text x="168" y="118" font-size="13" fill="#7b1fa2" font-weight="bold">G（重心）</text>
  <!-- 顶点标注 -->
  <text x="155" y="10" font-size="14" fill="#7b1fa2" font-weight="bold" text-anchor="middle">A</text>
  <text x="16" y="188" font-size="14" fill="#7b1fa2" font-weight="bold">B</text>
  <text x="292" y="188" font-size="14" fill="#7b1fa2" font-weight="bold">C</text>
  <!-- 中点标注 -->
  <circle cx="160" cy="175" r="3" fill="#9c27b0"/>
  <text x="162" y="192" font-size="11" fill="#9c27b0">D</text>
  <circle cx="225" cy="95" r="3" fill="#9c27b0"/>
  <text x="228" y="93" font-size="11" fill="#9c27b0">E</text>
  <circle cx="95" cy="95" r="3" fill="#9c27b0"/>
  <text x="80" y="93" font-size="11" fill="#9c27b0">F</text>
  <!-- 比例标注 -->
  <text x="160" y="198" font-size="11" fill="#424242" text-anchor="middle">AG:GD = BG:GE = CG:GF = 2:1</text>
</svg>

## 确定重心的方法

**悬挂法**：
1. 在薄板边缘任选一点 $A$，用细线悬挂起来，待静止后沿细线方向在板上画出直线 $l_1$。
2. 换另一点 $B$ 悬挂，待静止后画出直线 $l_2$。
3. $l_1$ 与 $l_2$ 的交点即为薄板的重心。

**支撑法**：
- 用手指支撑薄板，若能保持平衡，则支撑点必在过重心的竖直线上。
- 多次尝试不同支撑位置，可大致确定重心。

## 数学原理

三角形薄板的重心在其三条中线的交点处，即重心位置。重心把每条中线分成 $2:1$ 的两段，较长的一段在顶点与重心之间。

对 $\triangle ABC$，三条中线 $AD$、$BE$、$CF$ 交于点 $G$，则：
$$AG:GD=BG:GE=CG:GF=2:1$$

## 例题解析

**例**：一块匀质三角形薄板，已知一条中线长为 $12\text{ cm}$，求重心到对应顶点的距离。

因为重心把中线分成 $2:1$ 的两段，所以重心到顶点的距离为：
$$12\times\frac{2}{3}=8\text{ cm}$$

## 易错点

- 悬挂时必须在静止状态下画线，否则结果不准确。
- 重心不一定在物体上，如圆环的重心在圆心处，不在圆环上。
- 非匀质物体的重心位置与质量分布有关，不能只看几何形状。

## 拓展思考

匀质薄板的重心位置在生活中有广泛应用，如不倒翁的设计、运动员平衡训练、悬挂画框等。掌握重心位置有助于理解物体的稳定性。

## 自测题

1. 匀质三角形薄板的重心在____的交点处。
2. 重心把每条中线分成____的两段。
3. 用悬挂法确定重心时，至少需要悬挂____次。
4. 若三角形中线长为 $15\text{ cm}$，则重心到对边中点的距离为____。

相关知识点：[[13.2 与三角形有关的线段]]、[[13.1 三角形的概念]]
