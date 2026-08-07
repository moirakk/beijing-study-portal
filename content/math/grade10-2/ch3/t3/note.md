---
title: 8.3 简单几何体的表面积与体积
date: 2026-08-07
---

# 8.3 简单几何体的表面积与体积

## 概念定义

**表面积**：几何体表面的总面积（侧面积＋底面积）；旋转体侧面积可由**侧面展开图**求得。
**体积**：几何体所占空间的大小。柱体 $V=Sh$，锥体 $V=\dfrac13Sh$，台体 $V=\dfrac13(S'+\sqrt{S'S}+S)h$。

## 知识梳理

| 几何体 | 侧面积 | 体积 |
| --- | --- | --- |
| 圆柱 | $S_{侧}=2\pi rl$ | $V=\pi r^2h$ |
| 圆锥 | $S_{侧}=\pi rl$ | $V=\dfrac13\pi r^2h$ |
| 圆台 | $S_{侧}=\pi(r+r')l$ | $V=\dfrac13\pi(r'^2+r'r+r^2)h$ |
| 球 | 表面积 $S=4\pi R^2$ | $V=\dfrac43\pi R^3$ |
| 直棱柱 | $S_{侧}=Ch$（$C$ 为底面周长） | $V=Sh$ |
| 正棱锥 | $S_{侧}=\dfrac12Ch'$（$h'$ 为斜高） | $V=\dfrac13Sh$ |

**外接球常用结论**：长方体（棱 $a,b,c$）外接球直径 $2R=\sqrt{a^2+b^2+c^2}$；正方体棱长 $a$ 时外接球 $R=\dfrac{\sqrt3}{2}a$，内切球 $r=\dfrac{a}{2}$。

## 重点精讲：长方体的外接球

<svg viewBox="0 0 360 220" width="360" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <polygon points="80,180 240,180 240,80 80,80" fill="none" stroke="#334155" stroke-width="2"/>
  <polygon points="80,80 130,45 290,45 240,80" fill="none" stroke="#334155" stroke-width="2"/>
  <polygon points="240,180 290,145 290,45 240,80" fill="none" stroke="#334155" stroke-width="2"/>
  <line x1="80" y1="180" x2="130" y2="145" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="130" y1="145" x2="290" y2="145" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="130" y1="145" x2="130" y2="45" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <ellipse cx="185" cy="112" rx="128" ry="92" fill="none" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="6 4"/>
  <line x1="80" y1="180" x2="290" y2="45" stroke="#dc2626" stroke-width="2"/>
  <text x="150" y="105" font-size="12" fill="#dc2626">体对角线＝2R</text>
  <text x="150" y="200" font-size="12" fill="#334155">a</text>
  <text x="256" y="176" font-size="12" fill="#334155">b</text>
  <text x="296" y="100" font-size="12" fill="#334155">c</text>
  <text x="90" y="30" font-size="12" fill="#2563eb">外接球：2R＝√(a²+b²+c²)</text>
</svg>

外接球问题的通法：找球心（到各顶点等距）→ 建立 $R$ 与棱长的方程。长方体模型（含"墙角"三棱锥补形）是最常用工具。

## 典型例题

**例 1**：圆锥底面半径 $r=3$，母线 $l=5$，求其表面积与体积。

**解**：$h=\sqrt{l^2-r^2}=4$。
$S=\pi rl+\pi r^2=15\pi+9\pi=24\pi$。
$V=\dfrac13\pi r^2h=\dfrac13\pi\times9\times4=12\pi$。

**例 2**：三棱锥 $P\text{-}ABC$ 中，$PA,PB,PC$ 两两垂直且 $PA=PB=PC=2$，求其外接球的表面积。

**解**：补形为棱长为 2 的正方体，外接球直径为体对角线：
$2R=\sqrt{2^2+2^2+2^2}=2\sqrt3$，$R=\sqrt3$。
$S=4\pi R^2=12\pi$。

## 易错点

- 锥体体积勿漏系数 $\dfrac13$；台体公式中间项是 $\sqrt{S'S}$。
- 圆锥侧面积公式中 $l$ 是**母线**不是高；正棱锥侧面积用**斜高** $h'$ 不是侧棱。
- 表面积＝侧面积＋**所有**底面积：圆柱两个底、圆台两个底。
- 球没有侧面展开图，$S=4\pi R^2$ 直接记；区分外接球（过顶点）与内切球（切各面）。

## 背记要点

1. 柱 $V=Sh$、锥 $V=\dfrac13Sh$、台 $V=\dfrac13(S'+\sqrt{S'S}+S)h$——"柱、锥、台"一条线，台是过渡。
2. 球：$S=4\pi R^2$，$V=\dfrac43\pi R^3$。
3. 圆柱侧 $2\pi rl$、圆锥侧 $\pi rl$、圆台侧 $\pi(r+r')l$。
4. 墙角模型补长方体：$2R=\sqrt{a^2+b^2+c^2}$。
5. 高考视角：几何体外接球是高频小题压轴点，核心是"定球心、求半径"；等体积法换底求点面距离是大题常用技巧。

## 自测题

1. 棱长为 2 的正方体的表面积为____，体积为____。
2. 球的表面积为 $36\pi$，则其体积为____。
3. 圆台上下底半径 1、2，母线 2，侧面积为____。
4. 棱长为 $a$ 的正方体内切球半径为____，外接球半径为____。

## 相关知识点

几何体结构见 [[8.1 基本立体图形]]；位置关系基础见 [[8.4 空间点、直线、平面之间的位置关系]]。
