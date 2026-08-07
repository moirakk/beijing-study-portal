---
title: 6 超重和失重
date: 2026-08-07
---

# 6 超重和失重

## 概念定义

**超重**：物体对支持物的压力（或对悬挂物的拉力）**大于**自身重力的现象。条件：加速度**方向向上**（加速上升或减速下降）。

**失重**：压力（拉力）**小于**重力的现象。条件：加速度**方向向下**（加速下降或减速上升）。

**完全失重**：$a=g$ 且方向向下时，压力（拉力）为**零**（自由落体、抛体运动、绕地球运行的航天器内）。

**本质**：物体的**重力并没有变化**，变化的只是"视重"（对支持物的作用力）。

## 知识梳理

以竖直向上为正，电梯中体重计示数 $N$（由牛顿第二、三定律）：

| 运动情况 | 加速度方向 | 示数 | 状态 |
| --- | --- | --- | --- |
| 静止/匀速 | $a=0$ | $N=mg$ | 正常 |
| 加速上升 / 减速下降 | 向上 | $N=m(g+a)>mg$ | 超重 |
| 加速下降 / 减速上升 | 向下 | $N=m(g-a)<mg$ | 失重 |
| 自由下落 | 向下且 $a=g$ | $N=0$ | 完全失重 |

判断只看**加速度方向**，与运动方向（上升/下降）无关。

## 电梯中的受力分析

<svg viewBox="0 0 360 240" width="360" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="a19r" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#dc2626"/></marker><marker id="a19b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker><marker id="a19g" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#16a34a"/></marker></defs>
  <rect x="40" y="40" width="120" height="180" fill="none" stroke="#64748b" stroke-width="2.5"/>
  <rect x="70" y="150" width="60" height="14" fill="#e0e7ff" stroke="#64748b" stroke-width="1.5"/>
  <circle cx="100" cy="120" r="14" fill="#fde68a" stroke="#64748b" stroke-width="1.5"/>
  <rect x="88" y="134" width="24" height="18" fill="#fde68a" stroke="#64748b" stroke-width="1.5"/>
  <line x1="100" y1="150" x2="100" y2="205" stroke="#dc2626" stroke-width="2.5" marker-end="url(#a19r)"/>
  <text x="106" y="200" font-size="12" fill="#dc2626">mg</text>
  <line x1="118" y1="150" x2="118" y2="78" stroke="#2563eb" stroke-width="2.5" marker-end="url(#a19b)"/>
  <text x="124" y="90" font-size="12" fill="#2563eb">N</text>
  <line x1="185" y1="170" x2="185" y2="100" stroke="#16a34a" stroke-width="3" marker-end="url(#a19g)"/>
  <text x="193" y="135" font-size="13" fill="#16a34a">a 向上</text>
  <text x="255" y="80" font-size="13" fill="#2563eb">N−mg=ma</text>
  <text x="255" y="105" font-size="13" fill="#dc2626">N=m(g+a)&gt;mg</text>
  <text x="255" y="130" font-size="13" fill="#64748b">⇒ 超重</text>
  <text x="230" y="180" font-size="12" fill="#64748b">a 向下则 N=m(g−a)</text>
  <text x="230" y="200" font-size="12" fill="#64748b">a=g 时 N=0 完全失重</text>
</svg>

## 典型例题

**例 1**：质量 50 kg 的人乘电梯，以 $a=2\ \text{m/s}^2$ 加速上升（$g=10\ \text{m/s}^2$），求人对地板的压力。

**解**：对人：$N-mg=ma$，$N=m(g+a)=50\times12=600\ \text{N}$。
由牛顿第三定律，人对地板压力 $N'=600\ \text{N}>mg=500\ \text{N}$，超重。

**例 2**：电梯以 $a=3\ \text{m/s}^2$ 减速上升，体重计上 60 kg 的人示数是多少？

**解**：减速上升 ⇒ $a$ 方向向下：$mg-N=ma$，$N=m(g-a)=60\times7=420\ \text{N}$，示数约 42 kg，失重。

## 易错点

- 超重/失重时物体的**重力不变**，变的是对支持物的作用力（视重）。
- 判断依据是**加速度方向**，不是速度方向："减速下降"是超重。
- 完全失重时一切由重力产生的效果消失：天平失效、浸没物体无浮力差现象、水滴呈球形。
- 航天器绕地运行中的"失重"不是不受重力，重力恰好提供向心力。

## 背记要点

1. $a$ 向上：$N=m(g+a)$ 超重；$a$ 向下：$N=m(g-a)$ 失重；$a=g$：完全失重。
2. 口诀："看加速度，不看速度"。
3. 完全失重场景：自由落体、各类抛体、在轨航天器。
4. 高考视角：超失重与电梯、火箭、体重计情境结合，是牛顿定律应用的经典选择/计算题。

## 自测题

1. 电梯减速下降时，人处于____（超重/失重）状态。
2. 质量 40 kg 的人在以 $a=2.5\ \text{m/s}^2$ 加速下降的电梯中，对地板压力为____N（$g=10\ \text{m/s}^2$）。
3. 完全失重的条件是____。
4. 判断：宇航员在空间站中失重，说明他不受地球引力。（　）

## 相关知识点

分析工具见 [[3 牛顿第二定律]] 与 [[3 牛顿第三定律]]；完全失重的运动学原型见 [[4 自由落体运动]]；两类动力学问题见 [[5 牛顿运动定律的应用]]。
