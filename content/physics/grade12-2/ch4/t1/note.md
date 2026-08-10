---
title: 专题四 曲线运动与万有引力
date: 2026-08-10
---

# 专题四 曲线运动与万有引力

## 概念定义

**曲线运动**：速度方向沿轨迹切线方向，做曲线运动的条件是合外力方向与速度方向**不在同一直线上**。

**平抛运动**：水平方向匀速直线运动，竖直方向自由落体。$x = v_0 t$，$y = \dfrac{1}{2}gt^2$，$v_x = v_0$，$v_y = gt$。

**圆周运动**：线速度 $v = \dfrac{2\pi r}{T}$，角速度 $\omega = \dfrac{2\pi}{T}$，$v = \omega r$。向心加速度 $a = \dfrac{v^2}{r} = \omega^2 r$，向心力 $F = m\dfrac{v^2}{r}$。

**万有引力**：$F = G\dfrac{m_1 m_2}{r^2}$。天体运动：$G\dfrac{Mm}{r^2} = m\dfrac{v^2}{r} = m\omega^2 r = m\dfrac{4\pi^2}{T^2}r$。

## 知识梳理

| 项目 | 要点 |
| --- | --- |
| 平抛运动 | 水平匀速、竖直自由落体，$t = \sqrt{\frac{2h}{g}}$ |
| 圆周运动 | $v = \omega r$，$a = \frac{v^2}{r} = \omega^2 r$ |
| 向心力 | $F = m\frac{v^2}{r}$，指向圆心 |
| 万有引力 | $F = G\frac{m_1m_2}{r^2}$ |
| 天体运动 | 万有引力提供向心力 |
| 第一宇宙速度 | $v = \sqrt{\frac{GM}{R}} \approx 7.9\ \text{km/s}$ |
| 同步卫星 | 周期等于地球自转周期，在赤道正上方 |

## 结构示意

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="f4a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker><marker id="f4b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#dc2626"/></marker></defs>
  <line x1="40" y1="40" x2="40" y2="220" stroke="#64748b" stroke-width="2"/>
  <line x1="40" y1="220" x2="340" y2="220" stroke="#64748b" stroke-width="2"/>
  <path d="M40,220 Q 120,200 200,150 T 320,60" fill="none" stroke="#16a34a" stroke-width="3"/>
  <circle cx="200" cy="150" r="5" fill="#16a34a"/>
  <line x1="200" y1="150" x2="280" y2="150" stroke="#2563eb" stroke-width="2" marker-end="url(#f4a)"/>
  <text x="240" y="142" font-size="12" fill="#2563eb">v0（水平匀速）</text>
  <line x1="200" y1="150" x2="200" y2="210" stroke="#dc2626" stroke-width="2" marker-end="url(#f4b)"/>
  <text x="210" y="205" font-size="12" fill="#dc2626">vy=gt</text>
  <text x="180" y="30" text-anchor="middle" font-size="13" fill="#16a34a">平抛：水平匀速 + 竖直自由落体</text>
</svg>

## 典型例题

**例 1**：从高 $45\ \text{m}$ 处以 $20\ \text{m/s}$ 水平抛出小球，求落地时间和水平位移（$g=10$）。

**解**：$t = \sqrt{\dfrac{2h}{g}} = \sqrt{\dfrac{90}{10}} = 3\ \text{s}$；$x = v_0 t = 20\times3 = 60\ \text{m}$。

**例 2**：地球表面重力加速度为 $g$，地球半径为 $R$，求第一宇宙速度。

**解**：$mg = m\dfrac{v^2}{R}$，$v = \sqrt{gR}$。代入 $g=9.8$，$R=6.4\times10^6$，$v \approx 7.9\ \text{km/s}$。

**例 3**：卫星绕地球做匀速圆周运动，轨道半径为 $r$，地球质量为 $M$，求卫星的周期。

**解**：$G\dfrac{Mm}{r^2} = m\dfrac{4\pi^2}{T^2}r$，$T = 2\pi\sqrt{\dfrac{r^3}{GM}}$。

## 易错点

- 曲线运动速度方向沿**切线**，合外力指向轨迹**凹侧**。
- 平抛运动时间只由**高度**决定，与水平初速度无关。
- 向心力是**效果力**，不是独立的新力，由其他力提供。
- 天体运动中，轨道半径越大，线速度、角速度越小，周期越大。
- 第一宇宙速度是**最小发射速度、最大环绕速度**。

## 背记要点

1. 平抛：$t = \sqrt{\frac{2h}{g}}$，$x = v_0 t$。
2. 圆周：$v = \omega r$，$a = \frac{v^2}{r}$，$F = m\frac{v^2}{r}$。
3. 万有引力：$F = G\frac{m_1m_2}{r^2}$。
4. 天体：$G\frac{Mm}{r^2} = m\frac{v^2}{r}$。
5. 第一宇宙速度 $v = \sqrt{gR} \approx 7.9\ \text{km/s}$。

## 自测题

1. 平抛运动落地时间由____决定。
2. 卫星轨道半径越大，其线速度越____。
3. 向心力是否是一个独立的力？
4. 第一宇宙速度约为____km/s。

## 相关知识点

运动学基础见 [[专题三 运动学综合]]；圆周运动与能量结合见 [[专题六 动能定理与机械能守恒]]；综合计算见 [[专题八 力学综合计算]]。
