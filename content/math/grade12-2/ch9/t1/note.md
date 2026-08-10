---
title: 专题九 平面向量
date: 2026-08-10
---

# 专题九 平面向量

## 概念定义

**向量**：既有大小又有方向的量叫做向量，用 $\vec{a}$ 表示。**零向量** $\vec{0}$ 长度为 0，**单位向量**长度为 1。

**向量运算**：加法（平行四边形法则、三角形法则）、减法、数乘 $\lambda \vec{a}$。

**坐标表示**：设 $\vec{a} = (x_1, y_1)$，$\vec{b} = (x_2, y_2)$，则 $\vec{a} + \vec{b} = (x_1 + x_2, y_1 + y_2)$，$\vec{a} \cdot \vec{b} = x_1 x_2 + y_1 y_2$。

**数量积**：$\vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}|\cos\theta$，其中 $\theta$ 为两向量夹角。

**平行与垂直**：$\vec{a} \parallel \vec{b} \iff x_1 y_2 - x_2 y_1 = 0$；$\vec{a} \perp \vec{b} \iff x_1 x_2 + y_1 y_2 = 0$。

## 知识梳理

| 运算 | 坐标公式 | 几何意义 |
| --- | --- | --- |
| 加法 | $(x_1+x_2, y_1+y_2)$ | 平行四边形法则 |
| 数乘 | $(\lambda x_1, \lambda y_1)$ | 伸缩方向 |
| 数量积 | $x_1x_2+y_1y_2$ | 投影 |
| 模长 | $\sqrt{x_1^2+y_1^2}$ | 长度 |
| 夹角 | $\cos\theta=\frac{\vec a\cdot\vec b}{|\vec a||\vec b|}$ | 方向关系 |

## 结构示意

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="s9a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker></defs>
  <rect x="120" y="15" width="120" height="30" rx="6" fill="#2563eb"/>
  <text x="180" y="35" font-size="12" fill="#fff" text-anchor="middle">平面向量</text>
  <line x1="150" y1="45" x2="70" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s9a)"/>
  <line x1="180" y1="45" x2="180" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s9a)"/>
  <line x1="210" y1="45" x2="290" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s9a)"/>
  <rect x="20" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="70" y="91" font-size="11" fill="#fff" text-anchor="middle">线性运算</text>
  <rect x="130" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="180" y="91" font-size="11" fill="#fff" text-anchor="middle">数量积</text>
  <rect x="240" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="290" y="91" font-size="11" fill="#fff" text-anchor="middle">坐标表示</text>
  <text x="180" y="130" font-size="12" fill="#dc2626" text-anchor="middle">应用</text>
  <line x1="180" y1="99" x2="180" y2="118" stroke="#64748b" stroke-width="1.5"/>
  <rect x="40" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="85" y="156" font-size="11" fill="#fff" text-anchor="middle">平行/垂直</text>
  <rect x="140" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="185" y="156" font-size="11" fill="#fff" text-anchor="middle">夹角/模长</text>
  <rect x="240" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="285" y="156" font-size="11" fill="#fff" text-anchor="middle">几何应用</text>
  <text x="180" y="200" font-size="12" fill="#64748b" text-anchor="middle">平行：x₁y₂-x₂y₁=0</text>
  <text x="180" y="222" font-size="12" fill="#64748b" text-anchor="middle">垂直：x₁x₂+y₁y₂=0</text>
</svg>

## 典型例题

**例 1**：已知 $\vec{a} = (1, 2)$，$\vec{b} = (3, 4)$，求 $\vec{a} \cdot \vec{b}$ 和 $|\vec{a}|$。

**解**：$\vec{a} \cdot \vec{b} = 1 \times 3 + 2 \times 4 = 11$；$|\vec{a}| = \sqrt{1^2 + 2^2} = \sqrt{5}$。

**例 2**：已知 $\vec{a} = (1, 2)$，$\vec{b} = (x, 4)$，若 $\vec{a} \perp \vec{b}$，求 $x$。

**解**：$\vec{a} \perp \vec{b} \iff \vec{a} \cdot \vec{b} = 0$，即 $1 \times x + 2 \times 4 = 0$，得 $x = -8$。

## 易错点

- 混淆**平行**与**垂直**的坐标条件。
- 数量积是**数**不是向量，结果可能为负。
- 求夹角时**忘记取绝对值**或忽略夹角范围 $[0, \pi]$。
- 向量共线定理中 $\vec{a} = \lambda \vec{b}$ 需注意 $\vec{b} \neq \vec{0}$。
- 用坐标运算时**坐标对应错误**。

## 背记要点

1. $\vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}|\cos\theta = x_1x_2 + y_1y_2$。
2. 平行：$x_1y_2 - x_2y_1 = 0$；垂直：$x_1x_2 + y_1y_2 = 0$。
3. $|\vec{a}| = \sqrt{x_1^2 + y_1^2}$。
4. $\cos\theta = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}||\vec{b}|}$。
5. $\vec{a} \cdot \vec{a} = |\vec{a}|^2$。

## 自测题

1. 已知 $\vec{a} = (2, 3)$，$\vec{b} = (1, -1)$，则 $\vec{a} \cdot \vec{b} =$____。
2. 已知 $\vec{a} = (1, 2)$，则 $|\vec{a}| =$____。
3. 若 $\vec{a} = (1, 2)$，$\vec{b} = (2, y)$ 平行，则 $y =$____。
4. 若 $\vec{a} = (1, 0)$，$\vec{b} = (0, 1)$，则 $\vec{a}$ 与 $\vec{b}$ 的夹角是____。
5. 已知 $\vec{a} = (1, 1)$，$\vec{b} = (2, 2)$，则 $\vec{a}$ 与 $\vec{b}$ 是否平行：____。

## 相关知识点

平面向量与三角函数结合求角，见 [[专题七 三角函数与三角恒等变换]]；与解三角形结合见 [[专题八 解三角形]]；空间向量见 [[专题十三 立体几何]]。
