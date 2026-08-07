---
title: 3 匀变速直线运动的位移与时间的关系
date: 2026-08-07
---

# 3 匀变速直线运动的位移与时间的关系

## 概念定义

v-t 图象中，图线与 t 轴所围**面积**表示位移。将匀变速运动的梯形面积展开得**位移公式**：
$$x=v_0t+\dfrac{1}{2}at^2$$

消去 $t$ 得**速度—位移关系**（不含时间）：
$$v^2-v_0^2=2ax$$

## 知识梳理

| 公式 | 特点 | 适用场景 |
| --- | --- | --- |
| $v=v_0+at$ | 不含 $x$ | 求速度、时间 |
| $x=v_0t+\dfrac12 at^2$ | 不含 $v$ | 求位移、时间 |
| $v^2-v_0^2=2ax$ | 不含 $t$ | 不涉及时间时优先 |
| $x=\dfrac{v_0+v}{2}t=\bar v t$ | 不含 $a$ | 已知初末速度 |
| $\Delta x=aT^2$ | 逐差恒量 | 纸带、连续相等时间问题 |

**初速度为零的匀加速比例式**（从静止，等分时间 T）：
1T、2T、3T…末速度比 $1:2:3$；各 T 内位移比 $1:3:5$；前 1T、2T、3T 位移比 $1:4:9$。

## v-t 图象下面积表示位移

<svg viewBox="0 0 360 240" width="360" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="ax7" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#64748b"/></marker></defs>
  <line x1="45" y1="200" x2="340" y2="200" stroke="#64748b" stroke-width="2" marker-end="url(#ax7)"/>
  <line x1="45" y1="200" x2="45" y2="20" stroke="#64748b" stroke-width="2" marker-end="url(#ax7)"/>
  <text x="330" y="218" font-size="13" fill="#64748b">t</text>
  <text x="20" y="30" font-size="13" fill="#64748b">v</text>
  <text x="33" y="214" font-size="12" fill="#64748b">O</text>
  <polygon points="45,200 45,140 250,58 250,200" fill="#bfdbfe" opacity="0.65"/>
  <line x1="45" y1="140" x2="250" y2="58" stroke="#2563eb" stroke-width="2.5"/>
  <line x1="250" y1="200" x2="250" y2="58" stroke="#64748b" stroke-width="1.3" stroke-dasharray="4 3"/>
  <line x1="45" y1="58" x2="250" y2="58" stroke="#64748b" stroke-width="1.3" stroke-dasharray="4 3"/>
  <text x="14" y="145" font-size="12" fill="#2563eb">v₀</text>
  <text x="20" y="63" font-size="12" fill="#2563eb">v</text>
  <text x="245" y="216" font-size="12" fill="#64748b">t</text>
  <text x="130" y="150" font-size="13" fill="#dc2626">面积 = 位移 x</text>
  <text x="95" y="178" font-size="11" fill="#16a34a">矩形 v₀t</text>
  <text x="160" y="105" font-size="11" fill="#16a34a">三角形 ½at²</text>
  <text x="180" y="35" font-size="12" fill="#64748b">x = v₀t + ½at²</text>
</svg>

## 典型例题

**例 1**：飞机从静止匀加速，$a=4\ \text{m/s}^2$，离地速度 $80\ \text{m/s}$，求跑道最短长度。

**解**：不涉及时间，用 $v^2-v_0^2=2ax$：$x=\dfrac{v^2}{2a}=\dfrac{80^2}{2\times4}=800\ \text{m}$。

**例 2**：汽车 $v_0=20\ \text{m/s}$ 刹车，$|a|=5\ \text{m/s}^2$，求刹车后 2 s 与 6 s 内的位移。

**解**：停车时间 $t_0=\dfrac{20}{5}=4\ \text{s}$。
2 s 内：$x=20\times2-\dfrac12\times5\times4=30\ \text{m}$。
6 s > 4 s，位移＝停车前全部位移：$x=\dfrac{v_0^2}{2|a|}=\dfrac{400}{10}=40\ \text{m}$。

## 易错点

- 刹车问题**先判停车时间**，再决定代入的时间。
- 三个公式均为矢量式，先规定正方向，减速时 $a$ 取负。
- v-t 图面积在 t 轴下方表示**负位移**，求路程需分段取绝对值相加。
- 比例式仅适用于**初速度为零**的匀加速运动。

## 背记要点

1. 三大公式：$v=v_0+at$、$x=v_0t+\frac12at^2$、$v^2-v_0^2=2ax$；平均速度式 $x=\frac{v_0+v}{2}t$。
2. v-t 图"斜率是 $a$、面积是 $x$"。
3. 初速为零比例："速度 1:2:3、段位移 1:3:5、总位移 1:4:9"。
4. 高考视角：多过程运动学计算（刹车、追及）为大题基础环节，公式选取讲究"缺什么用哪个"。

## 自测题

1. 从静止匀加速，第 1 s、第 2 s、第 3 s 内位移之比为____。
2. $v_0=6\ \text{m/s}$，$a=2\ \text{m/s}^2$，4 s 内位移 $x=$____。
3. 某物体 $v_0=4\ \text{m/s}$，末速度 $8\ \text{m/s}$，位移 12 m，用不含 $t$ 的公式求 $a=$____。
4. 汽车刹车 $v_0=10\ \text{m/s}$，$|a|=2\ \text{m/s}^2$，8 s 内位移为____。

## 相关知识点

速度公式见 [[2 匀变速直线运动的速度与时间的关系]]；典型匀加速实例见 [[4 自由落体运动]]。
