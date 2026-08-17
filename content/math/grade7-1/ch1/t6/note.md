---
title: 大小比较
date: 2026-08-05
---

# 有理数的大小比较

标签：#中考高频 #基础

## 一、两种基本方法

### 方法 1：数轴法

**数轴上，右边的数总比左边的数大。**

把要比较的数在数轴上标出来，从左到右依次增大。这个方法直观，适合多个数排序。

## 图示

<svg viewBox="0 0 500 110" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;display:block;margin:1em auto">
  <defs>
    <marker id="arr-t6n" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 z" fill="#424242"/>
    </marker>
  </defs>
  <line x1="30" y1="55" x2="470" y2="55" stroke="#424242" stroke-width="2" marker-end="url(#arr-t6n)"/>
  <!-- 刻度 -->
  <line x1="90" y1="48" x2="90" y2="62" stroke="#424242" stroke-width="1.5"/>
  <text x="90" y="76" text-anchor="middle" font-size="12" fill="#7b1fa2">-2</text>
  <line x1="170" y1="48" x2="170" y2="62" stroke="#424242" stroke-width="1.5"/>
  <text x="170" y="76" text-anchor="middle" font-size="12" fill="#7b1fa2">-1/2</text>
  <line x1="250" y1="48" x2="250" y2="62" stroke="#424242" stroke-width="2"/>
  <text x="250" y="76" text-anchor="middle" font-size="13" fill="#424242" font-weight="bold">0</text>
  <line x1="350" y1="48" x2="350" y2="62" stroke="#424242" stroke-width="1.5"/>
  <text x="350" y="76" text-anchor="middle" font-size="12" fill="#7b1fa2">1.5</text>
  <line x1="430" y1="48" x2="430" y2="62" stroke="#424242" stroke-width="1.5"/>
  <text x="430" y="76" text-anchor="middle" font-size="12" fill="#7b1fa2">3</text>
  <!-- 标注各点 -->
  <circle cx="90" cy="55" r="5" fill="#7b1fa2"/>
  <circle cx="170" cy="55" r="5" fill="#9c27b0"/>
  <circle cx="250" cy="55" r="5" fill="#424242"/>
  <circle cx="350" cy="55" r="5" fill="#9c27b0"/>
  <circle cx="430" cy="55" r="5" fill="#7b1fa2"/>
  <!-- 从小到大箭头 -->
  <text x="250" y="30" text-anchor="middle" font-size="13" fill="#7b1fa2" font-weight="bold">从左到右，数值从小到大</text>
  <path d="M50,40 L450,40" stroke="#9c27b0" stroke-width="1.5" marker-end="url(#arr-t6n)" stroke-dasharray="6,3"/>
  <!-- 排序标注 -->
  <text x="250" y="100" text-anchor="middle" font-size="12" fill="#424242">-2 &lt; -1/2 &lt; 0 &lt; 1.5 &lt; 3</text>
</svg>

### 方法 2：法则法

1. 正数都大于 $0$，负数都小于 $0$，正数大于一切负数；
2. 两个正数，绝对值大的大（小学已会）；
3. **两个负数，绝对值大的反而小**。

> ⚠️ **易错点**：法则 3 是初一新增、最易出错的：$-100 < -1$，虽然 $100$ 看着大，但"欠得越多越穷"。

## 二、常用技巧

| 技巧 | 适用场景 | 说明 |
|---|---|---|
| 通分比较 | 分数之间 | 化成同分母再比分子 |
| 化小数比较 | 分数与小数混合 | 都化成小数直接看 |
| 作差法 | 任意两数 | $a - b > 0 \iff a > b$ |
| 中间值 | 一正一负或跨 0 | 与 $0$、$1$、$-1$ 比 |

## 三、多个数排序的步骤

1. **分类**：先把数分成正数、$0$、负数三组；
2. **组内排序**：正数按大小排，负数按"绝对值大的反而小"排；
3. **拼接**：负数 < $0$ < 正数。

例：把 $-\frac{1}{2},\ 0,\ 3,\ -2,\ 1.5$ 从小到大排列。

- 负数组：$|-2| > \left|-\frac{1}{2}\right|$，故 $-2 < -\frac{1}{2}$；
- 正数组：$1.5 < 3$；
- 结果：$-2 < -\frac{1}{2} < 0 < 1.5 < 3$。

## 四、要点小结

1. 数轴上右边的数大；
2. 正数 > 0 > 负数；
3. 两负数比较，绝对值大的反而小；
4. 排序先分类再拼接，不等号方向要统一。

## 五、知识联系

- 本节综合运用[[数轴]]和[[绝对值]]的知识；
- 后续[[有理数的加减法]]运算结果常需要比较大小验证合理性。
