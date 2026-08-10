---
title: 专题十四 解析几何（直线与圆）
date: 2026-08-10
---

# 专题十四 解析几何（直线与圆）

## 概念定义

**直线方程**：点斜式 $y - y_0 = k(x - x_0)$，斜截式 $y = kx + b$，两点式，一般式 $Ax + By + C = 0$。

**斜率**：$k = \tan\theta$，两点斜率 $k = \frac{y_2 - y_1}{x_2 - x_1}$。两直线平行 $k_1 = k_2$，垂直 $k_1 k_2 = -1$。

**圆的标准方程**：$(x - a)^2 + (y - b)^2 = r^2$，圆心 $(a, b)$，半径 $r$。一般方程 $x^2 + y^2 + Dx + Ey + F = 0$。

**点到直线距离**：$d = \frac{|Ax_0 + By_0 + C|}{\sqrt{A^2 + B^2}}$。

## 知识梳理

| 图形 | 方程 | 关键要素 |
| --- | --- | --- |
| 直线 | $y=kx+b$ | 斜率、截距 |
| 圆 | $(x-a)^2+(y-b)^2=r^2$ | 圆心、半径 |
| 圆一般式 | $x^2+y^2+Dx+Ey+F=0$ | 圆心 $(-\frac D2,-\frac E2)$ |
| 距离 | $d=\frac{|Ax_0+By_0+C|}{\sqrt{A^2+B^2}}$ | 点到直线 |

## 结构示意

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="s14a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker></defs>
  <rect x="110" y="15" width="140" height="30" rx="6" fill="#2563eb"/>
  <text x="180" y="35" font-size="12" fill="#fff" text-anchor="middle">直线与圆</text>
  <line x1="150" y1="45" x2="60" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s14a)"/>
  <line x1="180" y1="45" x2="180" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s14a)"/>
  <line x1="210" y1="45" x2="300" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s14a)"/>
  <rect x="10" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="60" y="91" font-size="11" fill="#fff" text-anchor="middle">直线方程</text>
  <rect x="130" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="180" y="91" font-size="11" fill="#fff" text-anchor="middle">圆方程</text>
  <rect x="250" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="300" y="91" font-size="11" fill="#fff" text-anchor="middle">位置关系</text>
  <text x="180" y="130" font-size="12" fill="#dc2626" text-anchor="middle">核心</text>
  <line x1="180" y1="99" x2="180" y2="118" stroke="#64748b" stroke-width="1.5"/>
  <rect x="40" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="85" y="156" font-size="11" fill="#fff" text-anchor="middle">平行/垂直</text>
  <rect x="140" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="185" y="156" font-size="11" fill="#fff" text-anchor="middle">相切/相交</text>
  <rect x="240" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="285" y="156" font-size="11" fill="#fff" text-anchor="middle">距离公式</text>
  <text x="180" y="200" font-size="12" fill="#64748b" text-anchor="middle">直线与圆相切：d=r</text>
  <text x="180" y="222" font-size="12" fill="#64748b" text-anchor="middle">相交：d&lt;r</text>
</svg>

## 典型例题

**例 1**：求过点 $(1, 2)$ 且斜率为 3 的直线方程。

**解**：点斜式 $y - 2 = 3(x - 1)$，即 $y = 3x - 1$。

**例 2**：求圆心为 $(1, 2)$、半径为 3 的圆的标准方程。

**解**：$(x - 1)^2 + (y - 2)^2 = 9$。

## 易错点

- 直线斜率**不存在**（垂直于 $x$ 轴）时不能用点斜式。
- 两直线垂直条件 $k_1 k_2 = -1$ 需**斜率都存在**。
- 圆的一般方程需满足 $D^2 + E^2 - 4F > 0$。
- 直线与圆相切时**漏掉切线斜率不存在**的情形。
- 点到直线距离公式中**绝对值**处理错误。

## 背记要点

1. 点斜式：$y - y_0 = k(x - x_0)$。
2. 平行 $k_1 = k_2$，垂直 $k_1 k_2 = -1$。
3. 圆标准方程：$(x-a)^2 + (y-b)^2 = r^2$。
4. 距离：$d = \frac{|Ax_0 + By_0 + C|}{\sqrt{A^2 + B^2}}$。
5. 直线与圆相切 $d = r$，相交 $d < r$，相离 $d > r$。

## 自测题

1. 过点 $(0, 0)$ 斜率为 2 的直线方程是____。
2. 圆心 $(0, 0)$、半径 1 的圆方程是____。
3. 点 $(1, 1)$ 到直线 $x + y = 0$ 的距离是____。
4. 直线 $y = 2x$ 与 $y = 2x + 1$ 是否平行：____。
5. 圆 $x^2 + y^2 = 4$ 的半径是____。

## 相关知识点

直线与圆是圆锥曲线的基础，见 [[专题十五 解析几何（圆锥曲线综合）]]；与平面向量结合求垂直见 [[专题九 平面向量]]；与不等式线性规划结合见 [[专题十二 不等式]]。
