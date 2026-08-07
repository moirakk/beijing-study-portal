---
title: 3 向心加速度
date: 2026-08-07
---

# 3 向心加速度

## 概念定义

**向心加速度**：做匀速圆周运动的物体的加速度，方向**始终指向圆心**，描述**线速度方向变化的快慢**。

由牛顿第二定律和向心力表达式 $F_n=m\dfrac{v^2}{r}$ 可得：
$$a_n=\dfrac{F_n}{m}=\dfrac{v^2}{r}=\omega^2 r=\dfrac{4\pi^2}{T^2}r=\omega v$$

## 知识梳理

| 表达式 | 适用讨论 |
| --- | --- |
| $a_n=\dfrac{v^2}{r}$ | $v$ 一定时（如皮带传动边缘），$a_n\propto\dfrac1r$ |
| $a_n=\omega^2 r$ | $\omega$ 一定时（如同轴转动），$a_n\propto r$ |
| $a_n=\dfrac{4\pi^2}{T^2}r=4\pi^2n^2r$ | 已知周期或转速时使用 |
| $a_n=\omega v$ | 已知 $\omega$、$v$ 时最简 |

**方向说明**：匀速圆周运动中 $a_n$ 与 $v$ 垂直、指向圆心且大小不变、方向时刻变化，故匀速圆周运动是**变加速曲线运动**。变速圆周运动的加速度还有切向分量 $a_t$（改变速率）。

## 向心加速度方向示意（速度变化量指向圆心）

<svg viewBox="0 0 360 230" width="360" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="p23b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker><marker id="p23r" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#dc2626"/></marker></defs>
  <circle cx="150" cy="120" r="90" fill="none" stroke="#64748b" stroke-width="2.5"/>
  <circle cx="150" cy="120" r="3.5" fill="#334155"/>
  <text x="156" y="116" font-size="12" fill="#334155">O</text>
  <circle cx="240" cy="120" r="5" fill="#334155"/>
  <text x="248" y="136" font-size="12" fill="#334155">A</text>
  <line x1="240" y1="120" x2="240" y2="48" stroke="#2563eb" stroke-width="2.5" marker-end="url(#p23b)"/>
  <text x="246" y="60" font-size="12" fill="#2563eb">v_A</text>
  <circle cx="150" cy="30" r="5" fill="#334155"/>
  <text x="136" y="22" font-size="12" fill="#334155">B</text>
  <line x1="150" y1="30" x2="78" y2="30" stroke="#2563eb" stroke-width="2.5" marker-end="url(#p23b)"/>
  <text x="86" y="20" font-size="12" fill="#2563eb">v_B</text>
  <line x1="240" y1="120" x2="168" y2="126" stroke="#dc2626" stroke-width="2.5" marker-end="url(#p23r)"/>
  <text x="186" y="144" font-size="12" fill="#dc2626">a_n 指向圆心</text>
  <text x="34" y="210" font-size="12" fill="#64748b">Δv=v_B−v_A 的极限方向指向圆心 ⇒ a_n 向心</text>
</svg>

## 典型例题

**例 1**：赛车以 $v=40\ \text{m/s}$ 通过半径 $r=200\ \text{m}$ 的弯道（可视为匀速圆周运动），求向心加速度大小。

**解**：$a_n=\dfrac{v^2}{r}=\dfrac{1600}{200}=8\ \text{m/s}^2$，方向指向弯道圆心。

**例 2**：地球自转周期 $T=24\ \text{h}$，赤道上物体随地球自转的向心加速度多大？（地球半径 $R=6.4\times10^6\ \text{m}$）

**解**：$a_n=\dfrac{4\pi^2}{T^2}R=\dfrac{4\times9.87}{(86400)^2}\times6.4\times10^6\approx 3.4\times10^{-2}\ \text{m/s}^2$。
远小于 $g$，故随地球自转的效应通常可忽略。

## 易错点

- 讨论 $a_n$ 与 $r$ 的关系必须先固定条件：$v$ 一定时 $a_n\propto\dfrac1r$；$\omega$ 一定时 $a_n\propto r$，不能笼统说"$r$ 越大 $a_n$ 越大"。
- 匀速圆周运动加速度**大小不变、方向时刻变**，是变加速运动。
- 向心加速度只描述**速度方向**变化的快慢，不改变速率。
- 变速圆周运动中总加速度不指向圆心（有切向分量），只有法向分量 $a_n=\dfrac{v^2}{r}$。

## 背记要点

1. $a_n=\dfrac{v^2}{r}=\omega^2r=\dfrac{4\pi^2}{T^2}r=\omega v$，方向指向圆心。
2. 物理意义：描述线速度**方向**变化的快慢。
3. 传动比较：同轴用 $\omega^2r$，皮带用 $\dfrac{v^2}{r}$。
4. 高考视角：与向心力、传动装置结合的比例判断是高频选择题；本教材先由实验得 $F_n=m\dfrac{v^2}{r}$，再由 $a=F/m$ 得向心加速度。

## 自测题

1. 向心加速度描述的是____变化的快慢。
2. 半径 2 m、角速度 3 rad/s 的匀速圆周运动，$a_n=$____m/s²。
3. 同轴转动的两点，半径大的点向心加速度____。
4. 判断：匀速圆周运动是匀变速曲线运动。（　）

## 相关知识点

向心力实验与公式见 [[2 向心力]]；运动学量的关系见 [[1 圆周运动]]；应用分析见 [[4 生活中的圆周运动]]。
