---
title: 2 向心力
date: 2026-08-07
---

# 2 向心力

## 概念定义

**向心力**：做匀速圆周运动的物体所受的**指向圆心**的合力。它只改变速度的**方向**，不改变速度的大小。

教材通过**圆锥摆实验与向心力演示器**探究得出：
$$F_n=m\dfrac{v^2}{r}=m\omega^2 r=m\dfrac{4\pi^2}{T^2}r$$

## 知识梳理

| 项目 | 内容 |
| --- | --- |
| 方向 | 始终指向圆心，时刻变化，是**变力** |
| 来源 | 由重力、弹力、摩擦力等某个力或几个力的**合力**（或分力）提供 |
| 作用效果 | 只改变速度方向，不做功（与速度始终垂直） |
| 表达式 | $F_n=m\dfrac{v^2}{r}=m\omega^2r=m\dfrac{4\pi^2}{T^2}r=4\pi^2n^2mr$ |
| 变速圆周运动 | 指向圆心的合力分量提供向心力，切向分量改变速率 |

**关键认识**：向心力不是一种新的性质力，受力分析时**不能**额外画"向心力"。

## 圆锥摆的受力分析

<svg viewBox="0 0 360 240" width="360" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="p22r" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#dc2626"/></marker><marker id="p22b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker><marker id="p22g" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#16a34a"/></marker></defs>
  <line x1="180" y1="20" x2="180" y2="200" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <circle cx="180" cy="20" r="4" fill="#334155"/>
  <line x1="180" y1="20" x2="260" y2="150" stroke="#64748b" stroke-width="2"/>
  <circle cx="260" cy="150" r="9" fill="#e0e7ff" stroke="#334155" stroke-width="2"/>
  <ellipse cx="180" cy="150" rx="80" ry="16" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="260" y1="159" x2="260" y2="225" stroke="#dc2626" stroke-width="2.5" marker-end="url(#p22r)"/>
  <text x="266" y="218" font-size="12" fill="#dc2626">mg</text>
  <line x1="260" y1="150" x2="212" y2="72" stroke="#2563eb" stroke-width="2.5" marker-end="url(#p22b)"/>
  <text x="196" y="66" font-size="12" fill="#2563eb">T（沿绳）</text>
  <line x1="252" y1="150" x2="196" y2="150" stroke="#16a34a" stroke-width="2.5" marker-end="url(#p22g)"/>
  <text x="204" y="140" font-size="12" fill="#16a34a">F向=mgtanθ</text>
  <text x="290" y="100" font-size="12" fill="#64748b">θ</text>
  <text x="36" y="36" font-size="12" fill="#64748b">T 与 mg 的合力水平指向圆心</text>
</svg>

## 典型例题

**例 1**：质量 $m=0.5\ \text{kg}$ 的小球用长 $L=1\ \text{m}$ 的轻绳系住，在光滑水平面上以 $v=2\ \text{m/s}$ 做匀速圆周运动（绳另一端固定于面上）。求绳的张力。

**解**：绳的张力提供向心力：
$T=m\dfrac{v^2}{L}=0.5\times\dfrac{4}{1}=2\ \text{N}$。

**例 2**：圆锥摆摆线与竖直方向成 $\theta$ 角，摆球质量 $m$，做匀速圆周运动的半径为 $r$。求摆球的角速度 $\omega$。

**解**：绳张力与重力的合力水平指向圆心，大小 $F_n=mg\tan\theta$。
由 $mg\tan\theta=m\omega^2 r$ 得 $\omega=\sqrt{\dfrac{g\tan\theta}{r}}$。
（若用摆线长 $L$，$r=L\sin\theta$，则 $\omega=\sqrt{\dfrac{g}{L\cos\theta}}$。）

## 易错点

- 向心力是**效果力**，由实际受到的力（或其合力/分力）提供，受力图上不另画。
- 匀速圆周运动中合外力全部指向圆心；变速圆周运动中合外力还有切向分量。
- "供"与"需"关系：提供的向心力 $>$ 所需 $m\dfrac{v^2}{r}$ 时做近心运动，$<$ 时做离心运动。
- 用 $F_n=m\omega^2r$ 还是 $m\dfrac{v^2}{r}$，看已知量是 $\omega$（$T$、$n$）还是 $v$，避免半径变化时误判。

## 背记要点

1. $F_n=m\dfrac{v^2}{r}=m\omega^2r=m\dfrac{4\pi^2}{T^2}r$，方向指向圆心。
2. 向心力由合力（或分力）提供，不是新的性质力；不做功。
3. 圆锥摆：$F_n=mg\tan\theta$，$\omega=\sqrt{g/(L\cos\theta)}$。
4. 高考视角：先受力分析找"谁提供向心力"，再列 $F_合=m\dfrac{v^2}{r}$，是圆周运动大题的固定思路。

## 自测题

1. 向心力的方向始终指向____，它只改变速度的____。
2. 质量 1 kg 的物体以 3 m/s 做半径 1.5 m 的匀速圆周运动，所需向心力为____N。
3. 判断：做匀速圆周运动的物体，向心力对它做正功。（　）
4. 圆锥摆中提供向心力的是____与____的合力。

## 相关知识点

运动学描述见 [[1 圆周运动]]；由 $F_n$ 推出加速度公式见 [[3 向心加速度]]；离心现象与实例见 [[4 生活中的圆周运动]]。
