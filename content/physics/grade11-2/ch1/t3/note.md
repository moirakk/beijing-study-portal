---
title: 3 带电粒子在匀强磁场中的运动
date: 2026-08-10
---

# 3 带电粒子在匀强磁场中的运动

## 概念定义

带电粒子以速度 $v$ **垂直**射入匀强磁场，洛伦兹力提供向心力，粒子做**匀速圆周运动**：
$$qvB=\frac{mv^2}{r}$$

**轨道半径**：$r=\dfrac{mv}{qB}$。

**运动周期**：$T=\dfrac{2\pi r}{v}=\dfrac{2\pi m}{qB}$，与速度大小、半径**无关**，只由 $m$、$q$、$B$ 决定。

## 知识梳理

| 项目 | 内容 |
| --- | --- |
| 半径 | $r=\dfrac{mv}{qB}$（$v$ 大则 $r$ 大） |
| 周期 | $T=\dfrac{2\pi m}{qB}$（与 $v$、$r$ 无关） |
| 圆心确定 | 在垂直速度方向、指向洛伦兹力一侧 |
| 弦长几何 | 弦长 $=2r\sin\dfrac{\alpha}{2}$（$\alpha$ 为圆心角） |
| 运动时间 | $t=\dfrac{\alpha}{2\pi}T$ |
| 速度方向平行 $B$ | 匀速直线运动；斜入射为螺旋线（了解） |

## 圆周运动轨迹示意图

<svg width="320" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="c1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#16a34a"/></marker><marker id="c2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#dc2626"/></marker></defs>
  <text x="20" y="30" font-size="13" fill="#2563eb">× × × × × × × ×</text>
  <text x="20" y="60" font-size="13" fill="#2563eb">× × × × × × × ×</text>
  <text x="20" y="90" font-size="13" fill="#2563eb">× × × × × × × ×</text>
  <text x="20" y="120" font-size="13" fill="#2563eb">× × × × × × × ×</text>
  <text x="20" y="150" font-size="13" fill="#2563eb">× × × × × × × ×</text>
  <circle cx="160" cy="100" r="60" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="6 3"/>
  <circle cx="160" cy="100" r="3" fill="#334155"/>
  <text x="166" y="96" font-size="12" fill="#334155">O</text>
  <line x1="160" y1="100" x2="160" y2="160" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="165" y="135" font-size="12" fill="#94a3b8">r=mv/qB</text>
  <circle cx="160" cy="160" r="6" fill="#f59e0b"/>
  <line x1="170" y1="160" x2="230" y2="160" stroke="#16a34a" stroke-width="2.5" marker-end="url(#c1)"/>
  <text x="236" y="164" font-size="12" fill="#16a34a">v</text>
  <line x1="160" y1="150" x2="160" y2="112" stroke="#dc2626" stroke-width="2" marker-end="url(#c2)"/>
  <text x="132" y="128" font-size="12" fill="#dc2626">F向心</text>
  <text x="30" y="190" font-size="12" fill="#334155">正电荷在向里磁场中沿逆时针圆周运动</text>
</svg>

## 典型例题

**例 1**：质子（$m=1.67\times10^{-27}\ \text{kg}$，$q=1.6\times10^{-19}\ \text{C}$）以 $v=2\times10^6\ \text{m/s}$ 垂直进入 $B=1\ \text{T}$ 的匀强磁场。求半径和周期。

**解**：$r=\dfrac{mv}{qB}=\dfrac{1.67\times10^{-27}\times2\times10^6}{1.6\times10^{-19}\times1}\approx2.1\times10^{-2}\ \text{m}$。
$T=\dfrac{2\pi m}{qB}=\dfrac{2\pi\times1.67\times10^{-27}}{1.6\times10^{-19}}\approx6.6\times10^{-8}\ \text{s}$。

**例 2**：带电粒子垂直进入宽为 $d$ 的有界匀强磁场，恰好从边界射出时速度方向偏转 $60^\circ$。求轨道半径。

**解**：偏转角等于圆心角 $\alpha=60^\circ$。几何关系：粒子穿越的深度 $d=r-r\cos60^\circ=\dfrac{r}{2}$，
所以 $r=2d$。在磁场中运动时间 $t=\dfrac{60^\circ}{360^\circ}T=\dfrac{T}{6}=\dfrac{\pi m}{3qB}$。

## 易错点

- 周期 $T=\dfrac{2\pi m}{qB}$ 与速度无关——速度大时半径也大，转一圈时间不变。
- 找圆心是解题关键：圆心必在**垂直于速度的直线上**，且在洛伦兹力指向的一侧。
- 偏转角（速度方向改变角）等于**圆心角**，不等于弦切角（弦切角是它的一半）。
- 有界磁场问题要画好几何图，用弦长、半径、圆心角的三角关系求解。

## 背记要点

1. $r=\dfrac{mv}{qB}$，$T=\dfrac{2\pi m}{qB}$（周期与 $v$ 无关）。
2. 圆心在垂直 $v$ 且沿 $F$ 方向的一侧；两位置法线交点定圆心。
3. 运动时间 $t=\dfrac{\alpha}{2\pi}T$，$\alpha$ 为转过的圆心角。
4. 洛伦兹力不做功，全程速率不变。
5. 高考视角：北京卷压轴题常考有界磁场中的临界与多解问题，"画圆定圆心＋几何关系"是标准流程。

## 自测题

1. 半径公式 $r=$____，周期公式 $T=$____。
2. 速度增大为原来的 2 倍，半径变为____倍，周期变为____倍。
3. 粒子在磁场中转过 $90^\circ$ 圆心角所需时间为____（用 $T$ 表示）。
4. 判断：质量相同、电荷量相同的粒子在同一磁场中周期一定相同。（　）

## 相关知识点

向心力来源分析基于 [[2 磁场对运动电荷的作用力]]；周期与速度无关这一特性是 [[4 质谱仪与回旋加速器]] 中回旋加速器的设计基础；圆周运动与电场偏转结合可对比复习。
