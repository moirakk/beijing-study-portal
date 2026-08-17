---
title: 跨学科实践：制作微型密度计
date: 2026-08-06
---

# 跨学科实践：制作微型密度计

## 核心概念表

| 概念 | 含义 | 说明 |
|---|---|---|
| 密度计 | 漂浮法测液体密度的仪器 | 始终处于漂浮状态 |
| 工作原理 | 漂浮时 $F_{\text{浮}}=G$ 恒定 | 液体密度大则浸入浅 |
| 刻度特点 | 上小下大、上疏下密 | 不均匀刻度 |

## 知识梳理

密度计是利用漂浮条件测量液体密度的仪器。它在任何液体中都漂浮，所受浮力恒等于自身重力：$\rho_{\text{液}} g V_{\text{排}} = G$。液体密度越大，所需 $V_{\text{排}}$ 越小，密度计浸入越浅，露出越多。因此刻度自上而下逐渐增大。

制作微型密度计融合了物理（浮力、密度）、数学（刻度标定与计算）、工程（配重与稳定性设计）等学科。

## 制作要点

<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" style="max-width:480px;width:100%;display:block;margin:1em auto">
  <rect width="480" height="220" fill="#e8f4f8" rx="8"/>
  <text x="240" y="22" text-anchor="middle" fill="#1a6faf" font-size="14" font-weight="bold">自制密度计：漂浮时F浮=G</text>
  <!-- 左：在密度小的液体中（下沉深） -->
  <text x="120" y="44" text-anchor="middle" fill="#1a6faf" font-size="11" font-weight="bold">密度较小的液体</text>
  <rect x="60" y="55" width="120" height="130" fill="#4a9fd4" opacity="0.2" stroke="#1a6faf" stroke-width="1.5"/>
  <!-- 密度计（细管+底部重物） -->
  <rect x="112" y="68" width="16" height="90" fill="#c8dff0" stroke="#1a6faf" stroke-width="1.5"/>
  <ellipse cx="120" cy="168" rx="20" ry="12" fill="#888" stroke="#555" stroke-width="1.5"/>
  <!-- 刻度（低密度时浸入深，刻度在下） -->
  <line x1="128" y1="78" x2="134" y2="78" stroke="#e63946" stroke-width="1.5"/>
  <text x="136" y="82" fill="#e63946" font-size="9">1.0</text>
  <line x1="128" y1="90" x2="134" y2="90" stroke="#1a6faf" stroke-width="1.5"/>
  <text x="136" y="94" fill="#1a6faf" font-size="9">0.9</text>
  <!-- 液面 -->
  <line x1="60" y1="100" x2="180" y2="100" stroke="#4a9fd4" stroke-width="2"/>
  <text x="55" y="104" text-anchor="end" fill="#4a9fd4" font-size="9">液面</text>
  <text x="120" y="195" text-anchor="middle" fill="#333" font-size="10">浸入深（刻度值小）</text>
  <!-- 右：在密度大的液体中（浸入浅） -->
  <text x="360" y="44" text-anchor="middle" fill="#1a6faf" font-size="11" font-weight="bold">密度较大的液体</text>
  <rect x="300" y="55" width="120" height="130" fill="#4a9fd4" opacity="0.3" stroke="#1a6faf" stroke-width="1.5"/>
  <rect x="352" y="85" width="16" height="73" fill="#c8dff0" stroke="#1a6faf" stroke-width="1.5"/>
  <ellipse cx="360" cy="168" rx="20" ry="12" fill="#888" stroke="#555" stroke-width="1.5"/>
  <!-- 液面（更浅） -->
  <line x1="300" y1="88" x2="420" y2="88" stroke="#4a9fd4" stroke-width="2"/>
  <text x="295" y="92" text-anchor="end" fill="#4a9fd4" font-size="9">液面</text>
  <line x1="368" y1="95" x2="374" y2="95" stroke="#e63946" stroke-width="1.5"/>
  <text x="376" y="99" fill="#e63946" font-size="9">1.2</text>
  <line x1="368" y1="108" x2="374" y2="108" stroke="#1a6faf" stroke-width="1.5"/>
  <text x="376" y="112" fill="#1a6faf" font-size="9">1.1</text>
  <text x="360" y="195" text-anchor="middle" fill="#333" font-size="10">浸入浅（刻度值大）</text>
  <!-- 说明 -->
  <rect x="40" y="200" width="400" height="16" fill="white" rx="3"/>
  <text x="240" y="212" text-anchor="middle" fill="#1a6faf" font-size="11">漂浮条件：F浮=G；密度大→浮力大→浸入浅→刻度在上方偏大</text>
</svg>

材料：细吸管（或试管）、橡皮泥（或细沙、小钢珠）作配重、记号笔、已知密度的标准液体。

- 吸管下端封口，装入适量配重，使密度计能竖直漂浮且浸入深度适中。
- 配重要放在底部，降低重心，防止倾倒。
- 标定：先放入清水（$\rho=1.0\ \text{g/cm}^3$），在液面处画基准线；再放入盐水等已知密度液体画第二条线。
- 根据漂浮条件推算其他刻度位置，注意刻度不均匀。

## 公式汇总

漂浮条件（$S$ 为吸管横截面积，$h$ 为浸入深度）：

$$
\rho_{\text{液}}\, g\, S h = G \quad \Rightarrow \quad h = \frac{G}{\rho_{\text{液}} g S}
$$

即浸入深度与液体密度成反比。

## 对比分析

| 液体密度大 | 液体密度小 |
|---|---|
| 浸入浅、露出多 | 浸入深、露出少 |
| 读数在下方刻度 | 读数在上方刻度 |

## 背记要点

1. 密度计在不同液体中都漂浮，浮力恒等于重力。
2. 浸入深度 $h$ 与液体密度成反比，刻度上小下大。
3. 配重置底降低重心，保证竖直漂浮。
4. 标定至少需要一种已知密度的液体。

## 自测题

1. 同一支密度计放入水和盐水中，哪种液体里浸入更深？
2. 为什么密度计的刻度是不均匀的？
3. 若吸管横截面积 $0.5\ \text{cm}^2$，密度计总重 0.05 N，在水中浸入多深？（$g=10\ \text{N/kg}$）

## 相关知识点

[[浮力]] [[阿基米德原理]] [[物体的浮沉条件及应用]] [[重力]]
