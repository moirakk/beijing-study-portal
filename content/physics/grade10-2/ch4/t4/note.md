---
title: 4 机械能守恒定律
date: 2026-08-07
---

# 4 机械能守恒定律

## 概念定义

**机械能**：动能与势能（重力势能、弹性势能）的总和：$E=E_k+E_p$。

**机械能守恒定律**：在**只有重力或弹力做功**的物体系统内，动能与势能可以互相转化，而总的机械能保持不变：
$$\dfrac12mv_1^2+mgh_1=\dfrac12mv_2^2+mgh_2$$

## 知识梳理

| 项目 | 内容 |
| --- | --- |
| 守恒条件 | 只有重力（或系统内弹力）做功；其他力不做功或做功代数和为零 |
| 三种表达 | ①$E_1=E_2$（选零势面）；②$\Delta E_k=-\Delta E_p$（增量式）；③$\Delta E_A=-\Delta E_B$（系统内转移式） |
| 判断方法 | 看做功：受其他力但其他力不做功（如光滑轨道弹力）仍守恒 |
| 不守恒情形 | 有摩擦、空气阻力做功，或有动力做功（机械能可增可减） |
| 典型模型 | 自由落体、抛体、光滑斜面/曲面、单摆（摆线拉力不做功） |

## 摆球的机械能守恒示意

<svg viewBox="0 0 360 230" width="360" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="p44b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker></defs>
  <line x1="60" y1="30" x2="300" y2="30" stroke="#64748b" stroke-width="3"/>
  <circle cx="180" cy="30" r="4" fill="#334155"/>
  <line x1="180" y1="30" x2="80" y2="130" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="4 3"/>
  <line x1="180" y1="30" x2="180" y2="180" stroke="#64748b" stroke-width="2"/>
  <line x1="180" y1="30" x2="280" y2="130" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="4 3"/>
  <circle cx="80" cy="130" r="10" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
  <text x="34" y="118" font-size="11" fill="#dc2626">A：v=0，E_p 最大</text>
  <circle cx="180" cy="180" r="10" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  <line x1="192" y1="180" x2="240" y2="180" stroke="#2563eb" stroke-width="2.5" marker-end="url(#p44b)"/>
  <text x="140" y="206" font-size="11" fill="#2563eb">B：v 最大，E_k 最大</text>
  <circle cx="280" cy="130" r="10" fill="#fecaca" stroke="#dc2626" stroke-width="2"/>
  <text x="258" y="112" font-size="11" fill="#dc2626">C：v=0</text>
  <path d="M80,130 Q180,196 280,130" fill="none" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="3 3"/>
  <text x="94" y="60" font-size="12" fill="#64748b">拉力⊥速度不做功，只有重力做功</text>
</svg>

## 典型例题

**例 1**：小球从光滑曲面 $h=1.8\ \text{m}$ 高处由静止滑下（$g=10\ \text{m/s}^2$），求到达底端的速度。

**解**：只有重力做功，机械能守恒。取底端为零势面：
$mgh=\dfrac12mv^2$ ⇒ $v=\sqrt{2gh}=\sqrt{36}=6\ \text{m/s}$。

**例 2**：摆长 $L=1\ \text{m}$ 的单摆，摆球从摆线与竖直方向成 $60°$ 处由静止释放（$g=10\ \text{m/s}^2$），求通过最低点时的速度大小。

**解**：下落高度 $h=L(1-\cos60°)=1\times0.5=0.5\ \text{m}$。
摆线拉力始终垂直速度不做功，机械能守恒：$mgh=\dfrac12mv^2$，
$v=\sqrt{2gh}=\sqrt{10}\approx3.2\ \text{m/s}$。

## 易错点

- 守恒条件是"只有重力（弹力）**做功**"，不是"只受重力"；光滑轨道的支持力不做功，不破坏守恒。
- 有摩擦或空气阻力时机械能减少，减少量等于产生的热量（克服摩擦力做的功）。
- 增量式 $\Delta E_k=-\Delta E_p$ 不需选零势面，往往更简便。
- 系统问题（如轻绳连接两物体）应对**系统**判断守恒，注意两物体速度大小关系。

## 背记要点

1. 条件：只有重力或弹力做功；表达式 $E_{k1}+E_{p1}=E_{k2}+E_{p2}$。
2. 三种表达式按需选用，增量式免选零势面。
3. 判断守恒看"做功"而非"受力"。
4. 高考视角：与圆周运动（最高点临界）、平抛组合的守恒综合题是主干大题；有摩擦时改用动能定理或能量守恒。

## 自测题

1. 机械能守恒的条件是只有____做功。
2. 物体自由下落 5 m，动能增加量等于重力势能的____量。
3. 单摆摆动中（不计阻力），摆线拉力做功为____。
4. 判断：物体所受合外力为零时，机械能一定守恒。（　）

## 相关知识点

动能变化的量化见 [[3 动能和动能定理]]；势能概念见 [[2 重力势能]]；实验验证见 [[5 实验：验证机械能守恒定律]]。
