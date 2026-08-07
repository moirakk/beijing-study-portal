---
title: 6.2 平面向量的运算
date: 2026-08-07
---

# 6.2 平面向量的运算

## 概念定义

**加法**：三角形法则（首尾相接：$\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$）；平行四边形法则（共起点，对角线为和）。
**减法**：$\vec{a}-\vec{b}=\vec{a}+(-\vec{b})$；共起点时 $\overrightarrow{OA}-\overrightarrow{OB}=\overrightarrow{BA}$（指向被减向量）。
**数乘**：$\lambda\vec{a}$ 的模为 $|\lambda||\vec{a}|$，$\lambda>0$ 同向，$\lambda<0$ 反向。
**数量积**：$\vec{a}\cdot\vec{b}=|\vec{a}||\vec{b}|\cos\theta$（$\theta$ 为夹角，$0\le\theta\le\pi$），结果是**数量**。

## 知识梳理

| 运算 | 关键公式 | 说明 |
| --- | --- | --- |
| 加法 | $\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$ | 满足交换律、结合律 |
| 减法 | $\overrightarrow{OA}-\overrightarrow{OB}=\overrightarrow{BA}$ | 箭头指向"被减" |
| 数乘 | $\lambda(\mu\vec{a})=(\lambda\mu)\vec{a}$ | 共线定理：$\vec{b}=\lambda\vec{a}$（$\vec{a}\ne\vec{0}$）$\Leftrightarrow\vec{a}\parallel\vec{b}$ |
| 数量积 | $\vec{a}\cdot\vec{b}=|\vec{a}||\vec{b}|\cos\theta$ | 非零向量 $\vec{a}\perp\vec{b}\Leftrightarrow\vec{a}\cdot\vec{b}=0$ |
| 模 | $|\vec{a}|^2=\vec{a}\cdot\vec{a}$ | 求模先平方 |
| 投影 | $\vec{a}$ 在 $\vec{b}$ 上的投影向量 $=|\vec{a}|\cos\theta\cdot\dfrac{\vec{b}}{|\vec{b}|}$ | 投影数量为 $|\vec{a}|\cos\theta$ |

## 重点精讲：平行四边形法则

<svg viewBox="0 0 360 200" width="360" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="m62a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker><marker id="m62r" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#dc2626"/></marker><marker id="m62g" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#16a34a"/></marker></defs>
  <line x1="50" y1="160" x2="200" y2="160" stroke="#2563eb" stroke-width="2.5" marker-end="url(#m62a)"/>
  <text x="115" y="180" font-size="13" fill="#2563eb">a</text>
  <line x1="50" y1="160" x2="120" y2="60" stroke="#16a34a" stroke-width="2.5" marker-end="url(#m62g)"/>
  <text x="65" y="100" font-size="13" fill="#16a34a">b</text>
  <line x1="200" y1="160" x2="270" y2="60" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="120" y1="60" x2="270" y2="60" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="50" y1="160" x2="270" y2="60" stroke="#dc2626" stroke-width="2.5" marker-end="url(#m62r)"/>
  <text x="150" y="105" font-size="13" fill="#dc2626">a＋b</text>
  <line x1="120" y1="60" x2="200" y2="160" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5 4"/>
  <text x="178" y="92" font-size="12" fill="#f59e0b">a−b</text>
  <text x="38" y="176" font-size="12" fill="#334155">O</text>
</svg>

共起点作平行四边形：**和向量**是过公共起点的对角线，**差向量**是另一条对角线（由减向量终点指向被减向量终点）。

## 典型例题

**例 1**：已知 $|\vec{a}|=2$，$|\vec{b}|=3$，夹角为 $60°$，求 $|\vec{a}+\vec{b}|$。

**解**：$|\vec{a}+\vec{b}|^2=|\vec{a}|^2+2\vec{a}\cdot\vec{b}+|\vec{b}|^2=4+2\times2\times3\times\cos60°+9=19$，
故 $|\vec{a}+\vec{b}|=\sqrt{19}$。

**例 2**：已知 $|\vec{a}|=1$，$|\vec{b}|=2$，且 $\vec{a}\perp(\vec{a}+\vec{b})$，求 $\vec{a}$ 与 $\vec{b}$ 的夹角 $\theta$。

**解**：$\vec{a}\cdot(\vec{a}+\vec{b})=0\Rightarrow|\vec{a}|^2+\vec{a}\cdot\vec{b}=0\Rightarrow\vec{a}\cdot\vec{b}=-1$。
$\cos\theta=\dfrac{\vec{a}\cdot\vec{b}}{|\vec{a}||\vec{b}|}=\dfrac{-1}{1\times2}=-\dfrac12$，又 $\theta\in[0,\pi]$，故 $\theta=\dfrac{2\pi}{3}$。

## 易错点

- 数量积是**数**不是向量；$\vec{a}\cdot\vec{b}=0$ 不能推出 $\vec{a}=\vec{0}$ 或 $\vec{b}=\vec{0}$。
- 数量积**无结合律**：$(\vec{a}\cdot\vec{b})\vec{c}\ne\vec{a}(\vec{b}\cdot\vec{c})$；也**不能约分**：$\vec{a}\cdot\vec{b}=\vec{a}\cdot\vec{c}\nRightarrow\vec{b}=\vec{c}$。
- 夹角须平移到**共起点**再看；三角形中 $\overrightarrow{AB}$ 与 $\overrightarrow{BC}$ 的夹角是 $\pi-B$，不是 $B$。
- 求模优先"平方去模"：$|\vec{a}\pm\vec{b}|^2=|\vec{a}|^2\pm2\vec{a}\cdot\vec{b}+|\vec{b}|^2$。

## 背记要点

1. 首尾相接用三角形法则，共起点用平行四边形法则；差向量"指向被减"。
2. 共线定理：$\vec{b}=\lambda\vec{a}$（$\vec{a}\ne\vec{0}$）$\Leftrightarrow$ 共线。
3. $\cos\theta=\dfrac{\vec{a}\cdot\vec{b}}{|\vec{a}||\vec{b}|}$；垂直 $\Leftrightarrow$ 数量积为 0。
4. $|\vec{a}|=\sqrt{\vec{a}\cdot\vec{a}}$，求模先平方。
5. 高考视角：数量积求模、求夹角是高频小题，常与三角形中线、垂直等几何背景结合，核心技巧是"平方去模＋基底表示"。

## 自测题

1. $|\vec{a}|=|\vec{b}|=1$，夹角 $90°$，则 $|\vec{a}-\vec{b}|=$____。
2. 化简：$\overrightarrow{AB}+\overrightarrow{BC}-\overrightarrow{AC}=$____。
3. $|\vec{a}|=3$，$\vec{b}$ 与 $\vec{a}$ 反向且 $|\vec{b}|=1$，则 $\vec{a}\cdot\vec{b}=$____。
4. 判断：若 $\vec{a}\cdot\vec{b}>0$，则夹角一定为锐角。（　）

## 相关知识点

向量的基本概念见 [[6.1 平面向量的概念]]；坐标运算见 [[6.3 平面向量基本定理及坐标表示]]；几何应用见 [[6.4 平面向量的应用（含余弦定理、正弦定理）]]。
