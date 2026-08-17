---
title: 物体的浮沉条件及应用
date: 2026-08-06
---

# 物体的浮沉条件及应用

## 核心概念表

| 状态 | 力的关系 | 密度关系（浸没实心体） |
|---|---|---|
| 上浮 | $F_{\text{浮}}>G$ | $\rho_{\text{物}}<\rho_{\text{液}}$ |
| 悬浮 | $F_{\text{浮}}=G$ | $\rho_{\text{物}}=\rho_{\text{液}}$ |
| 下沉 | $F_{\text{浮}}<G$ | $\rho_{\text{物}}>\rho_{\text{液}}$ |
| 漂浮 | $F_{\text{浮}}=G$ | $\rho_{\text{物}}<\rho_{\text{液}}$ |

## 知识梳理

浸没在液体中的物体，浮沉取决于浮力与重力的大小关系：浮力大于重力则上浮，最终漂浮；浮力小于重力则下沉；相等则悬浮在液体内任意位置。

漂浮与悬浮都满足 $F_{\text{浮}}=G$，区别在于：漂浮时物体部分露出液面（$V_{\text{排}}<V_{\text{物}}$），悬浮时完全浸没（$V_{\text{排}}=V_{\text{物}}$）。

应用：轮船用空心的办法增大 $V_{\text{排}}$，使钢铁"漂浮"，轮船排开水的质量叫排水量；潜水艇靠改变自身重力（水舱充水、排水）实现浮沉；气球和飞艇充入密度小于空气的气体，靠浮力升空；密度计漂浮在液体中，刻度上小下大，用于测液体密度。

## 公式汇总

漂浮/悬浮平衡条件：

$$
F_{\text{浮}} = G \quad \Rightarrow \quad \rho_{\text{液}} g V_{\text{排}} = mg
$$

排水量：

$$
m_{\text{排}} = \rho_{\text{水}} V_{\text{排}}
$$

## 实验要点

<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" style="max-width:480px;width:100%;display:block;margin:1em auto">
  <rect width="480" height="220" fill="#e8f4f8" rx="8"/>
  <text x="240" y="22" text-anchor="middle" fill="#1a6faf" font-size="14" font-weight="bold">物体浮沉条件（与密度关系）</text>
  <defs>
    <marker id="fcarr1" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#e63946"/>
    </marker>
    <marker id="fcarr2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#2d6a2d"/>
    </marker>
  </defs>
  <!-- 容器（水） -->
  <rect x="20" y="45" width="440" height="160" fill="#4a9fd4" opacity="0.2" rx="5" stroke="#4a9fd4" stroke-width="1.5"/>
  <line x1="20" y1="45" x2="460" y2="45" stroke="#4a9fd4" stroke-width="2"/>
  <text x="450" y="40" fill="#4a9fd4" font-size="10">水面</text>
  <!-- 上浮（ρ物<ρ液） -->
  <ellipse cx="90" cy="55" rx="28" ry="20" fill="#4a9fd4" opacity="0.7" stroke="#1a6faf" stroke-width="1.5"/>
  <text x="90" y="59" text-anchor="middle" fill="white" font-size="9">浮体</text>
  <line x1="90" y1="75" x2="90" y2="100" stroke="#e63946" stroke-width="2.5" marker-end="url(#fcarr1)"/>
  <text x="110" y="92" fill="#e63946" font-size="10">F浮 &gt; G</text>
  <text x="90" y="125" text-anchor="middle" fill="#1a6faf" font-size="10">漂浮</text>
  <text x="90" y="138" text-anchor="middle" fill="#1a6faf" font-size="10">ρ物 &lt; ρ液</text>
  <!-- 悬浮（ρ物=ρ液） -->
  <ellipse cx="240" cy="125" rx="28" ry="20" fill="#888" opacity="0.7" stroke="#1a6faf" stroke-width="1.5"/>
  <text x="240" y="129" text-anchor="middle" fill="white" font-size="9">悬浮体</text>
  <line x1="240" y1="105" x2="240" y2="80" stroke="#2d6a2d" stroke-width="2.5" marker-end="url(#fcarr2)"/>
  <line x1="240" y1="145" x2="240" y2="165" stroke="#e63946" stroke-width="2.5" marker-end="url(#fcarr1)"/>
  <text x="255" y="78" fill="#2d6a2d" font-size="10">F浮 = G</text>
  <text x="240" y="178" text-anchor="middle" fill="#1a6faf" font-size="10">悬浮</text>
  <text x="240" y="190" text-anchor="middle" fill="#1a6faf" font-size="10">ρ物 = ρ液</text>
  <!-- 下沉（ρ物>ρ液） -->
  <ellipse cx="390" cy="185" rx="28" ry="20" fill="#555" opacity="0.8" stroke="#1a6faf" stroke-width="1.5"/>
  <text x="390" y="189" text-anchor="middle" fill="white" font-size="9">沉体</text>
  <line x1="390" y1="165" x2="390" y2="145" stroke="#2d6a2d" stroke-width="2" marker-end="url(#fcarr2)"/>
  <text x="405" y="142" fill="#2d6a2d" font-size="10">F浮 &lt; G</text>
  <text x="390" y="80" text-anchor="middle" fill="#1a6faf" font-size="10">下沉</text>
  <text x="390" y="92" text-anchor="middle" fill="#1a6faf" font-size="10">ρ物 &gt; ρ液</text>
</svg>

- 鸡蛋在清水中下沉，逐渐加盐后悬浮、上浮：改变液体密度可改变浮沉。
- 自制潜水艇模型：向瓶内注水下沉、排水上浮，体会"改变自重"的思路。

## 对比分析

| 轮船 | 潜水艇 | 气球飞艇 |
|---|---|---|
| 空心增大 $V_{\text{排}}$ | 改变自身重力 | 充低密度气体 |
| 始终漂浮 | 可悬浮可沉浮 | 靠空气浮力 |

## 背记要点

1. 浮沉看 $F_{\text{浮}}$ 与 $G$：大则浮，小则沉，等则悬。
2. 漂浮和悬浮都有 $F_{\text{浮}}=G$，漂浮部分露出、悬浮全浸没。
3. 轮船从河里开到海里：浮力不变（仍等于重力），$V_{\text{排}}$ 变小，船身上浮一些。
4. 密度计刻度：上小下大、上疏下密。

## 自测题

1. 质量 200 g 的木块漂浮在水面上，它受到的浮力是多少？（$g=10\ \text{N/kg}$）
2. 潜水艇是怎样实现下潜和上浮的？
3. 一艘轮船的排水量为 1000 t，满载时受到的浮力是多大？

## 相关知识点

[[浮力]] [[阿基米德原理]] [[重力]] [[二力平衡]] [[跨学科实践：制作微型密度计]]
