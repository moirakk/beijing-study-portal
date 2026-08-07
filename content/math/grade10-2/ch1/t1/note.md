---
title: 6.1 平面向量的概念
date: 2026-08-07
---

# 6.1 平面向量的概念

## 概念定义

**向量**：既有**大小**又有**方向**的量，记作 $\vec{a}$ 或 $\overrightarrow{AB}$（$A$ 为起点，$B$ 为终点）。
**向量的模**：向量的大小（长度），记作 $|\vec{a}|$ 或 $|\overrightarrow{AB}|$，模是非负实数。
**零向量**：长度为 $0$ 的向量，记作 $\vec{0}$，方向**任意**。
**单位向量**：长度为 $1$ 的向量；与非零向量 $\vec{a}$ 同向的单位向量为 $\dfrac{\vec{a}}{|\vec{a}|}$。

## 知识梳理

| 概念 | 定义 | 注意 |
| --- | --- | --- |
| 平行（共线）向量 | 方向相同或相反的**非零**向量 | 规定 $\vec{0}$ 与任意向量平行 |
| 相等向量 | 长度相等且方向相同 | 与起点位置无关（自由向量） |
| 相反向量 | 长度相等、方向相反 | $\overrightarrow{AB}=-\overrightarrow{BA}$ |
| 共线向量 | 即平行向量，可平移到同一直线上 | "共线"不要求在同一直线上 |

**向量与数量的区别**：数量可比较大小，向量**不能比较大小**（模可以比较）；向量相等要求"模相等且方向相同"两个条件。

## 重点精讲

<svg viewBox="0 0 360 170" width="360" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="m61a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker><marker id="m61b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#dc2626"/></marker></defs>
  <line x1="40" y1="60" x2="150" y2="30" stroke="#2563eb" stroke-width="2.5" marker-end="url(#m61a)"/>
  <text x="85" y="30" font-size="12" fill="#2563eb">a（AB）</text>
  <line x1="60" y1="130" x2="170" y2="100" stroke="#2563eb" stroke-width="2.5" marker-end="url(#m61a)"/>
  <text x="100" y="130" font-size="12" fill="#2563eb">b＝a（相等向量）</text>
  <line x1="330" y1="60" x2="220" y2="90" stroke="#dc2626" stroke-width="2.5" marker-end="url(#m61b)"/>
  <text x="240" y="55" font-size="12" fill="#dc2626">c＝−a（相反向量）</text>
  <text x="30" y="160" font-size="11" fill="#64748b">三个向量互相平行（共线），但只有 a 与 b 相等</text>
</svg>

- 相等向量可以**自由平移**：起点不同的两个向量也可能相等。
- 判断"共线"看方向线是否平行，与向量所在位置无关。
- 涉及 $\vec{0}$ 的命题要单独检验：$\vec{0}$ 与任何向量平行，但方向任意。

## 典型例题

**例 1**：判断下列说法是否正确：①若 $|\vec{a}|=|\vec{b}|$，则 $\vec{a}=\vec{b}$；②若 $\vec{a}\parallel\vec{b}$，$\vec{b}\parallel\vec{c}$，则 $\vec{a}\parallel\vec{c}$。

**解**：①错误。模相等只保证长度相等，方向未必相同。②错误。当 $\vec{b}=\vec{0}$ 时，$\vec{a}$、$\vec{c}$ 可以是任意向量，不一定平行。若限定均为非零向量，则②正确。

**例 2**：在正六边形 $ABCDEF$ 中，与 $\overrightarrow{AB}$ 相等的向量有哪些？与 $\overrightarrow{AB}$ 共线的向量（不含自身）有哪些？

**解**：正六边形中 $FC\parallel AB$ 且 $FC=2AB$，$ED\parallel AB$ 且 $ED=AB$。
相等向量：$\overrightarrow{ED}$（同向等长）。
共线向量：$\overrightarrow{ED},\ \overrightarrow{DE},\ \overrightarrow{BA},\ \overrightarrow{FC},\ \overrightarrow{CF}$。

## 易错点

- $|\vec{a}|=|\vec{b}|\ \nRightarrow\ \vec{a}=\vec{b}$：还需方向相同。
- 向量不能比较大小，写 $\vec{a}>\vec{b}$ 是错误的。
- 共线向量**不一定**在同一条直线上，只需方向相同或相反。
- $\vec{0}$ 的方向任意，讨论平行传递性等命题时须单独考虑 $\vec{0}$。

## 背记要点

1. 向量三要素表述：大小＋方向；用有向线段表示，与起点无关。
2. $\vec{0}$：模为 0、方向任意、与一切向量平行。
3. 单位向量：$\dfrac{\vec{a}}{|\vec{a}|}$ 与 $\vec{a}$ 同向且模为 1。
4. 相等向量＝同向等长；相反向量＝反向等长。
5. 高考视角：概念题常以多选/判断形式出现，考点集中在零向量、单位向量、共线与相等的区别，注意反例意识。

## 自测题

1. 与非零向量 $\vec{a}$ 共线的单位向量共有____个。
2. 判断：若 $\vec{a}=\vec{b}$，$\vec{b}=\vec{c}$，则 $\vec{a}=\vec{c}$。（　）
3. 在平行四边形 $ABCD$ 中，$\overrightarrow{AB}$ 与 $\overrightarrow{DC}$ 的关系是____。
4. 判断：模相等的两个平行向量必相等。（　）

## 相关知识点

向量的加减与数乘见 [[6.2 平面向量的运算]]；坐标化处理见 [[6.3 平面向量基本定理及坐标表示]]。
