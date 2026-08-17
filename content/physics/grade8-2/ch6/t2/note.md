---
title: 跨学科实践：制作简易杆秤
date: 2026-08-06
---

# 跨学科实践：制作简易杆秤

## 核心概念表

| 概念 | 含义 | 说明 |
|---|---|---|
| 杆秤 | 应用杠杆原理的测质量工具 | 我国传统计量器具 |
| 提纽 | 杆秤的支点 | 提起处 |
| 秤砣（秤锤） | 提供动力的标准重物 | 质量固定 |
| 秤星 | 秤杆上的质量刻度 | 均匀分布 |

## 知识梳理

杆秤是杠杆平衡条件的典型应用。称量时以提纽为支点 $O$，被测物挂在秤钩上产生阻力 $G_{\text{物}}$（力臂 $l_2$ 固定），移动秤砣（重 $G_{\text{砣}}$）改变动力臂 $l_1$，当秤杆水平平衡时：$G_{\text{物}} l_2 = G_{\text{砣}} l_1$。

由于 $G_{\text{砣}}$ 和 $l_2$ 都固定，被测物的质量与秤砣到支点的距离 $l_1$ 成正比，所以秤星刻度是均匀的，可直接按距离标注质量。

本实践综合物理（杠杆原理）、数学（正比关系与刻度标定）、工程与传统文化（杆秤制作工艺）。

## 制作要点

<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" style="max-width:480px;width:100%;display:block;margin:1em auto">
  <rect width="480" height="220" fill="#e8f4f8" rx="8"/>
  <text x="240" y="22" text-anchor="middle" fill="#1a6faf" font-size="14" font-weight="bold">简易杆秤结构原理（杠杆应用）</text>
  <defs>
    <marker id="cparr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#e63946"/>
    </marker>
  </defs>
  <!-- 秤杆 -->
  <rect x="80" y="100" width="340" height="10" fill="#8B6914" rx="2"/>
  <!-- 支点绳（提绳） -->
  <line x1="130" y1="100" x2="130" y2="65" stroke="#888" stroke-width="2"/>
  <circle cx="130" cy="62" r="6" fill="none" stroke="#888" stroke-width="2"/>
  <text x="130" y="55" text-anchor="middle" fill="#555" font-size="10">提纽（支点）</text>
  <!-- 秤盘（左侧，被称物）-->
  <path d="M80,110 Q100,130 120,110" fill="#c8dff0" stroke="#1a6faf" stroke-width="2"/>
  <line x1="80" y1="110" x2="80" y2="120" stroke="#888" stroke-width="1.5"/>
  <line x1="120" y1="110" x2="120" y2="120" stroke="#888" stroke-width="1.5"/>
  <line x1="80" y1="120" x2="120" y2="120" stroke="#888" stroke-width="1.5"/>
  <rect x="83" y="103" width="35" height="10" fill="#888" rx="2"/>
  <text x="100" y="111" text-anchor="middle" fill="white" font-size="8">重物G物</text>
  <text x="100" y="148" text-anchor="middle" fill="#4a9fd4" font-size="10">阻力：G物</text>
  <!-- 秤砣（右侧） -->
  <line x1="350" y1="105" x2="350" y2="140" stroke="#888" stroke-width="2"/>
  <ellipse cx="350" cy="152" rx="18" ry="12" fill="#888" stroke="#555" stroke-width="1.5"/>
  <text x="350" y="156" text-anchor="middle" fill="white" font-size="9">秤砣</text>
  <text x="350" y="175" text-anchor="middle" fill="#e63946" font-size="10">动力：G砣</text>
  <!-- 刻度 -->
  <line x1="200" y1="97" x2="200" y2="103" stroke="#1a6faf" stroke-width="1.5"/>
  <text x="200" y="92" text-anchor="middle" fill="#1a6faf" font-size="9">0</text>
  <line x1="240" y1="97" x2="240" y2="103" stroke="#1a6faf" stroke-width="1.5"/>
  <text x="240" y="92" text-anchor="middle" fill="#1a6faf" font-size="9">0.5</text>
  <line x1="280" y1="97" x2="280" y2="103" stroke="#1a6faf" stroke-width="1.5"/>
  <text x="280" y="92" text-anchor="middle" fill="#1a6faf" font-size="9">1.0kg</text>
  <!-- 平衡方程 -->
  <rect x="60" y="185" width="360" height="28" fill="white" rx="5" stroke="#4a9fd4" stroke-width="1.5"/>
  <text x="240" y="200" text-anchor="middle" fill="#1a6faf" font-size="11" font-weight="bold">平衡时：G物 × L₁ = G砣 × L₂</text>
  <text x="240" y="210" text-anchor="middle" fill="#333" font-size="10">秤砣越重→刻度越密；零刻度在支点右侧</text>
</svg>

材料：细直木棒（筷子）、棉线、小螺母或钩码作秤砣、小盘或挂钩、已知质量的标定物。

- 在木棒一端固定秤钩（或秤盘），在适当位置系提纽（支点靠近秤钩一侧可增大量程）。
- 空载时移动秤砣找到平衡点，标为零刻度（零点不一定在提纽处，需抵消秤杆自重）。
- 挂已知质量物体（如 50 g、100 g），分别找平衡位置并画刻度线。
- 验证刻度是否均匀，再等分标出其他刻度。

## 公式汇总

平衡条件：

$$
G_{\text{物}}\, l_2 = G_{\text{砣}}\, l_1 \quad \Rightarrow \quad m_{\text{物}} = \frac{m_{\text{砣}}\, l_1}{l_2}
$$

被测质量与 $l_1$ 成正比，刻度均匀。

## 对比分析

| 提纽靠近秤钩 | 提纽远离秤钩 |
|---|---|
| $l_2$ 小，量程大 | $l_2$ 大，量程小 |
| 分度值大 | 分度值小、更精确 |

## 背记要点

1. 杆秤的原理是杠杆平衡条件 $F_1 l_1 = F_2 l_2$。
2. 秤砣质量固定，靠移动改变力臂实现称量。
3. 刻度均匀，因质量与动力臂成正比。
4. 换用更重的秤砣，同一杆秤量程变大。

## 自测题

1. 若有人偷偷换用较轻的秤砣，称出的质量偏大还是偏小？
2. 秤砣质量 0.1 kg，$l_2=5\ \text{cm}$，秤砣移到 $l_1=20\ \text{cm}$ 处平衡，被测物质量多大？
3. 为什么杆秤有的做两个提纽？

## 相关知识点

[[杠杆]] [[重力]] [[力]] [[滑轮]]
