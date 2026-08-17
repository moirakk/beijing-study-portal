---
title: 浮力
date: 2026-08-06
---

# 浮力

## 核心概念表

| 概念 | 含义 | 说明 |
|---|---|---|
| 浮力 | 浸在液体（气体）中的物体受到向上的托力 | 符号 $F_{\text{浮}}$，方向竖直向上 |
| 浮力产生原因 | 液体对物体上下表面的压力差 | $F_{\text{浮}}=F_{\text{向上}}-F_{\text{向下}}$ |
| 称重法 | 用弹簧测力计测浮力 | $F_{\text{浮}}=G-F_{\text{示}}$ |

## 知识梳理

浸在液体中的物体受到液体竖直向上托起的力叫浮力，施力物体是液体。气体中的物体也受浮力（如氢气球升空）。

浮力产生的原因：液体内部压强随深度增大，浸没物体下表面所处深度大、受到的向上压力大，上表面受到的向下压力小，上下表面的压力差就是浮力。

浮力大小的影响因素：物体浸在液体中的体积（排开液体的体积）$V_{\text{排}}$ 和液体的密度 $\rho_{\text{液}}$。与物体的密度、质量、形状、浸没深度均无关。

## 公式汇总

称重法测浮力：

$$
F_{\text{浮}} = G - F_{\text{示}}
$$

压力差法：

$$
F_{\text{浮}} = F_{\text{向上}} - F_{\text{向下}}
$$

## 实验要点

<svg viewBox="0 0 480 250" xmlns="http://www.w3.org/2000/svg" style="max-width:480px;width:100%;display:block;margin:1em auto">
  <rect width="480" height="250" fill="#e8f4f8" rx="8"/>
  <text x="240" y="22" text-anchor="middle" fill="#1a6faf" font-size="14" font-weight="bold">浮力的产生原因：上下压力差</text>
  <defs>
    <marker id="fbarr1" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 Z" fill="#4a9fd4"/>
    </marker>
    <marker id="fbarr2" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 Z" fill="#e63946"/>
    </marker>
  </defs>
  <!-- 液体容器 -->
  <rect x="100" y="45" width="280" height="185" fill="#4a9fd4" opacity="0.25" stroke="#1a6faf" stroke-width="2" rx="3"/>
  <!-- 水面 -->
  <line x1="100" y1="45" x2="380" y2="45" stroke="#4a9fd4" stroke-width="2"/>
  <!-- 浸入物体（正方形） -->
  <rect x="185" y="95" width="110" height="85" fill="#c8dff0" stroke="#1a6faf" stroke-width="2.5" rx="3"/>
  <text x="240" y="142" text-anchor="middle" fill="#1a6faf" font-size="12">物体</text>
  <!-- 上方水深h1，下方水深h2 -->
  <text x="90" y="100" text-anchor="end" fill="#333" font-size="10">h₁</text>
  <text x="90" y="180" text-anchor="end" fill="#333" font-size="10">h₂</text>
  <!-- 各方向压强箭头 -->
  <!-- 上表面（向下）：F上=ρgh₁S -->
  <line x1="240" y1="80" x2="240" y2="95" stroke="#4a9fd4" stroke-width="3" marker-end="url(#fbarr1)"/>
  <text x="255" y="90" fill="#4a9fd4" font-size="10">F上↓=ρgh₁S</text>
  <!-- 下表面（向上）：F下=ρgh₂S（更大）-->
  <line x1="240" y1="195" x2="240" y2="180" stroke="#e63946" stroke-width="4" marker-end="url(#fbarr2)"/>
  <text x="255" y="200" fill="#e63946" font-size="10">F下↑=ρgh₂S</text>
  <!-- 侧面（相互抵消）-->
  <line x1="100" y1="135" x2="120" y2="135" stroke="#888" stroke-width="2" marker-end="url(#fbarr1)"/>
  <line x1="380" y1="135" x2="360" y2="135" stroke="#888" stroke-width="2" marker-end="url(#fbarr2)"/>
  <text x="75" y="148" fill="#888" font-size="9">侧面压</text>
  <text x="75" y="158" fill="#888" font-size="9">力相消</text>
  <!-- 浮力 -->
  <line x1="240" y1="180" x2="240" y2="148" stroke="#e63946" stroke-width="5" marker-end="url(#fbarr2)"/>
  <text x="138" y="165" fill="#e63946" font-size="12" font-weight="bold">F浮=F下-F上</text>
  <text x="138" y="180" fill="#e63946" font-size="11">=ρ液g(h₂-h₁)S</text>
  <!-- 公式 -->
  <rect x="40" y="235" width="400" height="13" fill="white" rx="3"/>
  <text x="240" y="245" text-anchor="middle" fill="#1a6faf" font-size="11">F浮 = G排 = ρ液gV排（阿基米德原理）</text>
</svg>

探究浮力大小与哪些因素有关（控制变量法）：

- 弹簧测力计吊物体逐渐浸入水中：示数变小，说明受到浮力且浮力随 $V_{\text{排}}$ 增大而增大。
- 物体完全浸没后继续下移：示数不变，说明浮力与深度无关。
- 同一物体分别浸没在水和盐水中：盐水中示数更小，说明浮力与液体密度有关。

## 对比分析

| 影响浮力的因素 | 不影响浮力的因素 |
|---|---|
| 液体密度 $\rho_{\text{液}}$ | 物体密度、质量 |
| 排开液体体积 $V_{\text{排}}$ | 物体形状 |
| — | 浸没后的深度 |

## 背记要点

1. 浮力方向总是竖直向上，施力物体是液体（或气体）。
2. 浮力的实质是液体对物体上下表面的压力差。
3. 浮力只与 $\rho_{\text{液}}$ 和 $V_{\text{排}}$ 有关。
4. 称重法：$F_{\text{浮}}=G-F_{\text{示}}$。

## 自测题

1. 物体在空气中称重 5 N，浸没在水中时测力计示数 3 N，浮力多大？
2. 浸没在水中的物体继续下沉（未触底），浮力如何变化？
3. 桥墩浸在水中，下表面与河床紧密接触，它受浮力吗？

## 相关知识点

[[液体的压强]] [[压强]] [[阿基米德原理]] [[物体的浮沉条件及应用]] [[重力]]
