---
title: 5.6 函数 y=Asin(ωx+φ)
date: 2026-08-07
---

# 5.6 函数 y=Asin(ωx+φ)

## 概念定义

函数 $y=A\sin(\omega x+\varphi)$（$A>0,\ \omega>0$）中：
- $A$ 为**振幅**（最大偏离量），值域 $[-A,A]$；
- $T=\dfrac{2\pi}{\omega}$ 为**周期**，$f=\dfrac1T$ 为频率；
- $\omega x+\varphi$ 为相位，$\varphi$ 为**初相**。

## 知识梳理

$y=\sin x$（灰虚线）变换到 $y=2\sin\left(2x+\dfrac{\pi}{3}\right)$（红）示意：

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg">
  <line x1="15" y1="120" x2="348" y2="120" stroke="#64748b" stroke-width="1.5"/>
  <line x1="40" y1="15" x2="40" y2="225" stroke="#64748b" stroke-width="1.5"/>
  <polygon points="348,120 339,116 339,124" fill="#64748b"/>
  <path d="M 40 120 C 75 55 125 55 160 120 C 195 185 245 185 280 120 C 300 85 320 70 340 66" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5 4"/>
  <path d="M 40 55 C 52 25 72 40 85 120 C 100 205 122 210 137 120 C 150 35 172 30 187 120 C 202 205 224 210 239 120 C 252 35 274 30 289 120 C 302 200 324 205 340 130" fill="none" stroke="#dc2626" stroke-width="2"/>
  <text x="250" y="200" font-size="13" fill="#64748b">y=sin x</text>
  <text x="60" y="26" font-size="13" fill="#dc2626">y=2sin(2x+π/3)</text>
  <text x="24" y="40" font-size="12" fill="#64748b">2</text>
  <text x="20" y="212" font-size="12" fill="#64748b">−2</text>
  <text x="340" y="138" font-size="13" fill="#64748b">x</text>
</svg>

**图象变换两条路径**（从 $y=\sin x$ 到 $y=A\sin(\omega x+\varphi)$）：

| 顺序 | 步骤 |
| --- | --- |
| 先平移后伸缩 | 左移 $\varphi$ → 横坐标变为 $\dfrac1\omega$ 倍 → 纵坐标变为 $A$ 倍 |
| 先伸缩后平移 | 横坐标变为 $\dfrac1\omega$ 倍 → **左移 $\dfrac{\varphi}{\omega}$** → 纵坐标变为 $A$ 倍 |

**由图象求解析式**：$A=\dfrac{y_{\max}-y_{\min}}{2}$；由相邻特征点求 $T$ 定 $\omega$；代入最高点（或用 $\lvert\varphi\rvert$ 限制）求 $\varphi$。

## 典型例题

**例 1**：把 $y=\sin x$ 图象怎样变换可得 $y=\sin\left(2x-\dfrac\pi3\right)$？

**解**：法一：先右移 $\dfrac\pi3$ 得 $y=\sin\left(x-\dfrac\pi3\right)$，再横坐标缩为原来的 $\dfrac12$。
法二：先横坐标缩为 $\dfrac12$ 得 $y=\sin2x$，再**右移 $\dfrac\pi6$**（平移量除以 $\omega$）。

**例 2**：已知 $f(x)=A\sin(\omega x+\varphi)$（$A>0,\omega>0,|\varphi|<\dfrac\pi2$）最大值为 $2$，相邻两条对称轴间距为 $\dfrac\pi2$，且过最高点 $\left(\dfrac{\pi}{6},2\right)$，求解析式。

**解**：$A=2$；对称轴间距 $=\dfrac{T}{2}=\dfrac\pi2$，故 $T=\pi$，$\omega=2$。
最高点：$2\times\dfrac\pi6+\varphi=\dfrac\pi2+2k\pi$，得 $\varphi=\dfrac\pi6$（满足限制）。
故 $f(x)=2\sin\left(2x+\dfrac\pi6\right)$。

## 易错点

- **先伸缩后平移时，平移量是 $\dfrac{\varphi}{\omega}$ 而不是 $\varphi$**，这是高考最高频错误。
- 平移方向："$x-\dfrac\pi3$"是**右移**，加左减右不能记反。
- 求 $\varphi$ 优先代**最高/最低点**（唯一确定），代零点需辨别升降零点。
- 相邻对称轴间距是 $\dfrac T2$，相邻对称轴与对称中心间距是 $\dfrac T4$。

## 背记要点

1. $A$ 定值域，$\omega$ 定周期（$T=\dfrac{2\pi}{\omega}$），$\varphi$ 定平移。
2. 变换口诀：左加右减（针对 $x$ 本身）；先缩后移要除 $\omega$。
3. 识图三步：最值定 $A$ → 周期定 $\omega$ → 特征点定 $\varphi$。
4. 五点法作图：令 $\omega x+\varphi$ 依次取 $0,\dfrac\pi2,\pi,\dfrac{3\pi}2,2\pi$。

## 自测题

1. $y=3\sin\left(2x+\dfrac\pi4\right)$ 的振幅为____，周期为____，初相为____。
2. 将 $y=\sin 2x$ 左移 $\dfrac\pi6$ 得到的解析式为____。
3. $f(x)=A\sin(\omega x+\varphi)$ 最大值 3、最小值 $-3$、周期 $\dfrac{2\pi}3$，则 $A=$____，$\omega=$____。
4. $y=2\sin\left(2x-\dfrac\pi6\right)$ 的一条对称轴为 $x=$____。

## 相关知识点

基本图象与性质见 [[5.4 三角函数的图象与性质]]；化成该形式的工具见 [[5.5 三角恒等变换]]；实际建模见 [[5.7 三角函数的应用]]。
