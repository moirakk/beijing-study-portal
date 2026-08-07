---
title: 3 牛顿第二定律
date: 2026-08-07
---

# 3 牛顿第二定律

## 概念定义

**牛顿第二定律**：物体加速度的大小与所受**合外力**成正比、与质量成反比，方向与合外力方向相同：
$$\vec{F}_{合}=m\vec{a}$$
（在国际单位制中比例系数为 1：$1\ \text{N}=1\ \text{kg}\cdot\text{m/s}^2$。）

## 知识梳理

| 性质 | 含义 |
| --- | --- |
| 矢量性 | $a$ 与 $F_合$ **同方向**；可正交分解 $F_x=ma_x$、$F_y=ma_y$ |
| 瞬时性 | $a$ 与 $F$ 同时存在、同时变化、同时消失（力变 $a$ 立即变） |
| 因果性 | 力是原因，加速度是效果；$F$ 决定 $a$，不是 $v$ |
| 独立性 | 每个力独立产生各自的加速度，合加速度为矢量和 |
| 同体性 | $F$、$m$、$a$ 必须对应**同一物体**（同一系统） |

**解题步骤**：确定对象 → 受力分析 → 沿 $a$ 方向（和垂直方向）正交分解 → 列 $F=ma$ 与 $\sum F_\perp=0$ → 结合运动学公式求解。

## 沿加速度方向正交分解（水平拉斜绳模型）

<svg viewBox="0 0 360 240" width="360" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="a16r" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#dc2626"/></marker><marker id="a16b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker><marker id="a16g" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#16a34a"/></marker></defs>
  <line x1="20" y1="185" x2="340" y2="185" stroke="#64748b" stroke-width="2.5"/>
  <rect x="120" y="125" width="90" height="60" fill="#e0e7ff" stroke="#64748b" stroke-width="2"/>
  <text x="165" y="160" text-anchor="middle" font-size="13" fill="#334155">m</text>
  <line x1="210" y1="140" x2="300" y2="90" stroke="#16a34a" stroke-width="2.5" marker-end="url(#a16g)"/>
  <text x="268" y="80" font-size="12" fill="#16a34a">F（斜向上，θ）</text>
  <line x1="210" y1="140" x2="300" y2="140" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="292" y="156" font-size="11" fill="#16a34a">Fcosθ</text>
  <line x1="300" y1="140" x2="300" y2="93" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="306" y="120" font-size="11" fill="#16a34a">Fsinθ</text>
  <line x1="165" y1="125" x2="165" y2="65" stroke="#2563eb" stroke-width="2.5" marker-end="url(#a16b)"/>
  <text x="171" y="75" font-size="12" fill="#2563eb">N</text>
  <line x1="165" y1="185" x2="165" y2="235" stroke="#dc2626" stroke-width="2.5" marker-end="url(#a16r)"/>
  <text x="171" y="228" font-size="12" fill="#dc2626">mg</text>
  <line x1="120" y1="172" x2="55" y2="172" stroke="#dc2626" stroke-width="2.5" marker-end="url(#a16r)"/>
  <text x="62" y="162" font-size="12" fill="#dc2626">f</text>
  <line x1="235" y1="205" x2="305" y2="205" stroke="#2563eb" stroke-width="2.5" marker-end="url(#a16b)"/>
  <text x="260" y="222" font-size="12" fill="#2563eb">a</text>
  <text x="90" y="40" font-size="12" fill="#64748b">x：Fcosθ−f=ma；y：N+Fsinθ−mg=0</text>
</svg>

## 典型例题

**例 1**：质量 2 kg 的物体在水平面上，受水平拉力 $F=10\ \text{N}$，$\mu=0.2$（$g=10\ \text{m/s}^2$），求加速度。

**解**：$N=mg=20\ \text{N}$，$f=\mu N=4\ \text{N}$。
$a=\dfrac{F-f}{m}=\dfrac{10-4}{2}=3\ \text{m/s}^2$，方向与 $F$ 相同。

**例 2**：用与水平成 $37°$ 斜向上的力 $F=20\ \text{N}$ 拉质量 2 kg 的物体，$\mu=0.5$，求 $a$（$\sin37°=0.6$，$\cos37°=0.8$，$g=10\ \text{m/s}^2$）。

**解**：竖直：$N=mg-F\sin37°=20-12=8\ \text{N}$，$f=\mu N=4\ \text{N}$。
水平：$a=\dfrac{F\cos37°-f}{m}=\dfrac{16-4}{2}=6\ \text{m/s}^2$。

## 易错点

- $F$ 是**合外力**，不是某一个力；斜向拉力会改变 $N$，从而改变 $f$。
- 瞬时性：剪断绳瞬间弹簧弹力**不能突变**、绳的张力**可以突变**，分析瞬时加速度要注意。
- $a$ 的方向由 $F_合$ 决定，与 $v$ 方向无必然联系（$v$ 与 $a$ 反向即减速）。
- $F=ma$ 中三量必须同体、同时刻。

## 背记要点

1. $F_合=ma$；$1\ \text{N}=1\ \text{kg}\cdot\text{m/s}^2$。
2. 五性：矢量性、瞬时性、因果性、独立性、同体性。
3. 解题主线：受力分析 → 正交分解（x 沿 $a$）→ 列方程 → 联立运动学。
4. 高考视角：牛顿第二定律是力学核心，动力学计算大题必考，正交分解和瞬时性分析是关键采分点。

## 自测题

1. 质量 4 kg 物体受合外力 12 N，加速度大小为____。
2. 物体受 $F$ 作用产生 $a$，若 $F$ 突然变为零，$a$ 如何变化？____。
3. 光滑水平面上，质量 1 kg 物体受互相垂直的 3 N、4 N 两力，$a=$____。
4. 判断：物体速度越大，所受合外力一定越大。（　）

## 相关知识点

实验基础见 [[2 实验：探究加速度与力、质量的关系]]；单位制见 [[4 力学单位制]]；综合应用见 [[5 牛顿运动定律的应用]]。
