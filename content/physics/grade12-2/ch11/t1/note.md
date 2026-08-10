---
title: 专题十一 磁场
date: 2026-08-10
---

# 专题十一 磁场

## 概念定义

**磁感应强度**：$B = \dfrac{F}{IL}$，方向为小磁针 N 极受力方向。

**安培力**：$F = BIL\sin\theta$，$\theta$ 为 $B$ 与 $I$ 的夹角。方向用**左手定则**判断。

**洛伦兹力**：$F = qvB\sin\theta$，方向用左手定则判断，洛伦兹力**不做功**。

**带电粒子在磁场中运动**：洛伦兹力提供向心力 $qvB = m\dfrac{v^2}{r}$，轨道半径 $r = \dfrac{mv}{qB}$，周期 $T = \dfrac{2\pi m}{qB}$。

## 知识梳理

| 项目 | 要点 |
| --- | --- |
| 磁感应强度 | $B = \frac{F}{IL}$ |
| 安培力 | $F = BIL\sin\theta$，左手定则 |
| 洛伦兹力 | $F = qvB\sin\theta$，不做功 |
| 圆周运动 | $r = \frac{mv}{qB}$，$T = \frac{2\pi m}{qB}$ |
| 左手定则 | 判断安培力、洛伦兹力方向 |
| 磁通量 | $\Phi = BS\cos\theta$ |

## 结构示意

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="f11a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker></defs>
  <circle cx="180" cy="120" r="70" fill="none" stroke="#16a34a" stroke-width="2"/>
  <circle cx="180" cy="120" r="4" fill="#16a34a"/>
  <text x="180" y="110" text-anchor="middle" font-size="11" fill="#16a34a">O</text>
  <circle cx="180" cy="50" r="6" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  <line x1="180" y1="50" x2="230" y2="50" stroke="#2563eb" stroke-width="2" marker-end="url(#f11a)"/>
  <text x="205" y="42" font-size="12" fill="#2563eb">v</text>
  <line x1="180" y1="50" x2="180" y2="120" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3"/>
  <text x="190" y="90" font-size="11" fill="#dc2626">r</text>
  <text x="180" y="215" text-anchor="middle" font-size="12" fill="#64748b">qvB = mv²/r，r = mv/(qB)</text>
  <text x="180" y="235" text-anchor="middle" font-size="12" fill="#64748b">洛伦兹力不做功，速度大小不变</text>
</svg>

## 典型例题

**例 1**：长 $0.2\ \text{m}$ 的直导线垂直放入 $B = 0.5\ \text{T}$ 的磁场中，通以 $2\ \text{A}$ 电流，求安培力。

**解**：$F = BIL = 0.5 \times 2 \times 0.2 = 0.2\ \text{N}$。

**例 2**：带电粒子以 $v = 10^6\ \text{m/s}$ 垂直进入 $B = 0.1\ \text{T}$ 的磁场，电荷量 $q = 1.6\times10^{-19}\ \text{C}$，质量 $m = 1.6\times10^{-27}\ \text{kg}$，求轨道半径。

**解**：$r = \dfrac{mv}{qB} = \dfrac{1.6\times10^{-27}\times10^6}{1.6\times10^{-19}\times0.1} = 0.1\ \text{m}$。

**例 3**：求上题中粒子的运动周期。

**解**：$T = \dfrac{2\pi m}{qB} = \dfrac{2\pi\times1.6\times10^{-27}}{1.6\times10^{-19}\times0.1} = 2\pi\times10^{-7}\ \text{s}$。

## 易错点

- 洛伦兹力**不做功**，只改变速度方向，不改变速度大小。
- 安培力、洛伦兹力方向用**左手定则**，注意正负电荷。
- 洛伦兹力公式 $F = qvB\sin\theta$，$\theta$ 为 $v$ 与 $B$ 夹角。
- 带电粒子垂直进入磁场做**匀速圆周运动**，周期与速度无关。
- 磁通量 $\Phi = BS\cos\theta$，注意夹角。

## 背记要点

1. 磁感应强度：$B = \frac{F}{IL}$。
2. 安培力：$F = BIL\sin\theta$。
3. 洛伦兹力：$F = qvB\sin\theta$，不做功。
4. 轨道半径：$r = \frac{mv}{qB}$。
5. 周期：$T = \frac{2\pi m}{qB}$。

## 自测题

1. 洛伦兹力是否做功？
2. 带电粒子垂直进入磁场做____运动。
3. 周期与速度大小____（有关/无关）。
4. 判断：安培力方向用右手定则判断。（　）

## 相关知识点

磁场与电场综合见 [[专题十四 电磁综合计算]]；带电粒子运动与力学结合见 [[专题八 力学综合计算]]。
