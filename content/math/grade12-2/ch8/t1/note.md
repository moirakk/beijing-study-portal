---
title: 专题八 解三角形
date: 2026-08-10
---

# 专题八 解三角形

## 概念定义

**正弦定理**：在 $\triangle ABC$ 中，$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R$（$R$ 为外接圆半径）。

**余弦定理**：$a^2 = b^2 + c^2 - 2bc\cos A$，$b^2 = a^2 + c^2 - 2ac\cos B$，$c^2 = a^2 + b^2 - 2ab\cos C$。

**面积公式**：$S = \frac{1}{2}ab\sin C = \frac{1}{2}bc\sin A = \frac{1}{2}ac\sin B$。

**三角形内角和**：$A + B + C = \pi$，$\sin A = \sin(B + C)$，$\cos A = -\cos(B + C)$。

## 知识梳理

| 定理 | 公式 | 适用情形 |
| --- | --- | --- |
| 正弦定理 | $\frac{a}{\sin A}=2R$ | 已知两角一边 |
| 余弦定理 | $a^2=b^2+c^2-2bc\cos A$ | 已知两边夹角 |
| 面积公式 | $S=\frac12 ab\sin C$ | 已知两边夹角 |
| 内角和 | $A+B+C=\pi$ | 求角 |

## 结构示意

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="s8a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker></defs>
  <rect x="110" y="15" width="140" height="30" rx="6" fill="#2563eb"/>
  <text x="180" y="35" font-size="12" fill="#fff" text-anchor="middle">解三角形</text>
  <line x1="150" y1="45" x2="60" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s8a)"/>
  <line x1="180" y1="45" x2="180" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s8a)"/>
  <line x1="210" y1="45" x2="300" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s8a)"/>
  <rect x="10" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="60" y="91" font-size="11" fill="#fff" text-anchor="middle">正弦定理</text>
  <rect x="130" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="180" y="91" font-size="11" fill="#fff" text-anchor="middle">余弦定理</text>
  <rect x="250" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="300" y="91" font-size="11" fill="#fff" text-anchor="middle">面积公式</text>
  <text x="180" y="130" font-size="12" fill="#dc2626" text-anchor="middle">应用</text>
  <line x1="180" y1="99" x2="180" y2="118" stroke="#64748b" stroke-width="1.5"/>
  <rect x="40" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="85" y="156" font-size="11" fill="#fff" text-anchor="middle">解三角形</text>
  <rect x="140" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="185" y="156" font-size="11" fill="#fff" text-anchor="middle">判断形状</text>
  <rect x="240" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="285" y="156" font-size="11" fill="#fff" text-anchor="middle">实际应用</text>
  <text x="180" y="200" font-size="12" fill="#64748b" text-anchor="middle">已知两边一角注意解的个数</text>
  <text x="180" y="222" font-size="12" fill="#64748b" text-anchor="middle">正弦定理可求外接圆半径</text>
</svg>

## 典型例题

**例 1**：在 $\triangle ABC$ 中，$A = 30^\circ$，$B = 45^\circ$，$a = 2$，求 $b$。

**解**：由正弦定理 $\frac{a}{\sin A} = \frac{b}{\sin B}$，得 $b = \frac{a \sin B}{\sin A} = \frac{2 \times \frac{\sqrt{2}}{2}}{\frac{1}{2}} = 2\sqrt{2}$。

**例 2**：在 $\triangle ABC$ 中，$a = 3$，$b = 4$，$C = 60^\circ$，求 $c$。

**解**：由余弦定理 $c^2 = a^2 + b^2 - 2ab\cos C = 9 + 16 - 2 \times 3 \times 4 \times \frac{1}{2} = 13$，故 $c = \sqrt{13}$。

## 易错点

- 已知两边及一边对角时，**解的个数**可能为 0、1 或 2 个，需讨论。
- 用正弦定理求角时，$\sin A$ 对应两个角（$A$ 与 $\pi - A$），需结合三角形判断。
- 余弦定理中**符号**易错，注意 $-2bc\cos A$ 的负号。
- 面积公式中**夹角**选错。
- 判断三角形形状时忽略**内角和为 $\pi$** 的限制。

## 背记要点

1. 正弦定理：$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R$。
2. 余弦定理：$a^2 = b^2 + c^2 - 2bc\cos A$。
3. 面积：$S = \frac{1}{2}ab\sin C$。
4. $A + B + C = \pi$，$\sin A = \sin(B + C)$。
5. 已知两边一角，注意解的个数讨论。

## 自测题

1. 在 $\triangle ABC$ 中，$A = 60^\circ$，$B = 60^\circ$，$a = 3$，则 $b =$____。
2. 在 $\triangle ABC$ 中，$a = 5$，$b = 7$，$C = 90^\circ$，则 $c =$____。
3. 在 $\triangle ABC$ 中，$a = 2$，$b = 3$，$C = 30^\circ$，则面积 $S =$____。
4. 若 $\sin A = \frac{1}{2}$ 且 $A$ 为锐角，则 $A =$____。
5. 判断：$\triangle ABC$ 中 $\sin A = \sin B$ 是否一定有 $A = B$：____。

## 相关知识点

解三角形以三角函数为基础，见 [[专题七 三角函数与三角恒等变换]]；与平面向量结合求角见 [[专题九 平面向量]]；实际测量问题常结合正弦余弦定理。
