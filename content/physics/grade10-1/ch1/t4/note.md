---
title: 4 速度变化快慢的描述——加速度
date: 2026-08-07
---

# 4 速度变化快慢的描述——加速度

## 概念定义

**加速度**：速度变化量与发生这一变化所用时间之比：
$$a=\dfrac{\Delta v}{\Delta t}=\dfrac{v-v_0}{\Delta t}$$
单位 $\text{m/s}^2$，是**矢量**，方向与 $\Delta v$ 方向相同。加速度描述的是**速度变化的快慢**，与速度大小、速度变化量大小**无必然联系**。

## 知识梳理

| 物理量 | 含义 | 关系 |
| --- | --- | --- |
| $v$ | 运动快慢 | $v$ 大，$a$ 可为零（匀速的高铁） |
| $\Delta v$ | 速度变化多少 | $\Delta v$ 大，$a$ 不一定大（还要看时间） |
| $a$ | 速度变化快慢 | $a$ 大，$v$ 不一定大（刚发射的火箭瞬间） |

**加减速判断**：$a$ 与 $v$ **同向**（同号）⇒ 加速；$a$ 与 $v$ **反向**（异号）⇒ 减速。与 $a$ 的正负本身无关。

**v-t 图象**：斜率＝加速度；斜率恒定 ⇒ 匀变速直线运动；图线与 t 轴交点 ⇒ 速度为零（可能反向）。

## v-t 图象：斜率表示加速度

<svg viewBox="0 0 360 240" width="360" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="ax4" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#64748b"/></marker></defs>
  <line x1="40" y1="190" x2="340" y2="190" stroke="#64748b" stroke-width="2" marker-end="url(#ax4)"/>
  <line x1="40" y1="220" x2="40" y2="20" stroke="#64748b" stroke-width="2" marker-end="url(#ax4)"/>
  <text x="330" y="210" font-size="13" fill="#64748b">t/s</text>
  <text x="8" y="30" font-size="13" fill="#64748b">v/(m/s)</text>
  <text x="28" y="205" font-size="12" fill="#64748b">O</text>
  <line x1="40" y1="160" x2="300" y2="40" stroke="#2563eb" stroke-width="2.5"/>
  <text x="235" y="45" font-size="12" fill="#2563eb">a₁&gt;0 匀加速</text>
  <line x1="40" y1="60" x2="300" y2="160" stroke="#dc2626" stroke-width="2.5"/>
  <text x="240" y="178" font-size="12" fill="#dc2626">a₂&lt;0 匀减速</text>
  <line x1="40" y1="110" x2="300" y2="110" stroke="#16a34a" stroke-width="2.5" stroke-dasharray="7 4"/>
  <text x="255" y="103" font-size="12" fill="#16a34a">a=0 匀速</text>
  <line x1="120" y1="123" x2="200" y2="123" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3 3"/>
  <line x1="200" y1="123" x2="200" y2="86" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3 3"/>
  <text x="150" y="140" font-size="11" fill="#64748b">Δt</text>
  <text x="207" y="108" font-size="11" fill="#64748b">Δv</text>
  <text x="95" y="82" font-size="12" fill="#2563eb">斜率 k=Δv/Δt=a</text>
</svg>

## 典型例题

**例 1**：汽车以 $v_0=20\ \text{m/s}$ 行驶，刹车后 4 s 内速度减为 $4\ \text{m/s}$，求加速度。

**解**：取初速度方向为正，$a=\dfrac{v-v_0}{\Delta t}=\dfrac{4-20}{4}=-4\ \text{m/s}^2$。
大小 $4\ \text{m/s}^2$，方向与初速度方向**相反**。

**例 2**：物体做直线运动，$v_0=+4\ \text{m/s}$，$a=-2\ \text{m/s}^2$ 且保持不变，物体做什么运动？

**解**：$a$ 与 $v$ 反向，先做匀减速运动，2 s 末速度为零；此后 $a$ 不变，物体反向做匀加速运动。可见 $a<0$ 不代表一定减速。

## 易错点

- $a$ 的方向与 $\Delta v$ 相同，**不一定**与 $v$ 相同。
- 加速度减小≠速度减小：$a$ 与 $v$ 同向时即使 $a$ 减小，速度仍在**增大**（增得变慢）。
- v-t 图象的交点表示**速度相等**，不是相遇；x-t 图交点才是相遇。

## 背记要点

1. $a=\dfrac{\Delta v}{\Delta t}$，矢量，方向同 $\Delta v$；单位 $\text{m/s}^2$。
2. 判加减速看 $a$ 与 $v$ 是否同向，口诀"同向加速、反向减速"。
3. v-t 图：斜率＝加速度，纵截距＝初速度。
4. 高考视角：加速度概念辨析、v-t 图象斜率分析是每年必考的基本功。

## 自测题

1. 速度大的物体加速度一定大吗？举一反例：____。
2. $v_0=10\ \text{m/s}$，2 s 后 $v=-6\ \text{m/s}$（沿同一直线），则 $a=$____。
3. v-t 图象中图线越陡，表示____越大。
4. $a$ 与 $v$ 同向且 $a$ 逐渐减小，物体速度如何变化？____。

## 相关知识点

速度概念见 [[3 位置变化快慢的描述——速度]]；匀变速运动规律见 [[2 匀变速直线运动的速度与时间的关系]]；加速度的动力学来源见 [[3 牛顿第二定律]]。
