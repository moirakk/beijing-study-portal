---
title: 13.2 与三角形有关的线段
date: 2026-08-06
---

# 13.2 与三角形有关的线段

## 概念定义

三角形中三种重要的线段：高、中线和角平分线。

- **高**：从三角形的一个顶点向它的对边所在直线作垂线，顶点和垂足之间的线段叫做三角形的高。
- **中线**：连接三角形的一个顶点和它所对边的中点的线段叫做三角形的中线。
- **角平分线**：三角形的一个内角的平分线与它的对边相交，这个角的顶点和交点之间的线段叫做三角形的角平分线。

<svg width="480" height="190" style="max-width:100%;display:block;margin:1em auto" viewBox="0 0 480 190">
  <!-- 三角形（高） -->
  <polygon points="80,20 20,160 160,160" fill="#e1bee7" stroke="#7b1fa2" stroke-width="2"/>
  <text x="80" y="14" font-size="13" fill="#7b1fa2" font-weight="bold" text-anchor="middle">A</text>
  <text x="8" y="172" font-size="13" fill="#7b1fa2" font-weight="bold">B</text>
  <text x="162" y="172" font-size="13" fill="#7b1fa2" font-weight="bold">C</text>
  <!-- 高 AD -->
  <line x1="80" y1="20" x2="80" y2="160" stroke="#9c27b0" stroke-width="2" stroke-dasharray="5,3"/>
  <rect x="74" y="154" width="6" height="6" fill="none" stroke="#9c27b0" stroke-width="1.5"/>
  <text x="84" y="148" font-size="12" fill="#9c27b0">D</text>
  <text x="80" y="182" font-size="12" fill="#424242" text-anchor="middle">高 AD⊥BC</text>

  <!-- 三角形（中线） -->
  <polygon points="250,20 190,160 330,160" fill="#e1bee7" stroke="#7b1fa2" stroke-width="2"/>
  <text x="250" y="14" font-size="13" fill="#7b1fa2" font-weight="bold" text-anchor="middle">A</text>
  <text x="178" y="172" font-size="13" fill="#7b1fa2" font-weight="bold">B</text>
  <text x="332" y="172" font-size="13" fill="#7b1fa2" font-weight="bold">C</text>
  <!-- 中线 AM，M为BC中点 -->
  <line x1="250" y1="20" x2="260" y2="160" stroke="#9c27b0" stroke-width="2" stroke-dasharray="5,3"/>
  <circle cx="260" cy="160" r="3" fill="#7b1fa2"/>
  <text x="264" y="155" font-size="12" fill="#9c27b0">M</text>
  <text x="260" y="182" font-size="12" fill="#424242" text-anchor="middle">中线 AM，BM=MC</text>

  <!-- 三角形（角平分线） -->
  <polygon points="420,20 360,160 480,160" fill="#e1bee7" stroke="#7b1fa2" stroke-width="2"/>
  <text x="420" y="14" font-size="13" fill="#7b1fa2" font-weight="bold" text-anchor="middle">A</text>
  <text x="348" y="172" font-size="13" fill="#7b1fa2" font-weight="bold">B</text>
  <text x="482" y="172" font-size="13" fill="#7b1fa2" font-weight="bold">C</text>
  <!-- 角平分线 AN -->
  <line x1="420" y1="20" x2="420" y2="160" stroke="#9c27b0" stroke-width="2" stroke-dasharray="5,3"/>
  <circle cx="420" cy="160" r="3" fill="#7b1fa2"/>
  <text x="424" y="155" font-size="12" fill="#9c27b0">N</text>
  <text x="420" y="182" font-size="12" fill="#424242" text-anchor="middle">角平分线 AN</text>
</svg>

## 重要性质

**高的性质**：
- 锐角三角形的三条高交于三角形内部一点。
- 直角三角形的三条高交于直角顶点。
- 钝角三角形的三条高所在直线交于三角形外部一点。

**中线的性质**：
- 三角形的三条中线交于一点，这个点叫做三角形的重心。
- 重心把每条中线分成 $2:1$ 的两段。
- 每条中线把三角形分成面积相等的两部分。

**角平分线的性质**：
- 三角形的三条角平分线交于三角形内部一点，这个点叫做内心。
- 内心到三角形三边的距离相等。

## 例题解析

**例**：在 $\triangle ABC$ 中，$AD$ 是中线，$BE$ 是角平分线，$CF$ 是高。若 $AB=6$，$AC=8$，求 $\triangle ABD$ 与 $\triangle ACD$ 的面积关系。

因为 $AD$ 是中线，所以 $BD=CD$。又因为 $\triangle ABD$ 与 $\triangle ACD$ 同高，所以：
$$S_{\triangle ABD}=S_{\triangle ACD}$$

## 易错点

- 画钝角三角形的高时，两条高在三角形外部，容易画错位置。
- 角平分线是线段，不是射线；要与角的平分线区分。
- "高"与"垂线"不同，高是线段，垂线是直线。

## 解题技巧

- 涉及面积问题时，常利用"等底同高"或"同底等高"转化。
- 画高时先判断三角形的类型，确定高的位置。
- 中线把三角形分成面积相等的两部分，这一性质在面积比问题中常用。

## 自测题

1. 三角形的三条中线交于一点，该点叫做____。
2. 直角三角形三条高的交点是____。
3. 等腰三角形底边上的高、中线、顶角平分线____（填"重合"或"不重合"）。
4. 在 $\triangle ABC$ 中，$AD$ 为中线，若 $\triangle ABC$ 的面积为 $24$，则 $\triangle ABD$ 的面积为____。

相关知识点：[[13.1 三角形的概念]]、[[13.3 三角形的内角与外角]]、[[综合与实践：确定匀质薄板的重心位置]]
