---
title: 6.2 排列与组合
date: 2026-08-10
---

# 6.2 排列与组合

## 概念定义

**排列**：从 $n$ 个不同元素中取出 $m$ 个元素，按照**一定的顺序**排成一列，叫做从 $n$ 个不同元素中取出 $m$ 个元素的一个排列。排列数记作 $A_n^m$，且 $A_n^m = n(n-1)\cdots(n-m+1) = \dfrac{n!}{(n-m)!}$。

**组合**：从 $n$ 个不同元素中取出 $m$ 个元素**并成一组**，不考虑顺序，叫做从 $n$ 个不同元素中取出 $m$ 个元素的一个组合。组合数记作 $C_n^m$，且 $C_n^m = \dfrac{A_n^m}{m!} = \dfrac{n!}{m!(n-m)!}$。

排列与组合的本质区别：**是否与顺序有关**。与顺序有关是排列，与顺序无关是组合。

## 知识梳理

| 项目 | 排列 | 组合 |
| --- | --- | --- |
| 是否有序 | 有序 | 无序 |
| 符号 | $A_n^m$ | $C_n^m$ |
| 公式 | $\dfrac{n!}{(n-m)!}$ | $\dfrac{n!}{m!(n-m)!}$ |
| 关系 | $A_n^m = C_n^m \cdot m!$ | $C_n^m = \dfrac{A_n^m}{m!}$ |
| 性质 | — | $C_n^m = C_n^{n-m}$，$C_{n+1}^m = C_n^m + C_n^{m-1}$ |

## 排列与组合关系示意

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="p1a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker></defs>
  <rect x="20" y="20" width="140" height="30" rx="6" fill="#2563eb"/>
  <text x="90" y="40" font-size="12" fill="#fff" text-anchor="middle">n 个不同元素</text>
  <line x1="90" y1="50" x2="60" y2="85" stroke="#64748b" stroke-width="1.5" marker-end="url(#p1a)"/>
  <line x1="90" y1="50" x2="150" y2="85" stroke="#64748b" stroke-width="1.5" marker-end="url(#p1a)"/>
  <rect x="20" y="85" width="80" height="26" rx="5" fill="#16a34a"/>
  <text x="60" y="102" font-size="11" fill="#fff" text-anchor="middle">先组合 Cₙᵐ</text>
  <rect x="120" y="85" width="60" height="26" rx="5" fill="#16a34a"/>
  <text x="150" y="102" font-size="11" fill="#fff" text-anchor="middle">再排列 m!</text>
  <line x1="60" y1="111" x2="60" y2="140" stroke="#64748b" stroke-width="1.5" marker-end="url(#p1a)"/>
  <line x1="150" y1="111" x2="150" y2="140" stroke="#64748b" stroke-width="1.5" marker-end="url(#p1a)"/>
  <rect x="20" y="140" width="80" height="26" rx="5" fill="#dc2626"/>
  <text x="60" y="157" font-size="11" fill="#fff" text-anchor="middle">组合 Cₙᵐ</text>
  <rect x="120" y="140" width="60" height="26" rx="5" fill="#dc2626"/>
  <text x="150" y="157" font-size="11" fill="#fff" text-anchor="middle">排列 Aₙᵐ</text>
  <text x="90" y="200" font-size="12" fill="#64748b" text-anchor="middle">Aₙᵐ = Cₙᵐ · m!</text>
  <text x="90" y="222" font-size="12" fill="#64748b" text-anchor="middle">组合无序，排列有序</text>
</svg>

## 典型例题

**例 1**：从 5 名同学中选出 3 名参加演讲比赛，共有多少种选法？

**解**：选出 3 名同学不涉及顺序，是组合问题：$C_5^3 = \dfrac{5!}{3!2!} = 10$ 种。

**例 2**：从 5 名同学中选出 3 名分别担任班长、学习委员、体育委员，共有多少种安排？

**解**：3 个职务不同，与顺序有关，是排列问题：$A_5^3 = 5 \times 4 \times 3 = 60$ 种。

## 易错点

- 混淆排列与组合：**职务、名次、编号**等与顺序有关用排列；**选取、分组**等与顺序无关用组合。
- 计算 $C_n^m$ 时注意 $C_n^m = C_n^{n-m}$ 可简化计算。
- 含"至少""至多"的问题常用**间接法**（总数减去反面）。
- 相邻问题用"捆绑法"，不相邻问题用"插空法"。

## 背记要点

1. $A_n^m = \dfrac{n!}{(n-m)!}$，$C_n^m = \dfrac{n!}{m!(n-m)!}$。
2. $A_n^m = C_n^m \cdot m!$（先组合后排列）。
3. $C_n^m = C_n^{n-m}$；$C_{n+1}^m = C_n^m + C_n^{m-1}$。
4. 排列有序、组合无序是判断关键。

## 自测题

1. 计算 $A_5^2 =$____，$C_5^2 =$____。
2. 从 6 人中选 4 人参加比赛有____种选法。
3. 5 人排成一排照相有____种排法。
4. 判断：$C_8^3 = C_8^5$。（　）

## 相关知识点

排列组合是二项式定理的基础，见 [[6.3 二项式定理]]；计数原理见 [[6.1 分类加法计数原理与分步乘法计数原理]]。
