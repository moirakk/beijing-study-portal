---
title: 1 动量
date: 2026-08-07
---

# 1 动量

<svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" style="max-width:480px;width:100%;display:block;margin:1em auto">
  <rect width="480" height="240" fill="#e8f4f8" rx="8"/>
  <text x="240" y="22" text-anchor="middle" fill="#1a6faf" font-size="14" font-weight="bold">动量 p = mv（矢量）</text>
  <defs>
    <marker id="parr1" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#4a9fd4"/>
    </marker>
    <marker id="parr2" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
      <path d="M0,0 L10,5 L0,10 Z" fill="#e63946"/>
    </marker>
  </defs>
  <!-- 小球碰撞前后示意 -->
  <text x="140" y="50" text-anchor="middle" fill="#1a6faf" font-size="12" font-weight="bold">碰撞前</text>
  <!-- 球1（向右） -->
  <circle cx="90" cy="100" r="22" fill="#4a9fd4" stroke="#1a6faf" stroke-width="2"/>
  <text x="90" y="105" text-anchor="middle" fill="white" font-size="11">m₁</text>
  <line x1="112" y1="100" x2="155" y2="100" stroke="#4a9fd4" stroke-width="2.5" marker-end="url(#parr1)"/>
  <text x="133" y="90" fill="#4a9fd4" font-size="11">v₁→</text>
  <!-- 球2（静止） -->
  <circle cx="195" cy="100" r="22" fill="#888" stroke="#1a6faf" stroke-width="2" opacity="0.7"/>
  <text x="195" y="105" text-anchor="middle" fill="white" font-size="11">m₂</text>
  <text x="195" y="130" text-anchor="middle" fill="#555" font-size="10">静止（v=0）</text>
  <!-- 碰撞后 -->
  <text x="370" y="50" text-anchor="middle" fill="#1a6faf" font-size="12" font-weight="bold">碰撞后</text>
  <!-- 球1（变慢） -->
  <circle cx="315" cy="100" r="22" fill="#4a9fd4" stroke="#1a6faf" stroke-width="2"/>
  <text x="315" y="105" text-anchor="middle" fill="white" font-size="11">m₁</text>
  <line x1="337" y1="100" x2="358" y2="100" stroke="#4a9fd4" stroke-width="2.5" marker-end="url(#parr1)"/>
  <text x="348" y="90" fill="#4a9fd4" font-size="10">v₁'</text>
  <!-- 球2（获得速度） -->
  <circle cx="415" cy="100" r="22" fill="#888" stroke="#1a6faf" stroke-width="2"/>
  <text x="415" y="105" text-anchor="middle" fill="white" font-size="11">m₂</text>
  <line x1="415" y1="122" x2="450" y2="122" stroke="#e63946" stroke-width="2.5" marker-end="url(#parr2)"/>
  <text x="440" y="112" fill="#e63946" font-size="10">v₂'→</text>
  <!-- 动量守恒公式 -->
  <rect x="40" y="145" width="400" height="85" fill="white" rx="6" stroke="#4a9fd4" stroke-width="1.5"/>
  <text x="240" y="163" text-anchor="middle" fill="#1a6faf" font-size="12" font-weight="bold">动量守恒定律</text>
  <text x="240" y="183" text-anchor="middle" fill="#333" font-size="12">m₁v₁ + m₂v₂ = m₁v₁' + m₂v₂'</text>
  <text x="240" y="200" text-anchor="middle" fill="#333" font-size="11">系统所受合外力为零 → 总动量不变</text>
  <text x="240" y="218" text-anchor="middle" fill="#1a6faf" font-size="11">p = mv（kg·m/s），方向与速度方向相同</text>
</svg>

## 概念定义

**动量**：物体的质量与速度的乘积，$p=mv$，单位 $\text{kg}\cdot\text{m/s}$。

动量是**矢量**，方向与速度方向相同。它是从"碰撞中寻找守恒量"的探究中引入的物理量，描述物体的运动状态。

**动量的变化量**：$\Delta p=p'-p=mv'-mv$，是矢量差；一维问题先规定正方向再代入正负号运算。

## 知识梳理

| 项目 | 动量 $p=mv$ | 动能 $E_k=\frac{1}{2}mv^2$ |
| --- | --- | --- |
| 矢/标性 | 矢量，方向同 $v$ | 标量，恒非负 |
| 与速度关系 | 一次方，与方向有关 | 二次方，与方向无关 |
| 相互换算 | $E_k=\dfrac{p^2}{2m}$，$p=\sqrt{2mE_k}$ | 同左 |
| 改变原因 | 冲量（力对时间的积累） | 功（力对位移的积累） |

**关键认识**：动量变化时动能不一定变化（如匀速圆周运动中 $p$ 方向变而 $E_k$ 不变）；动能变化时动量一定变化。

## 典型例题

**例 1**：质量 $0.5\ \text{kg}$ 的小球以 $6\ \text{m/s}$ 水平撞墙，以 $4\ \text{m/s}$ 反向弹回。求动量变化量。

**解**：取初速度方向为正。$p=0.5\times6=3\ \text{kg}\cdot\text{m/s}$，$p'=0.5\times(-4)=-2\ \text{kg}\cdot\text{m/s}$。
$\Delta p=p'-p=-2-3=-5\ \text{kg}\cdot\text{m/s}$，即大小 $5\ \text{kg}\cdot\text{m/s}$，方向与初速度相反。

**例 2**：甲物体质量 $2\ \text{kg}$、动能 $16\ \text{J}$；乙物体质量 $1\ \text{kg}$，动量大小与甲相同。求乙的动能。

**解**：甲的动量 $p=\sqrt{2mE_k}=\sqrt{2\times2\times16}=8\ \text{kg}\cdot\text{m/s}$。
乙的动能 $E_k'=\dfrac{p^2}{2m'}=\dfrac{8^2}{2\times1}=32\ \text{J}$。可见动量相同时，质量小的动能大。

## 易错点

- $\Delta p$ 是**矢量减法**：反弹类问题最易漏负号，必须先规定正方向。
- 动量相同不等于动能相同；两者相差质量因子，比例题要用 $E_k=\dfrac{p^2}{2m}$。
- 动量具有**瞬时性**和**相对性**（与参考系有关），中学通常取地面参考系。
- 动量变化量的方向不一定与初动量或末动量方向相同，由矢量差决定。

## 背记要点

1. $p=mv$，矢量，单位 $\text{kg}\cdot\text{m/s}$，方向即速度方向。
2. $\Delta p=mv'-mv$，一维问题先定正方向再运算。
3. $E_k=\dfrac{p^2}{2m}$，$p=\sqrt{2mE_k}$。
4. 高考视角：动量是本章主线，"动量变化的原因是冲量"直接引出动量定理。

## 自测题

1. 动量的单位是____，它是____（矢量/标量）。
2. 质量 2 kg 的物体速度由 3 m/s 增大到 5 m/s（方向不变），$\Delta p=$____。
3. 判断：物体动量发生变化，其动能一定发生变化。（　）
4. 动量大小为 6 kg·m/s、质量 3 kg 的物体，动能为____J。

## 相关知识点

动量变化的原因见 [[2 动量定理]]；系统动量的守恒条件见 [[3 动量守恒定律]]；碰撞中动量与动能的分析见 [[5 弹性碰撞和非弹性碰撞]]。
