---
title: 1 光的折射
date: 2026-08-07
---

# 1 光的折射

## 概念定义

**折射定律（斯涅耳定律）**：折射光线与入射光线、法线在同一平面内；折射光线与入射光线分居法线两侧；入射角 $\theta_1$ 与折射角 $\theta_2$ 满足：
$$\dfrac{\sin\theta_1}{\sin\theta_2}=n_{12}\ (\text{常数})$$

**折射率**：光从**真空射入某介质**时，$n=\dfrac{\sin\theta_1}{\sin\theta_2}$；其物理本质为
$$n=\dfrac{c}{v}$$
（$c$ 为真空光速，$v$ 为光在该介质中的速度）。任何介质的 $n>1$。

## 知识梳理

| 项目 | 内容 |
| --- | --- |
| 折射率定义式 | $n=\dfrac{\sin\theta_1}{\sin\theta_2}$（$\theta_1$ 在真空/空气一侧） |
| 决定式 | $n=\dfrac{c}{v}$，由介质本身（及光的频率）决定 |
| 波长变化 | 介质中 $\lambda'=\dfrac{\lambda}{n}$（频率不变，$v=\dfrac{c}{n}$ 变小） |
| 光疏 → 光密 | 折射角 $<$ 入射角（偏向法线） |
| 光密 → 光疏 | 折射角 $>$ 入射角（偏离法线） |
| 光路可逆 | 折射光路沿原路返回仍成立 |

**现象**：水中筷子"弯折"、池水"变浅"（视深 $=\dfrac{实深}{n}$，竖直方向观察）。

## 折射光路图

<svg viewBox="0 0 360 220" width="360" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="g1a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#dc2626"/></marker></defs>
  <rect x="20" y="110" width="320" height="90" fill="#dbeafe"/>
  <line x1="20" y1="110" x2="340" y2="110" stroke="#334155" stroke-width="2"/>
  <line x1="180" y1="20" x2="180" y2="200" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5 3"/>
  <line x1="80" y1="30" x2="176" y2="107" stroke="#dc2626" stroke-width="2.5" marker-end="url(#g1a)"/>
  <line x1="180" y1="110" x2="238" y2="196" stroke="#dc2626" stroke-width="2.5" marker-end="url(#g1a)"/>
  <text x="90" y="26" font-size="12" fill="#dc2626">入射光</text>
  <text x="244" y="192" font-size="12" fill="#dc2626">折射光</text>
  <text x="150" y="66" font-size="12" fill="#334155">θ₁</text>
  <text x="196" y="150" font-size="12" fill="#334155">θ₂&lt;θ₁</text>
  <text x="26" y="102" font-size="12" fill="#64748b">空气（光疏）</text>
  <text x="26" y="130" font-size="12" fill="#2563eb">水（光密，n=sinθ₁/sinθ₂）</text>
  <text x="186" y="34" font-size="12" fill="#94a3b8">法线</text>
</svg>

## 典型例题

**例 1**：光从空气以 $45^\circ$ 入射角射入某介质，折射角 $30^\circ$。求介质折射率及光在其中的速度（$c=3\times10^8\ \text{m/s}$）。

**解**：$n=\dfrac{\sin45^\circ}{\sin30^\circ}=\dfrac{\sqrt2/2}{1/2}=\sqrt2\approx1.41$。
$v=\dfrac{c}{n}=\dfrac{3\times10^8}{\sqrt2}\approx2.1\times10^8\ \text{m/s}$。

**例 2**：某湖水折射率 $n=\dfrac{4}{3}$，实际水深 $2\ \text{m}$。人在正上方竖直向下看，湖底"视深"多少？

**解**：竖直观察时视深 $h'=\dfrac{h}{n}=\dfrac{2}{4/3}=1.5\ \text{m}$，比实际浅。

## 易错点

- $n=\dfrac{\sin\theta_1}{\sin\theta_2}$ 中 $\theta_1$ 必须是**真空（空气）一侧**的角，写反会得 $n<1$。
- 折射率由介质和光的**频率**决定，与入射角无关；入射角变，折射角随之变，比值不变。
- 光进入介质后频率不变，速度、波长都变为原来的 $\dfrac{1}{n}$。
- 同种介质中紫光频率高、$n$ 大、偏折大、速度小（色散基础）。

## 背记要点

1. 折射定律：$\dfrac{\sin\theta_1}{\sin\theta_2}=n$；$n=\dfrac{c}{v}>1$。
2. 介质中 $v=\dfrac{c}{n}$，$\lambda'=\dfrac{\lambda}{n}$，$f$ 不变。
3. 视深 $=\dfrac{实深}{n}$（竖直观察）；光路可逆。
4. 高考视角：画光路图＋几何关系求 $n$ 是北京卷光学计算题的固定套路。

## 自测题

1. 折射率的定义式 $n=$____，决定式 $n=$____。
2. 光从空气入射角 $60^\circ$、折射角 $30^\circ$，则 $n=$____。
3. 光在 $n=1.5$ 的玻璃中的速度为____m/s。
4. 判断：入射角增大时，介质的折射率随之增大。（　）

## 相关知识点

光密到光疏的极限情形见 [[2 全反射]]；不同频率光折射率不同引出色散，与 [[3 光的干涉]] 中波长测定呼应；折射率测定实验思想可与 [[4 实验：用双缝干涉测量光的波长]] 对比。
