---
title: 4 力的合成和分解
date: 2026-08-07
---

# 4 力的合成和分解

## 概念定义

**合力与分力**：一个力若与几个力**作用效果相同**，则它是这几个力的合力（等效替代关系）。
**力的合成**：求几个力的合力；**力的分解**：求一个力的分力，是合成的逆运算。

**平行四边形定则**：以两分力为邻边作平行四边形，**对角线**表示合力。这是所有**矢量**运算的共同法则（也可用三角形定则）。

## 知识梳理

| 情形 | 合力大小 |
| --- | --- |
| 同向 | $F=F_1+F_2$（最大值） |
| 反向 | $F=|F_1-F_2|$（最小值） |
| 垂直 | $F=\sqrt{F_1^2+F_2^2}$ |
| 夹角 $\theta$ | $F=\sqrt{F_1^2+F_2^2+2F_1F_2\cos\theta}$ |
| 取值范围 | $|F_1-F_2|\le F\le F_1+F_2$ |

夹角增大（0°→180°），合力**减小**；两等大力夹 120° 时合力与分力等大。

**正交分解法**：将各力沿 x、y 轴分解，$F_x=\sum F_{ix}$，$F_y=\sum F_{iy}$，$F=\sqrt{F_x^2+F_y^2}$——处理三力以上问题的通用方法。斜面问题常把重力分解为沿斜面 $mg\sin\theta$ 和垂直斜面 $mg\cos\theta$。

## 平行四边形定则

<svg viewBox="0 0 360 240" width="360" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="a12b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker><marker id="a12r" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#dc2626"/></marker><marker id="a12g" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#16a34a"/></marker></defs>
  <circle cx="70" cy="190" r="4" fill="#334155"/>
  <text x="52" y="208" font-size="12" fill="#334155">O</text>
  <line x1="70" y1="190" x2="230" y2="190" stroke="#2563eb" stroke-width="2.5" marker-end="url(#a12b)"/>
  <text x="150" y="210" font-size="13" fill="#2563eb">F₁</text>
  <line x1="70" y1="190" x2="150" y2="80" stroke="#16a34a" stroke-width="2.5" marker-end="url(#a12g)"/>
  <text x="90" y="120" font-size="13" fill="#16a34a">F₂</text>
  <line x1="230" y1="190" x2="310" y2="80" stroke="#16a34a" stroke-width="1.6" stroke-dasharray="6 4"/>
  <line x1="150" y1="80" x2="310" y2="80" stroke="#2563eb" stroke-width="1.6" stroke-dasharray="6 4"/>
  <line x1="70" y1="190" x2="306" y2="83" stroke="#dc2626" stroke-width="3" marker-end="url(#a12r)"/>
  <text x="195" y="128" font-size="14" fill="#dc2626">F 合（对角线）</text>
  <path d="M110 190 A 40 40 0 0 0 99 151" fill="none" stroke="#64748b" stroke-width="1.4"/>
  <text x="112" y="172" font-size="12" fill="#64748b">θ</text>
  <text x="180" y="232" text-anchor="middle" font-size="12" fill="#64748b">F=√(F₁²+F₂²+2F₁F₂cosθ)</text>
</svg>

## 典型例题

**例 1**：两个力 $F_1=6\ \text{N}$、$F_2=8\ \text{N}$ 互相垂直，求合力；并写出两力夹角任意时合力范围。

**解**：垂直时 $F=\sqrt{6^2+8^2}=10\ \text{N}$。
范围：$|8-6|\le F\le 8+6$，即 $2\ \text{N}\le F\le 14\ \text{N}$。

**例 2**：质量 m 的物体静止在倾角 $\theta=30°$ 的斜面上，把重力沿斜面和垂直斜面分解并求两分力（$m=2\ \text{kg}$，$g=10\ \text{m/s}^2$）。

**解**：沿斜面向下：$G_1=mg\sin\theta=20\times0.5=10\ \text{N}$；
垂直斜面：$G_2=mg\cos\theta=20\times\dfrac{\sqrt3}{2}=10\sqrt3\approx17.3\ \text{N}$。

## 易错点

- 合力与分力是**等效替代**关系，不能同时作为物体受的力进行叠加分析。
- 合力**不一定**大于分力：夹角 120° 的两等大力合力等于分力。
- 矢量运算不能简单代数相加；先规定方向、用平行四边形/正交分解。
- 分解要按**实际作用效果**或**解题方便（正交）**进行，不是任意乱分。

## 背记要点

1. 平行四边形定则——矢量合成的普适法则；范围 $|F_1-F_2|\le F\le F_1+F_2$。
2. 垂直合成用勾股；一般夹角用余弦公式。
3. 正交分解三步：建轴（沿加速度/接触面）、分解、分方向列方程。
4. 高考视角：正交分解贯穿力学始终；斜面重力分解 $mg\sin\theta$、$mg\cos\theta$ 必须形成条件反射。

## 自测题

1. 两力 3 N 与 4 N，其合力最大为____N，最小为____N。
2. 两个等大的力夹角为 120°，合力大小等于____。
3. 重 40 N 的物体在倾角 37° 斜面上，重力沿斜面分量为____N（$\sin37°=0.6$）。
4. 判断：3 N、4 N、9 N 三个共点力的合力可能为零。（　）

## 相关知识点

分解的对象是重力、弹力、摩擦力，见 [[1 重力与弹力]]、[[2 摩擦力]]；合成分解的直接应用见 [[5 共点力的平衡]]。
