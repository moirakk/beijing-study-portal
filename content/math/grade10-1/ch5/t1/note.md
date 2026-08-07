---
title: 5.1 任意角和弧度制
date: 2026-08-07
---

# 5.1 任意角和弧度制

## 概念定义

**任意角**：由旋转定义，逆时针为**正角**，顺时针为**负角**，不旋转为零角。

**终边相同的角**：与 $\alpha$ 终边相同的角组成集合 $\{\beta\mid \beta=\alpha+k\cdot360^\circ,\ k\in\mathbb{Z}\}$。

**弧度制**：长度等于半径的弧所对的圆心角为 $1$ 弧度（rad）。$|\alpha|=\dfrac{l}{r}$。

换算：$180^\circ=\pi\ \text{rad}$，即 $1^\circ=\dfrac{\pi}{180}$ rad，$1\ \text{rad}=\left(\dfrac{180}{\pi}\right)^\circ\approx 57.3^\circ$。

## 知识梳理

象限角示意（第一象限角 $\alpha$ 及其终边）：

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg">
  <line x1="30" y1="120" x2="330" y2="120" stroke="#64748b" stroke-width="1.5"/>
  <line x1="180" y1="20" x2="180" y2="220" stroke="#64748b" stroke-width="1.5"/>
  <polygon points="330,120 321,116 321,124" fill="#64748b"/>
  <polygon points="180,20 176,29 184,29" fill="#64748b"/>
  <line x1="180" y1="120" x2="290" y2="48" stroke="#dc2626" stroke-width="2"/>
  <polygon points="290,48 279,50 285,59" fill="#dc2626"/>
  <path d="M 225 120 A 45 45 0 0 0 217 96" fill="none" stroke="#2563eb" stroke-width="2"/>
  <text x="238" y="108" font-size="14" fill="#2563eb">α</text>
  <text x="296" y="44" font-size="13" fill="#dc2626">终边</text>
  <text x="256" y="140" font-size="12" fill="#64748b">始边(x正半轴)</text>
  <text x="332" y="138" font-size="13" fill="#64748b">x</text>
  <text x="190" y="30" font-size="13" fill="#64748b">y</text>
  <text x="180" y="236" font-size="12" fill="#64748b" text-anchor="middle">逆时针旋转为正角，顺时针为负角</text>
</svg>

**弧度制下的弧长与扇形面积公式**：

| 公式 | 弧度制 |
| --- | --- |
| 弧长 | $l=|\alpha| r$ |
| 扇形面积 | $S=\dfrac12 lr=\dfrac12 |\alpha| r^2$ |

## 典型例题

**例 1**：在 $0^\circ\sim360^\circ$ 内找出与 $-950^\circ$ 终边相同的角，并判断象限。

**解**：$-950^\circ+3\times360^\circ=130^\circ$。因 $90^\circ<130^\circ<180^\circ$，是第二象限角。

**例 2**：扇形周长为 $10$，圆心角为 $2$ rad，求扇形面积。

**解**：设半径 $r$，弧长 $l=2r$，周长 $2r+l=4r=10$，得 $r=\dfrac52$，$l=5$。
面积 $S=\dfrac12 lr=\dfrac12\times5\times\dfrac52=\dfrac{25}{4}$。

## 易错点

- 终边相同的角相差 $360^\circ$ 的**整数倍**，$k\in\mathbb{Z}$ 不能漏写。
- "小于 $90^\circ$ 的角""锐角""第一象限角"三者不同：$-30^\circ$ 小于 $90^\circ$ 但不是锐角。
- 角度与弧度**不能混用**：$\alpha=k\cdot360^\circ+\dfrac{\pi}{3}$ 是错误写法。
- $\dfrac{\alpha}{2}$ 所在象限：由 $\alpha$ 象限推出时要对 $k$ 分奇偶讨论。

## 背记要点

1. 换算枢纽：$180^\circ=\pi$；常用角 $30^\circ=\dfrac\pi6$，$45^\circ=\dfrac\pi4$，$60^\circ=\dfrac\pi3$，$90^\circ=\dfrac\pi2$。
2. 终边相同：$\beta=\alpha+2k\pi$（$k\in\mathbb{Z}$）。
3. 弧长 $l=\alpha r$，扇形面积 $S=\dfrac12 lr$（弧度制下最简）。
4. 判断象限：先加减 $2k\pi$ 化到 $[0,2\pi)$ 再看位置。

## 自测题

1. $\dfrac{7\pi}{6}$ 化为角度是____，是第____象限角。
2. 与 $\dfrac{\pi}{5}$ 终边相同的角的集合是____。
3. 半径为 $2$、圆心角 $\dfrac{\pi}{3}$ 的扇形弧长为____，面积为____。
4. $-\dfrac{2\pi}{3}$ 是第____象限角。

## 相关知识点

角的终边与坐标结合见 [[5.2 三角函数的概念]]；角的化简变换见 [[5.3 诱导公式]]。
