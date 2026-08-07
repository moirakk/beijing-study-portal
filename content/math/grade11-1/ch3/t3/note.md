---
title: 3.3 抛物线
date: 2026-08-07
---

# 3.3 抛物线

## 概念定义

**抛物线**：平面内到定点 $F$（焦点）与到定直线 $l$（准线，$F\notin l$）距离**相等**的点的轨迹。
$$|PF|=d(P,l)$$
离心率恒为 $e=1$。标准方程 $y^2=2px$（$p>0$）中，$p$ 表示**焦点到准线的距离**。

## 知识梳理

| 标准方程 | 开口 | 焦点 | 准线 | 焦半径（$P(x_0,y_0)$） |
| --- | --- | --- | --- | --- |
| $y^2=2px$ | 向右 | $\left(\dfrac{p}{2},0\right)$ | $x=-\dfrac{p}{2}$ | $|PF|=x_0+\dfrac{p}{2}$ |
| $y^2=-2px$ | 向左 | $\left(-\dfrac{p}{2},0\right)$ | $x=\dfrac{p}{2}$ | $|PF|=-x_0+\dfrac{p}{2}$ |
| $x^2=2py$ | 向上 | $\left(0,\dfrac{p}{2}\right)$ | $y=-\dfrac{p}{2}$ | $|PF|=y_0+\dfrac{p}{2}$ |
| $x^2=-2py$ | 向下 | $\left(0,-\dfrac{p}{2}\right)$ | $y=\dfrac{p}{2}$ | $|PF|=-y_0+\dfrac{p}{2}$ |

**焦点弦性质**（对 $y^2=2px$，弦 $AB$ 过焦点，$A(x_1,y_1)$，$B(x_2,y_2)$）：
- $|AB|=x_1+x_2+p$；通径（垂直于轴的焦点弦）最短，长为 $2p$；
- $y_1y_2=-p^2$，$x_1x_2=\dfrac{p^2}{4}$；
- $\dfrac{1}{|AF|}+\dfrac{1}{|BF|}=\dfrac{2}{p}$。

## 图示：抛物线与焦点、准线

<svg viewBox="0 0 360 230" width="360" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="ax33" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#334155"/></marker></defs>
  <line x1="15" y1="115" x2="345" y2="115" stroke="#334155" stroke-width="1.5" marker-end="url(#ax33)"/>
  <line x1="120" y1="222" x2="120" y2="12" stroke="#334155" stroke-width="1.5" marker-end="url(#ax33)"/>
  <text x="347" y="130" font-size="13" fill="#334155">x</text>
  <text x="126" y="18" font-size="13" fill="#334155">y</text>
  <path d="M 120 115 Q 190 30 300 18 M 120 115 Q 190 200 300 212" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <circle cx="175" cy="115" r="4" fill="#2563eb"/>
  <text x="180" y="134" font-size="12" fill="#2563eb">F(p/2,0)</text>
  <line x1="65" y1="12" x2="65" y2="222" stroke="#16a34a" stroke-width="2" stroke-dasharray="6 4"/>
  <text x="18" y="30" font-size="12" fill="#16a34a">准线 x=−p/2</text>
  <circle cx="235" cy="52" r="4" fill="#f59e0b"/>
  <text x="242" y="47" font-size="12" fill="#f59e0b">P</text>
  <line x1="235" y1="52" x2="175" y2="115" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="235" y1="52" x2="65" y2="52" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="130" y="46" font-size="12" fill="#f59e0b">|PF|=d(P,l)</text>
  <text x="106" y="132" font-size="12" fill="#64748b">O</text>
</svg>

## 典型例题

**例 1**：抛物线 $y^2=8x$ 上一点 $P$ 到焦点的距离为 6，求 $P$ 的横坐标及坐标。

**解**：$2p=8\Rightarrow p=4$，准线 $x=-2$。
由定义 $|PF|=x_0+2=6$，得 $x_0=4$；代入 $y_0^2=32$，$y_0=\pm4\sqrt2$。
故 $P(4,\pm4\sqrt2)$。

**例 2**：过抛物线 $y^2=4x$ 焦点 $F(1,0)$ 且倾斜角为 $45°$ 的直线交抛物线于 $A,B$，求 $|AB|$。

**解**：直线 $y=x-1$，代入 $y^2=4x$：$(x-1)^2=4x$，即 $x^2-6x+1=0$，$x_1+x_2=6$。
由焦点弦公式 $|AB|=x_1+x_2+p=6+2=8$。

## 易错点

- $p>0$ 且 $p$ 是**焦点到准线的距离**，焦点坐标是 $\dfrac{p}{2}$ 不是 $p$。
- 方程形如 $y=ax^2$ 须先化为 $x^2=\dfrac{1}{a}y$ 再读 $p$，即 $2p=\dfrac{1}{|a|}$。
- 焦半径公式随开口方向变化，向左、向下开口时符号易错，建议直接用"定义转化"。
- 焦点弦 $|AB|=x_1+x_2+p$ 仅对**过焦点**的弦成立，一般弦须用弦长公式。

## 背记要点

1. 定义：到焦点与到准线距离相等，$e=1$；"看到焦点想准线"。
2. 四个标准方程：一次项定轴与开口，系数为 $\pm2p$。
3. 焦点弦：$|AB|=x_1+x_2+p$；$y_1y_2=-p^2$；通径 $2p$ 最短。
4. 焦半径 $|PF|=x_0+\dfrac{p}{2}$（$y^2=2px$）。
5. 高考视角：抛物线定义转化（焦半径 ↔ 到准线距离）是求最值的钥匙，"$|PA|+|PF|$ 型最短距离"与焦点弦性质是高频题型。

## 自测题

1. 抛物线 $y^2=6x$ 的焦点坐标为____，准线方程为____。
2. 抛物线 $x^2=4y$ 上到焦点距离为 3 的点的纵坐标为____。
3. 过 $y^2=4x$ 焦点的弦中最短的弦长为____。
4. 判断：抛物线 $y=x^2$ 的焦点是 $\left(\dfrac12,0\right)$。（　）

## 相关知识点

$e<1$ 的轨迹见 [[3.1 椭圆]]；$e>1$ 的轨迹见 [[3.2 双曲线]]；直线与曲线联立求弦长的方法源自 [[2.5 直线与圆、圆与圆的位置关系]]。
