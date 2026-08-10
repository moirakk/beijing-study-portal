---
title: 第2节 欧姆定律
date: 2026-08-06
---

# 第2节 欧姆定律

## 核心概念表

| 项目 | 内容 |
|---|---|
| 定律内容 | 通过导体的电流，与导体两端的电压成正比，与导体的电阻成反比 |
| 公式 | $I=\dfrac{U}{R}$ |
| 适用范围 | 同一导体、同一时刻（同体性、同时性） |

## 知识梳理

**欧姆定律**：通过导体的电流，与导体两端的电压成正比，与导体的电阻成反比。它是电学中最基本的定律之一。

## 公式汇总

欧姆定律表达式：

$$
I=\frac{U}{R}
$$

变形公式：

$$
U=IR,\quad R=\frac{U}{I}
$$

各量单位：$U$——伏特（V），$I$——安培（A），$R$——欧姆（Ω）。$1\ \text{A}=\dfrac{1\ \text{V}}{1\ \Omega}$。

**注意**：
- $R=\dfrac{U}{I}$ 只是电阻的**计算式**，不是决定式。电阻由导体本身的材料、长度、横截面积、温度决定，与 $U$、$I$ 无关。
- 使用欧姆定律时三个量必须对应**同一段电路、同一时刻**（同体性、同时性）。

## 图象与公式关系图

**两个不同电阻的 I-U 图象对比**（斜率大→电阻小）：

<svg viewBox="0 0 380 210" width="380" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <defs><marker id="axo" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#334155"/></marker></defs>
  <line x1="50" y1="170" x2="350" y2="170" stroke="#334155" stroke-width="2" marker-end="url(#axo)"/>
  <line x1="50" y1="170" x2="50" y2="25" stroke="#334155" stroke-width="2" marker-end="url(#axo)"/>
  <text x="340" y="190" font-size="12">U/V</text><text x="26" y="35" font-size="12">I/A</text>
  <line x1="50" y1="170" x2="300" y2="45" stroke="#dc2626" stroke-width="2.5"/>
  <line x1="50" y1="170" x2="320" y2="115" stroke="#2563eb" stroke-width="2.5"/>
  <text x="255" y="45" font-size="12" fill="#dc2626">R₁（斜率大，电阻小）</text>
  <text x="255" y="140" font-size="12" fill="#2563eb">R₂（斜率小，电阻大）</text>
  <line x1="190" y1="170" x2="190" y2="100" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="50" y1="100" x2="190" y2="100" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="4 3"/>
  <text x="200" y="208" text-anchor="middle" font-size="11" fill="#64748b">同一电压下，R₁ 中电流更大 → R₁ &lt; R₂</text>
</svg>

**公式三角（遮住谁求谁）**：

<svg viewBox="0 0 300 170" width="300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%">
  <path d="M150 20 L60 140 L240 140 Z" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
  <line x1="97" y1="90" x2="203" y2="90" stroke="#334155" stroke-width="1.5"/>
  <line x1="150" y1="90" x2="150" y2="140" stroke="#334155" stroke-width="1.5"/>
  <text x="150" y="72" text-anchor="middle" font-size="20" fill="#dc2626">U</text>
  <text x="120" y="122" text-anchor="middle" font-size="20" fill="#2563eb">I</text>
  <text x="180" y="122" text-anchor="middle" font-size="20" fill="#16a34a">R</text>
  <text x="150" y="163" text-anchor="middle" font-size="11" fill="#64748b">I=U/R　U=IR　R=U/I</text>
</svg>

## 应用示例

例：一个定值电阻两端电压为 6 V 时，电流为 0.3 A，则 $R=\dfrac{U}{I}=\dfrac{6\ \text{V}}{0.3\ \text{A}}=20\ \Omega$；电压变为 10 V 时，$I=\dfrac{10\ \text{V}}{20\ \Omega}=0.5\ \text{A}$。

## 对比分析

| 公式 | 含义 | 能否说"成正比" |
|---|---|---|
| $I=U/R$ | 电流由电压和电阻共同决定 | $R$ 一定时 $I\propto U$ |
| $U=IR$ | 计算电压 | 不能说 $U$ 与 $R$ 成正比（$I$ 会变） |
| $R=U/I$ | 计算电阻（量度式） | $R$ 与 $U$、$I$ 无关 |

## 背记要点

1. 欧姆定律：$I=\dfrac{U}{R}$，电流与电压成正比、与电阻成反比。
2. $R=U/I$ 是计算式不是决定式，电阻与 $U$、$I$ 无关。
3. 同体性、同时性：$I$、$U$、$R$ 必须对应同一导体同一时刻。
4. 单位统一：V、A、Ω。
## 自测题

1. 某电阻两端电压 4.5 V，通过电流 0.3 A，其阻值多大？
2. "导体的电阻与电压成正比，与电流成反比"这句话对吗？为什么？

## 相关知识点

[[第1节 电流与电压和电阻的关系]] [[第3节 电阻的测量]] [[第4节 欧姆定律在串、并联电路中的应用]] [[第3节 电阻]]
