---
title: 专题二 函数的概念与性质
date: 2026-08-10
---

# 专题二 函数的概念与性质

## 概念定义

**函数**：设 $A$、$B$ 是非空数集，如果按照某种确定的对应关系 $f$，使对于集合 $A$ 中的任意一个数 $x$，在集合 $B$ 中都有**唯一确定**的数 $f(x)$ 和它对应，那么就称 $f: A \to B$ 为从集合 $A$ 到集合 $B$ 的一个函数，记作 $y = f(x)$，$x \in A$。$A$ 叫**定义域**，$\{f(x) \mid x \in A\}$ 叫**值域**。

**单调性**：设 $x_1, x_2 \in D$ 且 $x_1 < x_2$，若 $f(x_1) < f(x_2)$ 则 $f$ 在 $D$ 上单调递增；若 $f(x_1) > f(x_2)$ 则单调递减。

**奇偶性**：定义域关于原点对称时，若 $f(-x) = f(x)$ 为偶函数，图像关于 $y$ 轴对称；若 $f(-x) = -f(x)$ 为奇函数，图像关于原点对称。

**周期性**：存在非零常数 $T$ 使 $f(x + T) = f(x)$ 恒成立，则 $T$ 为周期。

## 知识梳理

| 性质 | 定义 | 图像特征 |
| --- | --- | --- |
| 单调递增 | $x_1<x_2 \Rightarrow f(x_1)<f(x_2)$ | 图像上升 |
| 单调递减 | $x_1<x_2 \Rightarrow f(x_1)>f(x_2)$ | 图像下降 |
| 偶函数 | $f(-x)=f(x)$ | 关于 $y$ 轴对称 |
| 奇函数 | $f(-x)=-f(x)$ | 关于原点对称 |
| 周期函数 | $f(x+T)=f(x)$ | 图像重复 |

## 结构示意

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="s2a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker></defs>
  <rect x="120" y="15" width="120" height="30" rx="6" fill="#2563eb"/>
  <text x="180" y="35" font-size="12" fill="#fff" text-anchor="middle">函数 y=f(x)</text>
  <line x1="150" y1="45" x2="70" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s2a)"/>
  <line x1="180" y1="45" x2="180" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s2a)"/>
  <line x1="210" y1="45" x2="290" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s2a)"/>
  <rect x="20" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="70" y="91" font-size="11" fill="#fff" text-anchor="middle">定义域/值域</text>
  <rect x="130" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="180" y="91" font-size="11" fill="#fff" text-anchor="middle">单调性</text>
  <rect x="240" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="290" y="91" font-size="11" fill="#fff" text-anchor="middle">奇偶性</text>
  <text x="180" y="130" font-size="12" fill="#dc2626" text-anchor="middle">周期性 / 对称性</text>
  <line x1="180" y1="99" x2="180" y2="118" stroke="#64748b" stroke-width="1.5"/>
  <rect x="40" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="85" y="156" font-size="11" fill="#fff" text-anchor="middle">复合函数</text>
  <rect x="140" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="185" y="156" font-size="11" fill="#fff" text-anchor="middle">抽象函数</text>
  <rect x="240" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="285" y="156" font-size="11" fill="#fff" text-anchor="middle">分段函数</text>
  <text x="180" y="200" font-size="12" fill="#64748b" text-anchor="middle">判断奇偶性先看定义域是否对称</text>
  <text x="180" y="222" font-size="12" fill="#64748b" text-anchor="middle">单调性用定义或导数判断</text>
</svg>

## 典型例题

**例 1**：求函数 $f(x) = \sqrt{x - 1} + \frac{1}{x - 2}$ 的定义域。

**解**：需 $x - 1 \geq 0$ 且 $x - 2 \neq 0$，即 $x \geq 1$ 且 $x \neq 2$，定义域为 $[1, 2) \cup (2, +\infty)$。

**例 2**：判断 $f(x) = x^3 + x$ 的奇偶性。

**解**：定义域为 $\mathbb{R}$，关于原点对称。$f(-x) = (-x)^3 + (-x) = -x^3 - x = -(x^3 + x) = -f(x)$，故 $f(x)$ 为**奇函数**。

## 易错点

- 求定义域时忽略**分母不为零**、**偶次根号下非负**、**对数真数大于零**等限制。
- 判断奇偶性前**必须先看定义域是否关于原点对称**。
- 复合函数单调性"同增异减"判断错误。
- 分段函数求值时**选错区间**。
- 抽象函数问题不会利用赋值法构造关系。

## 背记要点

1. 定义域优先：分式、根式、对数、指数底数等限制条件。
2. 奇函数在对称区间上单调性相同，偶函数相反。
3. 若 $f(x)$ 为奇函数且定义域含 $0$，则 $f(0) = 0$。
4. 复合函数单调性：同增异减。
5. 若 $f(x + a) = f(x)$，则周期 $T = a$。

## 自测题

1. 函数 $f(x) = \frac{1}{\sqrt{x - 1}}$ 的定义域是____。
2. 判断 $f(x) = x^2 + 1$ 的奇偶性：____。
3. 若 $f(x)$ 是奇函数且 $f(2) = 5$，则 $f(-2) =$____。
4. 函数 $y = x^2$ 在 $(-\infty, 0)$ 上单调____。
5. 若 $f(x + 2) = f(x)$，则 $f(x)$ 的一个周期是____。

## 相关知识点

函数性质是导数研究的基础，见 [[专题五 导数及其应用]]；基本初等函数见 [[专题三 基本初等函数]]；零点问题见 [[专题四 函数的零点与方程]]。
