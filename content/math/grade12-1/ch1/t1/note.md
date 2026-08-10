---
title: 6.1 分类加法计数原理与分步乘法计数原理
date: 2026-08-10
---

# 6.1 分类加法计数原理与分步乘法计数原理

## 概念定义

**分类加法计数原理**：完成一件事有 $n$ 类不同方案，在第 $k$ 类方案中有 $m_k$ 种不同方法，则完成这件事共有 $N = m_1 + m_2 + \cdots + m_n$ 种不同方法。关键词是"**分类**"、"**或**"。

**分步乘法计数原理**：完成一件事需要分成 $n$ 个步骤，做第 $k$ 步有 $m_k$ 种不同方法，则完成这件事共有 $N = m_1 \times m_2 \times \cdots \times m_n$ 种不同方法。关键词是"**分步**"、"**且**"。

两个原理都解决"完成一件事有多少种不同方法"的问题，区别在于：分类时各类方法**相互独立**、可单独完成；分步时各步骤**相互关联**、缺一不可。

## 知识梳理

| 原理 | 关键词 | 计数方式 | 判断标准 |
| --- | --- | --- | --- |
| 分类加法 | 分类、或 | 相加 | 任选一类即可完成 |
| 分步乘法 | 分步、且 | 相乘 | 各步都完成才完成 |

## 分类与分步示意

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="m1a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker></defs>
  <rect x="20" y="20" width="120" height="30" rx="6" fill="#2563eb"/>
  <text x="80" y="40" font-size="12" fill="#fff" text-anchor="middle">分类加法（或）</text>
  <line x1="80" y1="50" x2="40" y2="80" stroke="#64748b" stroke-width="1.5" marker-end="url(#m1a)"/>
  <line x1="80" y1="50" x2="120" y2="80" stroke="#64748b" stroke-width="1.5" marker-end="url(#m1a)"/>
  <rect x="15" y="80" width="50" height="24" rx="4" fill="#16a34a"/><text x="40" y="96" font-size="11" fill="#fff" text-anchor="middle">A类 m₁</text>
  <rect x="95" y="80" width="50" height="24" rx="4" fill="#16a34a"/><text x="120" y="96" font-size="11" fill="#fff" text-anchor="middle">B类 m₂</text>
  <text x="80" y="130" font-size="12" fill="#dc2626" text-anchor="middle">N = m₁ + m₂</text>
  <rect x="200" y="20" width="140" height="30" rx="6" fill="#dc2626"/>
  <text x="270" y="40" font-size="12" fill="#fff" text-anchor="middle">分步乘法（且）</text>
  <line x1="270" y1="50" x2="230" y2="80" stroke="#64748b" stroke-width="1.5" marker-end="url(#m1a)"/>
  <line x1="270" y1="50" x2="310" y2="80" stroke="#64748b" stroke-width="1.5" marker-end="url(#m1a)"/>
  <rect x="205" y="80" width="50" height="24" rx="4" fill="#16a34a"/><text x="230" y="96" font-size="11" fill="#fff" text-anchor="middle">第1步 n₁</text>
  <rect x="285" y="80" width="50" height="24" rx="4" fill="#16a34a"/><text x="310" y="96" font-size="11" fill="#fff" text-anchor="middle">第2步 n₂</text>
  <text x="270" y="130" font-size="12" fill="#dc2626" text-anchor="middle">N = n₁ × n₂</text>
  <text x="180" y="180" font-size="12" fill="#64748b" text-anchor="middle">分类：任选其一即完成</text>
  <text x="180" y="202" font-size="12" fill="#64748b" text-anchor="middle">分步：各步都完成才完成</text>
</svg>

## 典型例题

**例 1**：从甲地到乙地，可以乘火车、汽车或轮船。一天中火车有 4 班、汽车有 3 班、轮船有 2 班，问一天中从甲地到乙地共有多少种不同的走法？

**解**：乘火车、汽车、轮船是三类**相互独立**的方案，任选一类即可到达，用分类加法原理：$N = 4 + 3 + 2 = 9$ 种。

**例 2**：某班有男生 30 名、女生 20 名，现要从中选出男、女各 1 名代表班级参加比赛，共有多少种选法？

**解**：选男生和选女生是两个**必须都完成**的步骤，用分步乘法原理：$N = 30 \times 20 = 600$ 种。

## 易错点

- 混淆"分类"与"分步"：能单独完成用加法，需配合完成用乘法。
- 分类时**不重不漏**，各类之间不能有交叉重复。
- 分步时各步骤之间要**相互独立**，且顺序固定。
- 实际问题中常需"先分类、再分步"综合运用。

## 背记要点

1. 分类加法：$N = m_1 + m_2 + \cdots + m_n$（"或"）。
2. 分步乘法：$N = m_1 \times m_2 \times \cdots \times m_n$（"且"）。
3. 判断口诀："分类用加法，分步用乘法"。
4. 分类要不重不漏，分步要相互独立。

## 自测题

1. 书架上层有 5 本不同数学书，下层有 3 本不同物理书，任取 1 本有____种取法。
2. 上题中，从两层各取 1 本有____种取法。
3. 从 3 名男生、4 名女生中各选 1 名参加活动，共有____种选法。
4. 判断：分类加法原理中各类方法可以相互交叉。（　）

## 相关知识点

两个计数原理是排列、组合的基础，详见 [[6.2 排列与组合]]；与二项式定理的联系见 [[6.3 二项式定理]]。
