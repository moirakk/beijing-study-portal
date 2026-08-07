---
title: 1 重力与弹力
date: 2026-08-07
---

# 1 重力与弹力

## 概念定义

**重力** $G$：由于地球吸引而使物体受到的力，$G=mg$，方向**竖直向下**，作用点在**重心**（质量分布均匀、形状规则的物体重心在几何中心；重心可在物体之外，如圆环）。

**弹力**：发生**弹性形变**的物体，由于要恢复原状，对与它接触的物体产生的力。产生条件：①**直接接触**；②**发生弹性形变**（相互挤压）。

**胡克定律**：弹簧在弹性限度内，弹力与形变量成正比：
$$F=kx$$
$k$ 为劲度系数（单位 N/m，由弹簧本身决定），$x$ 为**形变量**（伸长或压缩量，不是弹簧长度）。

## 知识梳理

| 弹力类型 | 方向 |
| --- | --- |
| 支持力/压力 | 垂直于接触面，指向被支持（被压）的物体 |
| 绳的拉力 | 沿绳指向绳**收缩**的方向 |
| 轻杆的弹力 | 可沿杆也可不沿杆，由平衡条件或运动状态确定 |
| 点与面接触 | 垂直于**面**；点与曲面接触垂直于过接触点的切面 |

弹力有无判断：**假设法**（假设撤去接触物，看运动状态是否改变）。

## 斜面上物体的受力与胡克定律图象

<svg viewBox="0 0 360 240" width="360" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="ag9" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#dc2626"/></marker><marker id="an9" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker><marker id="ax9" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#64748b"/></marker></defs>
  <polygon points="20,210 190,210 190,110" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
  <rect x="88" y="138" width="44" height="28" fill="#bbf7d0" stroke="#16a34a" stroke-width="2" transform="rotate(-30.5 110 152)"/>
  <line x1="110" y1="152" x2="110" y2="212" stroke="#dc2626" stroke-width="2.5" marker-end="url(#ag9)"/>
  <text x="116" y="205" font-size="12" fill="#dc2626">G=mg</text>
  <line x1="110" y1="152" x2="80" y2="101" stroke="#2563eb" stroke-width="2.5" marker-end="url(#an9)"/>
  <text x="52" y="98" font-size="12" fill="#2563eb">N⊥斜面</text>
  <text x="152" y="200" font-size="11" fill="#64748b">θ</text>
  <line x1="215" y1="215" x2="345" y2="215" stroke="#64748b" stroke-width="2" marker-end="url(#ax9)"/>
  <line x1="215" y1="215" x2="215" y2="95" stroke="#64748b" stroke-width="2" marker-end="url(#ax9)"/>
  <text x="338" y="232" font-size="11" fill="#64748b">x</text>
  <text x="200" y="102" font-size="11" fill="#64748b">F</text>
  <line x1="215" y1="215" x2="330" y2="115" stroke="#16a34a" stroke-width="2.5"/>
  <text x="255" y="140" font-size="12" fill="#16a34a">F=kx 斜率=k</text>
  <text x="240" y="232" font-size="11" fill="#64748b">胡克定律图象</text>
</svg>

## 典型例题

**例 1**：弹簧原长 10 cm，挂 2 N 重物时长 12 cm，求劲度系数及挂 5 N 重物时的长度（弹性限度内）。

**解**：$k=\dfrac{F}{x}=\dfrac{2}{0.02}=100\ \text{N/m}$。
挂 5 N：$x=\dfrac{5}{100}=0.05\ \text{m}=5\ \text{cm}$，总长 $10+5=15\ \text{cm}$。

**例 2**：球放在倾角 $\theta$ 的光滑斜面与竖直挡板之间，分析球受的弹力。

**解**：受三个力：重力 $mg$；斜面支持力 $N_1$ 垂直斜面指向球；挡板弹力 $N_2$ 垂直挡板（水平方向）指向球。由平衡：$N_1=\dfrac{mg}{\cos\theta}$，$N_2=mg\tan\theta$。

## 易错点

- $G=mg$ 中重力**不等于**地球引力（因自转略小），高中一般不区分但表述要准确。
- 胡克定律的 $x$ 是**形变量**：$x=|l-l_0|$，不是弹簧长度 $l$。
- 接触不一定有弹力，还需**挤压形变**；用假设法判断。
- 绳只能拉不能推；杆的弹力方向不一定沿杆。

## 背记要点

1. 重力：$G=mg$，竖直向下，作用于重心。
2. 弹力条件：接触＋弹性形变；方向垂直接触面或沿绳收缩方向。
3. 胡克定律 $F=kx$（弹性限度内），F-x 图象斜率为 $k$。
4. 高考视角：弹力方向判断与胡克定律计算是受力分析的第一步，斜面＋挡板模型高频出现。

## 自测题

1. 质量 2 kg 的物体所受重力为____N（$g=10\ \text{m/s}^2$）。
2. 弹簧 $k=200\ \text{N/m}$，压缩 3 cm 时弹力大小为____。
3. 绳对物体的拉力方向沿绳指向绳____的方向。
4. 判断：只要两物体接触就一定有弹力。（　）

## 相关知识点

接触面上的切向力见 [[2 摩擦力]]；多力合成见 [[4 力的合成和分解]]；自由落体中的重力作用见 [[4 自由落体运动]]。
