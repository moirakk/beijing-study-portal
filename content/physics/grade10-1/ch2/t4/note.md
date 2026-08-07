---
title: 4 自由落体运动
date: 2026-08-07
---

# 4 自由落体运动

## 概念定义

**自由落体运动**：物体只在**重力**作用下从**静止**开始下落的运动，是初速度为零、加速度为 $g$ 的**匀加速直线运动**（理想化：忽略空气阻力）。

**重力加速度 $g$**：方向**竖直向下**，通常取 $g=9.8\ \text{m/s}^2$（估算取 $10\ \text{m/s}^2$）；随纬度升高而增大，随高度增大而减小。同一地点一切物体自由下落的 $g$ 相同（伽利略斜面实验外推的结论）。

## 知识梳理

| 规律 | 公式（$v_0=0$，$a=g$，向下为正） |
| --- | --- |
| 速度 | $v=gt$ |
| 位移 | $h=\dfrac{1}{2}gt^2$ |
| 速度—位移 | $v^2=2gh$ |
| 平均速度 | $\bar v=\dfrac{v}{2}=\dfrac{gt}{2}$ |
| 逐差恒量 | 连续相等 T 内下落高度差 $\Delta h=gT^2$ |

初速为零比例式全部适用：各 1 s 内下落高度比 $1:3:5:\cdots$。

## 自由落体 v-t 图与位置示意

<svg viewBox="0 0 360 240" width="360" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="ax8" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#64748b"/></marker><marker id="ag8" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#dc2626"/></marker></defs>
  <line x1="45" y1="200" x2="220" y2="200" stroke="#64748b" stroke-width="2" marker-end="url(#ax8)"/>
  <line x1="45" y1="200" x2="45" y2="30" stroke="#64748b" stroke-width="2" marker-end="url(#ax8)"/>
  <text x="210" y="218" font-size="12" fill="#64748b">t/s</text>
  <text x="14" y="40" font-size="12" fill="#64748b">v/(m/s)</text>
  <text x="33" y="214" font-size="12" fill="#64748b">O</text>
  <line x1="45" y1="200" x2="195" y2="50" stroke="#2563eb" stroke-width="2.5"/>
  <text x="120" y="100" font-size="12" fill="#2563eb">v = gt（斜率 g≈10）</text>
  <line x1="280" y1="40" x2="280" y2="215" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 3"/>
  <circle cx="280" cy="48" r="6" fill="#16a34a"/>
  <circle cx="280" cy="70" r="6" fill="#16a34a" opacity="0.8"/>
  <circle cx="280" cy="118" r="6" fill="#16a34a" opacity="0.6"/>
  <circle cx="280" cy="192" r="6" fill="#16a34a" opacity="0.45"/>
  <text x="295" y="63" font-size="11" fill="#64748b">1:3:5 间距增大</text>
  <line x1="320" y1="90" x2="320" y2="140" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ag8)"/>
  <text x="328" y="120" font-size="12" fill="#dc2626">g</text>
  <text x="255" y="232" font-size="11" fill="#64748b">频闪照片示意</text>
</svg>

## 典型例题

**例 1**：物体从楼顶自由下落，落地时间 3 s（$g=10\ \text{m/s}^2$）。求楼高和落地速度。

**解**：$h=\dfrac12gt^2=\dfrac12\times10\times9=45\ \text{m}$；$v=gt=30\ \text{m/s}$，方向竖直向下。

**例 2**：自由下落的物体最后 1 s 下落 35 m（$g=10\ \text{m/s}^2$），求总下落时间。

**解**：设总时间 $t$，$\dfrac12gt^2-\dfrac12g(t-1)^2=35$，即 $5(2t-1)=35$，得 $t=4\ \text{s}$（总高 80 m）。

## 易错点

- 有初速度或有明显空气阻力（羽毛、纸片在空气中）**不是**自由落体。
- $g$ 是矢量，方向竖直向下，不是"垂直向下"或指向地心以外的方向。
- "最后 1 s"类问题用**总程减前段**列方程，不要误当第 1 s。
- 重的物体不会下落更快——同地点 $g$ 与质量无关。

## 背记要点

1. 条件：只受重力＋初速度为零；本质：$a=g$ 的匀加速直线运动。
2. 三式：$v=gt$、$h=\frac12gt^2$、$v^2=2gh$。
3. $g\approx 9.8\ \text{m/s}^2$，竖直向下；纬度越高 $g$ 越大。
4. 高考视角：自由落体是匀变速公式的直接应用，常与逐差比例、"最后 1 s"模型结合考查。

## 自测题

1. 自由落体第 2 s 末速度为____，前 2 s 下落高度为____（$g=10\ \text{m/s}^2$）。
2. 从 45 m 高处自由下落，落地需时____s。
3. 自由落体第 1 s、第 2 s、第 3 s 内下落高度之比为____。
4. 判断：在月球上羽毛与铁锤同时释放会同时落地。（　）

## 相关知识点

位移公式推导见 [[3 匀变速直线运动的位移与时间的关系]]；重力的来源与性质见 [[1 重力与弹力]]。
