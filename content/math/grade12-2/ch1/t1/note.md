---
title: 专题一 集合与常用逻辑用语
date: 2026-08-10
---

# 专题一 集合与常用逻辑用语

## 概念定义

**集合**：把一些能够确定的、不同的对象看成一个整体，这个整体就是集合，其中的每个对象叫做**元素**。集合具有**确定性、互异性、无序性**三要素。

**集合间关系**：若集合 $A$ 的任意元素都属于 $B$，则 $A \subseteq B$（$A$ 是 $B$ 的子集）；若 $A \subseteq B$ 且 $B \subseteq A$，则 $A = B$；若 $A \subseteq B$ 且 $A \neq B$，则 $A \subsetneqq B$（真子集）。

**集合运算**：交集 $A \cap B = \{x \mid x \in A \text{ 且 } x \in B\}$；并集 $A \cup B = \{x \mid x \in A \text{ 或 } x \in B\}$；补集 $\complement_U A = \{x \mid x \in U \text{ 且 } x \notin A\}$。

**常用逻辑用语**：命题、充分条件与必要条件、全称量词与存在量词、含有一个量词的命题的否定。

## 知识梳理

| 概念 | 定义/记号 | 关键点 |
| --- | --- | --- |
| 子集 | $A \subseteq B$ | 含相等情形 |
| 真子集 | $A \subsetneqq B$ | 不含相等情形 |
| 交集 | $A \cap B$ | 公共元素 |
| 并集 | $A \cup B$ | 全部元素 |
| 补集 | $\complement_U A$ | 相对全集 $U$ |
| 充分条件 | $p \Rightarrow q$ | $p$ 是 $q$ 的充分条件 |
| 必要条件 | $q \Rightarrow p$ | $p$ 是 $q$ 的必要条件 |

## 结构示意

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="s1a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker></defs>
  <rect x="120" y="15" width="120" height="30" rx="6" fill="#2563eb"/>
  <text x="180" y="35" font-size="12" fill="#fff" text-anchor="middle">集合</text>
  <line x1="150" y1="45" x2="80" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s1a)"/>
  <line x1="180" y1="45" x2="180" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s1a)"/>
  <line x1="210" y1="45" x2="280" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s1a)"/>
  <rect x="30" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="80" y="91" font-size="11" fill="#fff" text-anchor="middle">关系：子集/相等</text>
  <rect x="130" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="180" y="91" font-size="11" fill="#fff" text-anchor="middle">运算：交并补</text>
  <rect x="230" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="280" y="91" font-size="11" fill="#fff" text-anchor="middle">表示：列举/描述</text>
  <text x="180" y="130" font-size="12" fill="#dc2626" text-anchor="middle">常用逻辑用语</text>
  <line x1="180" y1="99" x2="180" y2="118" stroke="#64748b" stroke-width="1.5"/>
  <rect x="40" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="85" y="156" font-size="11" fill="#fff" text-anchor="middle">充分/必要条件</text>
  <rect x="140" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="185" y="156" font-size="11" fill="#fff" text-anchor="middle">全称/存在量词</text>
  <rect x="240" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="285" y="156" font-size="11" fill="#fff" text-anchor="middle">命题的否定</text>
  <text x="180" y="200" font-size="12" fill="#64748b" text-anchor="middle">互异性：集合中元素不重复</text>
  <text x="180" y="222" font-size="12" fill="#64748b" text-anchor="middle">空集是任何集合的子集</text>
</svg>

## 典型例题

**例 1**：已知集合 $A = \{x \mid x^2 - 3x + 2 = 0\}$，$B = \{1, 2\}$，求 $A \cap B$、$A \cup B$。

**解**：解方程 $x^2 - 3x + 2 = 0$ 得 $x = 1$ 或 $x = 2$，故 $A = \{1, 2\}$。所以 $A \cap B = \{1, 2\}$，$A \cup B = \{1, 2\}$。

**例 2**：设 $p: x > 2$，$q: x > 1$，判断 $p$ 是 $q$ 的什么条件。

**解**：由 $x > 2$ 可推出 $x > 1$，即 $p \Rightarrow q$；但 $x > 1$ 推不出 $x > 2$。故 $p$ 是 $q$ 的**充分不必要条件**。

## 易错点

- 忽略集合元素的**互异性**，如 $\{a, a\}$ 写法错误。
- 求子集个数时漏掉**空集**：含 $n$ 个元素的集合有 $2^n$ 个子集、$2^n - 1$ 个真子集。
- 混淆"充分"与"必要"的方向，判断时先明确谁是条件、谁是结论。
- 补集运算忘记**全集**范围，不同全集补集不同。
- 全称命题的否定是存在命题，且要**否定结论**，不能只改量词。

## 背记要点

1. 含 $n$ 个元素的集合子集个数为 $2^n$，真子集 $2^n - 1$ 个。
2. $A \cap B \subseteq A \subseteq A \cup B$。
3. $A \cap \complement_U A = \varnothing$，$A \cup \complement_U A = U$。
4. 德摩根律：$\complement_U(A \cap B) = \complement_U A \cup \complement_U B$。
5. 全称命题否定：$\neg(\forall x, p(x)) \iff \exists x, \neg p(x)$。

## 自测题

1. 集合 $\{1, 2, 3\}$ 的子集共有____个。
2. 若 $A = \{x \mid -1 < x < 3\}$，$B = \{x \mid x \geq 1\}$，则 $A \cap B =$____。
3. 命题"$\forall x \in \mathbb{R}, x^2 \geq 0$"的否定是____。
4. 判断：$x^2 = 1$ 是 $x = 1$ 的充分条件。（　）
5. 已知 $A \subseteq B$，则 $A \cap B =$____。

## 相关知识点

集合是函数定义域、值域的基础，见 [[专题二 函数的概念与性质]]；充分必要条件与不等式解集结合，见 [[专题十二 不等式]]。
