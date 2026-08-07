---
title: 2.2 基本不等式
date: 2026-08-07
---

# 2.2 基本不等式

## 概念定义

**基本不等式**：若 $a>0,\ b>0$，则
$$\sqrt{ab}\le\dfrac{a+b}{2}$$
当且仅当 $a=b$ 时取等号。其中 $\dfrac{a+b}{2}$ 叫算术平均数，$\sqrt{ab}$ 叫几何平均数。

**重要不等式**：对任意实数 $a,b$，有 $a^2+b^2\ge 2ab$，当且仅当 $a=b$ 时取等。

## 知识梳理

几何解释：半径不小于半弦（$AB$ 为直径，$CD\perp AB$）：

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg">
  <line x1="40" y1="170" x2="320" y2="170" stroke="#64748b" stroke-width="2"/>
  <path d="M 40 170 A 140 140 0 0 1 320 170" fill="none" stroke="#2563eb" stroke-width="2"/>
  <line x1="230" y1="170" x2="230" y2="59" stroke="#dc2626" stroke-width="2"/>
  <line x1="180" y1="170" x2="180" y2="30" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4 3"/>
  <circle cx="180" cy="170" r="3" fill="#64748b"/>
  <text x="40" y="190" font-size="13" fill="#64748b">A</text>
  <text x="316" y="190" font-size="13" fill="#64748b">B</text>
  <text x="230" y="190" font-size="13" fill="#dc2626">D</text>
  <text x="238" y="60" font-size="13" fill="#dc2626">C</text>
  <text x="130" y="188" font-size="12" fill="#64748b">AD=a, DB=b</text>
  <text x="244" y="120" font-size="12" fill="#dc2626">CD=√(ab)</text>
  <text x="90" y="90" font-size="12" fill="#2563eb">半径=(a+b)/2</text>
  <text x="180" y="222" font-size="13" fill="#64748b" text-anchor="middle">半弦 CD ≤ 半径 ⟹ √(ab) ≤ (a+b)/2</text>
</svg>

**最值结论**（"积定和最小，和定积最大"）：
- 若 $ab=P$（定值），则 $a+b\ge 2\sqrt{P}$，当 $a=b$ 时和最小；
- 若 $a+b=S$（定值），则 $ab\le\dfrac{S^2}{4}$，当 $a=b$ 时积最大。

使用前提三条件：**一正、二定、三相等**。

## 典型例题

**例 1**：已知 $x>0$，求 $y=x+\dfrac{4}{x}$ 的最小值。

**解**：$x>0$，$x\cdot\dfrac4x=4$ 为定值，故 $y\ge 2\sqrt{4}=4$，
当且仅当 $x=\dfrac4x$ 即 $x=2$ 时取等。所以 $y_{\min}=4$。

**例 2**：已知 $x>0,\ y>0$ 且 $x+2y=1$，求 $\dfrac1x+\dfrac1y$ 的最小值。

**解**："1"的代换：$\dfrac1x+\dfrac1y=\left(\dfrac1x+\dfrac1y\right)(x+2y)=3+\dfrac{2y}{x}+\dfrac{x}{y}\ge 3+2\sqrt{2}$，
当且仅当 $\dfrac{2y}{x}=\dfrac{x}{y}$ 即 $x=\sqrt2 y=\sqrt2-1$ 时取等。最小值为 $3+2\sqrt2$。

## 易错点

- **忽略"一正"**：$x<0$ 时 $x+\dfrac4x\le -4$，先提负号变正再用。
- **忽略"三相等"**：等号取不到时基本不等式失效，应改用对勾函数单调性（如 $x+\dfrac1x$ 在 $[2,+\infty)$ 上）。
- 连续两次使用基本不等式，两次取等条件必须**同时成立**，否则最值不可达。
- "$\dfrac1x+\dfrac1y$ 型"直接对分母用不等式往往错，应做"1"的代换展开。

## 背记要点

1. $\sqrt{ab}\le\dfrac{a+b}{2}$（$a,b>0$）；$a^2+b^2\ge 2ab$（$a,b\in\mathbb{R}$）。
2. 使用三查：一正、二定、三相等。
3. 积定和最小，和定积最大。
4. 常用技巧：配凑定值、"1"的代换、分离常数。

## 自测题

1. $x>0$ 时，$\dfrac{x^2+2}{x}$ 的最小值为____。
2. 已知 $a+b=4$（$a,b>0$），则 $ab$ 的最大值为____。
3. $x>1$ 时，$x+\dfrac{1}{x-1}$ 的最小值为____。
4. 已知 $x,y>0$，$\dfrac1x+\dfrac4y=1$，则 $x+y$ 的最小值为____。

## 相关知识点

不等式性质基础见 [[2.1 等式性质与不等式性质]]；最值问题也可用二次函数处理，见 [[2.3 二次函数与一元二次方程、不等式]]。
