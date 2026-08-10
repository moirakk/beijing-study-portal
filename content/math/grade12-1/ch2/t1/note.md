---
title: 7.1 条件概率与全概率公式
date: 2026-08-10
---

# 7.1 条件概率与全概率公式

## 概念定义

**条件概率**：在事件 $A$ 发生的条件下，事件 $B$ 发生的概率，记作 $P(B|A)$，定义为 $P(B|A) = \dfrac{P(AB)}{P(A)}$（其中 $P(A) > 0$）。

**乘法公式**：由条件概率定义可得 $P(AB) = P(A) \cdot P(B|A)$。

**全概率公式**：若事件 $A_1, A_2, \dots, A_n$ 两两互斥且 $A_1 \cup A_2 \cup \cdots \cup A_n = \Omega$（构成完备事件组），则对任意事件 $B$，有 $P(B) = \sum_{i=1}^n P(A_i) P(B|A_i)$。

**贝叶斯公式**：$P(A_i|B) = \dfrac{P(A_i)P(B|A_i)}{\sum_{j=1}^n P(A_j)P(B|A_j)}$，用于"由果溯因"。

## 知识梳理

| 公式 | 表达式 | 用途 |
| --- | --- | --- |
| 条件概率 | $P(B|A) = \dfrac{P(AB)}{P(A)}$ | 已知 A 求 B |
| 乘法公式 | $P(AB) = P(A)P(B|A)$ | 求交事件 |
| 全概率 | $P(B) = \sum P(A_i)P(B|A_i)$ | 由因求果 |
| 贝叶斯 | $P(A_i|B) = \dfrac{P(A_i)P(B|A_i)}{P(B)}$ | 由果溯因 |

## 全概率公式示意

<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="q1a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#2563eb"/></marker></defs>
  <rect x="130" y="15" width="100" height="28" rx="6" fill="#2563eb"/>
  <text x="180" y="33" font-size="12" fill="#fff" text-anchor="middle">完备事件组</text>
  <line x1="180" y1="43" x2="60" y2="80" stroke="#64748b" stroke-width="1.5" marker-end="url(#q1a)"/>
  <line x1="180" y1="43" x2="180" y2="80" stroke="#64748b" stroke-width="1.5" marker-end="url(#q1a)"/>
  <line x1="180" y1="43" x2="300" y2="80" stroke="#64748b" stroke-width="1.5" marker-end="url(#q1a)"/>
  <rect x="25" y="80" width="70" height="24" rx="4" fill="#16a34a"/><text x="60" y="96" font-size="11" fill="#fff" text-anchor="middle">A₁</text>
  <rect x="145" y="80" width="70" height="24" rx="4" fill="#16a34a"/><text x="180" y="96" font-size="11" fill="#fff" text-anchor="middle">A₂</text>
  <rect x="265" y="80" width="70" height="24" rx="4" fill="#16a34a"/><text x="300" y="96" font-size="11" fill="#fff" text-anchor="middle">A₃</text>
  <line x1="60" y1="104" x2="60" y2="140" stroke="#64748b" stroke-width="1.5" marker-end="url(#q1a)"/>
  <line x1="180" y1="104" x2="180" y2="140" stroke="#64748b" stroke-width="1.5" marker-end="url(#q1a)"/>
  <line x1="300" y1="104" x2="300" y2="140" stroke="#64748b" stroke-width="1.5" marker-end="url(#q1a)"/>
  <rect x="25" y="140" width="70" height="24" rx="4" fill="#dc2626"/><text x="60" y="157" font-size="11" fill="#fff" text-anchor="middle">P(B|A₁)</text>
  <rect x="145" y="140" width="70" height="24" rx="4" fill="#dc2626"/><text x="180" y="157" font-size="11" fill="#fff" text-anchor="middle">P(B|A₂)</text>
  <rect x="265" y="140" width="70" height="24" rx="4" fill="#dc2626"/><text x="300" y="157" font-size="11" fill="#fff" text-anchor="middle">P(B|A₃)</text>
  <text x="180" y="200" font-size="12" fill="#64748b" text-anchor="middle">P(B) = Σ P(Aᵢ)·P(B|Aᵢ)</text>
  <text x="180" y="222" font-size="12" fill="#64748b" text-anchor="middle">A₁,A₂,A₃ 两两互斥且并集为全集</text>
</svg>

## 典型例题

**例 1**：袋中有 3 个红球、2 个白球，不放回地依次取 2 个球。求第一次取到红球条件下，第二次取到白球的概率。

**解**：设 $A$ = 第一次取红球，$B$ = 第二次取白球。$P(A) = \dfrac{3}{5}$，$P(AB) = \dfrac{3}{5} \times \dfrac{2}{4} = \dfrac{3}{10}$。故 $P(B|A) = \dfrac{P(AB)}{P(A)} = \dfrac{3/10}{3/5} = \dfrac{1}{2}$。

**例 2**：某工厂有甲、乙两台机器生产同种产品，产量分别占 60% 和 40%，次品率分别为 2% 和 3%。求任取一件产品是次品的概率。

**解**：设 $A_1$ = 甲生产，$A_2$ = 乙生产，$B$ = 次品。由全概率公式：$P(B) = P(A_1)P(B|A_1) + P(A_2)P(B|A_2) = 0.6 \times 0.02 + 0.4 \times 0.03 = 0.012 + 0.012 = 0.024$。

## 易错点

- 条件概率 $P(B|A)$ 与 $P(AB)$ 混淆：前者是"在 A 已发生下 B 的概率"，分母是 $P(A)$。
- 全概率公式要求 $A_i$ **两两互斥且并集为全集**。
- 不放回抽样与放回抽样概率计算不同。
- 贝叶斯公式用于已知结果反推原因，勿与全概率混淆。

## 背记要点

1. $P(B|A) = \dfrac{P(AB)}{P(A)}$。
2. 乘法公式 $P(AB) = P(A)P(B|A)$。
3. 全概率公式 $P(B) = \sum P(A_i)P(B|A_i)$。
4. 贝叶斯公式 $P(A_i|B) = \dfrac{P(A_i)P(B|A_i)}{P(B)}$。

## 自测题

1. 抛掷一枚骰子，已知点数为偶数，求点数为 4 的概率。
2. 全概率公式中 $A_i$ 需满足什么条件？
3. 甲、乙两箱各装 3 红 2 白、2 红 3 白球，任选一箱取一球，求取到红球的概率。
4. 判断：$P(B|A) = P(AB)$。（　）

## 相关知识点

条件概率是随机变量分布的基础，见 [[7.2 离散型随机变量及其分布列]]；与独立事件的关系见 [[7.4 二项分布与超几何分布]]。
