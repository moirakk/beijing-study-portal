---
title: 专题十二 不等式
date: 2026-08-10
---

# 专题十二 不等式

## 概念定义

**基本不等式**：若 $a > 0$，$b > 0$，则 $\frac{a + b}{2} \geq \sqrt{ab}$，当且仅当 $a = b$ 时取等号。即 $a + b \geq 2\sqrt{ab}$。

**一元二次不等式**：$ax^2 + bx + c > 0$（$a > 0$）的解集，先求对应方程根，再根据开口方向判断。

**绝对值不等式**：$|x| < a \iff -a < x < a$（$a > 0$）；$|x| > a \iff x < -a$ 或 $x > a$。

**线性规划**：在约束条件下求目标函数 $z = ax + by$ 的最值，通过可行域顶点求解。

## 知识梳理

| 类型 | 形式 | 解法 |
| --- | --- | --- |
| 基本不等式 | $a+b \geq 2\sqrt{ab}$ | 一正二定三相等 |
| 一元二次 | $ax^2+bx+c>0$ | 求根判号 |
| 绝对值 | $|x|<a$ | 去绝对值 |
| 分式 | $\frac{f(x)}{g(x)}>0$ | 化整式 |
| 线性规划 | $z=ax+by$ | 可行域顶点 |

## 结构示意

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="s12a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker></defs>
  <rect x="120" y="15" width="120" height="30" rx="6" fill="#2563eb"/>
  <text x="180" y="35" font-size="12" fill="#fff" text-anchor="middle">不等式</text>
  <line x1="150" y1="45" x2="70" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s12a)"/>
  <line x1="180" y1="45" x2="180" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s12a)"/>
  <line x1="210" y1="45" x2="290" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s12a)"/>
  <rect x="20" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="70" y="91" font-size="11" fill="#fff" text-anchor="middle">基本不等式</text>
  <rect x="130" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="180" y="91" font-size="11" fill="#fff" text-anchor="middle">一元二次</text>
  <rect x="240" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="290" y="91" font-size="11" fill="#fff" text-anchor="middle">线性规划</text>
  <text x="180" y="130" font-size="12" fill="#dc2626" text-anchor="middle">应用</text>
  <line x1="180" y1="99" x2="180" y2="118" stroke="#64748b" stroke-width="1.5"/>
  <rect x="40" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="85" y="156" font-size="11" fill="#fff" text-anchor="middle">求最值</text>
  <rect x="140" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="185" y="156" font-size="11" fill="#fff" text-anchor="middle">解不等式</text>
  <rect x="240" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="285" y="156" font-size="11" fill="#fff" text-anchor="middle">恒成立</text>
  <text x="180" y="200" font-size="12" fill="#64748b" text-anchor="middle">基本不等式：一正二定三相等</text>
  <text x="180" y="222" font-size="12" fill="#64748b" text-anchor="middle">取等条件 a=b</text>
</svg>

## 典型例题

**例 1**：已知 $x > 0$，求 $x + \frac{1}{x}$ 的最小值。

**解**：由基本不等式 $x + \frac{1}{x} \geq 2\sqrt{x \cdot \frac{1}{x}} = 2$，当且仅当 $x = \frac{1}{x}$ 即 $x = 1$ 时取等，故最小值为 2。

**例 2**：解不等式 $x^2 - 3x + 2 > 0$。

**解**：$x^2 - 3x + 2 = (x-1)(x-2) > 0$，两根为 $1$、$2$，开口向上，故解集为 $x < 1$ 或 $x > 2$。

## 易错点

- 基本不等式使用条件**一正二定三相等**，$a$、$b$ 必须为正。
- 取等条件 $a = b$ 不满足时**不能取等号**。
- 一元二次不等式**开口方向**判断错误。
- 分式不等式**不能直接去分母**（需考虑分母符号）。
- 线性规划中目标函数**斜率**与约束边界平行时最值不唯一。

## 背记要点

1. 基本不等式：$a + b \geq 2\sqrt{ab}$（$a, b > 0$），取等 $a = b$。
2. $\frac{a+b}{2} \geq \sqrt{ab} \geq \frac{2}{\frac{1}{a}+\frac{1}{b}}$。
3. $|x| < a \iff -a < x < a$。
4. 一元二次不等式：先求根，再判号。
5. 恒成立问题转化为最值问题。

## 自测题

1. 已知 $x > 0$，求 $2x + \frac{8}{x}$ 的最小值：____。
2. 解不等式 $x^2 - 4 > 0$：____。
3. 解不等式 $|x| < 3$：____。
4. 若 $a + b = 4$（$a, b > 0$），则 $ab$ 的最大值是____。
5. 判断：$x + \frac{1}{x} \geq 2$ 对 $x < 0$ 是否成立：____。

## 相关知识点

不等式与函数最值结合见 [[专题二 函数的概念与性质]]；与导数恒成立结合见 [[专题六 导数综合]]；与数列结合见 [[专题十一 数列综合]]。
