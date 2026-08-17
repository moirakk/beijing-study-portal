---
title: 7.4 平移
date: 2026-08-05
---

# 平移

标签：#中考必考 #图形变换

## 一、平移的概念

在平面内，把一个图形**整体**沿某一**直线方向**移动一定的**距离**，图形的这种移动叫做**平移**。

平移的两个要素：**方向**和**距离**。

平移前后：原图形上一点 $P$ 移动到的新位置 $P'$ 叫做 $P$ 的**对应点**。

<svg viewBox="0 0 360 220" style="max-width:100%;display:block;margin:1em auto" xmlns="http://www.w3.org/2000/svg">
  <!-- 原三角形ABC -->
  <polygon points="50,170 110,170 80,90" fill="#e1bee7" stroke="#7b1fa2" stroke-width="2"/>
  <text x="44" y="185" font-size="13" fill="#7b1fa2" font-family="serif">A</text>
  <text x="112" y="185" font-size="13" fill="#7b1fa2" font-family="serif">B</text>
  <text x="76" y="82" font-size="13" fill="#7b1fa2" font-family="serif">C</text>
  <!-- 平移后三角形A'B'C' -->
  <polygon points="190,170 250,170 220,90" fill="#f3e5f5" stroke="#9c27b0" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="184" y="185" font-size="13" fill="#9c27b0" font-family="serif">A'</text>
  <text x="252" y="185" font-size="13" fill="#9c27b0" font-family="serif">B'</text>
  <text x="216" y="82" font-size="13" fill="#9c27b0" font-family="serif">C'</text>
  <!-- 对应点连线（平行且相等） -->
  <line x1="80" y1="170" x2="190" y2="170" stroke="#e91e63" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="110" y1="170" x2="250" y2="170" stroke="#e91e63" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="80" y1="90" x2="220" y2="90" stroke="#e91e63" stroke-width="1.5" stroke-dasharray="4,3"/>
  <!-- 平移方向箭头 -->
  <defs>
    <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#7b1fa2"/>
    </marker>
  </defs>
  <line x1="130" y1="40" x2="200" y2="40" stroke="#7b1fa2" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="148" y="32" font-size="12" fill="#7b1fa2">平移方向</text>
  <!-- 平移距离标注 -->
  <line x1="80" y1="200" x2="190" y2="200" stroke="#555" stroke-width="1"/>
  <line x1="80" y1="195" x2="80" y2="205" stroke="#555" stroke-width="1"/>
  <line x1="190" y1="195" x2="190" y2="205" stroke="#555" stroke-width="1"/>
  <text x="118" y="215" font-size="11" fill="#555">平移距离 AA'</text>
  <!-- 性质说明 -->
  <text x="270" y="120" font-size="11" fill="#555">AA'∥BB'∥CC'</text>
  <text x="270" y="135" font-size="11" fill="#555">AA'=BB'=CC'</text>
  <text x="270" y="150" font-size="11" fill="#555">△ABC≅△A'B'C'</text>
</svg>

## 二、平移的性质

1. 平移后的图形与原图形**形状、大小完全相同**（全等），只是位置改变；
2. **对应点的连线平行（或在同一条直线上）且相等**：

$$PP' \parallel QQ',\qquad PP' = QQ'$$

3. 对应线段平行（或共线）且相等，对应角相等。

> 💡 连接一对对应点的线段的**方向**就是平移方向，**长度**就是平移距离。

## 三、平移作图

已知图形和平移的方向、距离，作平移后的图形：

1. 找出图形的**关键点**（如三角形的三个顶点）；
2. 将每个关键点沿指定方向移动指定距离，得到对应点；
3. 顺次连接对应点。

## 四、例题解析

**例 1**：$\triangle ABC$ 沿 $BC$ 方向平移 $3\ \text{cm}$ 得 $\triangle A'B'C'$，$AB = 4$，$\angle B = 60^{\circ}$，求 $A'B'$、$\angle A'B'C'$ 及 $AA'$。

**解**：平移不改变形状大小，所以 $A'B' = AB = 4$，$\angle A'B'C' = \angle B = 60^{\circ}$；
对应点连线段等于平移距离，$AA' = 3\ \text{cm}$。

**例 2**：判断下列现象哪些是平移：
(1) 电梯的上下运动；(2) 钟表指针的转动；(3) 传送带上物品的移动。

**解**：(1)、(3) 是平移（沿直线方向整体移动）；(2) 不是，指针绕轴**旋转**，方向不断改变。

**例 3**：长方形草坪长 $20$ 米、宽 $10$ 米，中间有一条宽 $2$ 米的弯曲小路，求草坪（不含路）面积。

**解**：把小路"平移拉直"，草地可拼成长 $(20-2)$ 米、宽 $10$ 米的长方形，面积 $= 18 \times 10 = 180$ 平方米。

## 五、易错点

1. 平移是**整体**移动，图形上每一点移动的方向相同、距离相等。
2. 平移方向**不一定水平或竖直**，可以沿任意直线方向。
3. 对应点连线段"平行且相等"中，某些对应点连线可能**共线**，叙述时别遗漏。
4. 旋转、翻折不是平移；判断时抓住"方向不变、距离相同"。

## 六、自测题

1. 平移的两个要素是什么？
2. $\triangle ABC$ 平移后点 $A(2,3)$ 的对应点是 $A'$，若 $AA' = 5$，则点 $B$ 与其对应点 $B'$ 的距离是多少？
3. 判断：平移改变图形的位置和大小。（对/错）

<details>
<summary>参考答案</summary>

1. 平移的方向和平移的距离。
2. 5。平移中每一点移动的距离都相等。
3. 错。平移只改变位置，不改变形状和大小。

</details>

## 七、知识联系

- "对应点连线平行且相等"用到平行线的 [[概念]] 与 [[性质]]；
- 在坐标系中用坐标刻画平移，见 [[表示平移]]；
- 点的位置的坐标表示见 [[9.1 用坐标描述平面内点的位置]]。
