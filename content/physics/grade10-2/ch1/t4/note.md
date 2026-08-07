---
title: 4 抛体运动的规律
date: 2026-08-07
---

# 4 抛体运动的规律

## 概念定义

**抛体运动**：以一定初速度抛出、只受重力作用的运动（加速度恒为 $g$，方向竖直向下）。

**平抛运动**：初速度沿水平方向的抛体运动，可分解为水平方向的**匀速直线运动**和竖直方向的**自由落体运动**。

## 知识梳理

| 方向 | 规律（抛出点为原点，$x$ 水平、$y$ 竖直向下） |
| --- | --- |
| 水平 | $v_x=v_0$，$x=v_0t$ |
| 竖直 | $v_y=gt$，$y=\dfrac12gt^2$ |
| 合速度 | $v=\sqrt{v_0^2+(gt)^2}$，$\tan\theta=\dfrac{v_y}{v_0}$（$\theta$ 为速度与水平方向夹角） |
| 合位移 | $s=\sqrt{x^2+y^2}$，$\tan\alpha=\dfrac{y}{x}=\dfrac{gt}{2v_0}$ |
| 轨迹 | $y=\dfrac{g}{2v_0^2}x^2$（抛物线） |

**两个重要推论**：① $\tan\theta=2\tan\alpha$（速度偏角正切是位移偏角正切的 2 倍）；② 任一时刻速度的反向延长线过**水平位移的中点**。飞行时间 $t=\sqrt{2h/g}$ 只由高度决定。

## 平抛运动的分解示意

<svg viewBox="0 0 380 240" width="380" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="p14b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker><marker id="p14r" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#dc2626"/></marker><marker id="p14g" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#16a34a"/></marker></defs>
  <line x1="30" y1="30" x2="360" y2="30" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <line x1="30" y1="30" x2="30" y2="225" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <circle cx="30" cy="30" r="4" fill="#334155"/>
  <text x="14" y="22" font-size="12" fill="#334155">O</text>
  <line x1="30" y1="30" x2="110" y2="30" stroke="#2563eb" stroke-width="2.5" marker-end="url(#p14b)"/>
  <text x="70" y="20" font-size="12" fill="#2563eb">v₀</text>
  <path d="M30,30 Q140,44 200,100 T330,220" fill="none" stroke="#64748b" stroke-width="2.5"/>
  <circle cx="210" cy="110" r="5" fill="#dc2626"/>
  <line x1="210" y1="110" x2="285" y2="110" stroke="#2563eb" stroke-width="2" marker-end="url(#p14b)"/>
  <text x="288" y="106" font-size="12" fill="#2563eb">vₓ=v₀</text>
  <line x1="210" y1="110" x2="210" y2="180" stroke="#16a34a" stroke-width="2" marker-end="url(#p14g)"/>
  <text x="216" y="176" font-size="12" fill="#16a34a">v_y=gt</text>
  <line x1="210" y1="110" x2="285" y2="180" stroke="#dc2626" stroke-width="2.5" marker-end="url(#p14r)"/>
  <text x="290" y="184" font-size="12" fill="#dc2626">v（切线方向）</text>
  <text x="70" y="215" font-size="12" fill="#64748b">y=gx²/(2v₀²)</text>
</svg>

## 典型例题

**例 1**：小球以 $v_0=10\ \text{m/s}$ 水平抛出，从 $h=20\ \text{m}$ 高处落地（$g=10\ \text{m/s}^2$）。求飞行时间、水平射程和落地速度大小。

**解**：$t=\sqrt{\dfrac{2h}{g}}=\sqrt{\dfrac{40}{10}}=2\ \text{s}$；$x=v_0t=20\ \text{m}$。
落地时 $v_y=gt=20\ \text{m/s}$，$v=\sqrt{10^2+20^2}=10\sqrt5\approx 22.4\ \text{m/s}$。

**例 2**：平抛小球落地时速度方向与水平方向成 $45°$，落地点距抛出点的水平距离为 $x=8\ \text{m}$，求抛出点高度 $h$。

**解**：$\tan45°=\dfrac{v_y}{v_0}=1$ ⇒ $v_y=v_0$，即 $gt=v_0$。
$h=\dfrac12gt^2=\dfrac12v_0t=\dfrac{x}{2}\cdot\dfrac{gt^2}{v_0t}$；更直接地由 $\tan\theta=2\tan\alpha$ 得位移偏角 $\tan\alpha=\dfrac12=\dfrac{h}{x}$，故 $h=4\ \text{m}$。

## 易错点

- 飞行时间只由**下落高度**决定，与 $v_0$ 无关；水平射程 $x=v_0\sqrt{2h/g}$ 才与 $v_0$ 有关。
- 速度方向偏角 $\theta$ 与位移方向偏角 $\alpha$ 不同，$\tan\theta=2\tan\alpha$，不能混用。
- 落在斜面上的平抛：沿斜面方向常给出位移偏角等于斜面倾角，应先用 $\tan\alpha=\dfrac{gt}{2v_0}$。
- 平抛是**匀变速曲线运动**（$a=g$ 恒定），不是变加速运动。

## 背记要点

1. 分解：水平匀速 $x=v_0t$；竖直自由落体 $y=\frac12gt^2$，$v_y=gt$。
2. $t=\sqrt{2h/g}$（只看高度）；轨迹 $y=\dfrac{g}{2v_0^2}x^2$。
3. 推论：$\tan\theta=2\tan\alpha$；速度反向延长线过水平位移中点。
4. 高考视角：平抛与斜面、圆弧结合是高频题型，先定时间（竖直方向），再算水平量。

## 自测题

1. 从 45 m 高处平抛的物体，飞行时间为____s（$g=10\ \text{m/s}^2$）。
2. 平抛物体初速度 5 m/s，2 s 末的竖直分速度为____m/s。
3. 增大平抛初速度，飞行时间____（填"变长/变短/不变"）。
4. 落地时速度与水平方向成 $60°$，则位移方向与水平方向夹角的正切值为____。

## 相关知识点

分解方法基础见 [[2 运动的合成与分解]]；实验探究见 [[3 实验：探究平抛运动的特点]]；另一类曲线运动见 [[1 圆周运动]]。
