---
title: 同一直线上二力的合成
date: 2026-08-06
---

# 同一直线上二力的合成

## 核心概念表

| 概念 | 含义 | 说明 |
|---|---|---|
| 合力 | 一个力与几个力作用效果相同 | 等效替代 |
| 分力 | 被合力替代的几个力 | 分力与合力是等效关系 |
| 力的合成 | 求几个力的合力 | 本节只研究同一直线情形 |

## 知识梳理

如果一个力产生的效果与几个力共同作用产生的效果相同，这个力就叫那几个力的合力，那几个力叫分力。求几个力的合力叫力的合成，其思想方法是"等效替代"。

同一直线上、方向相同的两个力，合力大小等于两力之和，方向与两力方向相同；同一直线上、方向相反的两个力，合力大小等于两力之差（大减小），方向与较大的力方向相同。

当两个力大小相等、方向相反且共线时，合力为零，这正是二力平衡的情形。

## 公式汇总

同向合成：

$$
F_{\text{合}} = F_1 + F_2
$$

反向合成（设 $F_1 > F_2$）：

$$
F_{\text{合}} = F_1 - F_2 \quad (\text{方向与}\ F_1\ \text{相同})
$$

## 实验要点

<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" style="max-width:480px;width:100%;display:block;margin:1em auto">
  <rect width="480" height="220" fill="#e8f4f8" rx="8"/>
  <text x="240" y="22" text-anchor="middle" fill="#1a6faf" font-size="14" font-weight="bold">同一直线上的合力（力的合成）</text>
  <defs>
    <marker id="cfarr1" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 Z" fill="#4a9fd4"/>
    </marker>
    <marker id="cfarr2" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 Z" fill="#2d6a2d"/>
    </marker>
    <marker id="cfarr3" markerWidth="9" markerHeight="9" refX="4.5" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 Z" fill="#e63946"/>
    </marker>
  </defs>
  <!-- 上半：同向 -->
  <text x="240" y="46" text-anchor="middle" fill="#1a6faf" font-size="12" font-weight="bold">① 同向：F合 = F₁ + F₂</text>
  <!-- 物体 -->
  <rect x="195" y="55" width="90" height="50" fill="#c8dff0" stroke="#1a6faf" stroke-width="1.5" rx="3"/>
  <text x="240" y="85" text-anchor="middle" fill="#1a6faf" font-size="11">物体</text>
  <!-- F1向右 -->
  <line x1="285" y1="70" x2="355" y2="70" stroke="#4a9fd4" stroke-width="2.5" marker-end="url(#cfarr1)"/>
  <text x="325" y="63" fill="#4a9fd4" font-size="11">F₁=3N</text>
  <!-- F2向右（合力） -->
  <line x1="285" y1="90" x2="395" y2="90" stroke="#2d6a2d" stroke-width="2.5" marker-end="url(#cfarr2)"/>
  <text x="345" y="83" fill="#2d6a2d" font-size="11">F₂=4N</text>
  <!-- 合力（更大） -->
  <line x1="285" y1="110" x2="420" y2="110" stroke="#e63946" stroke-width="3" marker-end="url(#cfarr3)"/>
  <text x="360" y="125" fill="#e63946" font-size="12" font-weight="bold">F合=7N→</text>
  <!-- 下半：反向 -->
  <text x="240" y="148" text-anchor="middle" fill="#1a6faf" font-size="12" font-weight="bold">② 反向：F合 = |F₁ - F₂|，方向朝大力</text>
  <!-- F1向右 -->
  <line x1="240" y1="165" x2="320" y2="165" stroke="#4a9fd4" stroke-width="2.5" marker-end="url(#cfarr1)"/>
  <text x="285" y="158" fill="#4a9fd4" font-size="11">F₁=5N</text>
  <!-- F2向左 -->
  <line x1="240" y1="180" x2="165" y2="180" stroke="#2d6a2d" stroke-width="2.5" marker-end="url(#cfarr2)"/>
  <text x="195" y="173" fill="#2d6a2d" font-size="11">F₂=3N</text>
  <!-- 合力 -->
  <line x1="240" y1="200" x2="280" y2="200" stroke="#e63946" stroke-width="3" marker-end="url(#cfarr3)"/>
  <text x="300" y="205" fill="#e63946" font-size="12" font-weight="bold">F合=2N→</text>
</svg>

- 一个人用力 $F$ 提水桶与两个人分别用 $F_1$、$F_2$ 共同提起同一水桶效果相同，体验合力与分力的等效性。
- 橡皮筋实验：两个力共同拉与一个力单独拉，使橡皮筋伸长到同一位置（效果相同），比较力的大小关系。

## 对比分析

| 两力同向 | 两力反向 |
|---|---|
| $F_{\text{合}}=F_1+F_2$ | $F_{\text{合}}=\|F_1-F_2\|$ |
| 方向与两力相同 | 方向与较大力相同 |
| 合力最大 | 合力最小，可能为零 |

## 背记要点

1. 合力与分力是"等效替代"关系，不是同时存在的力。
2. 同向相加，反向相减（大减小），方向跟着大的走。
3. 同一直线上两个力的合力范围：$|F_1-F_2| \le F_{\text{合}} \le F_1+F_2$。
4. 平衡力的合力为零。

## 自测题

1. 竖直向上的拉力 8 N 与竖直向下的重力 5 N 作用于同一物体，合力多大？方向如何？
2. 两个大小都是 10 N 的力作用在同一直线上，合力可能是多少？
3. 匀速上升的气球所受合力是多少？

## 相关知识点

[[力]] [[二力平衡]] [[牛顿第一定律]] [[重力]]
