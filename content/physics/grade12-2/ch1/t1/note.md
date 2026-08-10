---
title: 专题一 力与物体的平衡
date: 2026-08-10
---

# 专题一 力与物体的平衡

## 概念定义

**重力**：$G = mg$，方向竖直向下，作用点在重心。

**弹力**：产生条件为接触且发生弹性形变。胡克定律 $F = kx$（$k$ 为劲度系数，$x$ 为形变量）。弹力方向垂直于接触面（或沿绳、杆方向）。

**摩擦力**：滑动摩擦力 $f = \mu N$，方向与相对运动方向相反；静摩擦力大小由平衡条件或牛顿第二定律确定，范围 $0 < f \le f_{\max}$。

**共点力平衡**：物体处于静止或匀速直线运动状态时，合力为零，即 $\sum \vec{F} = 0$。三力平衡时，任意两力的合力与第三力等大反向。

## 知识梳理

| 项目 | 要点 |
| --- | --- |
| 受力分析顺序 | 重力→弹力→摩擦力→其他力 |
| 三力平衡 | 合成法、正交分解法、矢量三角形法 |
| 多力平衡 | 正交分解：$\sum F_x = 0$，$\sum F_y = 0$ |
| 动态平衡 | 图解法（矢量三角形）、解析法 |
| 临界问题 | 静摩擦力达到最大值、绳恰好拉直等 |
| 整体法与隔离法 | 求外力用整体，求内力用隔离 |

## 结构示意

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="f1a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker><marker id="f1b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#dc2626"/></marker><marker id="f1c" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#16a34a"/></marker></defs>
  <rect x="30" y="150" width="300" height="8" fill="#64748b"/>
  <rect x="120" y="80" width="120" height="70" rx="6" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  <text x="180" y="120" text-anchor="middle" font-size="13" fill="#2563eb">物体 m</text>
  <line x1="180" y1="80" x2="180" y2="30" stroke="#2563eb" stroke-width="2" marker-end="url(#f1a)"/>
  <text x="195" y="40" font-size="12" fill="#2563eb">N（支持力）</text>
  <line x1="180" y1="150" x2="180" y2="200" stroke="#dc2626" stroke-width="2" marker-end="url(#f1b)"/>
  <text x="195" y="200" font-size="12" fill="#dc2626">G=mg</text>
  <line x1="120" y1="115" x2="70" y2="115" stroke="#16a34a" stroke-width="2" marker-end="url(#f1c)"/>
  <text x="60" y="108" font-size="12" fill="#16a34a">f</text>
  <text x="180" y="228" text-anchor="middle" font-size="12" fill="#64748b">平衡条件：N + f 与 G 等大反向</text>
</svg>

## 典型例题

**例 1**：质量为 $m$ 的物体静止在倾角为 $\theta$ 的斜面上，求斜面对物体的支持力和摩擦力。

**解**：沿斜面与垂直斜面正交分解。垂直斜面：$N = mg\cos\theta$；沿斜面：$f = mg\sin\theta$（静摩擦力）。

**例 2**：三根绳悬挂一重物，其中两绳夹角为 $120^\circ$，每绳拉力均为 $T$，求重物重力。

**解**：两绳拉力的合力 $F = 2T\cos 60^\circ = T$，方向竖直向上，与重力平衡，故 $G = T$。

**例 3**：光滑球放在竖直墙与斜面之间，缓慢增大斜面倾角，墙对球的支持力如何变化？

**解**：用图解法，随 $\theta$ 增大，墙对球的支持力 $N_1$ 增大，斜面对球的支持力 $N_2$ 也增大。

## 易错点

- 受力分析**不能多画力**（如把合力当作独立力），也不能漏画力。
- 静摩擦力方向与**相对运动趋势**相反，不一定是阻碍物体运动。
- 滑动摩擦力 $f = \mu N$ 中 $N$ 是**正压力**，不一定等于重力。
- 三力平衡用矢量三角形时，注意各力首尾相接构成闭合三角形。
- 动态平衡中"缓慢"意味着每一时刻都处于平衡状态。

## 背记要点

1. 胡克定律：$F = kx$。
2. 滑动摩擦力：$f = \mu N$。
3. 平衡条件：$\sum \vec{F} = 0$，即 $\sum F_x = 0$、$\sum F_y = 0$。
4. 三力平衡：任意两力合力与第三力等大反向。
5. 受力分析顺序：重力→弹力→摩擦力→其他力。

## 自测题

1. 静止在斜面上的物体，斜面对它的摩擦力方向是____。
2. 弹簧劲度系数 $k=200\ \text{N/m}$，伸长 $5\ \text{cm}$，弹力为____N。
3. 三力平衡时，三个力能否构成任意三角形？为什么？
4. 判断：静摩擦力一定小于滑动摩擦力。（　）

## 相关知识点

力的合成与分解见 [[专题二 牛顿运动定律]]；平衡问题常与牛顿第二定律综合，见 [[专题八 力学综合计算]]。
