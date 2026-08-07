---
title: 5 实验：验证机械能守恒定律
date: 2026-08-07
---

# 5 实验：验证机械能守恒定律

## 概念定义

**实验目的**：利用重物自由下落，通过打点计时器记录的纸带验证：只有重力做功时，重力势能的减少量等于动能的增加量，即
$$mgh=\dfrac12mv^2 \quad\Longleftrightarrow\quad gh=\dfrac12v^2$$
（两边可约去 $m$，故**不必测质量**。）

## 知识梳理

| 环节 | 要点 |
| --- | --- |
| 器材 | 打点计时器（电磁式 4~6 V 交流 / 电火花式 220 V 交流）、纸带、重物（质量大体积小）、刻度尺、铁架台 |
| 操作顺序 | 先**接通电源**待打点稳定，再**释放**纸带 |
| 选纸带 | 选第 1、2 两点间距接近 $2\ \text{mm}$（$\frac12g T^2$，$T=0.02\ \text{s}$）的纸带，说明重物从静止开始下落 |
| 测速度 | 中间时刻速度用**中间点法**：$v_n=\dfrac{h_{n+1}-h_{n-1}}{2T}$ |
| 验证式 | 比较 $\Delta E_p=mgh_n$ 与 $\Delta E_k=\dfrac12mv_n^2$（从起点到第 $n$ 点） |
| 误差分析 | 摩擦与空气阻力使 $\Delta E_k$ **略小于** $\Delta E_p$，属系统误差 |

## 打点计时器纸带示意

<svg viewBox="0 0 380 190" width="380" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="p45b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker></defs>
  <rect x="20" y="70" width="340" height="44" rx="6" fill="#fef9c3" stroke="#64748b" stroke-width="2"/>
  <circle cx="46" cy="92" r="3.5" fill="#334155"/>
  <circle cx="66" cy="92" r="3.5" fill="#334155"/>
  <circle cx="92" cy="92" r="3.5" fill="#334155"/>
  <circle cx="126" cy="92" r="3.5" fill="#334155"/>
  <circle cx="168" cy="92" r="3.5" fill="#334155"/>
  <circle cx="218" cy="92" r="3.5" fill="#334155"/>
  <circle cx="276" cy="92" r="3.5" fill="#334155"/>
  <circle cx="342" cy="92" r="3.5" fill="#334155"/>
  <text x="40" y="132" font-size="11" fill="#334155">O</text>
  <text x="122" y="132" font-size="11" fill="#334155">A</text>
  <text x="164" y="132" font-size="11" fill="#334155">B</text>
  <text x="214" y="132" font-size="11" fill="#334155">C</text>
  <line x1="126" y1="52" x2="218" y2="52" stroke="#2563eb" stroke-width="2" marker-end="url(#p45b)"/>
  <text x="130" y="42" font-size="11" fill="#2563eb">v_B=(h_C−h_A)/(2T)</text>
  <text x="24" y="164" font-size="12" fill="#64748b">点距逐渐增大（加速下落），首两点间距约 2 mm</text>
  <line x1="46" y1="150" x2="342" y2="150" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4 3"/>
</svg>

## 典型例题

**例 1**：某纸带上从起点 O 到 B 点的距离 $h_B=0.192\ \text{m}$，B 相邻两点 A、C 到 O 的距离分别为 $h_A=0.154\ \text{m}$、$h_C=0.230\ \text{m}$，$T=0.02\ \text{s}$，重物质量 $m=1\ \text{kg}$（$g=9.8\ \text{m/s}^2$）。验证 O→B 过程机械能是否近似守恒。

**解**：$v_B=\dfrac{h_C-h_A}{2T}=\dfrac{0.230-0.154}{0.04}=1.9\ \text{m/s}$。
$\Delta E_p=mgh_B=1\times9.8\times0.192\approx1.88\ \text{J}$；$\Delta E_k=\dfrac12mv_B^2=\dfrac12\times1\times1.9^2\approx1.81\ \text{J}$。
$\Delta E_k$ 略小于 $\Delta E_p$（差约 4%，源于阻力），在误差范围内机械能守恒得到验证。

**例 2**：为什么本实验不能用 $v=\sqrt{2gh}$ 或 $v=gt$ 计算速度来验证守恒？

**解**：$v=\sqrt{2gh}$ 与 $v=gt$ 都以"机械能守恒（自由落体规律成立）"为前提，用它们算速度再去验证守恒属于**循环论证**。速度必须由纸带上实测点距用 $v_n=\dfrac{h_{n+1}-h_{n-1}}{2T}$ 求出。

## 易错点

- 必须**先通电后放纸带**，且重物应靠近打点计时器释放，充分利用纸带。
- 速度只能由纸带实测求，不能用 $\sqrt{2gh}$、$gt$ 反推（循环论证）。
- 因摩擦阻力，正常结果是 $\dfrac12mv^2$ **略小于** $mgh$；若反常偏大说明数据有误。
- 重物应选**质量大、体积小**（密度大）的，以减小阻力相对影响；本实验不必测质量、也不必用天平。

## 背记要点

1. 验证式 $mgh_n=\dfrac12mv_n^2$，可约去 $m$。
2. 中间点法测速：$v_n=\dfrac{h_{n+1}-h_{n-1}}{2T}$。
3. 选带标准：首两点间距约 2 mm；操作口诀：先通电、后释放。
4. 误差：阻力致 $\Delta E_k<\Delta E_p$，系统误差。
5. 高考视角：实验题常考操作顺序、选带依据、循环论证辨析与误差方向判断。

## 自测题

1. 电磁打点计时器使用____电源，打点周期为____s（50 Hz）。
2. 求纸带上某点速度应使用公式 $v_n=$____。
3. 实验中 $\dfrac12mv^2$ 略小于 $mgh$ 的主要原因是____。
4. 判断：本实验必须用天平测出重物的质量。（　）

## 相关知识点

守恒定律内容见 [[4 机械能守恒定律]]；动能定理见 [[3 动能和动能定理]]；重力势能见 [[2 重力势能]]。
