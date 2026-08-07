---
title: 3.2 双曲线
date: 2026-08-07
---

# 3.2 双曲线

## 概念定义

**双曲线**：平面内到两定点 $F_1,F_2$ 距离之**差的绝对值**等于常数 $2a$（$0<2a<|F_1F_2|=2c$）的点的轨迹。
$$\big||PF_1|-|PF_2|\big|=2a\quad(0<a<c)$$
去掉绝对值只得**一支**；$2a=2c$ 时为两条射线；$2a>2c$ 无轨迹。基本量关系：$b^2=c^2-a^2$。

## 知识梳理

| 项目 | 焦点在 $x$ 轴 | 焦点在 $y$ 轴 |
| --- | --- | --- |
| 标准方程 | $\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1$ | $\dfrac{y^2}{a^2}-\dfrac{x^2}{b^2}=1$ |
| 焦点 | $(\pm c,0)$ | $(0,\pm c)$ |
| 顶点 | $(\pm a,0)$ | $(0,\pm a)$ |
| 渐近线 | $y=\pm\dfrac{b}{a}x$ | $y=\pm\dfrac{a}{b}x$ |
| 离心率 | $e=\dfrac{c}{a}>1$，且 $e^2=1+\dfrac{b^2}{a^2}$ | $e$ 越大"开口"越阔 |
| 通径 | $\dfrac{2b^2}{a}$ | 实轴 $2a$，虚轴 $2b$ |

**渐近线技巧**：与 $\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1$ 共渐近线的双曲线可设为 $\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=\lambda$（$\lambda\ne0$）。
**等轴双曲线**：$a=b$，渐近线 $y=\pm x$，$e=\sqrt2$。

## 图示：双曲线及其渐近线

<svg viewBox="0 0 360 230" width="360" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="ax32" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#334155"/></marker></defs>
  <line x1="10" y1="115" x2="350" y2="115" stroke="#334155" stroke-width="1.5" marker-end="url(#ax32)"/>
  <line x1="180" y1="220" x2="180" y2="12" stroke="#334155" stroke-width="1.5" marker-end="url(#ax32)"/>
  <text x="352" y="130" font-size="13" fill="#334155">x</text>
  <text x="186" y="18" font-size="13" fill="#334155">y</text>
  <line x1="40" y1="220" x2="320" y2="10" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="6 4"/>
  <line x1="40" y1="10" x2="320" y2="220" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="6 4"/>
  <text x="300" y="30" font-size="12" fill="#64748b">y=(b/a)x</text>
  <path d="M 230 20 Q 208 115 230 210" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <path d="M 130 20 Q 152 115 130 210" fill="none" stroke="#dc2626" stroke-width="2.5"/>
  <circle cx="290" cy="115" r="4" fill="#2563eb"/>
  <circle cx="70" cy="115" r="4" fill="#2563eb"/>
  <text x="288" y="136" font-size="12" fill="#2563eb">F₂</text>
  <text x="60" y="136" font-size="12" fill="#2563eb">F₁</text>
  <circle cx="212" cy="115" r="3" fill="#16a34a"/>
  <circle cx="148" cy="115" r="3" fill="#16a34a"/>
  <text x="214" y="104" font-size="12" fill="#16a34a">a</text>
  <text x="168" y="132" font-size="12" fill="#64748b">O</text>
</svg>

## 典型例题

**例 1**：求与椭圆 $\dfrac{x^2}{16}+\dfrac{y^2}{4}=1$ 共焦点，且过点 $(3\sqrt2,2)$ 的双曲线方程。

**解**：椭圆焦点 $(\pm2\sqrt3,0)$，故 $c^2=12$。设 $\dfrac{x^2}{a^2}-\dfrac{y^2}{12-a^2}=1$（$0<a^2<12$）。
代入点：$\dfrac{18}{a^2}-\dfrac{4}{12-a^2}=1$，整理得 $a^4-34a^2+216=0$，$a^2=4$ 或 $27$（舍）。
故双曲线方程为 $\dfrac{x^2}{4}-\dfrac{y^2}{8}=1$。

**例 2**：双曲线 $\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1$ 的一条渐近线为 $y=2x$，求离心率。

**解**：$\dfrac{b}{a}=2$，故 $e^2=1+\dfrac{b^2}{a^2}=1+4=5$，$e=\sqrt5$。

## 易错点

- 定义含**绝对值**：去掉绝对值只表示靠近某一焦点的一支；用定义求焦半径注意分支。
- $b^2=c^2-a^2$（$c$ 最大），与椭圆的 $b^2=a^2-c^2$ 相反。
- 由渐近线 $y=\pm\dfrac{b}{a}x$ 不能唯一确定双曲线（焦点可能在 $y$ 轴），须用 $\lambda$ 形式设方程。
- 直线与双曲线只有一个公共点 $\ne$ 相切：与渐近线平行的直线交双曲线于一点但不相切。

## 背记要点

1. 定义：距离**差的绝对值**为 $2a$（$0<2a<2c$）；$c^2=a^2+b^2$。
2. $e=\dfrac{c}{a}>1$；$e^2=1+\left(\dfrac{b}{a}\right)^2$，渐近线斜率与离心率互求。
3. 焦点位置看**正项**：$x^2$ 项为正则焦点在 $x$ 轴。
4. 等轴双曲线 $e=\sqrt2$；共渐近线设 $\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=\lambda$。
5. 高考视角：双曲线以小题为主，核心是离心率与渐近线的互化，常借焦点三角形、垂直条件构造 $a,b,c$ 方程。

## 自测题

1. 双曲线 $\dfrac{x^2}{9}-\dfrac{y^2}{16}=1$ 的渐近线方程为____，离心率为____。
2. $||PF_1|-|PF_2||=6$，$|F_1F_2|=10$（焦点在 $x$ 轴），则轨迹方程为____。
3. 等轴双曲线的离心率为____。
4. 判断：双曲线 $\dfrac{x^2}{4}-\dfrac{y^2}{9}=1$ 上的点到焦点的最短距离为 $c-a$。（　）

## 相关知识点

距离之和的轨迹见 [[3.1 椭圆]]；离心率 $e=1$ 的"临界"曲线见 [[3.3 抛物线]]；渐近线是特殊直线，其方程写法见 [[2.2 直线的方程]]。
