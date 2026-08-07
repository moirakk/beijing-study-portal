---
title: 1 圆周运动
date: 2026-08-07
---

# 1 圆周运动

## 概念定义

**圆周运动**：物体运动轨迹是圆（或圆的一部分）的运动。

**匀速圆周运动**：线速度**大小**不变的圆周运动（速度方向时刻改变，故仍是变速运动）。

**线速度** $v$：质点通过的弧长与时间之比，方向沿圆周切线；**角速度** $\omega$：半径转过的角度与时间之比。

## 知识梳理

| 物理量 | 定义式 | 单位 | 关系 |
| --- | --- | --- | --- |
| 线速度 $v$ | $v=\dfrac{\Delta s}{\Delta t}$ | m/s | $v=\omega r=\dfrac{2\pi r}{T}$ |
| 角速度 $\omega$ | $\omega=\dfrac{\Delta\theta}{\Delta t}$ | rad/s | $\omega=\dfrac{2\pi}{T}=2\pi n$ |
| 周期 $T$ | 运动一周所用时间 | s | $T=\dfrac1n$（$n$ 为转速） |
| 转速 $n$ | 每秒转过的圈数 | r/s | — |

**传动规律**：同轴转动各点 $\omega$ 相同，$v\propto r$；皮带（齿轮、链条）传动边缘各点 $v$ 相同，$\omega\propto\dfrac1r$。

## 皮带传动与同轴转动示意

<svg viewBox="0 0 380 200" width="380" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="p21a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#dc2626"/></marker></defs>
  <circle cx="100" cy="110" r="60" fill="none" stroke="#2563eb" stroke-width="2.5"/>
  <circle cx="280" cy="110" r="35" fill="none" stroke="#16a34a" stroke-width="2.5"/>
  <circle cx="100" cy="110" r="25" fill="none" stroke="#7c3aed" stroke-width="2"/>
  <circle cx="100" cy="110" r="3" fill="#334155"/>
  <circle cx="280" cy="110" r="3" fill="#334155"/>
  <line x1="100" y1="50" x2="280" y2="75" stroke="#64748b" stroke-width="2"/>
  <line x1="100" y1="170" x2="280" y2="145" stroke="#64748b" stroke-width="2"/>
  <text x="70" y="36" font-size="12" fill="#2563eb">A（大轮边缘）</text>
  <text x="256" y="62" font-size="12" fill="#16a34a">B（小轮边缘）</text>
  <text x="58" y="110" font-size="12" fill="#7c3aed">C</text>
  <line x1="160" y1="110" x2="160" y2="70" stroke="#dc2626" stroke-width="2" marker-end="url(#p21a)"/>
  <text x="166" y="82" font-size="11" fill="#dc2626">v_A</text>
  <text x="40" y="192" font-size="12" fill="#64748b">A、C 同轴：ω 相同；A、B 皮带相连：v 相同</text>
</svg>

## 典型例题

**例 1**：如图，大轮半径 $r_A=2r_B$（B 为小轮），A、B 由不打滑的皮带相连，C 在大轮轴上且 $r_C=\dfrac12r_A$。比较 A、B、C 三点的线速度与角速度。

**解**：皮带传动 $v_A=v_B$；由 $\omega=v/r$ 得 $\omega_B=2\omega_A$。
同轴转动 $\omega_C=\omega_A$；$v_C=\omega_A r_C=\dfrac12 v_A$。
故 $v_A=v_B=2v_C$，$\omega_B=2\omega_A=2\omega_C$。

**例 2**：钟表分针长 $r=10\ \text{cm}$，求分针针尖的角速度和线速度大小。

**解**：分针周期 $T=3600\ \text{s}$，$\omega=\dfrac{2\pi}{T}=\dfrac{2\pi}{3600}\approx 1.7\times10^{-3}\ \text{rad/s}$。
$v=\omega r=1.7\times10^{-3}\times0.1\approx 1.7\times10^{-4}\ \text{m/s}$。

## 易错点

- 匀速圆周运动的"匀速"指**速率不变**，速度方向时刻变化，是变速运动。
- $v=\omega r$ 中 $\omega$ 必须用弧度制单位 rad/s，转速 $n$ 需先换算 $\omega=2\pi n$。
- 传动问题先抓"不变量"：同轴 $\omega$ 同，皮带/齿轮接触点 $v$ 同。
- 时针、分针、秒针周期分别为 12 h、60 min、60 s，比较角速度时勿记错。

## 背记要点

1. $v=\dfrac{2\pi r}{T}=\omega r$；$\omega=\dfrac{2\pi}{T}=2\pi n$。
2. 匀速圆周运动是**变速运动**，周期性运动。
3. 传动口诀：同轴同 $\omega$，皮带同 $v$。
4. 高考视角：传动装置比例计算是选择题常客，先确定相同量再按 $v=\omega r$ 推另一量。

## 自测题

1. 做匀速圆周运动的物体，其线速度的____不变、____时刻改变。
2. 半径 0.5 m、周期 2 s 的匀速圆周运动，线速度大小约为____m/s（$\pi$ 取 3.14）。
3. 同一转动圆盘上，离转轴越远的点线速度越____。
4. 皮带传动（不打滑）中两轮边缘点相同的物理量是____。

## 相关知识点

圆周运动需要的力见 [[2 向心力]]；描述速度方向变化快慢的量见 [[3 向心加速度]]；实际应用见 [[4 生活中的圆周运动]]。
