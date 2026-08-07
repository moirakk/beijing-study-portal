---
title: 4 宇宙航行
date: 2026-08-07
---

# 4 宇宙航行

## 概念定义

**第一宇宙速度**：物体在地球表面附近绕地球做匀速圆周运动的速度，$v_1=7.9\ \text{km/s}$，是卫星的**最小发射速度**、**最大环绕速度**。

**第二宇宙速度**：$v_2=11.2\ \text{km/s}$，挣脱地球引力束缚的最小发射速度（逃逸速度）。

**第三宇宙速度**：$v_3=16.7\ \text{km/s}$，挣脱太阳引力束缚飞出太阳系的最小发射速度。

## 知识梳理

| 项目 | 公式/结论 |
| --- | --- |
| 第一宇宙速度推导 | $G\dfrac{Mm}{R^2}=m\dfrac{v_1^2}{R}$ ⇒ $v_1=\sqrt{\dfrac{GM}{R}}=\sqrt{gR}\approx7.9\ \text{km/s}$ |
| 环绕规律 | $v=\sqrt{\dfrac{GM}{r}}$，$\omega=\sqrt{\dfrac{GM}{r^3}}$，$T=2\pi\sqrt{\dfrac{r^3}{GM}}$：**越高越慢** |
| 同步卫星 | 与地球自转同步：$T=24\ \text{h}$，定点于**赤道正上方**，高度约 $3.6\times10^4\ \text{km}$，各国同步卫星共轨 |
| 发射与环绕 | 发射速度越大，轨道越高；但环绕速度随 $r$ 增大而减小 |
| 航天史 | 1957 苏联第一颗人造卫星；1961 加加林首入太空；2003 杨利伟（神舟五号） |

## 卫星"越高越慢"示意

<svg viewBox="0 0 380 220" width="380" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="p34b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker><marker id="p34g" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#16a34a"/></marker></defs>
  <circle cx="190" cy="115" r="42" fill="#bfdbfe" stroke="#2563eb" stroke-width="2.5"/>
  <text x="172" y="120" font-size="13" fill="#1d4ed8">地球</text>
  <circle cx="190" cy="115" r="70" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5 4"/>
  <circle cx="190" cy="115" r="102" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5 4"/>
  <circle cx="260" cy="115" r="6" fill="#2563eb"/>
  <line x1="260" y1="108" x2="260" y2="56" stroke="#2563eb" stroke-width="2.5" marker-end="url(#p34b)"/>
  <text x="266" y="70" font-size="12" fill="#2563eb">v₁（低轨快）</text>
  <circle cx="292" cy="115" r="6" fill="#16a34a"/>
  <line x1="292" y1="122" x2="292" y2="162" stroke="#16a34a" stroke-width="2.5" marker-end="url(#p34g)"/>
  <text x="298" y="156" font-size="12" fill="#16a34a">v₂（高轨慢）</text>
  <text x="44" y="206" font-size="12" fill="#64748b">v=√(GM/r)：r 越大，v、ω 越小，T 越大</text>
</svg>

## 典型例题

**例 1**：已知地球半径 $R=6.4\times10^6\ \text{m}$、表面重力加速度 $g=9.8\ \text{m/s}^2$，推导并计算第一宇宙速度。

**解**：近地卫星重力提供向心力：$mg=m\dfrac{v_1^2}{R}$，
$v_1=\sqrt{gR}=\sqrt{9.8\times6.4\times10^6}\approx7.9\times10^3\ \text{m/s}=7.9\ \text{km/s}$。

**例 2**：卫星 A 轨道半径为 $r$，卫星 B 轨道半径为 $4r$，比较两者的线速度和周期。

**解**：由 $v=\sqrt{\dfrac{GM}{r}}$：$\dfrac{v_A}{v_B}=\sqrt{\dfrac{4r}{r}}=2$，A 的线速度是 B 的 2 倍。
由 $T=2\pi\sqrt{\dfrac{r^3}{GM}}$：$\dfrac{T_A}{T_B}=\sqrt{\dfrac{r^3}{64r^3}}=\dfrac18$，即 $T_B=8T_A$。

## 易错点

- $7.9\ \text{km/s}$ 是**最小发射**速度、**最大环绕**速度，两个"最"勿颠倒。
- 发射速度与环绕速度不同：发射越高需要的发射速度越大，但入轨后的环绕速度越小。
- 同步卫星轨道**唯一**（赤道上空、定高度、定速率），不可能定点在北京正上方。
- 卫星内物体处于**完全失重**状态，与重力是否存在无关（重力恰好全部提供向心力）。

## 背记要点

1. 三大宇宙速度：$7.9$、$11.2$、$16.7\ \text{km/s}$。
2. $v_1=\sqrt{gR}=\sqrt{GM/R}$；环绕规律"越高越慢"（$v$、$\omega$ 小，$T$ 大）。
3. 同步卫星四定：定周期（24 h）、定轨道面（赤道）、定高度、定速率。
4. 高考视角：宇宙速度含义、卫星参量比较、同步卫星特点是选择题高频点；变轨问题注意点火加速升轨。

## 自测题

1. 第一宇宙速度的表达式 $v_1=\sqrt{\ \ }=$____km/s。
2. 卫星轨道半径越大，其周期越____。
3. 地球同步卫星只能位于____平面的上空。
4. 判断：卫星中的宇航员不受地球引力作用，所以处于失重状态。（　）

## 相关知识点

引力提供向心力见 [[3 万有引力理论的成就]]；定律基础见 [[2 万有引力定律]]；经典力学的适用范围见 [[5 相对论时空观与牛顿力学的局限性]]。
