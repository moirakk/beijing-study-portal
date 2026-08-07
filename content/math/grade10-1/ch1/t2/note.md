---
title: 1.2 集合间的基本关系
date: 2026-08-07
---

# 1.2 集合间的基本关系

## 概念定义

**子集**：若集合 $A$ 的任意一个元素都是集合 $B$ 的元素，则称 $A$ 是 $B$ 的子集，记作 $A\subseteq B$。

**真子集**：若 $A\subseteq B$ 且存在 $x\in B$，$x\notin A$，则记 $A\subsetneq B$。

**集合相等**：$A\subseteq B$ 且 $B\subseteq A \Longleftrightarrow A=B$。

**空集** $\varnothing$：不含任何元素的集合，是**任何集合的子集**，是任何非空集合的真子集。

## 知识梳理

$A\subseteq B$ 的 Venn 图表示：

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="320" height="190" fill="none" stroke="#64748b" stroke-width="1.5"/>
  <text x="35" y="42" font-size="14" fill="#64748b">U</text>
  <ellipse cx="180" cy="118" rx="120" ry="75" fill="#2563eb" fill-opacity="0.08" stroke="#2563eb" stroke-width="2"/>
  <ellipse cx="150" cy="126" rx="58" ry="40" fill="#dc2626" fill-opacity="0.12" stroke="#dc2626" stroke-width="2"/>
  <text x="150" y="132" font-size="16" fill="#dc2626" text-anchor="middle">A</text>
  <text x="262" y="88" font-size="16" fill="#2563eb">B</text>
  <text x="180" y="230" font-size="13" fill="#64748b" text-anchor="middle">A ⊆ B：A 的每个元素都在 B 内</text>
</svg>

| 关系 | 符号 | 含义 |
| --- | --- | --- |
| 子集 | $A\subseteq B$ | $x\in A\Rightarrow x\in B$（允许 $A=B$） |
| 真子集 | $A\subsetneq B$ | 包含且不相等 |
| 相等 | $A=B$ | 互为子集 |

**子集个数公式**：含 $n$ 个元素的集合，子集共 $2^n$ 个，真子集 $2^n-1$ 个，非空真子集 $2^n-2$ 个。

## 典型例题

**例 1**：写出集合 $\{a,b,c\}$ 的所有子集，并指出真子集个数。

**解**：子集为 $\varnothing,\{a\},\{b\},\{c\},\{a,b\},\{a,c\},\{b,c\},\{a,b,c\}$，共 $2^3=8$ 个；真子集 $8-1=7$ 个。

**例 2**：已知 $A=\{x\mid -2\le x\le 5\}$，$B=\{x\mid m+1\le x\le 2m-1\}$，若 $B\subseteq A$，求 $m$ 的取值范围。

**解**：分两类。① $B=\varnothing$：$m+1>2m-1$，即 $m<2$，符合。
② $B\neq\varnothing$：需 $m+1\ge -2$，$2m-1\le 5$，$m+1\le 2m-1$ 同时成立，解得 $2\le m\le 3$。
综上 $m\le 3$。

## 易错点

- **含参子集问题必须讨论 $B=\varnothing$**，这是高考必考的分类讨论点，漏解率极高。
- 区分 $\in$ 与 $\subseteq$：$\{0\}\subseteq\{0,1\}$ 正确，$\{0\}\in\{0,1\}$ 错误。
- $\varnothing\subseteq\varnothing$ 成立，但 $\varnothing\subsetneq\varnothing$ 不成立。
- 区间端点能否取等号要画数轴单独验证。

## 背记要点

1. 见到 $B\subseteq A$，先想 $B$ 可能为空集。
2. 子集 $2^n$、真子集 $2^n-1$、非空子集 $2^n-1$、非空真子集 $2^n-2$。
3. 证明 $A=B$：证 $A\subseteq B$ 且 $B\subseteq A$。
4. 数轴 + Venn 图是处理集合关系的两大工具。

## 自测题

1. 集合 $\{1,2,3,4\}$ 的非空真子集有____个。
2. 满足 $\{1\}\subsetneq M\subseteq\{1,2,3\}$ 的集合 $M$ 有____个。
3. 若 $\{x\mid ax=1\}\subseteq\{1,2\}$，则 $a$ 的所有可能取值为____。
4. 已知 $A=\{x\mid x<3\}$，$B=\{x\mid x<m\}$，若 $B\subseteq A$，则 $m$ 的范围是____。

## 相关知识点

元素与集合的关系见 [[1.1 集合的概念]]；子集与推出关系的对应见 [[1.4 充分条件与必要条件]]。
