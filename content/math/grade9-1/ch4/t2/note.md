---
title: 24.2 点和圆、直线和圆的位置关系
date: 2026-08-06
---

# 24.2 点和圆、直线和圆的位置关系

## 点和圆的位置关系

设 $\odot O$ 的半径为 $r$，点 $P$ 到圆心的距离为 $d$：

| 位置关系 | 数量关系 |
| --- | --- |
| 点在圆外 | $d>r$ |
| 点在圆上 | $d=r$ |
| 点在圆内 | $d<r$ |

<svg viewBox="0 0 500 200" style="max-width:100%;display:block;margin:1em auto" xmlns="http://www.w3.org/2000/svg">
  <!-- 情形1：点在圆外 d>r -->
  <g transform="translate(10,10)">
    <circle cx="80" cy="90" r="60" fill="#f3e5f5" stroke="#7b1fa2" stroke-width="2"/>
    <circle cx="80" cy="90" r="3" fill="#7b1fa2"/>
    <text x="84" y="94" font-size="11" fill="#7b1fa2">O</text>
    <!-- 点P在圆外 -->
    <circle cx="168" cy="90" r="4" fill="#e91e63"/>
    <text x="172" y="94" font-size="11" fill="#e91e63">P</text>
    <!-- d线段 -->
    <line x1="80" y1="90" x2="168" y2="90" stroke="#555" stroke-width="1.2" stroke-dasharray="4,2"/>
    <text x="118" y="84" font-size="10" fill="#555">d</text>
    <!-- 半径 -->
    <line x1="80" y1="90" x2="140" y2="90" stroke="#7b1fa2" stroke-width="1.5"/>
    <text x="104" y="108" font-size="10" fill="#7b1fa2">r</text>
    <text x="80" y="170" text-anchor="middle" font-size="11" font-weight="bold" fill="#7b1fa2">点在圆外</text>
    <text x="80" y="185" text-anchor="middle" font-size="11" fill="#555">d &gt; r</text>
  </g>
  <!-- 情形2：点在圆上 d=r -->
  <g transform="translate(170,10)">
    <circle cx="80" cy="90" r="60" fill="#f3e5f5" stroke="#7b1fa2" stroke-width="2"/>
    <circle cx="80" cy="90" r="3" fill="#7b1fa2"/>
    <text x="84" y="94" font-size="11" fill="#7b1fa2">O</text>
    <!-- 点P在圆上 -->
    <circle cx="140" cy="90" r="5" fill="#7b1fa2" stroke="#fff" stroke-width="1.5"/>
    <text x="144" y="86" font-size="11" fill="#7b1fa2">P</text>
    <!-- d=r线段 -->
    <line x1="80" y1="90" x2="140" y2="90" stroke="#7b1fa2" stroke-width="2"/>
    <text x="104" y="84" font-size="10" fill="#7b1fa2">d=r</text>
    <text x="80" y="170" text-anchor="middle" font-size="11" font-weight="bold" fill="#7b1fa2">点在圆上</text>
    <text x="80" y="185" text-anchor="middle" font-size="11" fill="#555">d = r</text>
  </g>
  <!-- 情形3：点在圆内 d<r -->
  <g transform="translate(330,10)">
    <circle cx="80" cy="90" r="60" fill="#f3e5f5" stroke="#7b1fa2" stroke-width="2"/>
    <circle cx="80" cy="90" r="3" fill="#7b1fa2"/>
    <text x="84" y="94" font-size="11" fill="#7b1fa2">O</text>
    <!-- 点P在圆内 -->
    <circle cx="110" cy="70" r="4" fill="#9c27b0"/>
    <text x="114" y="68" font-size="11" fill="#9c27b0">P</text>
    <!-- d线段 -->
    <line x1="80" y1="90" x2="110" y2="70" stroke="#555" stroke-width="1.2" stroke-dasharray="4,2"/>
    <text x="88" y="74" font-size="10" fill="#555">d</text>
    <!-- 半径 -->
    <line x1="80" y1="90" x2="140" y2="90" stroke="#7b1fa2" stroke-width="1.5"/>
    <text x="104" y="108" font-size="10" fill="#7b1fa2">r</text>
    <text x="80" y="170" text-anchor="middle" font-size="11" font-weight="bold" fill="#9c27b0">点在圆内</text>
    <text x="80" y="185" text-anchor="middle" font-size="11" fill="#555">d &lt; r</text>
  </g>
</svg>

**确定圆的条件**：不在同一直线上的三个点确定一个圆。

- 三角形的**外接圆**：经过三角形三个顶点的圆；圆心叫**外心**，是三边垂直平分线的交点，到三个**顶点**距离相等。
- 锐角三角形外心在形内，直角三角形外心在**斜边中点**，钝角三角形外心在形外。

## 直线和圆的位置关系

设圆心到直线的距离为 $d$，半径为 $r$：

| 位置关系 | 公共点个数 | 数量关系 |
| --- | --- | --- |
| 相交 | $2$ 个 | $d<r$ |
| 相切 | $1$ 个 | $d=r$ |
| 相离 | $0$ 个 | $d>r$ |

## 切线

### 切线的判定定理

经过半径的**外端**并且**垂直于**这条半径的直线是圆的切线。

常用证明思路：
- 已知直线过圆上一点：**连半径，证垂直**；
- 不知直线与圆有无公共点：**作垂线，证 $d=r$**。

### 切线的性质定理

圆的切线垂直于过切点的半径。

### 切线长定理

从圆外一点可以引圆的两条切线，它们的**切线长相等**，这一点和圆心的连线**平分**两条切线的夹角。

## 三角形的内切圆

与三角形三边都相切的圆叫**内切圆**，圆心叫**内心**，是三条角平分线的交点，到三**边**距离相等。

直角三角形（直角边 $a$、$b$，斜边 $c$）内切圆半径：
$$r=\frac{a+b-c}{2}$$

## 例题解析

**例 1**：$\odot O$ 半径为 $5$，圆心到直线 $l$ 的距离为 $5$，则直线 $l$ 与圆的位置关系是？

$d=r$，**相切**。

**例 2**：$Rt\triangle ABC$ 中，$\angle C=90^\circ$，$AC=6$，$BC=8$，求其外接圆半径和内切圆半径。

斜边 $AB=\sqrt{36+64}=10$。外接圆半径 $R=\dfrac{AB}{2}=5$；内切圆半径 $r=\dfrac{6+8-10}{2}=2$。

**例 3**：如图，$PA$、$PB$ 分别切 $\odot O$ 于 $A$、$B$，$\angle P=60^\circ$，$PA=6$，求 $PB$ 及 $\angle AOB$。

由切线长定理 $PB=PA=6$；四边形 $PAOB$ 中 $\angle OAP=\angle OBP=90^\circ$，故 $\angle AOB=180^\circ-60^\circ=120^\circ$。

## 易错点

- 外心与内心的区别：外心是垂直平分线交点、到顶点等距；内心是角平分线交点、到边等距。
- 证切线时思路选择错误："连半径证垂直"与"作垂直证半径"适用条件不同。
- "过半径外端"与"垂直于半径"两个条件缺一不可。
- 判断位置关系时，$d$ 是圆心到**直线**的距离（垂线段长），不是到直线上某点的距离。

## 自测题

1. 点 $P$ 到圆心距离为 $4$，圆半径为 $6$，则点 $P$ 在圆____。
2. 直角三角形斜边长为 $13$，则其外接圆半径为____。
3. 直线与圆相切时，圆心到直线的距离 $d$ 与半径 $r$ 满足____。
4. 从圆外一点引圆的两条切线，切线长____。
5. 三角形内心到三角形三____的距离相等。

圆的基本性质见 [[24.1 圆的有关性质]]，圆的内接正多边形见 [[24.3 正多边形和圆]]，相关计算见 [[24.4 弧长和扇形面积]]。
