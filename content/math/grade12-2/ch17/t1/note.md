---
title: 专题十七 计数原理与二项式
date: 2026-08-10
---

# 专题十七 计数原理与二项式

## 概念定义

**分类加法计数原理**：完成一件事有 $n$ 类方案，第 $k$ 类有 $m_k$ 种方法，则共有 $N = m_1 + m_2 + \cdots + m_n$ 种方法（"或"）。

**分步乘法计数原理**：完成一件事需 $n$ 个步骤，第 $k$ 步有 $m_k$ 种方法，则共有 $N = m_1 \times m_2 \times \cdots \times m_n$ 种方法（"且"）。

**排列**：$A_n^m = \frac{n!}{(n-m)!} = n(n-1)\cdots(n-m+1)$。

**组合**：$C_n^m = \frac{A_n^m}{m!} = \frac{n!}{m!(n-m)!}$。

**二项式定理**：$(a + b)^n = \sum_{k=0}^{n} C_n^k a^{n-k} b^k$，通项 $T_{k+1} = C_n^k a^{n-k} b^k$。

## 知识梳理

| 概念 | 公式 | 关键点 |
| --- | --- | --- |
| 分类加法 | $N=m_1+\cdots+m_n$ | 或，独立 |
| 分步乘法 | $N=m_1\times\cdots\times m_n$ | 且，配合 |
| 排列 | $A_n^m=\frac{n!}{(n-m)!}$ | 有序 |
| 组合 | $C_n^m=\frac{n!}{m!(n-m)!}$ | 无序 |
| 二项式 | $T_{k+1}=C_n^k a^{n-k}b^k$ | 通项 |

## 结构示意

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="s17a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker></defs>
  <rect x="110" y="15" width="140" height="30" rx="6" fill="#2563eb"/>
  <text x="180" y="35" font-size="12" fill="#fff" text-anchor="middle">计数原理</text>
  <line x1="150" y1="45" x2="60" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s17a)"/>
  <line x1="180" y1="45" x2="180" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s17a)"/>
  <line x1="210" y1="45" x2="300" y2="75" stroke="#64748b" stroke-width="1.5" marker-end="url(#s17a)"/>
  <rect x="10" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="60" y="91" font-size="11" fill="#fff" text-anchor="middle">排列</text>
  <rect x="130" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="180" y="91" font-size="11" fill="#fff" text-anchor="middle">组合</text>
  <rect x="250" y="75" width="100" height="24" rx="4" fill="#16a34a"/><text x="300" y="91" font-size="11" fill="#fff" text-anchor="middle">二项式定理</text>
  <text x="180" y="130" font-size="12" fill="#dc2626" text-anchor="middle">核心</text>
  <line x1="180" y1="99" x2="180" y2="118" stroke="#64748b" stroke-width="1.5"/>
  <rect x="40" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="85" y="156" font-size="11" fill="#fff" text-anchor="middle">分类/分步</text>
  <rect x="140" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="185" y="156" font-size="11" fill="#fff" text-anchor="middle">通项公式</text>
  <rect x="240" y="140" width="90" height="24" rx="4" fill="#7c3aed"/><text x="285" y="156" font-size="11" fill="#fff" text-anchor="middle">系数性质</text>
  <text x="180" y="200" font-size="12" fill="#64748b" text-anchor="middle">排列有序，组合无序</text>
  <text x="180" y="222" font-size="12" fill="#64748b" text-anchor="middle">Cₙᵏ=Cₙⁿ⁻ᵏ</text>
</svg>

## 典型例题

**例 1**：从 5 名同学中选 2 名参加比赛，有多少种选法？

**解**：选人不分先后，用组合 $C_5^2 = \frac{5 \times 4}{2} = 10$ 种。

**例 2**：求 $(1 + x)^5$ 展开式中 $x^3$ 的系数。

**解**：通项 $T_{k+1} = C_5^k x^k$，令 $k = 3$，系数为 $C_5^3 = 10$。

## 易错点

- 混淆**排列与组合**：有序用排列，无序用组合。
- 分类加法与分步乘法**判断错误**。
- 二项式通项中**指数**计算错误（$a^{n-k}b^k$）。
- 组合数性质 $C_n^m = C_n^{n-m}$ 应用不熟。
- 求指定项系数时**漏掉符号**（如 $(a-b)^n$）。

## 背记要点

1. 分类加法：$N = m_1 + \cdots + m_n$（或）。
2. 分步乘法：$N = m_1 \times \cdots \times m_n$（且）。
3. 排列：$A_n^m = \frac{n!}{(n-m)!}$。
4. 组合：$C_n^m = \frac{n!}{m!(n-m)!}$，$C_n^m = C_n^{n-m}$。
5. 二项式通项：$T_{k+1} = C_n^k a^{n-k} b^k$。

## 自测题

1. 从 4 名同学中选 1 名班长，有____种选法。
2. 计算 $A_4^2 =$____。
3. 计算 $C_4^2 =$____。
4. 求 $(1 + x)^4$ 展开式中 $x^2$ 的系数：____。
5. 判断：$C_5^2$ 与 $C_5^3$ 是否相等：____。

## 相关知识点

计数原理是概率的基础，见 [[专题十六 概率与统计]]；二项式系数与组合数联系见 [[专题十 数列]]；与函数展开结合见 [[专题三 基本初等函数]]。
