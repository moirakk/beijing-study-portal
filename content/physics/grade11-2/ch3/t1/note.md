---
title: 1 交变电流
date: 2026-08-10
---

# 1 交变电流

## 概念定义

**交变电流（交流）**：大小和方向都随时间**周期性变化**的电流。我国民用交流电周期 $0.02\ \text{s}$、频率 $50\ \text{Hz}$。

**产生**：矩形线圈在匀强磁场中绕垂直于磁场的轴匀速转动。从线圈平面与磁场**平行**（即经过中性面垂直位置——实际以中性面计时更常用）分析：

从**中性面**（线圈平面垂直于 $B$）开始计时，电动势按正弦规律变化：
$$e=E_m\sin\omega t,\qquad E_m=nBS\omega$$

**中性面**：线圈平面与磁场垂直的位置，此处 $\Phi$ 最大、$e=0$，电流方向在此改变。

## 知识梳理

| 项目 | 内容 |
| --- | --- |
| 峰值 | $E_m=nBS\omega$（$n$ 匝数、$S$ 面积、$\omega$ 角速度） |
| 瞬时值 | 中性面计时 $e=E_m\sin\omega t$；平面与 $B$ 平行处计时 $e=E_m\cos\omega t$ |
| 中性面 | $\Phi$ 最大、$\dfrac{\Delta\Phi}{\Delta t}=0$、$e=0$，每周期经过 2 次 |
| 电流换向 | 每经过中性面换向一次，每周期换向 2 次 |
| 电流瞬时值 | $i=\dfrac{e}{R+r}=I_m\sin\omega t$ |

## 正弦交流电波形图

<svg width="320" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="g1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#334155"/></marker></defs>
  <line x1="30" y1="100" x2="300" y2="100" stroke="#334155" stroke-width="2" marker-end="url(#g1)"/>
  <line x1="40" y1="180" x2="40" y2="25" stroke="#334155" stroke-width="2" marker-end="url(#g1)"/>
  <text x="296" y="118" font-size="12" fill="#334155">t</text>
  <text x="24" y="24" font-size="12" fill="#334155">e</text>
  <path d="M 40 100 C 60 40, 90 40, 110 100 S 160 160, 180 100 S 230 40, 250 100" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <line x1="30" y1="55" x2="75" y2="55" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="6" y="60" font-size="12" fill="#94a3b8">Em</text>
  <line x1="180" y1="100" x2="180" y2="185" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="172" y="198" font-size="12" fill="#94a3b8">T</text>
  <text x="104" y="118" font-size="12" fill="#94a3b8">T/2</text>
  <text x="60" y="180" font-size="12" fill="#334155">e = Em·sin(ωt)，Em = nBSω</text>
</svg>

## 典型例题

**例 1**：50 匝矩形线圈面积 $S=0.1\ \text{m}^2$，在 $B=0.2\ \text{T}$ 匀强磁场中以 $\omega=100\pi\ \text{rad/s}$ 匀速转动。求峰值电动势及从中性面开始计时的瞬时表达式。

**解**：$E_m=nBS\omega=50\times0.2\times0.1\times100\pi=100\pi\approx314\ \text{V}$。
从中性面计时：$e=314\sin(100\pi t)\ \text{V}$。周期 $T=\dfrac{2\pi}{\omega}=0.02\ \text{s}$，频率 $50\ \text{Hz}$。

**例 2**：线圈经过中性面时，为什么磁通量最大而电动势为零？

**解**：中性面处线圈平面垂直于 $B$，$\Phi=BS$ 达到最大；但此刻线圈两边速度方向与 $B$ **平行**，不切割磁感线，$\dfrac{\Delta\Phi}{\Delta t}=0$，故 $e=0$。
电动势取决于磁通量的**变化率**而非磁通量本身——两者恰好"错位"：$\Phi$ 最大处变化率为零，$\Phi=0$ 处变化率最大。

## 易错点

- 中性面处 $\Phi$ 最大但 $e=0$；线圈平面与 $B$ 平行处 $\Phi=0$ 但 $e$ 最大——"大零错位"。
- 电流每经过中性面**换向**一次，一个周期换向 **2 次**（$50\ \text{Hz}$ 交流每秒换向 100 次）。
- $E_m=nBS\omega$ 与线圈形状无关（只要面积相同）、与转轴位置无关（只要转轴在线圈平面内垂直于 $B$）。
- 计时起点不同表达式不同：中性面开始用 $\sin$，平行位置开始用 $\cos$。

## 背记要点

1. $e=E_m\sin\omega t$（中性面计时），$E_m=nBS\omega$。
2. 中性面：$\Phi$ 最大、$e=0$、电流换向处。
3. $T=\dfrac{2\pi}{\omega}$，我国市电 $f=50\ \text{Hz}$、$T=0.02\ \text{s}$。
4. 每周期电流方向改变 2 次。
5. 高考视角：北京卷常考波形图与线圈位置的对应关系及 $E_m$ 的计算，注意计时起点。

## 自测题

1. 峰值电动势公式：$E_m=$____。
2. 线圈经过中性面时，磁通量____，电动势____。
3. $50\ \text{Hz}$ 交流电每秒方向改变____次。
4. 判断：线圈转速加倍，峰值电动势也加倍。（　）

## 相关知识点

产生原理基于 [[2 法拉第电磁感应定律]]；有效值、峰值等物理量的定量描述见 [[2 交变电流的描述]]；交流电压变换见 [[3 变压器]]。
