---
title: 5.2 导数的运算
date: 2026-08-10
---

# 5.2 导数的运算

## 概念定义

**基本初等函数的导数公式**：由导数定义推得的常用函数求导公式，是导数运算的基础。
**导数四则运算法则**：设 $f(x),g(x)$ 可导，则和差、积、商的导数有确定的运算法则。
**复合函数求导（链式法则）**：设 $y=f(u)$，$u=g(x)$，则复合函数 $y=f(g(x))$ 的导数为 $y_x'=y_u'\cdot u_x'=f'(u)\cdot g'(x)$，即"由外到内，逐层求导，导数相乘"。

## 知识梳理

| 类别 | 公式 | 备注 |
| --- | --- | --- |
| 常数、幂函数 | $(C)'=0$；$(x^\alpha)'=\alpha x^{\alpha-1}$ | $\alpha$ 为任意实数 |
| 三角函数 | $(\sin x)'=\cos x$；$(\cos x)'=-\sin x$ | 注意余弦导数带负号 |
| 指数函数 | $(e^x)'=e^x$；$(a^x)'=a^x\ln a$ | $a>0$ 且 $a\ne1$ |
| 对数函数 | $(\ln x)'=\dfrac1x$；$(\log_a x)'=\dfrac{1}{x\ln a}$ | 定义域 $x>0$ |
| 和差法则 | $[f(x)\pm g(x)]'=f'(x)\pm g'(x)$ | 可推广到有限多个 |
| 积法则 | $[f(x)g(x)]'=f'(x)g(x)+f(x)g'(x)$ | 特别地 $[Cf(x)]'=Cf'(x)$ |
| 商法则 | $\left[\dfrac{f(x)}{g(x)}\right]'=\dfrac{f'(x)g(x)-f(x)g'(x)}{g^2(x)}$ | 分子"前导后不导减前不导后导" |
| 链式法则 | $[f(g(x))]'=f'(g(x))\cdot g'(x)$ | 教材限于 $u=ax+b$ 型 |

常用导函数图象对照（$y=e^x$ 与其切线，导数值即斜率处处等于函数值）：

<svg width="320" height="200" viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
  <line x1="20" y1="160" x2="310" y2="160" stroke="black" stroke-width="1"/>
  <line x1="60" y1="195" x2="60" y2="10" stroke="black" stroke-width="1"/>
  <text x="300" y="175" font-size="12">x</text>
  <text x="45" y="20" font-size="12">y</text>
  <path d="M 25 152 C 100 145 180 120 265 20" stroke="blue" fill="none" stroke-width="1.5"/>
  <line x1="130" y1="165" x2="250" y2="65" stroke="red" stroke-width="1.5"/>
  <circle cx="190" cy="115" r="4" fill="black"/>
  <text x="196" y="130" font-size="11">切点 (x0, e^x0)</text>
  <text x="90" y="45" font-size="12" fill="blue">y=e^x</text>
  <text x="215" y="55" font-size="11" fill="red">斜率=e^x0</text>
</svg>

## 典型例题

**例 1**：求下列函数的导数：(1) $y=x^3\ln x$；(2) $y=\dfrac{\sin x}{x}$。

**解**：(1) 积法则：$y'=(x^3)'\ln x+x^3(\ln x)'=3x^2\ln x+x^3\cdot\dfrac1x=3x^2\ln x+x^2$。
(2) 商法则：$y'=\dfrac{(\sin x)'\cdot x-\sin x\cdot(x)'}{x^2}=\dfrac{x\cos x-\sin x}{x^2}$。

**例 2**：求 $y=e^{2x+1}+\cos\left(3x-\dfrac{\pi}{4}\right)$ 的导数。

**解**：链式法则。$(e^{2x+1})'=e^{2x+1}\cdot(2x+1)'=2e^{2x+1}$；
$\left[\cos\left(3x-\dfrac{\pi}{4}\right)\right]'=-\sin\left(3x-\dfrac{\pi}{4}\right)\cdot3=-3\sin\left(3x-\dfrac{\pi}{4}\right)$。
故 $y'=2e^{2x+1}-3\sin\left(3x-\dfrac{\pi}{4}\right)$。

## 易错点

- $(\cos x)'=-\sin x$ 的负号、商法则分子的**减号顺序**最易出错。
- 积、商的导数不等于导数的积、商：$[f g]'\ne f'g'$。
- 复合函数漏乘内层导数，如 $(\sin 2x)'=2\cos 2x$ 而非 $\cos 2x$。
- $(a^x)'=a^x\ln a$ 与 $(x^\alpha)'=\alpha x^{\alpha-1}$ 区分：底为常数用前者，指数为常数用后者。
- 求导前先化简（如展开、拆分分式），可避免繁琐的积商法则。

## 背记要点

1. 八个基本公式必须一字不差：幂、指、对、正余弦，重点记 $(\ln x)'=\dfrac1x$、$(e^x)'=e^x$。
2. 商法则口诀："上导下不导，减去上不导下导，除以下的平方"。
3. 链式法则：外层导 × 内层导；$u=ax+b$ 时内层导即 $a$。
4. 先化简再求导：$y=\dfrac{x^2+1}{x}=x+\dfrac1x$ 后逐项求导更快。
5. 高考视角：求导是导数大题的"第一步基本功"，北京卷常考 $e^x$、$\ln x$ 与多项式的组合函数求导。

## 自测题

1. $y=x^4-3x^2+5$，则 $y'=$____。
2. $y=x e^x$，则 $y'=$____。
3. $y=\ln(2x+1)$，则 $y'=$____。
4. $f(x)=\dfrac{x}{x+1}$，则 $f'(1)=$____。

## 相关知识点

导数定义与切线见 [[5.1 导数的概念及其意义]]；利用 $f'(x)$ 符号研究增减见 [[5.3.1 函数的单调性]]；求极值最值见 [[5.3.2 函数的极值与最大（小）值]]。
