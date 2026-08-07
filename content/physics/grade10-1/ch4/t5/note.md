---
title: 5 牛顿运动定律的应用
date: 2026-08-07
---

# 5 牛顿运动定律的应用

## 概念定义

牛顿运动定律联系"力"与"运动"两大主题，两类基本问题：
1. **已知受力求运动**：受力分析 → $a=\dfrac{F_合}{m}$ → 运动学公式求 $v$、$x$、$t$；
2. **已知运动求受力**：运动学求 $a$ → $F_合=ma$ → 求某个未知力。

**加速度 $a$ 是连接力与运动的桥梁。**

## 知识梳理

| 方法/模型 | 要点 |
| --- | --- |
| 解题流程 | 对象 → 受力图 → 建轴（x 沿 $a$）→ $F_x=ma$、$F_y=0$ → 运动学 |
| 整体法 | 系统内各部分**加速度相同**时，把系统看作整体求 $a$ 或外力 |
| 隔离法 | 求系统**内力**（绳张力、接触面压力）时隔离单个物体 |
| 多过程问题 | 分段受力分析，各段分别用 $F=ma$，衔接点速度连续 |
| 斜面模型 | 沿斜面：$mg\sin\theta\pm f=ma$；垂直：$N=mg\cos\theta$ |

常用组合公式：$v=v_0+at$、$x=v_0t+\dfrac12at^2$、$v^2-v_0^2=2ax$。

## 两类问题的桥梁关系与斜面下滑受力

<svg viewBox="0 0 360 240" width="360" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="a18r" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#dc2626"/></marker><marker id="a18b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker><marker id="a18g" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#16a34a"/></marker></defs>
  <rect x="20" y="25" width="90" height="34" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <text x="65" y="47" text-anchor="middle" font-size="13" fill="#1e3a8a">受力 F合</text>
  <rect x="135" y="25" width="90" height="34" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
  <text x="180" y="47" text-anchor="middle" font-size="13" fill="#991b1b">a（桥梁）</text>
  <rect x="250" y="25" width="95" height="34" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
  <text x="297" y="47" text-anchor="middle" font-size="13" fill="#166534">运动 v,x,t</text>
  <line x1="110" y1="42" x2="132" y2="42" stroke="#64748b" stroke-width="2" marker-end="url(#a18b)"/>
  <line x1="225" y1="42" x2="247" y2="42" stroke="#64748b" stroke-width="2" marker-end="url(#a18g)"/>
  <polygon points="30,215 250,215 250,105" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
  <circle cx="145" cy="158" r="5" fill="#334155"/>
  <line x1="145" y1="158" x2="145" y2="222" stroke="#dc2626" stroke-width="2.5" marker-end="url(#a18r)"/>
  <text x="150" y="220" font-size="11" fill="#dc2626">mg</text>
  <line x1="145" y1="158" x2="112" y2="103" stroke="#2563eb" stroke-width="2.5" marker-end="url(#a18b)"/>
  <text x="88" y="99" font-size="11" fill="#2563eb">N</text>
  <line x1="145" y1="158" x2="205" y2="123" stroke="#16a34a" stroke-width="2.5" marker-end="url(#a18g)"/>
  <text x="205" y="115" font-size="11" fill="#16a34a">f（上滑时沿面向下为 a 方向相反）</text>
  <line x1="118" y1="175" x2="70" y2="203" stroke="#dc2626" stroke-width="2" marker-end="url(#a18r)"/>
  <text x="46" y="200" font-size="11" fill="#dc2626">a 下滑</text>
  <text x="290" y="200" font-size="11" fill="#64748b">mgsinθ−f=ma</text>
</svg>

## 典型例题

**例 1**：质量 2 kg 物体静止在水平面上，$\mu=0.25$，受水平恒力 $F=9\ \text{N}$ 作用 4 s 后撤去（$g=10\ \text{m/s}^2$）。求撤力时速度与撤力后还能滑行的距离。

**解**：加速段：$a_1=\dfrac{F-\mu mg}{m}=\dfrac{9-5}{2}=2\ \text{m/s}^2$，$v=a_1t=8\ \text{m/s}$。
减速段：$a_2=\mu g=2.5\ \text{m/s}^2$，滑行 $x=\dfrac{v^2}{2a_2}=\dfrac{64}{5}=12.8\ \text{m}$。

**例 2**：物体沿倾角 $30°$ 光滑斜面由静止下滑，斜面长 5 m（$g=10\ \text{m/s}^2$）。求滑到底端的时间和速度。

**解**：$a=g\sin30°=5\ \text{m/s}^2$。
$x=\dfrac12at^2 \Rightarrow t=\sqrt{\dfrac{2\times5}{5}}=\sqrt2\approx1.4\ \text{s}$；$v=at=5\sqrt2\approx7.1\ \text{m/s}$。

## 易错点

- 撤去外力后受力**重新分析**，加速度改变（两段 $a$ 不同）。
- 整体法前提是各部分**加速度相同**；求内力必须隔离。
- 摩擦力方向随相对运动方向改变（上滑、下滑两个阶段 $f$ 反向）。
- 多过程问题各段公式中的 $v_0$ 是该段初速度，勿混用。

## 背记要点

1. 两类问题一座桥：$F_合 \xrightarrow{F=ma} a \xrightarrow{运动学} v,x,t$（可逆）。
2. 整体求外、隔离求内。
3. 光滑斜面下滑 $a=g\sin\theta$；粗糙时 $a=g(\sin\theta-\mu\cos\theta)$。
4. 高考视角：动力学两类问题是必考大题主干，多过程（加速—减速）与整体隔离是命题热点。

## 自测题

1. 已知运动求力的关键第一步是先由运动学求出____。
2. 质量 1 kg 物体从静止受合力 4 N 作用 3 s，位移为____。
3. 光滑斜面倾角 $\theta$，物体下滑加速度 $a=$____。
4. 两物体叠放共同加速时，求它们之间摩擦力应采用____法。

## 相关知识点

定律内容见 [[3 牛顿第二定律]]；运动学公式见 [[3 匀变速直线运动的位移与时间的关系]]；特殊应用见 [[6 超重和失重]]。
