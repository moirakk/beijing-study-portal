---
title: 专题十五 解析几何（圆锥曲线综合）
date: 2026-08-10
---

# 专题十五 解析几何（圆锥曲线综合）

## 概念定义

**椭圆**：$\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$（$a > b > 0$），焦点 $(\pm c, 0)$，$c^2 = a^2 - b^2$，离心率 $e = \frac{c}{a}$。

**双曲线**：$\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$，焦点 $(\pm c, 0)$，$c^2 = a^2 + b^2$，渐近线 $y = \pm \frac{b}{a}x$。

**抛物线**：$y^2 = 2px$（$p > 0$），焦点 $(\frac{p}{2}, 0)$，准线 $x = -\frac{p}{2}$。

**弦长公式**：直线与圆锥曲线相交，弦长 $|AB| = \sqrt{1 + k^2}|x_1 - x_2|$。

## 知识梳理

| 曲线 | 标准方程 | 焦点 | 离心率 |
| --- | --- | --- | --- |
| 椭圆 | $\frac{x^2}{a^2}+\frac{y^2}{b^2}=1$ | $(\pm c,0)$ | $e=\frac ca<1$ |
| 双曲线 | $\frac{x^2}{a^2}-\frac{y^2}{b^2}=1$ | $(\pm c,0)$ | $e=\frac ca>1$ |
| 抛物线 | $y^2=2px$ | $(\frac p2,0)$ | $e=1$ |

## 结构示意

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="s15a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker></defs>
  <rect x="110" y="15" width="140" height="30" rx="6" fill="#2563eb"/>
  <text x="180" y="35" font-size="12" fill="#fff" text-anchor="middle">圆锥曲线</text>
  <line x1="150" y1="45" x2="60" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s15a)"/>
  <line x1="180" y1="45" x2="180" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s15a)"/>
  <line x1="210" y1="45" x2="300" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s15a)"/>
  <rect x="10" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="60" y="91" font-size="11" fill="#fff" text-anchor="middle">椭圆</text>
  <rect x="130" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="180" y="91" font-size="11" fill="#fff" text-anchor="middle">双曲线</text>
  <rect x="250" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="300" y="91" font-size="11" fill="#fff" text-anchor="middle">抛物线</text>
  <text x="180" y="130" font-size="12" fill="#dc2626" text-anchor="middle">综合应用</text>
  <line x1="180" y1="99" x2="180" y2="118" stroke="#64748b" stroke-width="1.5"/>
  <rect x="40" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="85" y="156" font-size="11" fill="#fff" text-anchor="middle">弦长/中点</text>
  <rect x="140" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="185" y="156" font-size="11" fill="#fff" text-anchor="middle">离心率</text>
  <rect x="240" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="285" y="156" font-size="11" fill="#fff" text-anchor="middle">定点定值</text>
  <text x="180" y="200" font-size="12" fill="#64748b" text-anchor="middle">联立方程用韦达定理</text>
  <text x="180" y="222" font-size="12" fill="#64748b" text-anchor="middle">判别式 Δ&gt;0 保证相交</text>
</svg>

## 典型例题

**例 1**：椭圆 $\frac{x^2}{25} + \frac{y^2}{9} = 1$，求焦点坐标和离心率。

**解**：$a^2 = 25$，$b^2 = 9$，$c^2 = a^2 - b^2 = 16$，$c = 4$。焦点 $(\pm 4, 0)$，离心率 $e = \frac{c}{a} = \frac{4}{5}$。

**例 2**：抛物线 $y^2 = 8x$，求焦点坐标和准线方程。

**解**：$2p = 8$，$p = 4$。焦点 $(\frac{p}{2}, 0) = (2, 0)$，准线 $x = -\frac{p}{2} = -2$。

## 易错点

- 椭圆中 $a^2 = b^2 + c^2$，双曲线中 $c^2 = a^2 + b^2$，**关系混淆**。
- 双曲线渐近线方程**符号**错误。
- 抛物线焦点与准线**位置**（正负）判断错误。
- 联立直线与圆锥曲线时**判别式**未讨论导致无交点。
- 弦长公式中**斜率不存在**的情形漏掉。

## 背记要点

1. 椭圆：$c^2 = a^2 - b^2$，$e = \frac{c}{a} < 1$。
2. 双曲线：$c^2 = a^2 + b^2$，$e = \frac{c}{a} > 1$，渐近线 $y = \pm \frac{b}{a}x$。
3. 抛物线 $y^2 = 2px$：焦点 $(\frac{p}{2}, 0)$，准线 $x = -\frac{p}{2}$。
4. 弦长：$|AB| = \sqrt{1 + k^2}|x_1 - x_2|$。
5. 联立方程用韦达定理，注意判别式。

## 自测题

1. 椭圆 $\frac{x^2}{16} + \frac{y^2}{9} = 1$ 的离心率是____。
2. 双曲线 $\frac{x^2}{4} - \frac{y^2}{9} = 1$ 的渐近线是____。
3. 抛物线 $y^2 = 4x$ 的焦点是____。
4. 椭圆 $\frac{x^2}{9} + \frac{y^2}{4} = 1$ 的焦点坐标是____。
5. 双曲线 $\frac{x^2}{9} - \frac{y^2}{16} = 1$ 的离心率是____。

## 相关知识点

圆锥曲线以直线与圆为基础，见 [[专题十四 解析几何（直线与圆）]]；与平面向量结合求垂直见 [[专题九 平面向量]]；与导数求切线结合见 [[专题五 导数及其应用]]。
