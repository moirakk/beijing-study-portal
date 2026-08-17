---
title: 液体的压强
date: 2026-08-06
---

# 液体的压强

## 核心概念表

| 概念 | 含义 | 说明 |
|---|---|---|
| 液体压强 | 液体因重力和流动性对容器和内部产生的压强 | 符号 $p$ |
| 深度 | 液面到该点的竖直距离 | 符号 $h$，从上往下量 |
| 连通器 | 上端开口、下部相连通的容器 | 静止时各容器液面相平 |

## 知识梳理

液体受重力作用且具有流动性，所以液体对容器底部和侧壁都有压强，液体内部向各个方向都有压强。

液体压强的规律：同一深度，液体向各个方向的压强相等；深度越大，压强越大；同一深度，液体密度越大，压强越大。液体压强只与液体密度和深度有关，与容器形状、液体质量和体积无关。

连通器：上端开口、下端连通的容器。连通器里的同种液体不流动时，各容器中的液面总保持相平。应用：茶壶、锅炉水位计、乳牛自动喂水器、船闸。

## 公式汇总

液体压强公式：

$$
p = \rho g h
$$

其中 $\rho$ 为液体密度（$\text{kg/m}^3$），$h$ 为深度（m），$g=9.8\ \text{N/kg}$。

## 实验要点

<svg viewBox="0 0 480 250" xmlns="http://www.w3.org/2000/svg" style="max-width:480px;width:100%;display:block;margin:1em auto">
  <rect width="480" height="250" fill="#e8f4f8" rx="8"/>
  <text x="240" y="22" text-anchor="middle" fill="#1a6faf" font-size="14" font-weight="bold">液体压强：p=ρgh（向各方向）</text>
  <!-- 容器 -->
  <rect x="100" y="50" width="220" height="170" fill="#4a9fd4" opacity="0.3" stroke="#1a6faf" stroke-width="2"/>
  <!-- 水面 -->
  <line x1="100" y1="50" x2="320" y2="50" stroke="#4a9fd4" stroke-width="2"/>
  <text x="340" y="55" fill="#4a9fd4" font-size="11">液面（h=0）</text>
  <!-- 压强箭头（不同深度）-->
  <defs>
    <marker id="lprarr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#e63946"/>
    </marker>
  </defs>
  <!-- h1=浅处 -->
  <text x="90" y="105" text-anchor="end" fill="#333" font-size="10">h₁</text>
  <line x1="92" y1="105" x2="100" y2="105" stroke="#e63946" stroke-width="1.5" marker-end="url(#lprarr)"/>
  <line x1="320" y1="105" x2="312" y2="105" stroke="#e63946" stroke-width="1.5" marker-end="url(#lprarr)"/>
  <line x1="210" y1="50" x2="210" y2="97" stroke="#e63946" stroke-width="1.5" marker-end="url(#lprarr)"/>
  <!-- h2=中等 -->
  <text x="90" y="155" text-anchor="end" fill="#333" font-size="10">h₂</text>
  <line x1="92" y1="155" x2="100" y2="155" stroke="#e63946" stroke-width="2.5" marker-end="url(#lprarr)"/>
  <line x1="320" y1="155" x2="308" y2="155" stroke="#e63946" stroke-width="2.5" marker-end="url(#lprarr)"/>
  <line x1="210" y1="50" x2="210" y2="140" stroke="#e63946" stroke-width="2.5" marker-end="url(#lprarr)"/>
  <!-- h3=深处 -->
  <text x="90" y="205" text-anchor="end" fill="#333" font-size="10">h₃</text>
  <line x1="92" y1="205" x2="100" y2="205" stroke="#e63946" stroke-width="4" marker-end="url(#lprarr)"/>
  <line x1="320" y1="205" x2="304" y2="205" stroke="#e63946" stroke-width="4" marker-end="url(#lprarr)"/>
  <line x1="210" y1="50" x2="210" y2="186" stroke="#e63946" stroke-width="4" marker-end="url(#lprarr)"/>
  <!-- 深度标注 -->
  <line x1="350" y1="50" x2="350" y2="205" stroke="#888" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="370" y="55" fill="#888" font-size="10">↑</text>
  <text x="370" y="130" fill="#888" font-size="11">h₃&gt;h₂&gt;h₁</text>
  <text x="370" y="210" fill="#888" font-size="10">↓</text>
  <!-- 公式 -->
  <rect x="40" y="226" width="400" height="20" fill="white" rx="4" stroke="#4a9fd4" stroke-width="1"/>
  <text x="240" y="239" text-anchor="middle" fill="#1a6faf" font-size="11">p = ρgh；与容器形状无关，与液体密度ρ和深度h成正比</text>
</svg>

用压强计探究液体内部压强：

- 压强计通过 U 形管两侧液面高度差显示压强大小（转换法）。
- 使用前检查气密性：轻压探头橡皮膜，看液面差是否灵敏变化。
- 保持深度不变转动探头方向：液面差不变，说明同一深度各方向压强相等。
- 增大探头深度：液面差增大，说明压强随深度增大。
- 换用盐水对比：同深度盐水压强更大，说明与液体密度有关。

## 对比分析

| 固体压强 | 液体压强 |
|---|---|
| 先求 $F$ 再求 $p=F/S$ | 先求 $p=\rho gh$ 再求 $F=pS$ |
| 与受力面积有关 | 只与密度和深度有关 |
| 沿力的方向传递 | 向各个方向都有压强 |

## 背记要点

1. $p=\rho gh$：液体压强只由密度和深度决定。
2. 深度 $h$ 是从自由液面竖直向下量到该点的距离。
3. 同一深度，液体向各个方向压强相等。
4. 连通器静止时液面相平；船闸是最大的人造连通器。

## 自测题

1. 水面下 0.5 m 深处的压强是多少？（$\rho_{\text{水}}=1.0\times10^3\ \text{kg/m}^3$，$g=10\ \text{N/kg}$）
2. 拦河大坝为什么下宽上窄？
3. 茶壶的壶嘴为什么要和壶身一样高？

## 相关知识点

[[压强]] [[大气压强]] [[浮力]] [[阿基米德原理]] [[流体压强与流速的关系]]
