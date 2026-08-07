---
title: 7.1 复数的概念
date: 2026-08-07
---

# 7.1 复数的概念

## 概念定义

**虚数单位** $i$：规定 $i^2=-1$。
**复数**：形如 $z=a+bi$（$a,b\in\mathbb{R}$）的数，$a$ 为**实部** $\mathrm{Re}\,z$，$b$ 为**虚部** $\mathrm{Im}\,z$（虚部是实数 $b$，不含 $i$）。
**复数相等**：$a+bi=c+di\Leftrightarrow a=c$ 且 $b=d$（$a,b,c,d\in\mathbb{R}$）。
**复平面**：以 $x$ 轴为实轴、$y$ 轴为虚轴，复数 $z=a+bi$ 与点 $Z(a,b)$、向量 $\overrightarrow{OZ}$ 一一对应。
**模**：$|z|=\sqrt{a^2+b^2}$；**共轭复数**：$\bar{z}=a-bi$。

## 知识梳理

| 分类 | 条件 | 举例 |
| --- | --- | --- |
| 实数 | $b=0$ | $3,\ -2,\ 0$ |
| 虚数 | $b\ne0$ | $1+2i,\ 3i$ |
| 纯虚数 | $a=0$ 且 $b\ne0$ | $3i,\ -i$ |

$$\mathbb{N}\subsetneq\mathbb{Z}\subsetneq\mathbb{Q}\subsetneq\mathbb{R}\subsetneq\mathbb{C}$$

**共轭与模的性质**：$z\bar{z}=|z|^2=a^2+b^2$；$z$ 与 $\bar{z}$ 在复平面内关于**实轴对称**；$|z|=|\bar z|$。

## 重点精讲：复平面

<svg viewBox="0 0 360 220" width="360" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="m71b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker><marker id="m71g" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#64748b"/></marker></defs>
  <line x1="30" y1="110" x2="340" y2="110" stroke="#64748b" stroke-width="1.5" marker-end="url(#m71g)"/>
  <line x1="120" y1="205" x2="120" y2="20" stroke="#64748b" stroke-width="1.5" marker-end="url(#m71g)"/>
  <text x="330" y="128" font-size="12" fill="#64748b">实轴 x</text>
  <text x="128" y="30" font-size="12" fill="#64748b">虚轴 y</text>
  <line x1="120" y1="110" x2="270" y2="45" stroke="#2563eb" stroke-width="2.5" marker-end="url(#m71b)"/>
  <circle cx="270" cy="45" r="3" fill="#dc2626"/>
  <text x="278" y="42" font-size="13" fill="#dc2626">Z(a, b)：z＝a＋bi</text>
  <line x1="270" y1="45" x2="270" y2="110" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="180" y="70" font-size="12" fill="#2563eb">|z|＝√(a²+b²)</text>
  <line x1="120" y1="110" x2="270" y2="175" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5 4"/>
  <circle cx="270" cy="175" r="3" fill="#f59e0b"/>
  <text x="278" y="182" font-size="12" fill="#f59e0b">z̄＝a−bi（关于实轴对称）</text>
  <text x="106" y="126" font-size="12" fill="#334155">O</text>
</svg>

复数 $\leftrightarrow$ 点 $\leftrightarrow$ 向量三位一体：$|z|$ 即点 $Z$ 到原点的距离，$|z_1-z_2|$ 表示两点间距离。

## 典型例题

**例 1**：实数 $m$ 取何值时，$z=(m^2-1)+(m-1)i$ 是（1）实数；（2）纯虚数？

**解**：（1）实数需虚部 $m-1=0$，即 $m=1$。
（2）纯虚数需实部 $m^2-1=0$ 且虚部 $m-1\ne0$，由 $m=\pm1$ 且 $m\ne1$，得 $m=-1$。

**例 2**：已知 $(2x-1)+i=y-(3-y)i$（$x,y\in\mathbb{R}$），求 $x,y$。

**解**：由复数相等：实部 $2x-1=y$，虚部 $1=-(3-y)$。
解得 $y=4$，$x=\dfrac{y+1}{2}=\dfrac52$。

## 易错点

- 虚部是 $b$ 不是 $bi$：$z=3-2i$ 的虚部是 $-2$。
- 纯虚数需**两个条件**：实部为 0 **且**虚部不为 0，漏掉后者是高频失分点。
- 两个虚数**不能比较大小**；能比较大小的复数必为实数。
- $z^2\ge0$ 对虚数不成立（如 $i^2=-1$）；含参数分类时先保证 $a,b\in\mathbb{R}$ 才能用相等条件。

## 背记要点

1. $i^2=-1$；$z=a+bi$，实部 $a$、虚部 $b$。
2. 分类：$b=0$ 实数；$b\ne0$ 虚数；再加 $a=0$ 为纯虚数。
3. $|z|=\sqrt{a^2+b^2}$，$z\bar z=|z|^2$，$\bar z$ 与 $z$ 关于实轴对称。
4. 复数、点、向量一一对应；$|z_1-z_2|$＝两点距离。
5. 高考视角：复数概念每年必考 1 道小题，围绕"求实部虚部、共轭、模、对应点所在象限"命题，属送分题但要细心。

## 自测题

1. $z=-1+2i$ 的实部为____，虚部为____，$|z|=$____。
2. $z=(m^2-m)+mi$ 为纯虚数，则实数 $m=$____。
3. $z=3-4i$ 的共轭复数对应的点在第____象限。
4. 判断：若 $a>b$（$a,b\in\mathbb{R}$），则 $a+i>b+i$。（　）

## 相关知识点

四则运算见 [[7.2 复数的四则运算]]；三角形式见 [[7.3 复数的三角表示]]；向量对应关系可回顾 [[6.1 平面向量的概念]]。
