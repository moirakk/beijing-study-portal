---
title: 2 波的描述
date: 2026-08-07
---

# 2 波的描述

## 概念定义

**波长 $\lambda$**：沿波的传播方向，两个相邻的、振动情况**总是相同**（相位差 $2\pi$）的质点间的距离。横波中相邻两波峰（波谷）间距即波长。

**波速 $v$**：振动（波形）在介质中传播的速度，由**介质本身**决定。

**周期 $T$、频率 $f$**：等于**波源**的振动周期和频率，波进入不同介质时**频率不变**。

**波速公式**：
$$v=\dfrac{\lambda}{T}=\lambda f$$

## 知识梳理

| 物理量 | 决定因素 | 换介质时 |
| --- | --- | --- |
| 频率 $f$（周期 $T$） | 波源 | 不变 |
| 波速 $v$ | 介质（种类、温度等） | 改变 |
| 波长 $\lambda$ | $\lambda=\dfrac{v}{f}$，由二者共同决定 | 随 $v$ 改变 |

**波形图（$y$–$x$ 图）与振动图（$x$–$t$ 图）的区别**：波形图是**某一时刻**所有质点的位移快照，横轴是位置 $x$，相邻同相点间距读**波长**；振动图是**某一质点**位移随时间的变化，横轴是时间 $t$，读**周期**。

**质点振动方向判断（横波）**："上下坡法"——沿传播方向看，"上坡"的质点向下运动，"下坡"的质点向上运动；或"平移法"——把波形沿传播方向微移，质点移向新波形位置。

## 波形图（y–x）

<svg viewBox="0 0 420 170" width="420" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="w2a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#334155"/></marker><marker id="w2g" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#16a34a"/></marker><marker id="w2r" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#dc2626"/></marker></defs>
  <line x1="30" y1="90" x2="400" y2="90" stroke="#334155" stroke-width="1.5" marker-end="url(#w2a)"/>
  <line x1="30" y1="160" x2="30" y2="20" stroke="#334155" stroke-width="1.5" marker-end="url(#w2a)"/>
  <text x="392" y="108" font-size="13" fill="#334155">x</text>
  <text x="14" y="28" font-size="13" fill="#334155">y</text>
  <path d="M30,90 C55,30 85,30 110,90 C135,150 165,150 190,90 C215,30 245,30 270,90 C295,150 325,150 350,90" fill="none" stroke="#2563eb" stroke-width="2.5"/>
  <line x1="70" y1="40" x2="230" y2="40" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4 3"/>
  <text x="140" y="32" font-size="12" fill="#64748b">λ</text>
  <line x1="300" y1="30" x2="360" y2="30" stroke="#16a34a" stroke-width="2.5" marker-end="url(#w2g)"/>
  <text x="306" y="22" font-size="12" fill="#16a34a">v →</text>
  <circle cx="150" cy="120" r="5" fill="#dc2626"/>
  <line x1="150" y1="118" x2="150" y2="140" stroke="#dc2626" stroke-width="2.5" marker-end="url(#w2r)"/>
  <text x="158" y="140" font-size="12" fill="#dc2626">P（上坡向下）</text>
</svg>

## 典型例题

**例 1**：某横波波速 $20\ \text{m/s}$，频率 $5\ \text{Hz}$。求波长；波从该介质进入另一介质后波速变为 $30\ \text{m/s}$，求新波长。

**解**：$\lambda=\dfrac{v}{f}=\dfrac{20}{5}=4\ \text{m}$。换介质频率不变：$\lambda'=\dfrac{v'}{f}=\dfrac{30}{5}=6\ \text{m}$。

**例 2**：波形图中波沿 $+x$ 方向传播，波长 $4\ \text{m}$，周期 $0.4\ \text{s}$。某"上坡段"质点 P 此刻位于 $y=+2\ \text{cm}$ 处，判断 P 的运动方向，并求波速。

**解**：沿传播方向"上坡向下"，P 此刻**向下**（沿 $-y$）运动。波速 $v=\dfrac{\lambda}{T}=\dfrac{4}{0.4}=10\ \text{m/s}$。

## 易错点

- 波速由介质决定，与频率、波长各自无关（$v=\lambda f$ 是关系式不是决定式）；换介质时 $f$ 不变、$v$ 与 $\lambda$ 同变。
- 波形图与振动图易混：先看横轴是 $x$ 还是 $t$。
- 波的传播具有**周期性与双向性**：由两时刻波形求波速常有多解 $v=\dfrac{nλ\pm\Delta x}{\Delta t}$，注意"波沿某方向传播"是否给定。
- 质点在一个周期内路程为 $4A$，波形向前平移一个波长。

## 背记要点

1. $v=\lambda f=\dfrac{\lambda}{T}$；$f$ 由波源定，$v$ 由介质定。
2. 波形图读 $\lambda$、$A$；振动图读 $T$、$A$。
3. 上下坡法：沿传播方向上坡向下、下坡向上。
4. 高考视角：波形图＋振动图结合、波速多解问题是北京卷波动大题主线。

## 自测题

1. 波速公式 $v=$____；波从水进入空气，频率____，波长____。
2. 相邻两波峰间距 6 m、周期 0.3 s 的波，波速为____m/s。
3. 沿 $-x$ 方向传播的横波中，"上坡"质点向____运动。
4. 判断：波形图的横轴是时间。（　）

## 相关知识点

波的产生机制见 [[1 波的形成]]；波长在障碍物问题中的作用见 [[3 波的反射、折射和衍射]]；两列波叠加见 [[4 波的干涉]]。
