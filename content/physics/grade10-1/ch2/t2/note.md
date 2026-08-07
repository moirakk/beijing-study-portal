---
title: 2 匀变速直线运动的速度与时间的关系
date: 2026-08-07
---

# 2 匀变速直线运动的速度与时间的关系

## 概念定义

**匀变速直线运动**：沿一条直线且**加速度不变**的运动。v-t 图象是一条**倾斜直线**。
- 匀加速：$a$ 与 $v$ 同向，速度均匀增大；
- 匀减速：$a$ 与 $v$ 反向，速度均匀减小。

**速度公式**：
$$v=v_0+at$$
其中 $v_0$ 为初速度，$a$ 为加速度（矢量运算需先规定正方向）。

## 知识梳理

| 项目 | 内容 |
| --- | --- |
| 公式 | $v=v_0+at$（由 $a=\dfrac{v-v_0}{t}$ 变形） |
| v-t 图纵截距 | 初速度 $v_0$ |
| v-t 图斜率 | 加速度 $a$（正负表方向） |
| 中间时刻速度 | $v_{\frac{t}{2}}=\dfrac{v_0+v}{2}=\bar{v}$ |
| 矢量符号 | 取 $v_0$ 方向为正：匀加速 $a>0$，匀减速 $a<0$ |

## v-t 图象

<svg viewBox="0 0 360 240" width="360" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="ax6" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#64748b"/></marker></defs>
  <line x1="45" y1="200" x2="340" y2="200" stroke="#64748b" stroke-width="2" marker-end="url(#ax6)"/>
  <line x1="45" y1="200" x2="45" y2="20" stroke="#64748b" stroke-width="2" marker-end="url(#ax6)"/>
  <text x="330" y="218" font-size="13" fill="#64748b">t</text>
  <text x="20" y="30" font-size="13" fill="#64748b">v</text>
  <text x="33" y="214" font-size="12" fill="#64748b">O</text>
  <line x1="45" y1="150" x2="310" y2="45" stroke="#2563eb" stroke-width="2.5"/>
  <circle cx="45" cy="150" r="4" fill="#2563eb"/>
  <text x="12" y="154" font-size="12" fill="#2563eb">v₀</text>
  <line x1="45" y1="87" x2="205" y2="87" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="205" y1="200" x2="205" y2="87" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="200" y="216" font-size="12" fill="#64748b">t₁</text>
  <text x="22" y="92" font-size="12" fill="#64748b">v₁</text>
  <line x1="115" y1="122" x2="205" y2="122" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="3 3"/>
  <line x1="205" y1="122" x2="205" y2="88" stroke="#dc2626" stroke-width="1.6"/>
  <text x="150" y="138" font-size="11" fill="#dc2626">Δt</text>
  <text x="212" y="110" font-size="11" fill="#dc2626">Δv=aΔt</text>
  <text x="90" y="60" font-size="12" fill="#16a34a">v = v₀ + at（斜率为 a）</text>
</svg>

## 典型例题

**例 1**：汽车以 $v_0=10\ \text{m/s}$ 行驶，以 $a=2\ \text{m/s}^2$ 匀加速，求 5 s 末的速度。

**解**：$v=v_0+at=10+2\times5=20\ \text{m/s}$，方向与初速度相同。

**例 2**：汽车以 $v_0=20\ \text{m/s}$ 行驶，刹车加速度大小 $5\ \text{m/s}^2$，求 3 s 末和 6 s 末的速度。

**解**：先求停车时间 $t_0=\dfrac{v_0}{|a|}=\dfrac{20}{5}=4\ \text{s}$。
3 s < 4 s：$v=20-5\times3=5\ \text{m/s}$。
6 s > 4 s：车已停止，$v=0$（**不能**代公式算出 $-10\ \text{m/s}$）。

## 易错点

- **刹车陷阱**：先判断停车时间，超过后速度为零，不能继续套公式。
- 公式是矢量式，代入数值前必须规定正方向并带符号。
- v-t 图线穿过 t 轴表示物体**反向运动**（如竖直上抛），不是"停下"。

## 背记要点

1. $v=v_0+at$；匀变速 ⇔ $a$ 恒定 ⇔ v-t 图为直线。
2. 中间时刻速度＝平均速度＝$\dfrac{v_0+v}{2}$。
3. 刹车问题先算停车时间再求解。
4. 高考视角：速度公式与 v-t 图结合的计算是必修一核心，刹车类问题几乎年年出现。

## 自测题

1. $v_0=5\ \text{m/s}$，$a=-2\ \text{m/s}^2$，则 4 s 末速度 $v=$____（物体可反向）。
2. 匀变速直线运动中间时刻的瞬时速度等于____。
3. 汽车刹车 $v_0=12\ \text{m/s}$，$|a|=4\ \text{m/s}^2$，5 s 末速度为____。
4. v-t 图象纵截距的物理意义是____。

## 相关知识点

加速度定义见 [[4 速度变化快慢的描述——加速度]]；配套位移规律见 [[3 匀变速直线运动的位移与时间的关系]]；实验验证见 [[1 实验：探究小车速度随时间变化的规律]]。
