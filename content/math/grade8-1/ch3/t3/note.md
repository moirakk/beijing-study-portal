---
title: 15.2 画轴对称的图形
date: 2026-08-06
---

# 15.2 画轴对称的图形

## 概念定义

画一个图形关于某条直线的轴对称图形，关键是找出原图形上的一些特殊点，作出这些点关于对称轴的对称点，再顺次连接各对称点。

<svg width="380" height="200" style="max-width:100%;display:block;margin:1em auto" viewBox="0 0 380 200">
  <!-- y轴（对称轴） -->
  <line x1="190" y1="10" x2="190" y2="185" stroke="#424242" stroke-width="2"/>
  <polygon points="190,5 186,14 194,14" fill="#424242"/>
  <text x="196" y="14" font-size="13" fill="#424242" font-style="italic">y</text>
  <!-- x轴 -->
  <line x1="10" y1="130" x2="370" y2="130" stroke="#424242" stroke-width="2"/>
  <polygon points="375,130 366,126 366,134" fill="#424242"/>
  <text x="368" y="145" font-size="13" fill="#424242" font-style="italic">x</text>
  <!-- 原三角形 ABC（左侧） -->
  <polygon points="80,130 130,60 150,130" fill="#e1bee7" stroke="#7b1fa2" stroke-width="2"/>
  <text x="66" y="145" font-size="13" fill="#7b1fa2" font-weight="bold">B</text>
  <text x="126" y="52" font-size="13" fill="#7b1fa2" font-weight="bold">A</text>
  <text x="152" y="145" font-size="13" fill="#7b1fa2" font-weight="bold">C</text>
  <!-- 对称三角形 A'B'C'（右侧，关于y轴） -->
  <polygon points="300,130 250,60 230,130" fill="#e1bee7" stroke="#9c27b0" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="302" y="145" font-size="13" fill="#9c27b0" font-weight="bold">B'</text>
  <text x="248" y="52" font-size="13" fill="#9c27b0" font-weight="bold">A'</text>
  <text x="210" y="145" font-size="13" fill="#9c27b0" font-weight="bold">C'</text>
  <!-- 对应点连线 -->
  <line x1="130" y1="60" x2="250" y2="60" stroke="#424242" stroke-width="1" stroke-dasharray="3,3"/>
  <!-- 坐标说明 -->
  <text x="190" y="195" font-size="12" fill="#424242" text-anchor="middle">关于y轴对称：(x,y) → (-x,y)；关于x轴对称：(x,y) → (x,-y)</text>
</svg>

## 画轴对称图形的步骤

1. **找点**：确定原图形的关键点（如顶点、端点等）。
2. **作对称点**：过每个关键点作对称轴的垂线，并延长到对称轴的另一侧，使对称点到对称轴的距离等于原关键点到对称轴的距离。
3. **连线**：按原图形的顺序连接各对称点，得到轴对称图形。

## 坐标系中的轴对称

在平面直角坐标系中：
- 点 $(x,y)$ 关于 $x$ 轴对称的点的坐标为 $(x,-y)$。
- 点 $(x,y)$ 关于 $y$ 轴对称的点的坐标为 $(-x,y)$。
- 点 $(x,y)$ 关于直线 $y=x$ 对称的点的坐标为 $(y,x)$。

## 例题解析

**例**：已知点 $A(2,3)$、$B(-1,4)$，分别求它们关于 $x$ 轴和 $y$ 轴的对称点。

关于 $x$ 轴对称：
$$A'(2,-3),\quad B'(-1,-4)$$

关于 $y$ 轴对称：
$$A''(-2,3),\quad B''(1,4)$$

## 易错点

- 作对称点时，距离必须相等，方向必须垂直于对称轴。
- 关于 $x$ 轴对称，横坐标不变，纵坐标变号；关于 $y$ 轴对称，纵坐标不变，横坐标变号。
- 不要混淆"关于 $x$ 轴对称"和"关于 $y$ 轴对称"。

## 坐标轴对称技巧

- 关于 $x$ 轴对称：横同纵反。
- 关于 $y$ 轴对称：纵同横反。
- 关于原点对称：横纵皆反（后续学习）。
- 作图时先找特殊点，再连线，可减少错误。

## 自测题

1. 画轴对称图形的关键是找出原图形的____点。
2. 点 $(3,-2)$ 关于 $x$ 轴对称的点的坐标为____。
3. 点 $(-4,5)$ 关于 $y$ 轴对称的点的坐标为____。
4. 若点 $P(a,2)$ 与点 $Q(-3,b)$ 关于 $y$ 轴对称，则 $a=$____，$b=$____。

相关知识点：[[15.1 轴对称及其性质]]、[[15.1.2 线段的垂直平分线]]、[[15.3 等腰三角形与等边三角形]]
