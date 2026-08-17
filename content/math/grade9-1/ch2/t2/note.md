---
title: 22.2 二次函数与一元二次方程
date: 2026-08-06
---

# 22.2 二次函数与一元二次方程

## 核心联系

二次函数 $y=ax^2+bx+c$ 的图象与 $x$ 轴交点的**横坐标**，就是一元二次方程
$$ax^2+bx+c=0$$
的实数根。令 $y=0$ 即得该方程。

## 交点个数与判别式

设 $\Delta=b^2-4ac$：

| 判别式 | 与 $x$ 轴交点 | 方程的根 |
| --- | --- | --- |
| $\Delta>0$ | 两个交点 | 两个不相等的实数根 |
| $\Delta=0$ | 一个交点（顶点在 $x$ 轴上） | 两个相等的实数根 |
| $\Delta<0$ | 没有交点 | 无实数根 |

<svg viewBox="0 0 540 220" style="max-width:100%;display:block;margin:1em auto" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="ax1" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#555"/></marker>
    <marker id="ay1" markerWidth="7" markerHeight="7" refX="3" refY="5" orient="auto"><path d="M0,7 L6,7 L3,0 z" fill="#555"/></marker>
  </defs>
  <!-- 情形1：Δ>0，两个交点 -->
  <g transform="translate(10,10)">
    <line x1="10" y1="100" x2="155" y2="100" stroke="#555" stroke-width="1.2" marker-end="url(#ax1)"/>
    <line x1="82" y1="10" x2="82" y2="195" stroke="#555" stroke-width="1.2" marker-end="url(#ay1)"/>
    <text x="158" y="104" font-size="11" fill="#555">x</text>
    <text x="84" y="8" font-size="11" fill="#555">y</text>
    <text x="78" y="112" font-size="10" fill="#555">O</text>
    <!-- 抛物线 y=0.05(x-82)²-30，顶点(82,70)，与x轴交于约55和109 -->
    <polyline points="30,192 45,155 60,124 75,100 82,90 89,100 104,124 119,155 134,192"
      fill="none" stroke="#7b1fa2" stroke-width="2.2"/>
    <circle cx="55" cy="100" r="4" fill="#7b1fa2"/>
    <circle cx="109" cy="100" r="4" fill="#7b1fa2"/>
    <text x="48" y="115" font-size="10" fill="#7b1fa2">x₁</text>
    <text x="104" y="115" font-size="10" fill="#7b1fa2">x₂</text>
    <circle cx="82" cy="90" r="3" fill="#9c27b0"/>
    <text x="55" y="185" text-anchor="middle" font-size="11" font-weight="bold" fill="#7b1fa2">Δ&gt;0：两个交点</text>
    <text x="55" y="200" text-anchor="middle" font-size="10" fill="#555">两个不等实数根</text>
  </g>
  <!-- 情形2：Δ=0，一个交点（顶点在x轴） -->
  <g transform="translate(190,10)">
    <line x1="10" y1="100" x2="155" y2="100" stroke="#555" stroke-width="1.2" marker-end="url(#ax1)"/>
    <line x1="82" y1="10" x2="82" y2="195" stroke="#555" stroke-width="1.2" marker-end="url(#ay1)"/>
    <text x="158" y="104" font-size="11" fill="#555">x</text>
    <text x="84" y="8" font-size="11" fill="#555">y</text>
    <text x="78" y="112" font-size="10" fill="#555">O</text>
    <!-- 抛物线顶点恰在x轴 -->
    <polyline points="30,172 45,140 60,114 75,100 82,100 89,100 104,114 119,140 134,172"
      fill="none" stroke="#9c27b0" stroke-width="2.2"/>
    <circle cx="82" cy="100" r="4" fill="#9c27b0"/>
    <text x="86" y="115" font-size="10" fill="#9c27b0">x₁=x₂</text>
    <text x="55" y="185" text-anchor="middle" font-size="11" font-weight="bold" fill="#9c27b0">Δ=0：一个交点</text>
    <text x="55" y="200" text-anchor="middle" font-size="10" fill="#555">两个相等实数根</text>
  </g>
  <!-- 情形3：Δ<0，无交点 -->
  <g transform="translate(370,10)">
    <line x1="10" y1="100" x2="155" y2="100" stroke="#555" stroke-width="1.2" marker-end="url(#ax1)"/>
    <line x1="82" y1="10" x2="82" y2="195" stroke="#555" stroke-width="1.2" marker-end="url(#ay1)"/>
    <text x="158" y="104" font-size="11" fill="#555">x</text>
    <text x="84" y="8" font-size="11" fill="#555">y</text>
    <text x="78" y="112" font-size="10" fill="#555">O</text>
    <!-- 抛物线整体在x轴上方 -->
    <polyline points="30,152 45,124 60,104 75,92 82,90 89,92 104,104 119,124 134,152"
      fill="none" stroke="#ab47bc" stroke-width="2.2"/>
    <text x="55" y="185" text-anchor="middle" font-size="11" font-weight="bold" fill="#ab47bc">Δ&lt;0：无交点</text>
    <text x="55" y="200" text-anchor="middle" font-size="10" fill="#555">无实数根</text>
  </g>
</svg>

## 利用图象解不等式

以 $a>0$、$\Delta>0$、两根 $x_1<x_2$ 为例：
- $ax^2+bx+c>0$ 的解集：$x<x_1$ 或 $x>x_2$（图象在 $x$ 轴上方的部分）；
- $ax^2+bx+c<0$ 的解集：$x_1<x<x_2$（图象在 $x$ 轴下方的部分）。

## 图象法求方程的近似解

画出抛物线，观察其与 $x$ 轴交点的横坐标，通过取值逐步逼近，可求方程的近似解。也可以将方程 $ax^2+bx+c=k$ 的解看作抛物线 $y=ax^2+bx+c$ 与直线 $y=k$ 交点的横坐标。

## 例题解析

**例 1**：求抛物线 $y=x^2-2x-3$ 与 $x$ 轴的交点坐标。

令 $y=0$：$x^2-2x-3=0$，因式分解 $(x-3)(x+1)=0$，得 $x_1=3$，$x_2=-1$。
交点为 $(3,0)$ 和 $(-1,0)$。

**例 2**：已知抛物线 $y=x^2-4x+m$ 与 $x$ 轴只有一个交点，求 $m$。

由 $\Delta=16-4m=0$，得 $m=4$。

**例 3**：抛物线 $y=x^2-2x-3$ 的图象上，当 $y<0$ 时 $x$ 的取值范围是？

由例 1 知与 $x$ 轴交于 $x=-1$ 和 $x=3$，开口向上，图象在 $x$ 轴下方的部分对应
$$-1<x<3$$

**例 4**：若抛物线 $y=ax^2+bx+c\ (a\neq 0)$ 经过 $(-2,0)$ 和 $(4,0)$，求方程 $ax^2+bx+c=0$ 的解及对称轴。

方程的解即交点横坐标：$x_1=-2$，$x_2=4$；对称轴为两交点的中点：$x=\dfrac{-2+4}{2}=1$。

## 易错点

- "与 $x$ 轴只有一个公共点"对二次函数意味着 $\Delta=0$；但若题目说"函数 $y=ax^2+bx+c$ 与 $x$ 轴只有一个交点"且未限定是二次函数，需讨论 $a=0$（一次函数）的情形。
- 交点的横坐标才是方程的根，写坐标时不要漏掉纵坐标 $0$。
- 利用图象解不等式时，务必先确认开口方向。
- 对称轴公式 $x=\dfrac{x_1+x_2}{2}$ 只在两交点存在时使用。

## 自测题

1. 抛物线 $y=x^2-5x+6$ 与 $x$ 轴的交点坐标为____。
2. 若抛物线 $y=x^2+2x+k$ 与 $x$ 轴没有交点，则 $k$ 的取值范围是____。
3. 已知抛物线与 $x$ 轴交于 $(1,0)$、$(5,0)$，则其对称轴为____。
4. 利用图象可知，不等式 $x^2-4<0$ 的解集为____。
5. 方程 $x^2-2x-1=0$ 的根可以看作抛物线 $y=x^2-2x$ 与直线____的交点横坐标。

方程解法详见 [[21.2 解一元二次方程]]，函数图象性质见 [[22.1 二次函数的图象和性质]]，综合应用见 [[22.3 实际问题与二次函数]]。
