---
title: 14.3 角的平分线
date: 2026-08-06
---

# 14.3 角的平分线

## 概念定义

从一个角的顶点出发，把这个角分成相等的两个角的射线叫做这个角的平分线。

三角形的角平分线是指三角形一个内角的平分线与对边相交，顶点和交点之间的线段。

<svg width="320" height="200" style="max-width:100%;display:block;margin:1em auto" viewBox="0 0 320 200">
  <!-- 角 AOB -->
  <line x1="160" y1="160" x2="40" y2="40" stroke="#7b1fa2" stroke-width="2"/>
  <line x1="160" y1="160" x2="280" y2="40" stroke="#7b1fa2" stroke-width="2"/>
  <!-- 角平分线 OC -->
  <line x1="160" y1="160" x2="160" y2="30" stroke="#9c27b0" stroke-width="2" stroke-dasharray="6,3"/>
  <!-- 顶点标注 -->
  <text x="155" y="178" font-size="14" fill="#7b1fa2" font-weight="bold" text-anchor="middle">O</text>
  <text x="28" y="36" font-size="14" fill="#7b1fa2" font-weight="bold">A</text>
  <text x="282" y="36" font-size="14" fill="#7b1fa2" font-weight="bold">B</text>
  <text x="162" y="22" font-size="14" fill="#9c27b0" font-weight="bold">C</text>
  <!-- 点 P 在角平分线上 -->
  <circle cx="160" cy="100" r="4" fill="#7b1fa2"/>
  <text x="168" y="98" font-size="13" fill="#7b1fa2" font-weight="bold">P</text>
  <!-- PD⊥OA, PE⊥OB -->
  <line x1="160" y1="100" x2="100" y2="100" stroke="#424242" stroke-width="1.5" stroke-dasharray="4,2"/>
  <line x1="160" y1="100" x2="220" y2="100" stroke="#424242" stroke-width="1.5" stroke-dasharray="4,2"/>
  <rect x="94" y="94" width="6" height="6" fill="none" stroke="#424242" stroke-width="1.5"/>
  <rect x="220" y="94" width="6" height="6" fill="none" stroke="#424242" stroke-width="1.5"/>
  <text x="94" y="118" font-size="12" fill="#424242">D</text>
  <text x="222" y="118" font-size="12" fill="#424242">E</text>
  <!-- 性质说明 -->
  <text x="160" y="192" font-size="12" fill="#9c27b0" text-anchor="middle" font-weight="bold">PD = PE（P到角两边距离相等）</text>
</svg>

## 角平分线的性质定理

**性质定理**：角的平分线上的点到角的两边的距离相等。

如图，$OC$ 平分 $\angle AOB$，点 $P$ 在 $OC$ 上，$PD\perp OA$，$PE\perp OB$，则：
$$PD=PE$$

## 角平分线的判定定理

**判定定理**：角的内部到角的两边距离相等的点在角的平分线上。

若点 $P$ 在 $\angle AOB$ 的内部，$PD\perp OA$，$PE\perp OB$，且 $PD=PE$，则点 $P$ 在 $\angle AOB$ 的平分线上。

## 例题解析

**例**：如图，$BD$ 是 $\angle ABC$ 的平分线，$DE\perp AB$，$DF\perp BC$，$DE=5$。求 $DF$ 的长。

因为 $BD$ 平分 $\angle ABC$，且 $DE\perp AB$，$DF\perp BC$，根据角平分线的性质定理，得：
$$DF=DE=5$$

## 易错点

- 角平分线的性质中的"距离"是指垂线段的长度，必须有垂直条件。
- 使用判定定理时，点必须在角的**内部**。
- 不要混淆角的平分线和三角形的角平分线，前者是射线，后者是线段。

## 角平分线模型

常见的角平分线模型：
- 在角平分线上取一点，向两边作垂线，利用"距离相等"转化线段。
- 遇到角平分线时，常构造全等三角形，如截长补短法。
- 角平分线 + 平行线 $\Rightarrow$ 等腰三角形。
- 角平分线常与全等三角形综合考查。

## 自测题

1. 角平分线上的点到角的两边的____相等。
2. 角的内部到角的两边距离相等的点在角的____上。
3. 如图，$OP$ 平分 $\angle AOB$，$PC\perp OA$，$PD\perp OB$，$PC=3$，则 $PD=$____。
4. 到三角形三边距离相等的点是三角形____的交点。

相关知识点：[[14.1 全等三角形及其性质]]、[[14.2 三角形全等的判定]]、[[15.1.2 线段的垂直平分线]]
