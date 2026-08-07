---
title: 1.1 集合的概念
date: 2026-08-07
---

# 1.1 集合的概念

## 概念定义

把研究对象统称为**元素**，把一些元素组成的总体叫做**集合**。集合中元素具有三大特性：**确定性、互异性、无序性**。

元素与集合的关系只有两种：属于 $a\in A$ 或不属于 $a\notin A$。

集合的表示方法：**列举法**（如 $\{1,2,3\}$）、**描述法**（如 $\{x\mid x>2\}$）、**Venn 图法**。

## 知识梳理

常用数集及其包含关系（高考必考基础）：

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="180" cy="125" rx="165" ry="100" fill="none" stroke="#2563eb" stroke-width="2"/>
  <ellipse cx="165" cy="125" rx="128" ry="78" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <ellipse cx="150" cy="125" rx="93" ry="57" fill="none" stroke="#dc2626" stroke-width="1.5"/>
  <ellipse cx="138" cy="125" rx="60" ry="38" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <text x="138" y="131" font-size="16" fill="#64748b" text-anchor="middle">N ⊂ Z</text>
  <text x="225" y="131" font-size="15" fill="#dc2626">Q</text>
  <text x="272" y="131" font-size="15" fill="#2563eb">R</text>
  <text x="322" y="131" font-size="14" fill="#2563eb">…</text>
  <text x="180" y="20" font-size="13" fill="#64748b" text-anchor="middle">自然数 ⊂ 整数 ⊂ 有理数 ⊂ 实数</text>
</svg>

| 数集 | 自然数集 | 整数集 | 有理数集 | 实数集 |
| --- | --- | --- | --- | --- |
| 记号 | $\mathbb{N}$ | $\mathbb{Z}$ | $\mathbb{Q}$ | $\mathbb{R}$ |
| 备注 | 含 $0$；正整数集记 $\mathbb{N}^*$ | 含负整数 | 分数与整数 | 含无理数 |

## 典型例题

**例 1**：已知集合 $A=\{a+2,\ (a+1)^2,\ a^2+3a+3\}$，且 $1\in A$，求实数 $a$。

**解**：若 $a+2=1$，则 $a=-1$，此时 $(a+1)^2=0$，$a^2+3a+3=1$，与 $a+2=1$ 重复，违反互异性，舍去。
若 $(a+1)^2=1$，则 $a=0$ 或 $a=-2$；$a=0$ 时 $A=\{2,1,3\}$ 符合；$a=-2$ 时 $a^2+3a+3=1$ 与之重复，舍去。
若 $a^2+3a+3=1$，则 $a=-1$ 或 $a=-2$，均已舍去。综上 $a=0$。

**例 2**：用描述法表示"被 $3$ 除余 $1$ 的正整数组成的集合"。

**解**：$\{x\mid x=3k+1,\ k\in\mathbb{N}\}=\{1,4,7,10,\cdots\}$。

## 易错点

- **互异性**是含参问题的核心检验：求出参数后必须**代回检验**元素是否重复。
- 区分 $a$ 与 $\{a\}$：前者是元素，后者是集合；$0\in\{0\}$ 但 $0\neq\{0\}$。
- $\{x\mid y=x^2\}$ 是定义域 $\mathbb{R}$，$\{y\mid y=x^2\}$ 是值域 $[0,+\infty)$，$\{(x,y)\mid y=x^2\}$ 是点集，三者完全不同。
- $\mathbb{N}$ 包含 $0$，$\mathbb{N}^*$（或 $\mathbb{N}_+$）不含 $0$。

## 背记要点

1. 元素三特性：确定性、互异性、无序性；互异性最常考。
2. 数集链：$\mathbb{N}\subsetneq\mathbb{Z}\subsetneq\mathbb{Q}\subsetneq\mathbb{R}$。
3. 描述法 $\{x\in\mathbb{R}\mid p(x)\}$：满足条件 $p(x)$ 的所有实数 $x$。
4. 元素与集合用 $\in,\notin$；集合与集合用 $\subseteq,\subsetneq$。

## 自测题

1. 集合 $\{x\in\mathbb{N}\mid x<4\}$ 用列举法表示为____。
2. 若 $\{1,a,a^2\}$ 中三元素互异，则 $a$ 不能取的值是____。
3. 判断：$\sqrt{2}\in\mathbb{Q}$（对/错）____。
4. 集合 $\{(x,y)\mid x+y=3,\ x,y\in\mathbb{N}\}$ 含____个元素。

## 相关知识点

集合之间的包含与相等见 [[1.2 集合间的基本关系]]；交并补运算见 [[1.3 集合的基本运算]]。
