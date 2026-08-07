---
title: 1.3 空间向量及其运算的坐标表示
date: 2026-08-07
---

# 1.3 空间向量及其运算的坐标表示

## 概念定义

**空间直角坐标系**：以互相垂直的 $x,y,z$ 轴（右手系）建立坐标系，任一点 $P$ 对应唯一坐标 $(x,y,z)$。
**向量的坐标**：在单位正交基底 $\{\vec{i},\vec{j},\vec{k}\}$ 下，$\vec{a}=x\vec{i}+y\vec{j}+z\vec{k}$，记 $\vec{a}=(x,y,z)$。
若 $A(x_1,y_1,z_1)$，$B(x_2,y_2,z_2)$，则 $\overrightarrow{AB}=(x_2-x_1,\;y_2-y_1,\;z_2-z_1)$，即"终点减起点"。

## 知识梳理

设 $\vec{a}=(a_1,a_2,a_3)$，$\vec{b}=(b_1,b_2,b_3)$：

| 运算 | 坐标公式 | 备注 |
| --- | --- | --- |
| 加减 | $\vec{a}\pm\vec{b}=(a_1\pm b_1,a_2\pm b_2,a_3\pm b_3)$ | 逐分量运算 |
| 数乘 | $\lambda\vec{a}=(\lambda a_1,\lambda a_2,\lambda a_3)$ | — |
| 数量积 | $\vec{a}\cdot\vec{b}=a_1b_1+a_2b_2+a_3b_3$ | 核心公式 |
| 模 | $|\vec{a}|=\sqrt{a_1^2+a_2^2+a_3^2}$ | 两点距离 $|AB|=\sqrt{\sum(x_2-x_1)^2}$ |
| 夹角 | $\cos\theta=\dfrac{a_1b_1+a_2b_2+a_3b_3}{|\vec{a}||\vec{b}|}$ | $\theta\in[0,\pi]$ |
| 平行 | $\vec{b}=\lambda\vec{a}$，即坐标对应成比例 | $\vec{a}\ne\vec{0}$；分量为 0 时慎用比例式 |
| 垂直 | $a_1b_1+a_2b_2+a_3b_3=0$ | 充要条件（非零向量） |

**中点坐标**：$AB$ 中点为 $\left(\dfrac{x_1+x_2}{2},\dfrac{y_1+y_2}{2},\dfrac{z_1+z_2}{2}\right)$。

## 坐标系示意

<svg viewBox="0 0 320 220" width="320" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="ax13" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#334155"/></marker><marker id="v13" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#dc2626"/></marker></defs>
  <line x1="150" y1="180" x2="290" y2="180" stroke="#334155" stroke-width="1.5" marker-end="url(#ax13)"/>
  <line x1="150" y1="180" x2="150" y2="20" stroke="#334155" stroke-width="1.5" marker-end="url(#ax13)"/>
  <line x1="150" y1="180" x2="50" y2="215" stroke="#334155" stroke-width="1.5" marker-end="url(#ax13)"/>
  <text x="292" y="196" font-size="13" fill="#334155">y</text>
  <text x="156" y="26" font-size="13" fill="#334155">z</text>
  <text x="40" y="212" font-size="13" fill="#334155">x</text>
  <line x1="150" y1="180" x2="240" y2="70" stroke="#dc2626" stroke-width="2.5" marker-end="url(#v13)"/>
  <text x="244" y="66" font-size="13" fill="#dc2626">a=(x,y,z)</text>
  <line x1="240" y1="70" x2="240" y2="150" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="128" y="196" font-size="12" fill="#64748b">O</text>
</svg>

## 典型例题

**例 1**：已知 $\vec{a}=(1,-2,2)$，$\vec{b}=(2,1,-2)$，求 $\vec{a}\cdot\vec{b}$、$|\vec{a}|$ 及 $\cos\langle\vec{a},\vec{b}\rangle$。

**解**：$\vec{a}\cdot\vec{b}=1\times2+(-2)\times1+2\times(-2)=-4$；$|\vec{a}|=\sqrt{1+4+4}=3$，$|\vec{b}|=3$。
$\cos\langle\vec{a},\vec{b}\rangle=\dfrac{-4}{3\times3}=-\dfrac49$。

**例 2**：已知 $A(1,0,2)$，$B(-1,1,3)$，$\vec{c}=(2,\lambda,-2)$，若 $\overrightarrow{AB}\perp\vec{c}$，求 $\lambda$。

**解**：$\overrightarrow{AB}=(-2,1,1)$。由垂直得
$\overrightarrow{AB}\cdot\vec{c}=-4+\lambda-2=0\Rightarrow\lambda=6$。

## 易错点

- $\overrightarrow{AB}$ 的坐标是**终点减起点**，方向别弄反。
- 平行用比例式 $\dfrac{a_1}{b_1}=\dfrac{a_2}{b_2}=\dfrac{a_3}{b_3}$ 时须保证分母非零，某分量为 0 时改用 $\vec{b}=\lambda\vec{a}$。
- 点的坐标与向量坐标含义不同：$\overrightarrow{OP}$ 的坐标恰为点 $P$ 的坐标。
- 建系要"三垂一点"：找两两垂直的三条线共点，并写明坐标系依据。

## 背记要点

1. 数量积坐标公式：$\vec{a}\cdot\vec{b}=a_1b_1+a_2b_2+a_3b_3$。
2. $|\vec{a}|=\sqrt{a_1^2+a_2^2+a_3^2}$；两点距离即向量的模。
3. 垂直 $\Leftrightarrow$ 数量积为 0；平行 $\Leftrightarrow$ 坐标成比例（$\vec{b}=\lambda\vec{a}$）。
4. 夹角公式 $\cos\theta=\dfrac{\vec{a}\cdot\vec{b}}{|\vec{a}||\vec{b}|}$，注意向量夹角与几何角的区别。
5. 高考视角：坐标法是立体几何大题的主流工具，建系、写坐标、算向量三步须熟练规范。

## 自测题

1. $\vec{a}=(2,-1,3)$，$\vec{b}=(-4,2,x)$，若 $\vec{a}\parallel\vec{b}$，则 $x=$____。
2. $A(1,2,3)$，$B(3,0,1)$，则 $|AB|=$____，中点坐标为____。
3. $\vec{a}=(1,1,0)$，$\vec{b}=(0,1,1)$，则 $\cos\langle\vec{a},\vec{b}\rangle=$____。
4. 判断：若 $\vec{a}\cdot\vec{b}<0$，则 $\langle\vec{a},\vec{b}\rangle$ 一定是钝角。（　）

## 相关知识点

坐标化的理论依据见 [[1.2 空间向量基本定理]]；数量积定义见 [[1.1 空间向量及其运算]]；建系求角与距离见 [[1.4 空间向量的应用]]。
