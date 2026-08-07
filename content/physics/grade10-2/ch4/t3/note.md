---
title: 3 动能和动能定理
date: 2026-08-07
---

# 3 动能和动能定理

## 概念定义

**动能**：物体由于运动而具有的能量：
$$E_k=\dfrac12mv^2$$
标量，恒为非负，单位焦耳（J）。

**动能定理**：合外力对物体做的功等于物体动能的变化：
$$W_{合}=\Delta E_k=\dfrac12mv_2^2-\dfrac12mv_1^2$$

## 知识梳理

| 项目 | 内容 |
| --- | --- |
| 表述 | 合力的功（=各力做功的代数和）等于动能增量 |
| 适用范围 | 恒力、变力，直线、曲线运动均适用 |
| 标量式 | 无方向问题，只需带入速度大小；功按正负代数求和 |
| 解题步骤 | 选对象与过程 → 受力分析并算各力的功 → 列 $W_1+W_2+\cdots=\Delta E_k$ |
| 优势 | 不涉及加速度和时间，处理变力、曲线、多过程问题尤为方便 |

## 动能定理的推导情景（恒力直线加速）

<svg viewBox="0 0 380 190" width="380" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="p43g" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#16a34a"/></marker><marker id="p43b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker></defs>
  <line x1="20" y1="140" x2="360" y2="140" stroke="#64748b" stroke-width="2.5"/>
  <rect x="50" y="95" width="55" height="45" fill="#e0e7ff" stroke="#64748b" stroke-width="2"/>
  <rect x="270" y="95" width="55" height="45" fill="#e0e7ff" stroke="#64748b" stroke-width="1.6" stroke-dasharray="5 3"/>
  <line x1="105" y1="117" x2="160" y2="117" stroke="#16a34a" stroke-width="2.5" marker-end="url(#p43g)"/>
  <text x="126" y="108" font-size="12" fill="#16a34a">F</text>
  <line x1="77" y1="80" x2="122" y2="80" stroke="#2563eb" stroke-width="2" marker-end="url(#p43b)"/>
  <text x="86" y="68" font-size="11" fill="#2563eb">v₁</text>
  <line x1="297" y1="80" x2="356" y2="80" stroke="#2563eb" stroke-width="2.5" marker-end="url(#p43b)"/>
  <text x="312" y="68" font-size="11" fill="#2563eb">v₂</text>
  <line x1="77" y1="162" x2="297" y2="162" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="172" y="178" font-size="12" fill="#64748b">l</text>
  <text x="72" y="34" font-size="12" fill="#64748b">W=Fl=ma·(v₂²−v₁²)/(2a)=½mv₂²−½mv₁²</text>
</svg>

## 典型例题

**例 1**：质量 $m=1\ \text{kg}$ 的物体从 $h=5\ \text{m}$ 高处由静止自由下落（$g=10\ \text{m/s}^2$），用动能定理求落地速度。

**解**：只有重力做功：$W_G=mgh=\Delta E_k=\dfrac12mv^2-0$。
$v=\sqrt{2gh}=\sqrt{100}=10\ \text{m/s}$。

**例 2**：质量 $m=2\ \text{kg}$ 的滑块以 $v_0=6\ \text{m/s}$ 冲上倾角 $37°$ 的粗糙斜面，动摩擦因数 $\mu=0.5$（$\sin37°=0.6$，$\cos37°=0.8$，$g=10\ \text{m/s}^2$）。求滑块沿斜面上滑的最大距离。

**解**：上滑过程重力、摩擦力都做负功，设上滑距离 $l$：
$-mgl\sin37°-\mu mg\cos37°\,l=0-\dfrac12mv_0^2$。
$l=\dfrac{v_0^2}{2g(\sin37°+\mu\cos37°)}=\dfrac{36}{2\times10\times(0.6+0.4)}=1.8\ \text{m}$。

## 易错点

- 动能定理中 $W_合$ 是**所有力做功的代数和**，漏力、漏功是最常见错误。
- $\Delta E_k$ 用速度**大小**计算，与方向无关；速度反向但大小相同时 $\Delta E_k=0$。
- 多过程问题可对全过程一次列式（往返摩擦力做功按**路程**计算 $W_f=-\mu mg\cdot s_{路程}$）。
- 动能定理是标量式，不能按分方向分别列"分量动能定理"来处理曲线问题的方向。

## 背记要点

1. $E_k=\dfrac12mv^2$；$W_合=\dfrac12mv_2^2-\dfrac12mv_1^2$。
2. 适用于变力、曲线、多过程，是解决功能问题的首选工具。
3. 摩擦生热对应克服摩擦力做的功（按路程计）。
4. 高考视角：动能定理是力学压轴题核心方法，"全过程列式"常大幅简化往返、多段问题。

## 自测题

1. 质量 2 kg、速度 3 m/s 的物体动能为____J。
2. 合外力做功 $-16\ \text{J}$，物体动能____（增/减）____J。
3. 物体速度大小不变、方向改变，其动能变化量为____。
4. 判断：动能定理只适用于恒力作用下的直线运动。（　）

## 相关知识点

功的计算见 [[1 功与功率]]；重力做功与势能见 [[2 重力势能]]；只有重力做功的情形见 [[4 机械能守恒定律]]。
