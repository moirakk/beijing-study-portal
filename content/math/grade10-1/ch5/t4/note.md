---
title: 5.4 三角函数的图象与性质
date: 2026-08-07
---

# 5.4 三角函数的图象与性质

## 概念定义

**正弦曲线**：$y=\sin x$ 的图象，可用"五点法"作图，五个关键点：$(0,0),\left(\dfrac\pi2,1\right),(\pi,0),\left(\dfrac{3\pi}2,-1\right),(2\pi,0)$。

**周期函数**：若存在非零常数 $T$ 使 $f(x+T)=f(x)$ 恒成立，则 $T$ 为周期；最小正周期简称周期。

## 知识梳理

$y=\sin x$（红）与 $y=\cos x$（蓝）在 $[0,2\pi]$ 的图象：

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg">
  <line x1="20" y1="120" x2="345" y2="120" stroke="#64748b" stroke-width="1.5"/>
  <line x1="30" y1="20" x2="30" y2="220" stroke="#64748b" stroke-width="1.5"/>
  <polygon points="345,120 336,116 336,124" fill="#64748b"/>
  <path d="M 30 120 C 55 45 95 45 110 120 C 130 195 170 195 190 120 C 210 45 250 45 270 120 C 290 195 330 195 345 130" fill="none" stroke="#dc2626" stroke-width="2"/>
  <path d="M 30 50 C 60 55 90 175 110 190 C 135 200 165 90 190 55 C 210 42 245 130 270 185 C 292 198 325 105 345 62" fill="none" stroke="#2563eb" stroke-width="2"/>
  <line x1="190" y1="115" x2="190" y2="125" stroke="#64748b" stroke-width="1.5"/>
  <line x1="345" y1="115" x2="345" y2="125" stroke="#64748b" stroke-width="1.5"/>
  <text x="190" y="140" font-size="12" fill="#64748b" text-anchor="middle">π</text>
  <text x="340" y="140" font-size="12" fill="#64748b">2π</text>
  <text x="70" y="38" font-size="13" fill="#dc2626">y=sin x</text>
  <text x="205" y="38" font-size="13" fill="#2563eb">y=cos x</text>
  <text x="16" y="52" font-size="12" fill="#64748b">1</text>
  <text x="10" y="196" font-size="12" fill="#64748b">−1</text>
</svg>

| 性质 | $y=\sin x$ | $y=\cos x$ | $y=\tan x$ |
| --- | --- | --- | --- |
| 定义域 | $\mathbb{R}$ | $\mathbb{R}$ | $x\neq\dfrac\pi2+k\pi$ |
| 值域 | $[-1,1]$ | $[-1,1]$ | $\mathbb{R}$ |
| 周期 | $2\pi$ | $2\pi$ | $\pi$ |
| 奇偶性 | 奇 | 偶 | 奇 |
| 增区间 | $\left[-\dfrac\pi2+2k\pi,\dfrac\pi2+2k\pi\right]$ | $[-\pi+2k\pi,2k\pi]$ | $\left(-\dfrac\pi2+k\pi,\dfrac\pi2+k\pi\right)$ |
| 对称轴 | $x=\dfrac\pi2+k\pi$ | $x=k\pi$ | 无 |
| 对称中心 | $(k\pi,0)$ | $\left(\dfrac\pi2+k\pi,0\right)$ | $\left(\dfrac{k\pi}2,0\right)$ |

## 典型例题

**例 1**：求 $y=2\sin\left(2x-\dfrac\pi3\right)$ 的周期与单调递增区间。

**解**：周期 $T=\dfrac{2\pi}{2}=\pi$。令 $-\dfrac\pi2+2k\pi\le 2x-\dfrac\pi3\le\dfrac\pi2+2k\pi$，
解得 $-\dfrac{\pi}{12}+k\pi\le x\le\dfrac{5\pi}{12}+k\pi$，即增区间为 $\left[-\dfrac{\pi}{12}+k\pi,\ \dfrac{5\pi}{12}+k\pi\right]$（$k\in\mathbb{Z}$）。

**例 2**：求 $y=\cos^2x+\sin x$（$x\in\mathbb{R}$）的最大值。

**解**：$y=1-\sin^2x+\sin x$。设 $t=\sin x\in[-1,1]$，则 $y=-t^2+t+1=-\left(t-\dfrac12\right)^2+\dfrac54$。
当 $t=\dfrac12$ 时 $y_{\max}=\dfrac54$。

## 易错点

- 求 $y=A\sin(\omega x+\varphi)$ 单调区间：把 $\omega x+\varphi$ **整体代入**基本区间；若 $\omega<0$ 先用诱导公式化正。
- 写单调区间、对称轴**必须带 $k\in\mathbb{Z}$**，漏写扣分。
- $\tan x$ 的增区间是**开区间**，且不能写成并集。
- 换元求值域时新元 $t=\sin x$ 的范围 $[-1,1]$ 不能丢。

## 背记要点

1. 五点法：$0,\dfrac\pi2,\pi,\dfrac{3\pi}2,2\pi$ 处取"零正零负零"。
2. 周期公式：$y=A\sin(\omega x+\varphi)$ 的 $T=\dfrac{2\pi}{|\omega|}$；正切型 $T=\dfrac{\pi}{|\omega|}$。
3. 正弦对称轴过最值点，对称中心是零点。
4. 整体代换法是处理复合三角函数性质的万能钥匙。

## 自测题

1. $y=3\sin\dfrac{x}{2}$ 的周期为____，最大值为____。
2. $y=\cos x$ 在 $[0,2\pi]$ 上的单调递减区间是____。
3. $y=\tan 2x$ 的定义域为____。
4. $y=\sin x$ 图象的一条对称轴是 $x=$____（写出一个即可）。

## 相关知识点

三角函数定义见 [[5.2 三角函数的概念]]；图象变换见 [[5.6 函数 y=Asin(ωx+φ)]]；求值化简工具见 [[5.5 三角恒等变换]]。
