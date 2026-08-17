---
title: 弹力
date: 2026-08-06
---

# 弹力

## 核心概念表

| 概念 | 含义 | 说明 |
|---|---|---|
| 弹性 | 受力形变、撤力恢复 | 弹簧、橡皮筋 |
| 塑性 | 受力形变、撤力不恢复 | 橡皮泥、面团 |
| 弹力 | 因弹性形变产生的力 | 压力、支持力、拉力都属弹力 |
| 弹簧测力计 | 测量力的工具 | 原理：弹性限度内伸长与拉力成正比 |

## 知识梳理

物体受力发生形变，撤去外力后能恢复原状的性质叫弹性；不能恢复原状的性质叫塑性。弹性形变有一定限度，超过弹性限度物体不能完全恢复原状。

弹力是物体由于发生弹性形变而产生的力，方向与形变方向相反。日常所说的压力、支持力、绳的拉力，本质上都是弹力。

弹簧测力计的原理：在弹性限度内，弹簧的伸长量与所受拉力成正比。使用前要观察量程和分度值，并校零；测量时拉力方向应沿弹簧轴线方向，被测力不能超过量程。

## 公式表达

弹簧伸长与拉力关系（弹性限度内）：

$$
F \propto x \quad (x\ \text{为弹簧伸长量})
$$

## 实验要点

<svg viewBox="0 0 480 230" xmlns="http://www.w3.org/2000/svg" style="max-width:480px;width:100%;display:block;margin:1em auto">
  <rect width="480" height="230" fill="#e8f4f8" rx="8"/>
  <text x="240" y="22" text-anchor="middle" fill="#1a6faf" font-size="14" font-weight="bold">弹簧测力计结构与胡克定律</text>
  <!-- 弹簧测力计外壳 -->
  <rect x="180" y="35" width="50" height="160" fill="#c8dff0" rx="5" stroke="#1a6faf" stroke-width="2"/>
  <!-- 弹簧 -->
  <path d="M205,55 Q200,63 210,67 Q200,71 210,75 Q200,79 210,83 Q200,87 210,91 Q200,95 210,99 Q200,103 210,107 Q200,111 210,115 Q200,119 210,123 Q200,127 210,131 Q200,135 210,139" fill="none" stroke="#1a6faf" stroke-width="2.5"/>
  <!-- 指针 -->
  <line x1="195" y1="95" x2="220" y2="95" stroke="#e63946" stroke-width="2"/>
  <circle cx="222" cy="95" r="3" fill="#e63946"/>
  <text x="232" y="99" fill="#e63946" font-size="10">指针</text>
  <!-- 刻度 -->
  <line x1="230" y1="55" x2="238" y2="55" stroke="#1a6faf" stroke-width="1.5"/>
  <text x="245" y="59" fill="#1a6faf" font-size="10">0 N</text>
  <line x1="230" y1="75" x2="238" y2="75" stroke="#1a6faf" stroke-width="1"/>
  <text x="245" y="79" fill="#1a6faf" font-size="10">1</text>
  <line x1="230" y1="95" x2="238" y2="95" stroke="#1a6faf" stroke-width="1.5"/>
  <text x="245" y="99" fill="#1a6faf" font-size="10">2</text>
  <line x1="230" y1="115" x2="238" y2="115" stroke="#1a6faf" stroke-width="1"/>
  <text x="245" y="119" fill="#1a6faf" font-size="10">3</text>
  <line x1="230" y1="135" x2="238" y2="135" stroke="#1a6faf" stroke-width="1.5"/>
  <text x="245" y="139" fill="#1a6faf" font-size="10">5 N</text>
  <!-- 挂钩 -->
  <line x1="205" y1="35" x2="205" y2="25" stroke="#888" stroke-width="2.5"/>
  <circle cx="205" cy="23" r="5" fill="none" stroke="#888" stroke-width="2"/>
  <text x="125" y="27" fill="#555" font-size="10" text-anchor="end">上挂钩（固定）</text>
  <!-- 下钩 -->
  <line x1="205" y1="195" x2="205" y2="210" stroke="#888" stroke-width="2.5"/>
  <circle cx="205" cy="212" r="5" fill="none" stroke="#888" stroke-width="2"/>
  <text x="125" y="214" fill="#555" font-size="10" text-anchor="end">下挂钩（挂重物）</text>
  <!-- 胡克定律图（右侧F-x图）-->
  <text x="370" y="45" text-anchor="middle" fill="#1a6faf" font-size="12" font-weight="bold">胡克定律 F=kx</text>
  <defs>
    <marker id="hkarr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 Z" fill="#333"/>
    </marker>
  </defs>
  <line x1="310" y1="185" x2="450" y2="185" stroke="#333" stroke-width="1.5" marker-end="url(#hkarr)"/>
  <line x1="310" y1="185" x2="310" y2="55" stroke="#333" stroke-width="1.5" marker-end="url(#hkarr)"/>
  <text x="455" y="189" fill="#333" font-size="10">x/cm</text>
  <text x="297" y="52" fill="#333" font-size="10">F/N</text>
  <line x1="310" y1="185" x2="430" y2="85" stroke="#4a9fd4" stroke-width="2.5"/>
  <text x="440" y="82" fill="#4a9fd4" font-size="10">线性</text>
  <!-- 弹性限度标注 -->
  <line x1="430" y1="182" x2="430" y2="188" stroke="#e63946" stroke-width="1.5"/>
  <text x="420" y="200" fill="#e63946" font-size="9">弹性</text>
  <text x="420" y="210" fill="#e63946" font-size="9">限度</text>
  <text x="380" y="220" text-anchor="middle" fill="#1a6faf" font-size="10">k 为劲度系数（N/m）</text>
</svg>

- 使用弹簧测力计前：检查指针是否指零，轻拉挂钩防止卡壳。
- 认清量程与分度值，被测力不得超过量程。
- 拉力方向沿弹簧轴线，读数时视线正对刻度。
- 弹簧测力计既可竖直使用，也可沿其他方向使用。

## 对比分析

| 弹性 | 塑性 |
|---|---|
| 撤力后恢复原状 | 撤力后不恢复原状 |
| 弹簧、跳板、弓 | 橡皮泥、铝丝 |
| 可产生弹力 | 不产生持续弹力 |

## 背记要点

1. 弹力产生的条件：相互接触且发生弹性形变。
2. 弹簧测力计原理：弹性限度内，伸长量与拉力成正比。
3. 压力、支持力、拉力都是弹力。
4. 使用测力计"一看二调三测"：看量程分度值、调零、正确测量。

## 自测题

1. 弹簧测力计的分度值为 0.2 N，指针指在 3 与 4 之间第 2 条刻度线上，读数是多少？
2. 放在桌面上的书对桌面的压力是弹力吗？是由谁的形变产生的？
3. 为什么使用弹簧测力计时不能超过量程？

## 相关知识点

[[力]] [[重力]] [[摩擦力]] [[二力平衡]]
