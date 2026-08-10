---
title: 2 磁场对运动电荷的作用力
date: 2026-08-10
---

# 2 磁场对运动电荷的作用力

## 概念定义

**洛伦兹力**：磁场对运动电荷的作用力。电荷 $q$ 以速度 $v$ 垂直于磁场 $B$ 运动时，
$$F=qvB$$
一般情形 $F=qvB\sin\theta$（$\theta$ 为 $v$ 与 $B$ 夹角）。

**方向判断**：左手定则——正电荷四指指 $v$ 方向；负电荷四指指 $v$ 的**反方向**。$F$ 始终垂直于 $v$ 和 $B$。

**重要性质**：洛伦兹力始终垂直于速度，**对电荷永不做功**，只改变速度方向不改变大小。

## 知识梳理

| 项目 | 内容 |
| --- | --- |
| 大小 | $F=qvB\sin\theta$；$v\perp B$ 时 $F=qvB$ |
| 方向 | 左手定则（负电荷四指反指） |
| 做功 | 恒为零（$F\perp v$） |
| $v=0$ 或 $v\parallel B$ | 洛伦兹力为零 |
| 与安培力关系 | 安培力是导线内大量电荷所受洛伦兹力的宏观合力 |
| 应用 | 显像管偏转、极光、速度选择器 |

## 洛伦兹力方向示意图

<svg width="320" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="b1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#16a34a"/></marker><marker id="b2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#dc2626"/></marker></defs>
  <text x="30" y="35" font-size="14" fill="#2563eb">× × × × × ×</text>
  <text x="30" y="65" font-size="14" fill="#2563eb">× × × × × ×</text>
  <text x="30" y="95" font-size="14" fill="#2563eb">× × × × × ×</text>
  <text x="30" y="125" font-size="14" fill="#2563eb">× × × × × ×</text>
  <text x="160" y="35" font-size="12" fill="#2563eb">B 垂直纸面向里</text>
  <circle cx="90" cy="110" r="8" fill="#f59e0b"/>
  <text x="83" y="114" font-size="10" fill="#fff">+q</text>
  <line x1="100" y1="110" x2="190" y2="110" stroke="#16a34a" stroke-width="2.5" marker-end="url(#b1)"/>
  <text x="196" y="114" font-size="12" fill="#16a34a">v</text>
  <line x1="90" y1="98" x2="90" y2="50" stroke="#dc2626" stroke-width="2.5" marker-end="url(#b2)"/>
  <text x="98" y="58" font-size="12" fill="#dc2626">F=qvB</text>
  <text x="30" y="185" font-size="12" fill="#334155">正电荷向右运动，洛伦兹力竖直向上（左手定则）</text>
</svg>

## 典型例题

**例 1**：电子（$q=1.6\times10^{-19}\ \text{C}$）以 $v=2\times10^6\ \text{m/s}$ 垂直射入 $B=0.5\ \text{T}$ 的匀强磁场。求洛伦兹力大小。

**解**：$F=qvB=1.6\times10^{-19}\times2\times10^6\times0.5=1.6\times10^{-13}\ \text{N}$。
判断方向时电子带负电，左手四指应指电子速度的**反方向**。

**例 2**：速度选择器中匀强电场 $E=2\times10^3\ \text{V/m}$ 与磁场 $B=0.1\ \text{T}$ 正交。带电粒子恰能沿直线通过，求粒子速度。

**解**：电场力与洛伦兹力平衡：$qE=qvB$，得
$$v=\frac{E}{B}=\frac{2\times10^3}{0.1}=2\times10^4\ \text{m/s}$$
结果与电荷正负、电荷量、质量均无关。

## 易错点

- 负电荷用左手定则时四指要指**速度反方向**，这是最高频错误。
- 洛伦兹力**永不做功**，不能改变动能，但可以作为向心力改变速度方向。
- $v\parallel B$ 时 $F=0$，粒子沿磁场方向匀速直线运动。
- 速度选择器筛选的是**速率** $v=E/B$，与粒子的荷质比无关。

## 背记要点

1. $F=qvB\sin\theta$；$v\perp B$ 时最大 $F=qvB$，$v\parallel B$ 时为零。
2. 方向：左手定则，负电荷四指反指。
3. 洛伦兹力对电荷永不做功——动能不变。
4. 速度选择器：$qE=qvB$，$v=E/B$。
5. 高考视角：北京卷选择题常考"洛伦兹力不做功"及负电荷的方向判断，务必先定电性再用左手。

## 自测题

1. 质子以 $10^5\ \text{m/s}$ 垂直进入 $B=0.2\ \text{T}$ 磁场，$F=$____N。
2. 电荷速度与磁场平行时，洛伦兹力为____。
3. 洛伦兹力对运动电荷做的功恒为____。
4. 判断：洛伦兹力可以改变电荷速度的大小。（　）

## 相关知识点

洛伦兹力提供向心力的完整分析见 [[3 带电粒子在匀强磁场中的运动]]；其宏观表现即 [[1 磁场对通电导线的作用力]] 中的安培力；速度选择器思想在 [[4 质谱仪与回旋加速器]] 中直接应用。
