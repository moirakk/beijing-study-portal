---
title: 专题四 函数的零点与方程
date: 2026-08-10
---

# 专题四 函数的零点与方程

## 概念定义

**零点**：对于函数 $y = f(x)$，使 $f(x) = 0$ 的实数 $x$ 叫做函数的**零点**。零点不是点，而是**实数**，是函数图像与 $x$ 轴交点的横坐标。

**零点存在定理**：若函数 $f(x)$ 在区间 $[a, b]$ 上连续，且 $f(a) \cdot f(b) < 0$，则 $f(x)$ 在 $(a, b)$ 内至少有一个零点。

**二分法**：通过不断把区间一分为二，逐步逼近零点的方法，用于求方程的近似解。

**函数零点与方程根的关系**：方程 $f(x) = 0$ 的根 $\iff$ 函数 $y = f(x)$ 的零点 $\iff$ 函数图像与 $x$ 轴交点的横坐标。

## 知识梳理

| 概念 | 含义 | 判断方法 |
| --- | --- | --- |
| 零点 | $f(x)=0$ 的根 | 解方程或图像 |
| 零点存在定理 | 区间端点异号 | $f(a)f(b)<0$ |
| 二分法 | 逐步逼近 | 取中点比较符号 |
| 零点个数 | 交点个数 | 图像法/单调性 |

## 结构示意

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="s4a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker></defs>
  <rect x="110" y="15" width="140" height="30" rx="6" fill="#2563eb"/>
  <text x="180" y="35" font-size="12" fill="#fff" text-anchor="middle">函数零点 f(x)=0</text>
  <line x1="150" y1="45" x2="70" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s4a)"/>
  <line x1="180" y1="45" x2="180" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s4a)"/>
  <line x1="210" y1="45" x2="290" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s4a)"/>
  <rect x="20" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="70" y="91" font-size="11" fill="#fff" text-anchor="middle">零点存在定理</text>
  <rect x="130" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="180" y="91" font-size="11" fill="#fff" text-anchor="middle">二分法求近似解</text>
  <rect x="240" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="290" y="91" font-size="11" fill="#fff" text-anchor="middle">零点个数判断</text>
  <text x="180" y="130" font-size="12" fill="#dc2626" text-anchor="middle">方程根的个数</text>
  <line x1="180" y1="99" x2="180" y2="118" stroke="#64748b" stroke-width="1.5"/>
  <rect x="40" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="85" y="156" font-size="11" fill="#fff" text-anchor="middle">图像交点法</text>
  <rect x="140" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="185" y="156" font-size="11" fill="#fff" text-anchor="middle">单调性+端点</text>
  <rect x="240" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="285" y="156" font-size="11" fill="#fff" text-anchor="middle">参数范围讨论</text>
  <text x="180" y="200" font-size="12" fill="#64748b" text-anchor="middle">零点存在定理是充分不必要条件</text>
  <text x="180" y="222" font-size="12" fill="#64748b" text-anchor="middle">单调函数至多有一个零点</text>
</svg>

## 典型例题

**例 1**：判断函数 $f(x) = x^3 - x - 1$ 在区间 $(1, 2)$ 内是否有零点。

**解**：$f(1) = 1 - 1 - 1 = -1 < 0$，$f(2) = 8 - 2 - 1 = 5 > 0$，且 $f(x)$ 连续，$f(1) \cdot f(2) < 0$，故在 $(1, 2)$ 内至少有一个零点。

**例 2**：求方程 $2^x = 3 - x$ 的根的个数。

**解**：令 $f(x) = 2^x + x - 3$。$f(1) = 2 + 1 - 3 = 0$，故 $x = 1$ 是根。又 $f'(x) = 2^x \ln 2 + 1 > 0$，$f$ 单调递增，故方程有且仅有 1 个根。

## 易错点

- 把零点误认为"点"，零点其实是**实数**。
- 零点存在定理是**充分不必要**条件，$f(a)f(b) < 0$ 只能说明存在零点，不能说明唯一。
- 判断零点个数时忽略函数的**单调性**，导致多算或少算。
- 二分法求近似解时**精度**控制错误。
- 含参数问题未讨论参数对零点个数的影响。

## 背记要点

1. 零点：$f(x) = 0$ 的根，是实数。
2. 零点存在定理：$f(a)f(b) < 0$ 且连续 $\Rightarrow$ 至少一个零点。
3. 单调函数至多有一个零点。
4. 方程根的个数 $=$ 两函数图像交点个数。
5. 二分法：取中点，比较符号，逐步逼近。

## 自测题

1. 函数 $f(x) = x^2 - 4$ 的零点是____。
2. 判断 $f(x) = \ln x + x - 2$ 在 $(1, 2)$ 内是否有零点：____。
3. 方程 $x^2 = 2^x$ 有几个实数根：____。
4. 若 $f(a)f(b) < 0$，则 $f(x)$ 在 $(a, b)$ 内____零点（填"一定有/不一定有"）。
5. 函数 $f(x) = x^3$ 的零点个数是____。

## 相关知识点

零点问题常结合导数研究单调性，见 [[专题五 导数及其应用]]；与基本初等函数图像结合，见 [[专题三 基本初等函数]]；与不等式恒成立问题结合，见 [[专题十二 不等式]]。
