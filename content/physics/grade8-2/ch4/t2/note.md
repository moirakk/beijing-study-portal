---
title: 阿基米德原理
date: 2026-08-06
---

# 阿基米德原理

## 核心概念表

| 概念 | 含义 | 说明 |
|---|---|---|
| 阿基米德原理 | 浸入液体中的物体所受浮力等于它排开液体所受的重力 | 适用于液体和气体 |
| $V_{\text{排}}$ | 物体排开液体的体积 | 浸没时 $V_{\text{排}}=V_{\text{物}}$ |
| $G_{\text{排}}$ | 排开液体受到的重力 | $F_{\text{浮}}=G_{\text{排}}$ |

## 知识梳理

阿基米德原理：浸入液体中的物体受到向上的浮力，浮力的大小等于它排开的液体所受的重力。数学表达为 $F_{\text{浮}}=G_{\text{排}}=\rho_{\text{液}} g V_{\text{排}}$。

理解要点：物体部分浸入时，$V_{\text{排}}$ 等于浸入部分的体积；完全浸没时，$V_{\text{排}}=V_{\text{物}}$。公式表明浮力只取决于液体密度和排开液体体积，再次印证探究实验的结论。

阿基米德原理对气体同样适用：$F_{\text{浮}}=\rho_{\text{气}} g V_{\text{排}}$，这解释了热气球、飞艇的升空。

## 公式汇总

阿基米德原理：

$$
F_{\text{浮}} = G_{\text{排}} = \rho_{\text{液}}\, g\, V_{\text{排}}
$$

浸没时：

$$
V_{\text{排}} = V_{\text{物}}
$$

## 实验要点

<svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" style="max-width:480px;width:100%;display:block;margin:1em auto">
  <rect width="480" height="240" fill="#e8f4f8" rx="8"/>
  <text x="240" y="22" text-anchor="middle" fill="#1a6faf" font-size="14" font-weight="bold">阿基米德原理：F浮 = G排液 = ρ液gV排</text>
  <!-- 左图：弹簧测力计+物体 -->
  <text x="90" y="44" text-anchor="middle" fill="#1a6faf" font-size="11" font-weight="bold">① 空气中称重</text>
  <!-- 弹簧测力计 -->
  <rect x="65" y="50" width="50" height="75" fill="#c8dff0" rx="5" stroke="#1a6faf" stroke-width="1.5"/>
  <line x1="90" y1="50" x2="90" y2="40" stroke="#888" stroke-width="2"/>
  <text x="100" y="90" fill="#333" font-size="10">F₁=G物</text>
  <line x1="90" y1="125" x2="90" y2="140" stroke="#888" stroke-width="1.5"/>
  <ellipse cx="90" cy="152" rx="14" ry="14" fill="#888" stroke="#555" stroke-width="1.5"/>
  <text x="90" y="156" text-anchor="middle" fill="white" font-size="8">物体</text>
  <!-- 中图：浸入水中 -->
  <text x="250" y="44" text-anchor="middle" fill="#1a6faf" font-size="11" font-weight="bold">② 浸入液体后</text>
  <rect x="225" y="50" width="50" height="75" fill="#c8dff0" rx="5" stroke="#1a6faf" stroke-width="1.5"/>
  <line x1="250" y1="50" x2="250" y2="40" stroke="#888" stroke-width="2"/>
  <text x="260" y="90" fill="#333" font-size="10">F₂=G物-F浮</text>
  <line x1="250" y1="125" x2="250" y2="140" stroke="#888" stroke-width="1.5"/>
  <!-- 溢水杯 -->
  <rect x="210" y="140" width="80" height="65" fill="#4a9fd4" opacity="0.3" stroke="#1a6faf" stroke-width="1.5"/>
  <ellipse cx="250" cy="160" rx="14" ry="14" fill="#888" stroke="#555" stroke-width="1.5"/>
  <!-- 溢出水 -->
  <path d="M290,155 Q310,158 315,165" fill="none" stroke="#4a9fd4" stroke-width="2"/>
  <!-- 收集杯 -->
  <rect x="315" y="162" width="45" height="40" fill="#4a9fd4" opacity="0.4" stroke="#1a6faf" stroke-width="1.5"/>
  <text x="337" y="186" text-anchor="middle" fill="#1a6faf" font-size="9">排开液体</text>
  <text x="337" y="196" text-anchor="middle" fill="#1a6faf" font-size="9">G排液</text>
  <!-- 公式推导 -->
  <rect x="30" y="215" width="420" height="22" fill="white" rx="4" stroke="#4a9fd4" stroke-width="1.5"/>
  <text x="240" y="229" text-anchor="middle" fill="#1a6faf" font-size="11">F浮 = F₁ - F₂ = G排液；G排液 = ρ液·g·V排</text>
</svg>

验证阿基米德原理（溢水杯实验）四步测量：

1. 测空小桶重 $G_1$；
2. 测物体在空气中的重 $G$；
3. 将物体浸入装满水的溢水杯，读测力计示数 $F$，排开的水流入小桶；
4. 测桶和水总重 $G_2$。
- 比较：$F_{\text{浮}}=G-F$ 与 $G_{\text{排}}=G_2-G_1$，二者相等即验证原理。
- 注意：溢水杯必须事先装满水，否则 $G_{\text{排}}$ 偏小。

## 对比分析

| 部分浸入 | 完全浸没 |
|---|---|
| $V_{\text{排}}<V_{\text{物}}$ | $V_{\text{排}}=V_{\text{物}}$ |
| 浮力随浸入体积增大 | 浮力与深度无关 |

## 背记要点

1. $F_{\text{浮}}=\rho_{\text{液}} g V_{\text{排}}$，三个量单位分别为 $\text{kg/m}^3$、$\text{N/kg}$、$\text{m}^3$。
2. 原理中"排开液体的重力"不是物体自身的重力。
3. 原理对液体和气体都适用。
4. 计算浮力四法：称重法、压力差法、阿基米德原理法、平衡法（漂浮悬浮时 $F_{\text{浮}}=G$）。

## 自测题

1. 体积 $100\ \text{cm}^3$ 的铁块浸没在水中，受到的浮力是多少？（$g=10\ \text{N/kg}$）
2. 同一物体浸没在水和酒精中，哪种情况浮力大？
3. 一物体漂浮在水面，排开水的体积为 $2\times10^{-4}\ \text{m}^3$，物体重多少？

## 相关知识点

[[浮力]] [[物体的浮沉条件及应用]] [[液体的压强]] [[重力]] [[跨学科实践：制作微型密度计]]
