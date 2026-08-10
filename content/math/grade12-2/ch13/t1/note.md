---
title: 专题十三 立体几何
date: 2026-08-10
---

# 专题十三 立体几何

## 概念定义

**空间几何体**：棱柱、棱锥、棱台、圆柱、圆锥、圆台、球。**表面积**与**体积**公式是重点。

**线面关系**：线线平行、线面平行、面面平行；线线垂直、线面垂直、面面垂直。

**判定定理**：线面平行（线线平行 $\Rightarrow$ 线面平行）；线面垂直（线线垂直 $\Rightarrow$ 线面垂直）；面面垂直（线面垂直 $\Rightarrow$ 面面垂直）。

**空间向量**：用坐标法求线面角、二面角、点到平面距离。

## 知识梳理

| 几何体 | 体积 | 表面积 |
| --- | --- | --- |
| 柱体 | $V=Sh$ | 侧面积+底面积 |
| 锥体 | $V=\frac13 Sh$ | 侧面积+底面积 |
| 球 | $V=\frac43\pi R^3$ | $S=4\pi R^2$ |
| 台体 | $V=\frac13(S_1+S_2+\sqrt{S_1S_2})h$ | 各面之和 |

## 结构示意

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="s13a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker></defs>
  <rect x="110" y="15" width="140" height="30" rx="6" fill="#2563eb"/>
  <text x="180" y="35" font-size="12" fill="#fff" text-anchor="middle">立体几何</text>
  <line x1="150" y1="45" x2="60" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s13a)"/>
  <line x1="180" y1="45" x2="180" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s13a)"/>
  <line x1="210" y1="45" x2="300" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s13a)"/>
  <rect x="10" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="60" y="91" font-size="11" fill="#fff" text-anchor="middle">几何体体积面积</text>
  <rect x="130" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="180" y="91" font-size="11" fill="#fff" text-anchor="middle">线面关系</text>
  <rect x="250" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="300" y="91" font-size="11" fill="#fff" text-anchor="middle">空间向量</text>
  <text x="180" y="130" font-size="12" fill="#dc2626" text-anchor="middle">核心</text>
  <line x1="180" y1="99" x2="180" y2="118" stroke="#64748b" stroke-width="1.5"/>
  <rect x="40" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="85" y="156" font-size="11" fill="#fff" text-anchor="middle">平行判定</text>
  <rect x="140" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="185" y="156" font-size="11" fill="#fff" text-anchor="middle">垂直判定</text>
  <rect x="240" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="285" y="156" font-size="11" fill="#fff" text-anchor="middle">求角/距离</text>
  <text x="180" y="200" font-size="12" fill="#64748b" text-anchor="middle">线面垂直是核心枢纽</text>
  <text x="180" y="222" font-size="12" fill="#64748b" text-anchor="middle">向量法求二面角</text>
</svg>

## 典型例题

**例 1**：求半径为 3 的球的体积和表面积。

**解**：$V = \frac{4}{3}\pi R^3 = \frac{4}{3}\pi \times 27 = 36\pi$；$S = 4\pi R^2 = 4\pi \times 9 = 36\pi$。

**例 2**：三棱锥底面为边长为 2 的正三角形，高为 3，求体积。

**解**：底面积 $S = \frac{\sqrt{3}}{4} \times 2^2 = \sqrt{3}$，体积 $V = \frac{1}{3}Sh = \frac{1}{3} \times \sqrt{3} \times 3 = \sqrt{3}$。

## 易错点

- 锥体体积**漏乘 $\frac{1}{3}$**。
- 线面平行判定中**线在面内**与**线在面外**混淆。
- 面面垂直判定时**线面垂直**条件不满足。
- 求二面角时**法向量方向**选择错误导致角互补。
- 三视图还原几何体时**尺寸对应**错误。

## 背记要点

1. 柱体 $V = Sh$，锥体 $V = \frac{1}{3}Sh$。
2. 球 $V = \frac{4}{3}\pi R^3$，$S = 4\pi R^2$。
3. 线面平行：线线平行 $\Rightarrow$ 线面平行。
4. 线面垂直：线线垂直 $\Rightarrow$ 线面垂直。
5. 面面垂直：线面垂直 $\Rightarrow$ 面面垂直。

## 自测题

1. 半径为 2 的球体积是____。
2. 底面边长为 2、高为 3 的正四棱锥体积是____。
3. 判断：若 $a \parallel b$，$b \subset \alpha$，则 $a \parallel \alpha$ 是否一定成立：____。
4. 圆柱底面半径 1、高 2，体积是____。
5. 正方体棱长为 2，其体积是____。

## 相关知识点

立体几何与平面向量结合用空间向量，见 [[专题九 平面向量]]；与解析几何结合见 [[专题十四 解析几何（直线与圆）]]；与三角函数求角结合见 [[专题七 三角函数与三角恒等变换]]。
