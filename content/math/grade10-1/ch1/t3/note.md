---
title: 1.3 集合的基本运算
date: 2026-08-07
---

# 1.3 集合的基本运算

## 概念定义

**交集**：$A\cap B=\{x\mid x\in A \text{ 且 } x\in B\}$。

**并集**：$A\cup B=\{x\mid x\in A \text{ 或 } x\in B\}$。

**补集**：设全集为 $U$，$\complement_U A=\{x\mid x\in U \text{ 且 } x\notin A\}$。

## 知识梳理

交集与并集的 Venn 图（阴影为 $A\cap B$）：

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg">
  <rect x="15" y="25" width="330" height="185" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <text x="30" y="47" font-size="14" fill="#64748b">U</text>
  <defs>
    <clipPath id="clipA"><circle cx="145" cy="118" r="70"/></clipPath>
  </defs>
  <circle cx="215" cy="118" r="70" fill="#2563eb" fill-opacity="0.10" clip-path="url(#clipA)"/>
  <circle cx="145" cy="118" r="70" fill="none" stroke="#dc2626" stroke-width="2"/>
  <circle cx="215" cy="118" r="70" fill="none" stroke="#2563eb" stroke-width="2"/>
  <text x="100" y="70" font-size="16" fill="#dc2626">A</text>
  <text x="258" y="70" font-size="16" fill="#2563eb">B</text>
  <text x="180" y="124" font-size="13" fill="#64748b" text-anchor="middle">A∩B</text>
  <text x="180" y="232" font-size="13" fill="#64748b" text-anchor="middle">中间重叠部分为交集，两圆全部为并集</text>
</svg>

| 运算 | 关键词 | 常用性质 |
| --- | --- | --- |
| $A\cap B$ | 公共元素 | $A\cap B=A\Leftrightarrow A\subseteq B$ |
| $A\cup B$ | 全部元素（去重） | $A\cup B=A\Leftrightarrow B\subseteq A$ |
| $\complement_U A$ | 剩下的元素 | $A\cup\complement_U A=U$，$A\cap\complement_U A=\varnothing$ |

**德摩根律**：$\complement_U(A\cap B)=(\complement_U A)\cup(\complement_U B)$；$\complement_U(A\cup B)=(\complement_U A)\cap(\complement_U B)$。

## 典型例题

**例 1**：设 $U=\mathbb{R}$，$A=\{x\mid 1\le x<4\}$，$B=\{x\mid 2<x\le 5\}$，求 $A\cap B$、$A\cup B$、$\complement_U A$。

**解**：画数轴。$A\cap B=\{x\mid 2<x<4\}$；$A\cup B=\{x\mid 1\le x\le 5\}$；
$\complement_U A=\{x\mid x<1 \text{ 或 } x\ge 4\}$。

**例 2**：已知 $A=\{x\mid x^2-3x+2=0\}=\{1,2\}$，$B=\{x\mid ax-2=0\}$，且 $A\cap B=B$，求 $a$ 的值组成的集合。

**解**：$A\cap B=B\Leftrightarrow B\subseteq A$。
① $B=\varnothing$：$a=0$，成立。② $B=\{1\}$：$a=2$。③ $B=\{2\}$：$a=1$。
故 $a$ 的取值集合为 $\{0,1,2\}$。

## 易错点

- $A\cap B=B\Leftrightarrow B\subseteq A$，$A\cup B=B\Leftrightarrow A\subseteq B$，转化后**别忘讨论空集**。
- 求补集时端点开闭要"翻转"：$A$ 取到的端点，$\complement_U A$ 不取，反之亦然。
- 数轴上多个区间运算，端点值建议单独代入检验。
- "或"不是"二选一"：$x\in A\cup B$ 允许 $x$ 同时属于两个集合。

## 背记要点

1. 交集取公共，并集取全部，补集取其余。
2. 两个降级转化：$A\cap B=B\Rightarrow B\subseteq A$；$A\cup B=B\Rightarrow A\subseteq B$。
3. 德摩根律："交的补 = 补的并；并的补 = 补的交"。
4. 解含参运算题的顺序：化简已知集合 → 转化为包含关系 → 讨论空集 → 数轴定参。

## 自测题

1. 设 $A=\{1,2,3\}$，$B=\{2,3,4\}$，则 $A\cup B=$____，$A\cap B=$____。
2. 设 $U=\{1,2,3,4,5\}$，$A=\{1,3,5\}$，则 $\complement_U A=$____。
3. 若 $A\cap B=A$，则 $A$ 与 $B$ 的关系是____。
4. 设 $A=\{x\mid x>1\}$，$B=\{x\mid x<m\}$，若 $A\cap B=\varnothing$，则 $m$ 的范围是____。

## 相关知识点

包含关系与空集讨论见 [[1.2 集合间的基本关系]]；集合运算常与解不等式结合，见 [[2.3 二次函数与一元二次方程、不等式]]。
