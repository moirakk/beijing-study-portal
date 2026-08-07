---
title: 3 位置变化快慢的描述——速度
date: 2026-08-07
---

# 3 位置变化快慢的描述——速度

## 概念定义

**速度**：位移与发生这段位移所用时间之比，$v=\dfrac{\Delta x}{\Delta t}$，单位 m/s，是**矢量**，方向与位移方向相同。

**平均速度**：$\bar{v}=\dfrac{\Delta x}{\Delta t}$，对应一段时间（过程量），方向与位移方向相同。
**瞬时速度**：$\Delta t\to 0$ 时平均速度的极限值，对应某一时刻（状态量），方向沿轨迹**切线方向**。
**平均速率**：$\dfrac{s}{\Delta t}$（路程/时间），标量；瞬时速率＝瞬时速度的大小。

## 知识梳理

| 项目 | 公式 | 矢/标 | 对应 |
| --- | --- | --- | --- |
| 平均速度 | $\bar{v}=\dfrac{\Delta x}{\Delta t}$ | 矢量 | 一段时间/位移 |
| 瞬时速度 | $v=\lim\limits_{\Delta t\to 0}\dfrac{\Delta x}{\Delta t}$ | 矢量 | 某一时刻/位置 |
| 平均速率 | $\dfrac{s}{\Delta t}$ | 标量 | 一段时间 |

**x-t 图象**：图线上某点切线的**斜率**表示该时刻瞬时速度；两点连线（割线）斜率表示这段时间的平均速度。图线是直线 ⇒ 匀速直线运动。注意 x-t 图描述的是直线运动，**图线不是轨迹**。

## x-t 图象与斜率

<svg viewBox="0 0 360 240" width="360" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="ax3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#64748b"/></marker></defs>
  <line x1="40" y1="200" x2="340" y2="200" stroke="#64748b" stroke-width="2" marker-end="url(#ax3)"/>
  <line x1="40" y1="200" x2="40" y2="20" stroke="#64748b" stroke-width="2" marker-end="url(#ax3)"/>
  <text x="330" y="220" font-size="13" fill="#64748b">t/s</text>
  <text x="18" y="30" font-size="13" fill="#64748b">x/m</text>
  <text x="30" y="215" font-size="12" fill="#64748b">O</text>
  <path d="M40 200 Q 150 195, 220 120 T 330 45" fill="none" stroke="#2563eb" stroke-width="2.5"/>
  <circle cx="220" cy="120" r="5" fill="#dc2626"/>
  <line x1="140" y1="188" x2="300" y2="52" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 4"/>
  <text x="240" y="105" font-size="12" fill="#dc2626">P 点切线斜率＝瞬时速度</text>
  <line x1="40" y1="200" x2="220" y2="120" stroke="#16a34a" stroke-width="2" stroke-dasharray="3 3"/>
  <text x="60" y="150" font-size="12" fill="#16a34a">割线斜率＝平均速度</text>
  <line x1="220" y1="120" x2="220" y2="200" stroke="#64748b" stroke-width="1" stroke-dasharray="3 3"/>
  <text x="214" y="217" font-size="12" fill="#64748b">t₁</text>
</svg>

## 典型例题

**例 1**：汽车前一半时间以 $v_1=30\ \text{km/h}$ 行驶，后一半时间以 $v_2=60\ \text{km/h}$ 行驶，求全程平均速度大小。

**解**：设总时间 $2t$，则 $\bar{v}=\dfrac{v_1 t+v_2 t}{2t}=\dfrac{30+60}{2}=45\ \text{km/h}$。
（若是前后**一半位移**，则 $\bar{v}=\dfrac{2v_1v_2}{v_1+v_2}=40\ \text{km/h}$，注意区分。）

**例 2**：物体沿直线先向东运动 8 m 用时 4 s，接着向西运动 2 m 用时 1 s。求全程平均速度和平均速率。

**解**：取向东为正，位移 $\Delta x=8-2=6\ \text{m}$，总时间 5 s，平均速度 $\bar{v}=\dfrac{6}{5}=1.2\ \text{m/s}$，方向向东。
路程 $s=8+2=10\ \text{m}$，平均速率 $=\dfrac{10}{5}=2\ \text{m/s}$。

## 易错点

- 平均速度**不是**速度的算术平均（仅匀变速直线运动中 $\bar{v}=\dfrac{v_0+v}{2}$ 成立）。
- 平均速率≠平均速度的大小（往返运动时两者不等）。
- x-t 图象的交点表示**相遇**（同一时刻同一位置），不是碰撞或速度相等。

## 背记要点

1. $v=\dfrac{\Delta x}{\Delta t}$，矢量；瞬时速度方向沿轨迹切线。
2. x-t 图：斜率＝速度，切线斜率＝瞬时速度，交点＝相遇。
3. 高考视角：x-t 图象信息提取与平均速度计算是高频考点，注意"一半时间/一半位移"两类模型。

## 自测题

1. x-t 图象为过原点的倾斜直线，物体做____运动。
2. 汽车速度计显示的是____（平均/瞬时）速率。
3. 物体绕操场跑一圈 400 m 用时 80 s 回到原点，平均速度大小为____，平均速率为____。
4. 前一半位移速度 $v_1$、后一半位移速度 $v_2$，全程平均速度 $\bar{v}=$____。

## 相关知识点

位移概念见 [[2 时间 位移]]；速度变化快慢的描述见 [[4 速度变化快慢的描述——加速度]]。
