---
title: 5.2 三角函数的概念
date: 2026-08-07
---

# 5.2 三角函数的概念

## 概念定义

设角 $\alpha$ 终边与**单位圆**交于点 $P(x,y)$，定义：
$$\sin\alpha=y,\qquad \cos\alpha=x,\qquad \tan\alpha=\dfrac{y}{x}\ (x\neq 0).$$

一般地，若终边上任一点 $P(x,y)$，$r=\sqrt{x^2+y^2}$，则 $\sin\alpha=\dfrac{y}{r}$，$\cos\alpha=\dfrac{x}{r}$，$\tan\alpha=\dfrac{y}{x}$。

## 知识梳理

单位圆定义示意：

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg">
  <line x1="30" y1="130" x2="330" y2="130" stroke="#64748b" stroke-width="1.5"/>
  <line x1="180" y1="15" x2="180" y2="230" stroke="#64748b" stroke-width="1.5"/>
  <circle cx="180" cy="130" r="85" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <line x1="180" y1="130" x2="243" y2="73" stroke="#dc2626" stroke-width="2"/>
  <circle cx="243" cy="73" r="4" fill="#dc2626"/>
  <line x1="243" y1="73" x2="243" y2="130" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="180" y1="130" x2="243" y2="130" stroke="#2563eb" stroke-width="2"/>
  <text x="250" y="66" font-size="13" fill="#dc2626">P(cosα, sinα)</text>
  <text x="252" y="106" font-size="12" fill="#2563eb">sinα</text>
  <text x="198" y="146" font-size="12" fill="#2563eb">cosα</text>
  <path d="M 208 130 A 28 28 0 0 0 200 111" fill="none" stroke="#dc2626" stroke-width="1.5"/>
  <text x="216" y="118" font-size="13" fill="#dc2626">α</text>
  <text x="322" y="148" font-size="13" fill="#64748b">x</text>
  <text x="190" y="26" font-size="13" fill="#64748b">y</text>
  <text x="180" y="242" font-size="4" fill="#64748b"> </text>
</svg>

**各象限符号**（口诀"**一全正、二正弦、三正切、四余弦**"）：

| 象限 | 一 | 二 | 三 | 四 |
| --- | --- | --- | --- | --- |
| $\sin$ | + | + | − | − |
| $\cos$ | + | − | − | + |
| $\tan$ | + | − | + | − |

**同角基本关系**：$\sin^2\alpha+\cos^2\alpha=1$；$\tan\alpha=\dfrac{\sin\alpha}{\cos\alpha}$。

## 典型例题

**例 1**：角 $\alpha$ 终边过点 $P(-3,4)$，求 $\sin\alpha,\cos\alpha,\tan\alpha$。

**解**：$r=\sqrt{9+16}=5$，故 $\sin\alpha=\dfrac45$，$\cos\alpha=-\dfrac35$，$\tan\alpha=-\dfrac43$。

**例 2**：已知 $\tan\alpha=2$，求 $\dfrac{\sin\alpha+\cos\alpha}{\sin\alpha-\cos\alpha}$ 与 $\sin\alpha\cos\alpha$。

**解**：分子分母同除 $\cos\alpha$：$\dfrac{\tan\alpha+1}{\tan\alpha-1}=\dfrac{3}{1}=3$。
$\sin\alpha\cos\alpha=\dfrac{\sin\alpha\cos\alpha}{\sin^2\alpha+\cos^2\alpha}=\dfrac{\tan\alpha}{\tan^2\alpha+1}=\dfrac{2}{5}$。

## 易错点

- 终边过 $P(x,y)$ 时 $r>0$ 恒成立，但 $x,y$ 有正负；含参数点（如 $P(a,2a)$）要讨论 $a$ 的符号。
- 由 $\sin\alpha$ 求 $\cos\alpha$ 需开方，**象限不确定时保留两解**。
- "弦化切"要求分子分母是关于 $\sin,\cos$ 的**齐次式**，非齐次先借 $1=\sin^2\alpha+\cos^2\alpha$ 配齐。
- $\tan\alpha$ 在 $\alpha=\dfrac\pi2+k\pi$ 处无意义。

## 背记要点

1. 单位圆定义：$P(\cos\alpha,\sin\alpha)$，坐标即函数值。
2. 符号口诀：一全正、二正弦、三正切、四余弦。
3. 平方关系 $\sin^2\alpha+\cos^2\alpha=1$，商数关系 $\tan\alpha=\dfrac{\sin\alpha}{\cos\alpha}$。
4. 知一求二：知 $\sin,\cos,\tan$ 之一（加象限）可求其余两个。

## 自测题

1. 角 $\alpha$ 终边过 $(1,-\sqrt3)$，则 $\sin\alpha=$____。
2. 若 $\sin\alpha>0$ 且 $\tan\alpha<0$，则 $\alpha$ 是第____象限角。
3. 已知 $\cos\alpha=-\dfrac{5}{13}$，$\alpha$ 是第三象限角，则 $\tan\alpha=$____。
4. 已知 $\tan\alpha=3$，则 $\dfrac{2\sin\alpha-\cos\alpha}{\sin\alpha+\cos\alpha}=$____。

## 相关知识点

角与弧度基础见 [[5.1 任意角和弧度制]]；利用对称性化简任意角三角函数见 [[5.3 诱导公式]]。
