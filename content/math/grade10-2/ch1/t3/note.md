---
title: 6.3 平面向量基本定理及坐标表示
date: 2026-08-07
---

# 6.3 平面向量基本定理及坐标表示

## 概念定义

**平面向量基本定理**：若 $\vec{e_1},\vec{e_2}$ 是同一平面内两个**不共线**向量，则平面内任一向量 $\vec{a}$ 都可**唯一**表示为 $\vec{a}=\lambda_1\vec{e_1}+\lambda_2\vec{e_2}$。不共线的 $\vec{e_1},\vec{e_2}$ 叫做一组**基底**。
**坐标表示**：取正交单位基底 $\vec{i},\vec{j}$，则 $\vec{a}=x\vec{i}+y\vec{j}$ 记作 $\vec{a}=(x,y)$。

## 知识梳理

设 $\vec{a}=(x_1,y_1)$，$\vec{b}=(x_2,y_2)$，$A(x_A,y_A)$，$B(x_B,y_B)$：

| 运算 | 坐标公式 |
| --- | --- |
| 加减 | $\vec{a}\pm\vec{b}=(x_1\pm x_2,\ y_1\pm y_2)$ |
| 数乘 | $\lambda\vec{a}=(\lambda x_1,\lambda y_1)$ |
| 向量坐标 | $\overrightarrow{AB}=(x_B-x_A,\ y_B-y_A)$（终点减起点） |
| 数量积 | $\vec{a}\cdot\vec{b}=x_1x_2+y_1y_2$ |
| 模 | $|\vec{a}|=\sqrt{x_1^2+y_1^2}$ |
| 共线 | $\vec{a}\parallel\vec{b}\Leftrightarrow x_1y_2-x_2y_1=0$ |
| 垂直 | $\vec{a}\perp\vec{b}\Leftrightarrow x_1x_2+y_1y_2=0$ |
| 夹角 | $\cos\theta=\dfrac{x_1x_2+y_1y_2}{\sqrt{x_1^2+y_1^2}\sqrt{x_2^2+y_2^2}}$ |

**中点公式**：$AB$ 中点 $M\left(\dfrac{x_A+x_B}{2},\dfrac{y_A+y_B}{2}\right)$。

## 重点精讲：基底分解

<svg viewBox="0 0 360 200" width="360" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="m63b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker><marker id="m63r" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#dc2626"/></marker></defs>
  <line x1="40" y1="170" x2="340" y2="170" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="60" y1="190" x2="60" y2="20" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="60" y1="170" x2="130" y2="170" stroke="#2563eb" stroke-width="2.5" marker-end="url(#m63b)"/>
  <text x="90" y="188" font-size="12" fill="#2563eb">i</text>
  <line x1="60" y1="170" x2="60" y2="100" stroke="#2563eb" stroke-width="2.5" marker-end="url(#m63b)"/>
  <text x="44" y="130" font-size="12" fill="#2563eb">j</text>
  <line x1="60" y1="170" x2="270" y2="50" stroke="#dc2626" stroke-width="2.5" marker-end="url(#m63r)"/>
  <text x="180" y="95" font-size="13" fill="#dc2626">a＝(x, y)</text>
  <line x1="270" y1="50" x2="270" y2="170" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="270" y1="50" x2="60" y2="50" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="5 4"/>
  <text x="255" y="188" font-size="12" fill="#16a34a">x</text>
  <text x="34" y="56" font-size="12" fill="#16a34a">y</text>
  <text x="48" y="188" font-size="12" fill="#334155">O</text>
</svg>

任何向量沿两个不共线方向可**唯一**分解；坐标就是在 $\vec{i},\vec{j}$ 方向上的分解系数，向量问题从而化为代数运算。

## 典型例题

**例 1**：已知 $\vec{a}=(1,2)$，$\vec{b}=(-3,2)$，若 $k\vec{a}+\vec{b}$ 与 $\vec{a}-3\vec{b}$ 平行，求 $k$。

**解**：$k\vec{a}+\vec{b}=(k-3,\ 2k+2)$，$\vec{a}-3\vec{b}=(10,-4)$。
共线条件：$(k-3)(-4)-10(2k+2)=0\Rightarrow-4k+12-20k-20=0\Rightarrow k=-\dfrac13$。

**例 2**：已知 $A(1,1)$，$B(3,4)$，$C(2,-1)$，求 $\overrightarrow{AB}\cdot\overrightarrow{AC}$ 及 $\cos\angle BAC$。

**解**：$\overrightarrow{AB}=(2,3)$，$\overrightarrow{AC}=(1,-2)$。
$\overrightarrow{AB}\cdot\overrightarrow{AC}=2\times1+3\times(-2)=-4$。
$\cos\angle BAC=\dfrac{-4}{\sqrt{13}\cdot\sqrt5}=-\dfrac{4}{\sqrt{65}}=-\dfrac{4\sqrt{65}}{65}$。

## 易错点

- 共线条件是 $x_1y_2-x_2y_1=0$（交叉相乘作差），不要与垂直条件 $x_1x_2+y_1y_2=0$ 混淆。
- $\overrightarrow{AB}$ 坐标是**终点减起点**，顺序不能颠倒。
- 基底必须**不共线**；零向量不能作基底。
- 用 $\dfrac{x_1}{x_2}=\dfrac{y_1}{y_2}$ 判共线时须防分母为 0，推荐用交叉相乘式。

## 背记要点

1. 基本定理：不共线基底下分解**存在且唯一**。
2. 平行：$x_1y_2-x_2y_1=0$；垂直：$x_1x_2+y_1y_2=0$——一"减"一"加"。
3. $\vec{a}\cdot\vec{b}=x_1x_2+y_1y_2$，$|\vec{a}|=\sqrt{x_1^2+y_1^2}$。
4. 高考视角：坐标法是向量小题的通用武器，遇到规则图形（正方形、直角三角形）优先建系设坐标，把几何问题代数化。

## 自测题

1. $\vec{a}=(2,1)$，$\vec{b}=(x,-2)$，若 $\vec{a}\parallel\vec{b}$，则 $x=$____。
2. $\vec{a}=(1,\sqrt3)$ 的模为____，与其同向的单位向量为____。
3. $\vec{a}=(1,2)$，$\vec{b}=(2,m)$，若 $\vec{a}\perp\vec{b}$，则 $m=$____。
4. 判断：平面内任意两个向量都可以作为一组基底。（　）

## 相关知识点

运算法则见 [[6.2 平面向量的运算]]；解三角形应用见 [[6.4 平面向量的应用]]。
